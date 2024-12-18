import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  return (
    <div className="pt-24">
      <h1 className="text-4xl font-bold mb-8 pl-5">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="bg-slate-800 hover:scale-105 hover:shadow-lg transition-all"
          >
            <CardHeader>
              <Image
                src={service.image}
                alt={service.name}
                width={300}
                height={200}
                className="rounded-lg mb-4 self-center"
              />
              <CardTitle className="text-white text-xl">
                {service.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

const services = [
  {
    name: "Home Internet Plan",
    description:
      "Pilihan internet cepat dan terjangkau untuk pelanggan rumah tangga. Paket ini bervariasi berdasarkan kecepatan dan penggunaan data, memastikan pelanggan dapat memilih opsi terbaik sesuai dengan kebutuhan rumah, baik untuk browsing, streaming, atau gaming.",
    image: "/service-1.png",
  },
  {
    name: "Business Internet Solutions",
    description:
      "Layanan internet khusus untuk bisnis, termasuk jalur internet dedicated, sirkuit sewa, dan opsi bandwidth yang dapat disesuaikan. Dilengkapi dengan security yang terpercaya, keandalan tinggi, dan dukungan teknis untuk memastikan kelancaran operasional bisnis tanpa gangguan.",
    image: "/service-2.jpg",
  },
  {
    name: "VoIP (Voice over Internet Protocol) Service",
    description:
      "Layanan panggilan suara berkualitas tinggi melalui internet dengan biaya yang lebih terjangkau. Fitur-fitur seperti pengalihan panggilan, voicemail, panggilan konferensi, dan integrasi dengan sistem bisnis anda, cocok untuk bisnis kecil hingga besar.",
    image: "/service-3.jpg",
  },
];
