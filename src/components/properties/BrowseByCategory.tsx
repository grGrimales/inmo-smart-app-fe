import { FaHouse, FaBuilding, FaPaintRoller } from "react-icons/fa6";

import { Link } from "react-router-dom";

export const BrowseByCategory = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-100">
      {/* https://placehold.co/600x400 */}

      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Browse by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link
            to="/"
            className="bg-white rounded-md shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-4 flex items-center">
              <FaHouse className="w-8 h-8 text-blue-500 mr-4"  />
              <h3 className="text-lg font-bold">For Sale</h3>
            </div>
          </Link>

          <Link
            to="/"
            className="bg-white rounded-md shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-4 flex items-center">
              <FaPaintRoller className="w-8 h-8 text-blue-500 mr-4" />
              <h3 className="text-lg font-bold">For Rent</h3>
            </div>
          </Link>
          <Link
            to="/"
            className="bg-white rounded-md shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-4 flex items-center">
              <FaHouse className="w-8 h-8 text-blue-500 mr-4" />
              <h3 className="text-lg font-bold">Houses</h3>
            </div>
          </Link>
          <Link
            to="/"
            className="bg-white rounded-md shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-4 flex items-center">
              <FaBuilding className="w-8 h-8 text-blue-500 mr-4" />
              <h3 className="text-lg font-bold">Apartments</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
