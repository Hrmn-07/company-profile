import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Welcome to EchoLink !</h1>
            <p className="text-md mb-6 pr-4">
              EchoLink menyediakan layanan internet cepat, stabil, dan handal
              untuk rumah, bisnis, dan komunitas di seluruh Indonesia. Dengan
              teknologi terkini dan dukungan pelanggan terbaik, kami siap
              mendukung perjalanan digital Anda menuju masa depan yang lebih
              terhubung.
            </p>
            <p className="pb-6 text-xl text-blue-300">
              <i>"connect your world with EchoLink"</i>
            </p>
            <Link
              href="/services"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Explore Our Services
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/hero-img.png"
              alt="TechCorp Office"
              width={600}
              height={400}
              className="rounded-lg border-2 border-gray-600"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800 bg-opacity-30 rounded-lg border border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Testimoni Customer Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <p className="mb-4 text-white">
                    <i>{testimonial.quote}</i>
                  </p>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Pindah ke EchoLink beneran keputusan terbaik buat bisnis gue. Internetnya kenceng banget dan stabil, bahkan pas jam sibuk. Kerjaan jadi lancar, gak pake drama!",
    name: "Febrian Wong",
    company: "ABC Inc.",
  },
  {
    quote:
      "Kerja dari rumah tuh gak gampang kalo internet lemot, tapi pake EchoLink semua jadi simpel. Gak ada lagi koneksi putus-putus, semuanya lancar kayak jalan tol tengah malam!",
    name: "Siti Kusnandar",
    company: "Remote Worker",
  },
  {
    quote:
      "Gue butuh internet super cepat buat nge-game dan streaming, dan EchoLink juara banget! ping kecil, koneksi stabil, dan CS-nya ramah banget. Mantap pokoknya!",
    name: "Boby Santoso",
    company: "Streamer",
  },
];
