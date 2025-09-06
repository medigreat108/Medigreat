import React from "react";
import CeoLogo  from "../assets/sodage.jpg";
import chefLogo from "../assets/poonam.jpg";
import supportLogo from "../assets/rohit.jpg";

export const About = () => (
  <div className="bg-gradient-to-br from-blue-50 to-blue-200 min-h-screen">
    {/* Hero Section */}
    <section className="max-w-4xl mx-auto py-12 px-6 text-center">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
        About Medigreate Pharma
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Empowering Health, Enriching Lives. <br />
        Medigreate Pharma is committed to delivering authentic medicines,
        wellness products, and expert care to every doorstep.
      </p>
      <img
        src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80"
        alt="Pharma Team"
        className="mx-auto rounded-xl shadow-lg w-64 mb-8"
      />
    </section>

    {/* Company Story & Values */}
    <section className="max-w-3xl mx-auto py-8 px-6 bg-white rounded-xl shadow text-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Story</h2>
      <p className="text-gray-700 mb-6">
        Founded with a vision to make healthcare accessible and affordable,
        Medigreate Pharma partners with leading manufacturers and certified
        suppliers to ensure quality and trust. Our team of pharmacists and
        healthcare experts work tirelessly to bring you the best products and
        advice.
      </p>
      <h2 className="text-xl font-semibold text-blue-600 mb-2">Our Values</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 mb-6">
        <div className="bg-blue-50 rounded-lg p-4 flex-1">
          <h3 className="font-bold text-blue-700 mb-2">Integrity</h3>
          <p className="text-gray-600">
            We guarantee genuine products and transparent service.
          </p>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 flex-1">
          <h3 className="font-bold text-blue-700 mb-2">Care</h3>
          <p className="text-gray-600">
            Your health and satisfaction are our top priorities.
          </p>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 flex-1">
          <h3 className="font-bold text-blue-700 mb-2">Innovation</h3>
          <p className="text-gray-600">
            We embrace technology to deliver better healthcare solutions.
          </p>
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="max-w-4xl mx-auto py-10 px-6 text-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Meet Our Team</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="bg-white rounded-xl shadow p-6 flex-1">
          <img
            src={CeoLogo}
            alt="Founder"
            className="mx-auto rounded-full w-20 mb-4"
          />
          <h3 className="font-semibold text-blue-600">Priyanka Sodage</h3>
          <p className="text-gray-600">Founder & CEO</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex-1">
          <img
            src={chefLogo}
            alt="Pharmacist"
            className="mx-auto rounded-full w-20 mb-4"
          />
          <h3 className="font-semibold text-blue-600">Poonam Khatkale</h3>
          <p className="text-gray-600">Chief Pharmacist</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex-1">
          <img
            src={supportLogo}
            alt="Support"
            className="mx-auto rounded-full w-20 mb-4"
          />
          <h3 className="font-semibold text-blue-600">Rohit Patil</h3>
          <p className="text-gray-600">Customer Support Lead</p>
        </div>
      </div>
    </section>
  </div>
);
