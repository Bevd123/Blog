"use client"

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';


const travelOffers = [
  {
    id: 1,
    title: 'Annapurna Circuit',
    image: '/BG.png',
    description: 'Surfen, Vulkane und Traumstrände',
    price: '1200',
    link: '/bali'
  },{
    id: 2,
    title: 'Everest Basecamp',
    image: '/BG.png',
    description: 'Surfen, Vulkane und Traumstrände',
    price: '1400',
    link: '/bali'
  },{
    id: 3,
    title: 'Annapurna Basecamp',
    image: '/BG.png',
    description: 'Surfen, Vulkane und Traumstrände',
    price: '1000',
    link: '/bali'
  },{
    id: 4,
    title: 'Langtang Valley',
    image: '/BG.png',
    description: 'Surfen, Vulkane und Traumstrände',
    price: '700',
    link: '/bali'
  },{
    id: 5,
    title: 'Manaslu Circuit',
    image: '/BG.png',
    description: 'Surfen, Vulkane und Traumstrände',
    price: '1400',
    link: '/bali'
  },{
    id: 6,
    title: 'Ghorepani Poon Hill',
    image: '/BG.png',
    description: 'Surfen, Vulkane und Traumstrände',
    price: '800',
    link: '/bali'
  },{
    id: 7,
    title: 'Upper Mustang',
    image: '/BG.png',
    description: 'Surfen, Vulkane und Traumstrände',
    price: '1000',
    link: '/bali'
  },{
    id: 8,
    title: 'Kanchanjunga',
    image: '/BG.png',
    description: 'Surfen, Vulkane und Traumstrände',
    price: '1800',
    link: '/bali'
  },{
    id: 9,
    title: 'Makalu Basecamp',
    image: '/BG.png',
    description: 'Surfen, Vulkane und Traumstrände',
    price: '1200',
    link: '/bali'
  },{
    id: 10,
    title: 'Rara Lake',
    image: '/BG.png',
    description: 'Surfen, Vulkane und Traumstrände',
    price: '1500',
    link: '/bali'
  },
];

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOffers = travelOffers.filter(offer =>
    offer.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl text-black font-bold text-center mb-8">Dein nächstes Abenteuer wartet!</h1>

        <input
          type="text"
          placeholder="Suche nach deinem Traumziel"
          className="text-black border border-gray-300 rounded-md p-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {filteredOffers.map(offer => (
            <div key={offer.id} className="bg-gray-100 rounded-lg p-6">
              <Image src={offer.image} alt={offer.title} width={500} height={300} />
              <h3 className="text-xl font-bold text-black">{offer.title}</h3>
              <p className="text-black">{offer.description}</p>
              <p className="text-blue-500 font-bold">Ab {offer.price}$</p>
              <Link href={offer.link}>
                <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
                  Jetzt buchen!
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;