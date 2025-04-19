import Route from "../components/Route";
function Home() {
  return (
    <Route>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="text-center flex flex-col justify-center items-center">
        <img src="https://png.pngtree.com/png-clipart/20240212/original/pngtree-design-of-a-plaited-hexagon-logo-in-blue-created-as-vector-png-image_14300843.png" alt=""
            className="w-32 h-32" />
            <span className="mt-4 text-4xl">ຮ້ານຂາຍອຸປະກອນການຮຽນພັດທະນາລາວ</span>
        </div>
        <div className="h=[70%] w=[90%]  border-2 border-black"> <img src="https://th.bing.com/th/id/R.c1624ded9f07e1bbc85ee91888b037ba?rik=F7uQOpxK36MxDw&riu=http%3a%2f%2fkiji.life%2fnewkiji%2fwp-content%2fuploads%2f2017%2f07%2fDSC_9452-1024x681.jpg&ehk=P65DhnyDEOIjNDG%2fFzVuOpg6%2fKz8TlcOp3h%2fuBnveLc%3d&risl=&pid=ImgRaw&r=0" alt="" className="h=[60%] w=[90%]"/></div>
       
      </div>
    </Route>
  );
}
export default Home;
