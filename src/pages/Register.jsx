import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import config from "../config";

function Register() {
  const navigate = useNavigate();
  const [typePass, setTypePass] = useState("password");
  const [user, setUser] = useState({});
  const [typeconPass, setTypeconPass] = useState("password");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  // ການອັບໂຫລດຂໍ້ມູນໄປຫາ server
  const handleSave = async () => {
    try {
      if (
        user.name === undefined ||
        user.username === undefined ||
        user.password === undefined
      ) {
        Swal.fire({
          title: "ຜິດພາດ!",
          text: "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ!!",
          icon: "error",
        });
        return;
      }
      if (user.password != user.conPassword) {
        Swal.fire({
          title: "ຜິດພາດ!",
          text: "ລະຫັດຜ່ານ ແລະ ລະຫັດຢືນຢັນບໍ່ກົງກັນ!!",
          icon: "error",
        });
        return;
      }

      const res = await axios.post(`${config.apiPath}/api/user/create`, {
        name: user.name,
        username: user.username,
        password: user.password,
      });
      if (res.data.icon == "success") {
        await Swal.fire({
          title: "ລົງທະບຽນ!!",
          text: res.data.message,
          icon: res.data.icon,
        });
        navigate("/");
      } else {
        Swal.fire({
          title: "ຜິດພາດ!",
          text: res.data.message,
          icon: res.data.icon,
        });
      }
    } catch (e) {
      Swal.fire({
        title: "ຜິດພາດ!!",
        text: e.message,
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="bg-white h-screen w-screen flex justify-center items-center">
        <div className="bg-black p-10 md:w-1/2 w=[90%] rounded-lg text-white ">
        <div className="text-center flex text-2xl justify-center ">
            <img src="https://png.pngtree.com/png-clipart/20240212/original/pngtree-design-of-a-plaited-hexagon-logo-in-blue-created-as-vector-png-image_14300843.png" alt=""
            className="w-16 h-16" />
            <span className="mt-4 text-lg">ຮ້ານຂາຍອຸປະກອນການຮຽນພັດທະນາລາວ</span>
          </div>
          <div className="text-center text-xl"><h2>ຍິນດີຕ້ອນຮັບ</h2></div>
          <div>
          <h2 className=" text-gray-500 text-center"> ກະລຸນາປ້ອນຂໍ້ມູນເພື່ອ ລົງທະບຽນ</h2>
          </div>

          <div>
            <div>ຊື່ ແລະ ນາມສະກຸນ</div>
            <input
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              type="text"
              placeholder="ປ້ອນຊື່ ແລະ ນາມສະກຸນ......"
              className="bg-tranparent rounded-md py-3 px-4 border
               border-orange-400 focus:outline-none w-full mt-2 mb-4"
            />
          </div>
          <div>
            <div>ຊື່ຜູ້ໃຊ້</div>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              type="text"
              placeholder="ປ້ອນຊື່ຜູ້ໃຊ້......"
              className="bg-tranparent rounded-md py-3 px-4 border
               border-orange-400  focus:outline-none w-full mt-2 mb-4"
            />
          </div>
          <div>
            <div>ລະຫັດຜ່ານ</div>
            <div className="relative">
              <input
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type={typePass}
                placeholder="ປ້ອນລະຫັດຜ່ານ......"
                className="bg-tranparent rounded-md py-3 px-4 border
               border-orange-400  focus:outline-none w-full mt-2 mb-4"
              />
              {typePass == "text" ? (
                <i
                  className="fa-regular fa-eye absolute right-4 top-6 text-xl cursor-pointer "
                  onClick={() => setTypePass("password")}
                ></i>
              ) : (
                <i
                  className="fa-regular fa-eye-slash absolute right-4 top-6 text-xl cursor-pointer text-gray-300"
                  onClick={() => setTypePass("text")}
                ></i>
              )}
            </div>
          </div>
          <div>
            <div>ຢືນຢັນລະຫັດຜ່ານ</div>
            <div className="relative">
              <input
                value={user.conPassword}
                onChange={(e) =>
                  setUser({ ...user, conPassword: e.target.value })
                }
                type={typeconPass}
                placeholder="ປ້ອນລະຫັດຢືນຢັນ......"
                className="bg-tranparent rounded-md py-3 px-4 border
               border-orange-400  focus:outline-none w-full mt-2 mb-4"
              />
              {typeconPass == "text" ? (
                <i
                  className="fa-regular fa-eye absolute right-4 top-6 text-xl cursor-pointer "
                  onClick={() => setTypeconPass("password")}
                ></i>
              ) : (
                <i
                  className="fa-regular fa-eye-slash absolute right-4 top-6 text-xl cursor-pointer text-gray-300"
                  onClick={() => setTypeconPass("text")}
                ></i>
              )}
            </div>
          </div>

          <div>
            <button
              className="bg-orange-400 hover:bg-white hover:text-black p-3 w-full font-bold
            rounded-md my-4 text-xl cursor-pointer"
              onClick={handleSave}
            >
              ລົງທະບຽນ
            </button>
          </div>

          <div className="text-center">
            <span>ຖ້າຫາກມີບັນຊີເຂົ້າໃຊ້ແລ້ວ ? </span>
            <Link to={"/"} className="text-orange-400 hover:text-orange-200">
              ເຂົ້າສູ່ລະບົບ
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
