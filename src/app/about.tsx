export default function About() {
  return (
    <main className="bg-white min-h-screen px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-rose-600">About Our Car Rental Service</h1>

      <p className="text-gray-700 leading-relaxed mb-6">
        Welcome to DriveNow, your trusted partner for premium car rentals in India. We specialize in delivering exceptional 
        self-drive, taxi, tourist, and luxury wedding car services — all tailored for your needs.
      </p>

      <div className="grid gap-4 text-gray-800">
        <div>
          <h2 className="text-xl font-semibold mb-2">🚗 What We Offer</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Luxury wedding cars with flower decoration</li>
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

      <div className="mt-10 text-center">
        <p className="text-gray-600 text-sm">
          📞 Have questions? Call us at <span className="font-medium">+91 83272 72222</span>
        </p>
      </div>
    </main>
  );
}
