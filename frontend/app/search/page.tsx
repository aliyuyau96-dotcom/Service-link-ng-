'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string;
}

const mockServices: Service[] = [
  {
    id: 1,
    name: 'Professional Plumbing',
    description: 'Expert plumbing repairs and installation',
    price: 50,
    rating: 4.8,
    category: 'Plumbing',
  },
  {
    id: 2,
    name: 'Electrical Services',
    description: 'Licensed electrician for all your needs',
    price: 60,
    rating: 4.9,
    category: 'Electrical',
  },
  {
    id: 3,
    name: 'House Cleaning',
    description: 'Professional cleaning service',
    price: 40,
    rating: 4.7,
    category: 'Cleaning',
  },
  {
    id: 4,
    name: 'Web Development',
    description: 'Custom website development',
    price: 100,
    rating: 4.9,
    category: 'Web Development',
  },
  {
    id: 5,
    name: 'Photography',
    description: 'Professional photo sessions',
    price: 80,
    rating: 4.8,
    category: 'Photography',
  },
  {
    id: 6,
    name: 'Tutoring Services',
    description: 'Academic tutoring for all levels',
    price: 35,
    rating: 4.9,
    category: 'Tutoring',
  },
];

export default function SearchPage() {
  const [services, setServices] = useState<Service[]>(mockServices);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState(100);
  const [sortBy, setSortBy] = useState('rating');

  useEffect(() => {
    let filtered = mockServices;

    if (searchQuery) {
      filtered = filtered.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((s) => s.category === selectedCategory);
    }

    filtered = filtered.filter((s) => s.price <= priceRange);

    if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'price') {
      filtered.sort((a, b) => a.price - b.price);
    }

    setServices(filtered);
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  const categories = [...new Set(mockServices.map((s) => s.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Bar */}
      <div className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <input
            type="text"
            placeholder="Search for services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-4 gap-8">
        {/* Sidebar - Filters */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4 text-gray-900">Filters</h3>

            {/* Category Filter */}
            <div className="mb-6">
              <label className="block font-bold text-gray-900 mb-3">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <label className="block font-bold text-gray-900 mb-3">
                Max Price: ${priceRange}
              </label>
              <input
                type="range"
                min="10"
                max="200"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Sort */}
            <div className="mb-6">
              <label className="block font-bold text-gray-900 mb-3">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              >
                <option value="rating">Rating</option>
                <option value="price">Price (Low to High)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content - Services */}
        <div className="md:col-span-3">
          {services.length === 0 ? (
            <div className="bg-white p-12 rounded-lg shadow-md text-center">
              <p className="text-gray-600 text-lg">No services found. Try different filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex gap-4 items-center mb-4">
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">
                          ⭐ {service.rating}
                        </span>
                        <span className="text-gray-500 text-sm">{service.category}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-600 mb-4">
                        ${service.price}/hr
                      </div>
                      <Link
                        href={`/services/${service.id}`}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition inline-block"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}