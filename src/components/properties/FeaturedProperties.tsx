import placeholderImage from '../../assets/images/house.jpg'; // Asegúrate de que la ruta es correcta
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../ui/button';


const FeaturedProperties: React.FC = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <img
              src={placeholderImage}
              width={400}
              height={250}
              alt="Property 1"
              className="w-full h-auto rounded-t-md"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-2">Luxurious Apartment in the City</h3>
              <p className="text-gray-600 mb-4">3 Bedrooms, 2 Bathrooms, 1,500 sq ft</p>
              <div className="flex items-center justify-between">
                <span className="text-blue-500 font-bold ">$2,500/month</span>
                <Button size="sm" >View Details</Button>
               
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              src={placeholderImage}
              width={400}
              height={250}
              alt="Property 2"
              className="w-full h-auto rounded-t-md"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-2">Spacious Family Home</h3>
              <p className="text-gray-600 mb-4">4 Bedrooms, 3 Bathrooms, 2,200 sq ft</p>
              <div className="flex items-center justify-between">
                <span className="text-blue-500 font-bold">$350,000</span>
                <Button size="sm">View Details</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              src={placeholderImage}
              width={400}
              height={250}
              alt="Property 3"
              className="w-full h-auto rounded-t-md"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-2">Cozy Cottage in the Countryside</h3>
              <p className="text-gray-600 mb-4">2 Bedrooms, 1 Bathroom, 1,000 sq ft</p>
              <div className="flex items-center justify-between">
                <span className="text-blue-500 font-bold">$1,800/month</span>
                <Button size="sm">View Details</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
