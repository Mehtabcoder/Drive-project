// app/page.tsx

'use client';
'use client';
import Link from 'next/link';
import { useState } from 'react';

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
      {/* Header with Mobile Menu */}
      <header className="relative">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center gap-8 py-4 border-b bg-gradient-to-r from-white to-gray-50">
          <Link href="/" className="font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300 transform hover:scale-105">Home</Link>
          <Link href="/about" className="font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text transition-all duration-300 transform hover:scale-105">About</Link>
          <Link href="/contact" className="font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-600 hover:bg-clip-text transition-all duration-300 transform hover:scale-105">Contact</Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center px-6 py-4 border-b bg-gradient-to-r from-white to-gray-50">
          <div className="text-lg font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
            <div className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent uppercase">
              Punjab Rental Wheels
            </div>
          </div>
          
          {/* Luxury Three Dot Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative flex flex-col gap-1.5 p-3 rounded-full hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform hover:scale-110 group"
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

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 text-sm border-t">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 mb-4">

          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          
        </div>
        <p>© 2024 DriveNow. All rights reserved.</p>
      </footer>
    </main>
  );
}