import Route from "../components/Route";
function Home() {
  return (
    <Route>
      <div className="flex flex-col items-center justify-center">
        <div className="text-center flex justify-center items-center">
        <img src="https://png.pngtree.com/png-clipart/20240212/original/pngtree-design-of-a-plaited-hexagon-logo-in-blue-created-as-vector-png-image_14300843.png" alt=""
            className="w-32 h-32" />
            <span className="mt-4 text-4xl">ຮ້ານຂາຍອຸປະກອນການຮຽນພັດທະນາລາວ</span>
        </div>
        <img src="https://i.pinimg.com/originals/f1/2c/8d/f12c8df7accde83f5e4e04bbc194f90d.jpg" alt="" className="h-96 w-full rounded-xl px-8 py-4"/>
      </div>
    </Route>
  );
}
export default Home;
