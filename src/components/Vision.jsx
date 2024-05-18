import VisionPatterns from "./designs/Vision";

const Vision = () => {
  return (
    <section className="relative bg-coral padding">
      <VisionPatterns />
      <div className="flex justify-between items-start gap-8 max-lg:flex-col">
        <article className="max-w-lg">
          <h1 className="title mb-4">Visi</h1>
          <p className="font-gotham text-primary">
            Menjadi pilihan utama konsumen untuk makanan cepat saji berkualitas
            tinggi yang menawarkan cita rasa unik dan kepuasan maksimal di
            setiap gigitannya{" "}
          </p>
        </article>
        <article className="max-w-lg">
          <h1 className="title mb-4">Misi</h1>
          <ul className="font-gotham text-primary list-disc">
            <li>
              Menyediakan makanan cepat saji yang lezat dan berkualitas tinggi
            </li>
            <li>
              Mengembangkan jaringan franchise yang solid dan menguntungkan bagi
              mitra bisnis kami
            </li>
            <li>
              Terus berinovasi dalam menu dan layanan untuk memenuhi kebutuhan
              referensi pelanggan
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
export default Vision;
