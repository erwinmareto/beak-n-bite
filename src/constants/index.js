import { booth, container, ruko } from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Tentang Kami" },
  { href: "#vision", label: "Visi & Misi" },
  { href: "#concepts", label: "Konsep Bisnis" },
];

export const businessConcepts = [
  {
    img: booth,
    name: "Booth",
    price: 100,
    benefits: [
      "Cocok untuk lokasi yang ramai seperti pusat perbelanjaan, food court, area keramaian lainnya",
      "Booth dirancang untuk menyajikan makanan cepat saji dengan cepat dan efisien",
      "Konsep booth memiliki biaya awal yang rendah",
    ],
  },
  {
    img: container,
    name: "Container",
    price: 150,
    benefits: [
      "Konsep container adalah solusi fleksibel dan hemat biaya",
      "Tampilan container yang modern dan unik dapat menarik perhatian pelanggan",
      "Cocok untuk membuka restoran di area outdoor dan festival",
    ],
  },
  {
    img: ruko,
    name: "Ruko",
    price: 200,
    benefits: [
      "Cocok untuk lokasi yang lebih besar dan strategis",
      "Lokasi strategis dengan kapasitas pelanggan besar",
      "Konsep ruko memiliki potensi penjualan yang tinggi",
    ],
  },
];

export const missions = [
  "Menyediakan makanan cepat saji yang lezat dan berkualitas tinggi",
  "Mengembangkan jaringan franchise yang solid dan menguntungkan bagi mitra bisnis kami",
  "Terus berinovasi dalam menu dan layanan untuk memenuhi kebutuhan referensi pelanggan",
];
