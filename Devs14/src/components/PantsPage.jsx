import { useNavigate } from "react-router-dom";

function PantsPage() {
  const navigate = useNavigate();

  const pants = [
    {
      id: 1,
      name: "Classic Chino Pants",
      price: "$89",
      image:
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=500&fit=crop",
      category: "Casual",
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      price: "$79",
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
      category: "Denim",
    },
    {
      id: 3,
      name: "Formal Dress Pants",
      price: "$129",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      category: "Business",
    },
    {
      id: 4,
      name: "Cargo Pants",
      price: "$69",
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
      category: "Utility",
    },
    {
      id: 5,
      name: "Linen Pants",
      price: "$99",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      category: "Summer",
    },
    {
      id: 6,
      name: "Pleated Trousers",
      price: "$149",
      image:
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=500&fit=crop",
      category: "Formal",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Pants Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our versatile collection of pants designed for comfort and
            style. From casual chinos to formal trousers, we have the perfect
            fit for every occasion.
          </p>
        </div>

        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 text-green-600 hover:text-green-800 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back to Home</span>
          </button>
        </div>

        {/* Pants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pants.map((pant) => (
            <div
              key={pant.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={pant.image}
                  alt={pant.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {pant.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {pant.name}
                </h3>
                <p className="text-3xl font-bold text-green-600 mb-4">
                  {pant.price}
                </p>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium">
                    Add to Cart
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Need Help Finding the Right Fit?
          </h2>
          <p className="text-gray-600 mb-6">
            Our sizing experts can help you find the perfect pair
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
            Get Size Guide
          </button>
        </div>
      </div>
    </div>
  );
}

export default PantsPage;
