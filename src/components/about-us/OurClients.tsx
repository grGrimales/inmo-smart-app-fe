import { comment } from "postcss";
import { Card, CardContent } from "../../components/ui/Card";
import { FaRegStar } from "react-icons/fa6";
import { idText } from "typescript";
import { ClientsSays } from "interfaces/clientsSays.interfaces";

export const OurClients = () => {
  const listClients: ClientsSays[] = [
    {
      id: 1,
      name: "Juan Díaz",
      image: "",
      type_user: "Comprador",
      score: 4,
      comment:
        "El equipo de InmoSmart fue excepcional en todo el proceso de compra de mi nueva casa. Siempre estuvieron atentos y me guiaron de manera profesional.",
    },
    {
      id: 2,
      name: "Sofía Martínez",
      image: "",
      type_user: "Arrendataria",
      score: 5,
      comment:
        "El equipo de InmoSmart fue excepcional en todo el proceso de compra de mi nueva casa. Siempre estuvieron atentos y me guiaron de manera profesional.",
    },
    {
      id: 3,
      name: "Juan Díaz",
      image: "",
      score: 4,
      type_user: "Vendedor",
      comment:
        "El equipo de InmoSmart fue excepcional en todo el proceso de compra de mi nueva casa. Siempre estuvieron atentos y me guiaron de manera profesional.",
    },
  ];
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6  ">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {listClients?.map((client) => (
            <Card key={client.id}>
              <CardContent className="p-4">
                <div className="flex gap-2 items-center mb-4">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="User"
                    className='"w-12 h-12 rounded-full object-cover'
                  />

                  <div>
                    <h3 className="text-lg font-bold ">{client.name}</h3>
                    <p className="text-gray-600 ">{client.type_user}</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-600 mb-4">
                    {client.comment}
                  </p>

                  <div className="flex">
                    {Array.from({ length: client.score }, (_, index) => (
                      <FaRegStar key={index} className="h-5 w-5 text-yellow-500 mr-1"/>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
