'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ServiceLink
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/search" className="text-gray-700 hover:text-blue-600 transition">
            Services
          </Link>
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <div className="flex gap-4">
            <Link
              href="/auth/login"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 px-4 py-4 space-y-4">
          <Link href="/" className="block text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/search" className="block text-gray-700 hover:text-blue-600">
            Services
          </Link>
          <Link href="/" className="block text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link
            href="/auth/login"
            className="block text-gray-700 hover:text-blue-600"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="block bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}