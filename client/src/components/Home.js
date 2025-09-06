import React from "react";

export const Home = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-200 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto py-16 px-6 gap-10">
        <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold text-blue-800 mb-6 leading-tight">
            Medigreate Pharma
            <br />
            <span className="text-blue-500">Your Health, Our Priority</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Discover trusted medicines, wellness products, and expert advice.
            Fast delivery, genuine products, and 24/7 support for you and your
            family.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow p-6 text-center flex flex-col items-center">
            <img
              src="https://img.icons8.com/color/96/pill.png"
              alt="Genuine Medicines"
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Genuine Medicines
            </h3>
            <p className="text-gray-600">
              100% authentic products sourced from trusted manufacturers and
              suppliers.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center flex flex-col items-center">
            <img
              src="https://img.icons8.com/color/96/delivery.png"
              alt="Fast Delivery"
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Quick and safe delivery to your doorstep, anywhere in India.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center flex flex-col items-center">
            <img
              src="https://img.icons8.com/color/96/customer-support.png"
              alt="24/7 Support"
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              24/7 Support
            </h3>
            <p className="text-gray-600">
              Expert pharmacists and customer care available round the clock.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
