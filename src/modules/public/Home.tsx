import Input from '../../components/ui/Input'
import SearchIcon from '../../components/icons/SearchIcon'
import houseImage from '../../assets/images/house.jpg';
import FeaturedProperties from '../../components/properties/FeaturedProperties';

export const Home = () => {
  return (
    <main className="flex-1">
      <section className="bg-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Your Dream Home</h1>
            <p className="text-gray-600 mb-8">Browse our selection of the latest properties for sale and rent.</p>
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <Input
                type="text"
                placeholder="Search by location, property type, or keyword"
                className="w-full px-12 py-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <img
              src={houseImage}
              width={600}
              height={400}
              alt="Featured Property"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
    <FeaturedProperties />
      </main>
  )
}
