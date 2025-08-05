// app/page.tsx

'use client';
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    {
      title: 'Self Drive Cars',
      description: 'Freedom to explore at your own pace',
      image: '/cars/self-drive/car1.png',
      link: '/self-drive',
    },
    {
      title: 'Taxi Service',
      description: 'Comfortable rides to your destination',
      image: '/cars/taxi/car1.png',
      link: '/taxi',
    },
    {
      title: 'Tour Packages',
      description: 'Enjoy curated tourist experiences',
      image: '/cars/tourist-package/car1.png',
      link: '/tour-packages',
    },
    {
      title: 'Luxury Wedding Cars',
      description: 'Make your big day unforgettable',
      image: '/cars/luxury-wedding/car1.png',
      link: '/luxury-wedding',
    },
  ];

  return (
    <main className="bg-white text-[#0e141b] min-h-screen">
  <div className="bg-gradient-to-r from-orange-500 via-rose-500 to-red-500 text-white text-sm px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 shadow-md">
  {/* Phone */}
<div className="flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21 16.5V21a1 1 0 0 1-1.25.97A19.8 19.8 0 0 1 3 4.25 1 1 0 0 1 3.97 3h4.5a1 1 0 0 1 1 .75l1.1 4.4a1 1 0 0 1-.29.96l-2.2 2.2a16 16 0 0 0 6.4 6.4l2.2-2.2a1 1 0 0 1 .96-.29l4.4 1.1a1 1 0 0 1 .75 1z"/>
  </svg>
  <a href="tel:+918195952780" className="font-semibold text-white hover:underline">
    +91 81959 52780
  </a>
</div>

{/* Email */}
<div className="flex items-center gap-2 mt-2">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.01l-10 6.25L2 4.01V4zm0 2.26V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.26l-10 6.24L2 6.26z"/>
  </svg>
  <a href="mailto:vikasjitsingh2@gmail.com" className="font-semibold text-white hover:underline">
    vikasjitsingh2@gmail.com
  </a>
</div>
</div>
  
      {/* Header with Mobile Menu */}
      <header className="relative">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center gap-8 py-4 border-b bg-gradient-to-r from-white to-gray-50">
          <Link href="/" className="font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300 transform hover:scale-105">Home</Link>
          <Link href="/About" className="font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text transition-all duration-300 transform hover:scale-105">About</Link>
          <Link href="/self-drive" className="font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text transition-all duration-300 transform hover:scale-105">Self-Drive</Link>
          <Link href="/luxury-wedding" className="font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text transition-all duration-300 transform hover:scale-105">Luxury Wedding</Link>
          <Link href="/taxi" className="font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text transition-all duration-300 transform hover:scale-105">Taxi Booking</Link>
          <Link href="/contact" className="font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-600 hover:bg-clip-text transition-all duration-300 transform hover:scale-105">Contact</Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center px-6 py-4 border-b bg-gradient-to-r from-white to-gray-50">
          <div className="text-lg font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
            <div className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent uppercase">
              Rent2GO
            </div>
          </div>
        
          
          {/* Luxury Three Dot Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative flex flex-col gap-1.5 p-3 rounded-full hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform hover:scale-100 group"
            aria-label="Toggle menu"
          >
            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 transform ${
              isMobileMenuOpen 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-150 rotate-180' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 group-hover:scale-125'
            }`}></div>
            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 delay-100 transform ${
              isMobileMenuOpen 
                ? 'bg-gradient-to-r from-pink-500 to-red-500 scale-150 -rotate-180' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600 group-hover:scale-125'
            }`}></div>
            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 delay-200 transform ${
              isMobileMenuOpen 
                ? 'bg-gradient-to-r from-red-500 to-orange-500 scale-150 rotate-180' 
                : 'bg-gradient-to-r from-pink-600 to-red-600 group-hover:scale-125'
            }`}></div>
            
            {/* Luxury glow effect */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-blue-400 to-purple-400 blur-sm"></div>
          </button>
        </div>

        {/* Luxury Mobile Menu Dropdown */}
        <div className={`md:hidden absolute top-full left-0 right-0 z-50 transition-all duration-700 transform ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 backdrop-blur-lg border-b shadow-2xl">
            <div className="flex flex-col overflow-hidden">
              <Link 
                href="/" 
                className="group px-6 py-5 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform hover:scale-[1.02] border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    Home
                  </span>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
                </div>
              </Link>
              <Link 
                href="/About" 
                className="group px-6 py-5 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 transform hover:scale-[1.02] border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                    About
                  </span>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
                </div>
              </Link>
              <Link 
                href="/self-drive" 
                className="group px-6 py-5 hover:bg-gradient-to-r hover:from-pink-50 hover:to-red-50 transition-all duration-300 transform hover:scale-[1.02] border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300">
                    Self drive cars
                  </span>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-red-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
                </div>
              </Link>
              <Link 
                href="/taxi" 
                className="group px-6 py-5 hover:bg-gradient-to-r hover:from-pink-50 hover:to-red-50 transition-all duration-300 transform hover:scale-[1.02] border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300">
                    Taxi Service
                  </span>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-red-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
                </div>
              </Link>
              <Link
               href="/luxury-wedding" 
                className="group px-6 py-5 hover:bg-gradient-to-r hover:from-pink-50 hover:to-red-50 transition-all duration-300 transform hover:scale-[1.02] border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300">
                    Luxury Wedding
                  </span>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-red-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
                </div>
              </Link>
              <Link
                href="/tour-packages"
                className="group px-6 py-5 hover:bg-gradient-to-r hover:from-pink-50 hover:to-red-50 transition-all duration-300 transform hover:scale-[1.02] border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300">
                    Tour Packages
                  </span>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-red-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
                </div>
              </Link>
              <Link
                href="/contact"
                className="group px-6 py-5 hover:bg-gradient-to-r hover:from-pink-50 hover:to-red-50 transition-all duration-300 transform hover:scale-[1.02] border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300">
                    Contact
                  </span>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-red-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
                </div>
              </Link>
            </div>
            
            {/* Luxury bottom accent */}
            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80"></div>
          </div>
        </div>
      </header>

<div className="relative h-[40vh] sm:h-[40vh] md:h-[40vh] overflow-hidden straight-b-3xl shadow-lg">
  <Carousel
    autoPlay
    infiniteLoop
    interval={3500}
    showThumbs={false}
    showStatus={false}
    showArrows={false}
    swipeable
    emulateTouch
    className="h-full"
  >
    {[
      "/cars/self-drive/car1.png",
      "/cars/taxi/car1.png",
      "/cars/luxury-wedding/car1.png",
      "/cars/tourist-package/car1.png",
    ].map((src, i) => (
      <div
        key={src}
        className="relative w-full h-[40vh] sm:h-[40vh] md:h-[40vh]"
      >
        <Image
          src={src}
          alt={`Wedding Car ${i + 1}`}
          fill
          style={{ objectFit: "cover" }}
          className="w-full h-full object-cover"
          
          priority={i === 0}
        />
      </div>
    ))}
  </Carousel>

  {/* Overlay Content */}
  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/60 via-black/30 to-black/60 px-4">
    <div className="w-full max-w-2xl text-center text-white border-t border-b border-white/30 py-6 sm:py-10">
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-2 drop-shadow-lg tracking-tight">
        
      </h1>
      <h2 className="text-base sm:text-2xl font-semibold mb-4 drop-shadow-md">
        Rent2GO
      </h2>
      <p className="text-sm sm:text-base mb-6 font-medium drop-shadow">
        Whether it’s a wedding, function, or an occasion, our fleet of luxury cars will be at your service.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5">
       <div className="flex space-x-4 justify-center">
<div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 items-center justify-center">
  <a
    href="/self-drive"
    className="bg-gradient-to-r from-red-500 to-red-600 px-4 py-1 text-sm font-semibold shadow-md hover:from-red-600 hover:to-rose-500 transition straight text-center"
  >
    Hire Car
  </a>
  <a
    href="/About"
    className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-1 text-sm font-semibold shadow-md hover:from-yellow-500 hover:to-orange-500 transition straight text-center"
  >
    About
  </a>
</div>


</div>
</div>
    </div>
  </div>
</div>




      {/* Hero */}
      <section className="text-center px-6 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
          Book Your Ride with Punjab Rental Wheels
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl">
          Choose from our premium services
        </p>
      </section>

      {/* Services */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 pb-12">
        {services.map((s, i) => (
          <Link key={i} href={s.link}>
            <div className="rounded-lg shadow hover:shadow-md overflow-hidden cursor-pointer transition">
              <div
                className="aspect-video bg-cover bg-center"
                style={{ backgroundImage: `url(${s.image})` }}
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section className="py-16 bg-gray-50 px-6 sm:px-10">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-sm text-orange-600 font-semibold uppercase tracking-wide mb-3">
      Why Choose Us
    </h2>
    <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
      We Have 39 Years Of <br />Experience in the Travel Industry
    </h3>
    <p className="text-gray-700 mb-12 text-lg sm:text-xl">
      For a comfortable ride & to enjoy the best of travel & leisure services, ride with Ranjit Bros Taxi Service:
      The one-stop travel shop.
    </p>

    <div className="space-y-10 sm:space-y-12">
      {/* 1 - Govt Approved */}
      <div className="flex items-start gap-6 hover:bg-gray-100 p-4 rounded-lg transition duration-300 ease-in-out">
        <div className="text-red-600 text-4xl sm:text-5xl transform transition-transform duration-300 ease-in-out hover:scale-110">
          📍
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-2">
            Govt. Approved
          </h4>
          <p className="text-gray-700">
            Certified by India's Ministry of Tourism, Punjab Tourism, and Incredible India. The only govt. approved car rental company in Punjab.
          </p>
        </div>
      </div>

      {/* 2 - Safe & Secure */}
      <div className="flex items-start gap-6 hover:bg-gray-100 p-4 rounded-lg transition duration-300 ease-in-out">
        <div className="text-red-600 text-4xl sm:text-5xl transform transition-transform duration-300 ease-in-out hover:scale-110">
          🛡️
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-2">
            Safe & Secure
          </h4>
          <p className="text-gray-700">
            Punjab Car Rentals provides secure online bookings for luxury, self-drive, and chauffeur-driven vehicles.
          </p>
        </div>
      </div>

      {/* 3 - Customer Support */}
      <div className="flex items-start gap-6 hover:bg-gray-100 p-4 rounded-lg transition duration-300 ease-in-out">
        <div className="text-red-600 text-4xl sm:text-5xl transform transition-transform duration-300 ease-in-out hover:scale-110">
          💬
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-2">
            Customer Support
          </h4>
          <p className="text-gray-700">
            Our service is available 24x7, all year round, with dedicated support for every customer.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-[#0a1d37] text-white pt-10 pb-6 px-4 sm:px-10 mt-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
    
    {/* Logo & About */}
    <div>
      <h2 className="text-2xl font-bold text-orange-400 mb-2">Rent2GO</h2>
      <p className="text-sm text-gray-300">
        Premium Self-Drive & Luxury Car Rentals in Punjab. 
        Hire with chauffeur or self-drive – flexible, fast, and reliable.
      </p>
      <div className="flex mt-4 gap-3">
        <a href="#" className="text-orange-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="text-orange-400 hover:text-white"><i className="fab fa-instagram"></i></a>
        <a href="#" className="text-orange-400 hover:text-white"><i className="fab fa-whatsapp"></i></a>
      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="font-semibold text-lg mb-2 text-white">Quick Links</h3>
      <ul className="space-y-2 text-sm text-gray-300">
        <li><a href="/">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/self-drive">Self Drive</a></li>
        <li><a href="/luxury-wedding">Luxury Cars</a></li>
        
      </ul>
    </div>

    {/* Services */}
    <div>
      <h3 className="font-semibold text-lg mb-2 text-white">Our Services</h3>
      <ul className="space-y-2 text-sm text-gray-300">
        <li>Self Drive Car Rental</li>
        <li>Wedding Luxury Cars</li>
        <li>Airport Pickup/Drop</li>
        <li>Chauffeur Cars</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="font-semibold text-lg mb-2 text-white">Contact</h3>
      <ul className="space-y-2 text-sm text-gray-300">
        <li><i className="fas fa-map-marker-alt text-orange-400 mr-2"></i> Ludhiana, Punjab</li>
        <li><i className="fas fa-envelope text-orange-400 mr-2"></i> vikasjitsingh2@gmail.com</li>
        <li><i className="fas fa-phone text-orange-400 mr-2"></i> +91 99880 14945</li>
      </ul>
    </div>

  </div>
  </footer>

  {/* Bottom Bar */}
  <div className="bg-gradient-to-r from-orange-500 via-orange-500 to-orange-500 text-white text-sm px-10 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 shadow-md">
    © {new Date().getFullYear()} Rent2GO | All Rights Reserved
  </div>


      
    </main>
  );
}