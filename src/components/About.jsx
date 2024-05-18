import AboutPatterns from "./designs/About.jsx";
import {
  flower,
  greenFlower,
  orangeFlower,
  verticalChecker,
} from "../assets/images";

const About = () => {
  return (
    <section className="relative">
      <AboutPatterns
        greenFlower={greenFlower}
        orangeFlower={orangeFlower}
        flower={flower}
      />
      <div>
        <div className="flex">
          <div>
            <img src={verticalChecker} className="object-cover h-full" />
          </div>
          <div className="relative flex flex-col gap-8 padding z-20 lg:mx-32">
            <h1 className="title mb-4">About Us</h1>
            <p className="font-gotham text-olive">
              <span className="text-2xl font-bright-retro text-purple">
                Beak & Bite{" "}
              </span>
              adalah perusahaan makanan cepat saji yang berdedikasi untuk
              menyajikan makanan lezat dan berkualitas tinggi kepada pelanggan.
              Beridiri sejak tahun 2024, Beak & Bite telah berkembang pesat dan
              menjadi salah satu pilihan utama bagi pecinta makanan cepat saji.
              Kami menawarkan berbagai macam menu yang menggugah selera, mulai
              dari crispy chicken, burger, kentang goreng, dan lain-lain.
            </p>
            <p className="font-gotham text-olive">
              <span className="text-2xl font-bright-retro text-purple">
                Beak & Bite{" "}
              </span>{" "}
              berkomitmen untuk memberikan pengalaman makan yang menyenangkan
              dan memuaskan bagi setiap pelanggan. Dengan tagline kami,
              <span className="text-2xl font-bright-retro text-purple">
                &apos;Take a Bite, Take a Taste.&apos;{" "}
              </span>
              kami mengundang setiap pelanggan untuk merasakan kelezatan yang
              kami tawarkan dalam setiap gigitan. Kami percaya bahwa pengalaman
              makan yang memuaskan dimulai dari gigitan pertama, dan itulah yang
              kami janjikan kepada setiap pelanggan.
            </p>
          </div>
          <div>
            <img src={verticalChecker} className="object-cover h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
