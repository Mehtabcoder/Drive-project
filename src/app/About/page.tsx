import { Clock, Phone, Shield, Star } from "lucide-react";

export default function About() {
  return (
    <main className="bg-white min-h-screen px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-rose-600">About Our Rent2Go Service</h1>

      <p className="text-gray-700 leading-relaxed mb-6">
        Welcome to DriveNow, your trusted partner for premium car rentals in India. We specialize in delivering exceptional 
        self-drive, taxi, tourist, and luxury wedding car services — all tailored for your needs.
      </p>

      <div className="grid gap-4 text-gray-800">
        <div>
          <h2 className="text-xl font-semibold mb-2">🚗 What We Offer</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Luxury wedding cars </li>
            <li>24/7 Taxi & Outstation rentals</li>
            <li>Self-drive cars for flexible travel</li>
            <li>Tourist packages with custom plans</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">💡 Why Choose Us</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Clean, well-maintained vehicles</li>
            <li>Trained professional drivers</li>
            <li>Affordable pricing with transparent billing</li>
            <li>Instant WhatsApp booking support</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">📍 Our Mission</h2>
          <p>
            To provide hassle-free, elegant transportation experiences for every occasion. Whether it's a wedding, weekend trip,
            or daily travel — we’ve got you covered.
          </p>
        </div>
      </div>

       {/* Contact Info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 text-center">
                  <div className="font-medium text-gray-900 mb-1">Need Help or Have question?</div>
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+91 99880 14945</span>
                  </div>
                  <div className="text-xs mt-2 text-gray-500">
                    Available 24/7 for bookings
                  </div>
                </div>
              </div>
                      
        

        {/* Trust Indicators */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-rose-100 p-3 rounded-full mb-3">
                <Shield className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Trusted Service</h3>
              
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-3 rounded-full mb-3">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">On-Time Guarantee</h3>
              
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-3 rounded-full mb-3">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Premium Quality</h3>
             
            </div>
          </div>
        </div>
      

    </main>
  );
}
