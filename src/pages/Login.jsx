import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import config from "../config";
function Login() {
  const navigate = useNavigate();
  const [typePass, setTypePass] = useState("password");
  const [user, setUser] = useState({});

useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    navigate("/home");
  }
}, [navigate]);

  //ການອັບໂຫລດຂໍ້ມູນໄປຫາ  server
  const handleSave = async () => {
    try {
      if (user.username === undefined || user.password === undefined) {
        Swal.fire({
          title: "ຜິດພາດ!",
          text: "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ!",
          icon: "error",
        });
        return;
      }

      const res = await axios.post(`${config.apiPath}/api/user/login`, {
        username: user.username,
        password: user.password,
      });
      if (res.data.token) {
        await Swal.fire({
          title: "ເຂົ້າສູ່ລະບົບ!!",
          text: res.data.message,
          icon: res.data.icon,
        });
        await localStorage.setItem("token", res.data.token);
        await localStorage.setItem("user_id", JSON.stringify(res.data.user_id));
        navigate("/home");
      } else {
        Swal.fire({
          title: "ຜິດພາດ!",
          text: res.data.message,
          icon: res.data.icon,
        });
        return
      }
    } catch (e) {
      Swal.fire({
        title: "ຜິດພາດ!",
        text: e.message,
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="bg-white h-screen w-screen flex justify-center items-center">
        <div className="bg-black p-10 md:w-1/2 w=[90%] rounded-lg text-white">
          <div className="text-center flex text-2xl justify-center ">
            <img src="https://png.pngtree.com/png-clipart/20240212/original/pngtree-design-of-a-plaited-hexagon-logo-in-blue-created-as-vector-png-image_14300843.png" alt=""
            className="w-16 h-16" />
            <span className="mt-8 text-lg">ຮ້ານຂາຍອຸປະກອນການຮຽນພັດທະນາລາວ</span>
          </div>
          <div className="text-center text-lg"><h1>ຍິນດີຕ້ອນຮັບ</h1></div>
          <div>
          <h2 className=" text-gray-500 text-center"> ກະລຸນາປ້ອນຂໍ້ມູນເພື່ອ ເຂົ້າສູ່ລະບົບ</h2>
          </div>

          <div>
            <div> ຊື່ຜູ້ໃຊ້ </div>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              type="text"
              placeholder="ປ້ອນຊື່ຜູ້ໃຊ້......."
              className="bg-transparent rounded-md py-3 px-4 border
                             border-orange-400 focus:outline-none w-full mt-2 mb-4 text-gray-200"
            />
          </div>

          <div>
            <div> ລະຫັດຜ່ານ </div>
            <div className="relative">
              <input
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type={typePass}
                placeholder="ປ້ອນລະຫັດຜ່ານ......."
                className="bg-transparent rounded-md py-3 px-4 border
                         border-orange-400 focus:outline-none w-full mt-2 mb-4"
              />
              {typePass == "text" ? (
                <i
                  className="fa-regular fa-eye-slash absolute right-4 top-6 text-xl cursor-pointer"
                  onClick={() => setTypePass("password")}
                ></i>
              ) : (
                <i
                  className="fa-regular fa-eye absolute right-4 top-6 text-xl cursor-pointer"
                  onClick={() => setTypePass("text")}
                ></i>
              )}
            </div>
          </div>

          <div>
            <button
              className="bg-orange-400 text-white p-3 w-full hover:bg-white hover:text-gray-700
                rounded-md mt-4 text-xl cursor-pointer mb-4 font-bold"
              onClick={handleSave}
            >
              ເຂົ້າສູ່ລະບົບ{" "}
            </button>
          </div>
          <div className="text-center">
            <span> ຖ້າຫາກຍັງບໍ່ມີບັນຊີເຂົ້າໃຊ້ ? </span>
            <Link
              to={"/register"}
              className="text-orange-400 hover:text-orange-200"
            >
              ລົງທະບຽນ
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
