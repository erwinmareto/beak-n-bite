import { foods } from "../assets/images";

const Showcase = () => {
  return (
    <section className="relative my-32">
      <img src={foods} alt="food photos" width={1440} />
      <div className="text-center my-32">
        <h1 className="font-gotham text-olive text-xl lg:text-4xl">
          Mau Outlet Selanjutnya
        </h1>
        <h1 className="font-bright-retro text-coral text-3xl lg:text-8xl">
          Jadi Milik Anda?
        </h1>
        {/* <div className="transition hover:translate-x-5 hover:-translate-y-5 bg-red-600"> */}
        <button className="font-gotham text-primary text-xl bg-purple p-6 rounded-full mt-4 transition hover:scale-105 active:scale-90">
          Amankan Sekarang
        </button>
        {/* </div> */}
      </div>
    </section>
  );
};
export default Showcase;
