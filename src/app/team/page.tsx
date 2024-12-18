import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Team() {
  return (
    <div className="pt-24">
      <h1 className="text-4xl font-bold mb-8 pl-5">Our Team</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <CardHeader>
              <Image
                src={member.photo}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <CardTitle className="text-center text-white">
                {member.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-2 text-gray-300">{member.email}</p>
              <p className="text-sm text-gray-500">{member.address}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

const teamMembers = [
  {
    name: "Endah Sujono",
    email: "endah@echolink.com",
    address: "123 Jl Sudirman, Semarang, ID",
    photo: "/member-1.jpg",
  },
  {
    name: "Pangestu Parna",
    email: "pangestu@echolink.com",
    address: "456 Jl Hamengkubowono, Bogor, ID",
    photo: "/member-2.jpg",
  },
  {
    name: "Jerry Wibowo",
    email: "jerry@echolink.com",
    address: "789 Jl Anggrek Baru, Batam, ID",
    photo: "/member-3.jpg",
  },
];
