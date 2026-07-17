'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">
              Find & Book Services Instantly
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Connect with trusted service providers in your area. From plumbing to consulting, we've got you covered.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/search"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
              >
                Browse Services
              </Link>
              <Link
                href="/auth/signup"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-400 transition border-2 border-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Why Choose ServiceLink?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Easy Search</h3>
              <p className="text-gray-600">
                Find the right service provider with advanced filters and reviews from real customers.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Verified Providers</h3>
              <p className="text-gray-600">
                All service providers are verified and rated by our community for your peace of mind.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Transparent Pricing</h3>
              <p className="text-gray-600">
                No hidden fees. See upfront pricing and compare options before booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Search', desc: 'Find services in your area' },
              { num: '2', title: 'Compare', desc: 'Check prices and reviews' },
              { num: '3', title: 'Book', desc: 'Schedule with your chosen provider' },
              { num: '4', title: 'Review', desc: 'Share your experience' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="px-4 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Popular Services
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              'Plumbing',
              'Electrical',
              'Cleaning',
              'Consulting',
              'Web Development',
              'Tutoring',
              'Photography',
              'Landscaping',
            ].map((category) => (
              <Link
                key={category}
                href="/search"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-50 transition text-center"
              >
                <div className="text-3xl mb-3">📦</div>
                <h3 className="font-bold text-gray-900">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 py-20 bg-blue-600 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-blue-100 mb-8">
            Get the latest service offers and updates delivered to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
            >
              Subscribe
            </button>
          </form>
          {submitted && (
            <p className="text-green-200 mt-4">Thanks for subscribing!</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">ServiceLink</h4>
              <p>Your trusted marketplace for services</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">For Customers</h4>
              <ul className="space-y-2">
                <li><Link href="/search" className="hover:text-white">Browse Services</Link></li>
                <li><Link href="/auth/login" className="hover:text-white">Login</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">For Providers</h4>
              <ul className="space-y-2">
                <li><Link href="/auth/signup" className="hover:text-white">Register</Link></li>
                <li><Link href="/" className="hover:text-white">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-white">Privacy</Link></li>
                <li><Link href="/" className="hover:text-white">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; 2024 ServiceLink NG. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}