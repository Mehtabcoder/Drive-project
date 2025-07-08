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
    
    const url = `https://wa.me/918327272222?text=${encodeURIComponent(msg)}`;
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
          <span className="hover:text-amber-600 cursor-pointer">Tour Packages</span>
          
          
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Image & Details */}
          <div className="space-y-8">
            {/* Premium Image Container */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                <Image
                  src="/cars/tour-package/car1.png"
                  width={800}
                  height={500}
                  alt="Audi A3 Cabriolet - Luxury Wedding Car"
                  className="rounded-xl w-full h-auto object-cover"
                />
                
              </div>
            </div>

            {/* Vehicle Details */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Car className="w-8 h-8 text-amber-600 mr-3" />
                Tour service
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Wanna Explore amritsar. then why are waiting, book tour from punjab rental packages to experience exrtraordinary experience and to explore amritsar.
              </p>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <Crown className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Premium </h3>
                    <p className="text-sm text-gray-600">Elegant </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <Users className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Professional Driver </h3>
                    <p className="text-sm text-gray-600">Experienced as you like</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Flexible Packages</h3>
                    <p className="text-sm text-gray-600">Explore as much as you want</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <Shield className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Full Insurance</h3>
                    <p className="text-sm text-gray-600">Comprehensive coverage included</p>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-3 text-gray-600">4.9/5 from 150+ happy couples</span>
              </div>
            </div>
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
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
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Day for self drive</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
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
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
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
        <span>+91 83272 72222</span>
      </div>
      <div className="flex items-center space-x-3">
        <Mail className="w-5 h-5" />
        <span>info@prestigeweddingcars.com</span>
      </div>
      <div className="flex items-center space-x-3">
        <MapPin className="w-5 h-5" />
        <span>Available across major cities</span>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </main>
  );
}