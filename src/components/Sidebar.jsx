import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

Sidebar.propTypes = {
  openSidebar: PropTypes.string,
};
function Sidebar({ openSidebar }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  // ສ່ວນ active menu
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(location.pathname);

  const handleMenuClick = (path) => {
    setActiveMenu(path);
    navigate(path);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      const user = JSON.parse(atob(token.split(".")[1]));
      setUser(user);
    }
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const button = await Swal.fire({
        title: "ອອກຈາກລະບົບ",
        text: "ຢືນຢັນອອກຈາກລະບົບບໍ່",
        icon: "question",
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: "ຕົກລົງ",
        cancelButtonText: "ຍົກເລີກ",
      });

      if (button.isConfirmed) {
        localStorage.removeItem("token");
        navigate("/");
      }
    } catch (e) {
      Swal.fire({
        title: "ຜິດພາດ",
        text: e.message,
        icon: "error",
      });
    }
  };
  return (
    <>
      {openSidebar ? (
        <div className="bg-gradient-to-b from-black to-black text-white p-6 h-full w-60 z-50">
          <div className="bg-orange-400 w-full h-12 rounded-md flex justify-center items-center mt-4">
            <div>
              <i className="fa-solid fa-circle-user text-xl text-gray-200"></i>
            </div>
            <div>
              <p className="text-2xl text-gray-200 font-bold px-2">{user.username}</p>
            </div>
          </div>

          <div className="text-center flex text-sm items-center flex-col text-orange-400 font-bold">
            <img src="https://png.pngtree.com/png-clipart/20240212/original/pngtree-design-of-a-plaited-hexagon-logo-in-blue-created-as-vector-png-image_14300843.png" alt=""
            className="w-16 h-16 " />
            <span className="mt-2 ">ຮ້ານຂາຍອຸປະກອນການຮຽນ</span>
            <h1 className="mt-2 ">ພັດທະນາລາວ</h1>
          </div>
          <div className="p-4">
            <ul>
              <li
                className={`py-2 px-4 cursor-pointer text-lg hover:bg-orange-400 hover:text-gray-800 font-bold rounded-md ${
                  activeMenu === "/home" ? "hover:bg-orange-400" : "hover:text-black"
                }`}
                onClick={() => handleMenuClick("/home")}
              >
                <i className="fa-solid fa-home mr-2"></i> ໜ້າຫຼັກ
              </li>
              <li
                className={`py-2 px-4 cursor-pointer text-lg hover:bg-orange-400 hover:text-gray-800 font-bold rounded-md ${
                  activeMenu === "/store" ? "hover:bg-orange-400" : ""
                }`}
                onClick={() => handleMenuClick("/store")}
              >
                <i className="fa-solid fa-user mr-2"></i> ສະຕ໋ອກ
              </li>
              <li
                className={`py-2 px-4 cursor-pointer text-lg hover:bg-orange-400 hover:text-gray-800 font-bold rounded-md ${
                  activeMenu === "/pos" ? "hover:bg-orange-400 " : ""
                }`}
                onClick={() => handleMenuClick("/pos")}
              >
                <i className="fa-solid fa-cart-shopping mr-2"></i> ຂາຍ pos
              </li>
              <li
                className={`py-2 px-4 cursor-pointer text-lg hover:bg-orange-400 hover:text-gray-800 font-bold rounded-md ${
                  activeMenu === "/transection" ? "hover:bg-orange-400 " : ""
                }`}
                onClick={() => handleMenuClick("/transection")}
              >
                <i className="fa-solid fa-layer-group mr"></i> ການເຄື່ອນໄຫວ
              </li>
              <li
                className={`py-2 px-4 cursor-pointer text-lg hover:bg-orange-400 hover:text-gray-800 font-bold rounded-md ${
                  activeMenu === "/report" ? "hover:bg-orange-400" : ""
                }`}
                onClick={() => handleMenuClick("/report")}
              >
                <i className="fa-solid fa-file-invoice mr-2"></i> ລາຍງານ
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
          <button
              onClick={handleLogout}
              className="bg-red-500 text-white  px-4 py-2 rounded-md hover:bg-red-100 hover:text-black cursor-pointer mt-48 "
            >
              <i className="fa-solid fa-right-to-bracket mr-2 font-bold"></i> ອອກຈາກລະບົບ
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
export default Sidebar;
