'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Star, Crown, Shield, Clock, Car, Users, Phone, Mail, MapPin } from 'lucide-react';

export default function LuxuryWedding() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', date: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const { name, phone, email, date, message } = formData;
    const msg = `🚗 Luxury Wedding Car Booking Request\n\n` +
               `Vehicle: Audi A3 Cabriolet\n` +
               `Name: ${name}\n` +
               `Phone: ${phone}\n` +
               `Email: ${email}\n` +
               `Wedding Date: ${date}\n` +
               `Message: ${message}\n\n` +
               `Please contact me for booking confirmation.`;
    
    const url = `https://wa.me/9988014945?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen">
      {/* Luxury Header */}
      <div className="bg-gradient-to-r from-amber-800 via-yellow-600 to-amber-800 text-white py-4 px-6 shadow-xl">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Crown className="w-8 h-8 text-yellow-200" />
              <h1 className="text-2xl font-bold tracking-wide">Punjab Rental Wheel</h1>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>+91 83272 72222</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-8">
          <span className="hover:text-amber-600 cursor-pointer">Home</span>
          <span className="mx-2">→</span>
          <span className="hover:text-amber-600 cursor-pointer">Self-Drive</span>
          
          
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Image & Details */}
          <div className="space-y-8">
            {/* Premium Image Container */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                <Image
                  src="/cars/self-drive/car1.png"
                  width={800}
                  height={500}
                  alt="Audi A3 Cabriolet - Luxury Wedding Car"
                  className="rounded-xl w-full h-auto object-cover"
                />
                
              </div>
            </div>

            {/* Vehicle Details */}
           <section className="px-4 sm:px-8 md:px-16 py-10 text-gray-800">
  <h2 className="text-2xl md:text-3xl font-bold mb-2 border-b-4 border-red-600 inline-block">
    Scorpio
  </h2>

  <p className="mt-4 text-base leading-relaxed">
    Punjab Rent2GO offers a self-drive car that has never been easier! With affordable rates and flexible rental options, you can book the Scorpio for your next trip to Punjab or nearby cities like Himachal, Ladakh, and Spiti. So why wait? Book now and experience the ultimate comfort and performance of this amazing SUV!
  </p>

  <p className="mt-4 text-base leading-relaxed">
    If you're planning a trip and looking for a comfortable and stylish self-drive car, the Scorpio is a great option. You can rent this car at very reasonable rates from self-drive car rental services in Punjab and nearby cities, offering you a convenient and affordable way to explore your destination.
  </p>

  <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-center">
    Key Specifications of Scorpio
  </h3>

  <ul className="text-center text-sm sm:text-base space-y-2 font-medium">
    <li><span className="font-bold">Engine:</span> 1.5-liter Smart Hybrid Petrol Engine</li>
    <li><span className="font-bold">Transmission:</span> 4-speed Automatic Transmission</li>
    <li><span className="font-bold">Maximum Power Output:</span> 103 kW at 6,000 rpm</li>
    <li><span className="font-bold">Maximum Torque Output:</span> 138 Nm at 4,400 rpm</li>
    <li><span className="font-bold">Fuel Tank Capacity:</span> 47 liters</li>
    <li><span className="font-bold">Seating Capacity:</span> 5 passengers</li>
    <li><span className="font-bold">Boot Space:</span> 375 liters</li>
    <li><span className="font-bold">Ground Clearance:</span> 200 mm</li>
    <li><span className="font-bold">Suspension:</span> Front - MacPherson Strut with Coil Spring, Rear - Torsion Beam with Coil Spring</li>
    <li><span className="font-bold">Brakes:</span> Front - Disc, Rear - Drum</li>
  </ul>
</section>
</div>

          {/* Right Column - Booking Form */}
<div className="space-y-8">
  {/* Booking Form */}
  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Reserve Your Self-Car</h2>
      <p className="text-gray-600">Book now for your special day</p>
    </div>

    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
           className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"

          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+91 XXXXX XXXXX"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="your.email@example.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Day for self drive</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
         className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"

        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          placeholder="Any specific decoration preferences, pickup location, or special requests..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Processing...
          </span>
        ) : (
          <span className="flex items-center justify-center">
            <Phone className="w-5 h-5 mr-2" />
            Book via WhatsApp
          </span>
        )}
      </button>
    </form>

    <div className="mt-6 text-center">
      <p className="text-sm text-gray-500">
        Secure booking • Instant confirmation • 24/7 support
      </p>
    </div>
  </div>

  {/* Contact Info */}
  <div className="bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl p-8 text-white">
    <h3 className="text-xl font-bold mb-4">Need Assistance?</h3>
    <div className="space-y-3">
      <div className="flex items-center space-x-3">
        <Phone className="w-5 h-5" />
        <span>+91 99880 14945</span>
      </div>
      <div className="flex items-center space-x-3">
        <Mail className="w-5 h-5" />
        <span>vikasjitsingh2@gmail.com</span>
      </div>
      <div className="flex items-center space-x-3">
        <MapPin className="w-5 h-5" />
        <span>Available across any city in punjab</span>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </main>
  );
}
