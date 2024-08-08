"use client"

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

// ... (Rest deiner Import-Anweisungen)

function BlogOverview() {
  const [posts, setPosts] = useState([
    // Hier fügst du deine Blogbeiträge als Array hinzu
    {
      title: 'Mein erster Blogbeitrag',
      description: 'In diesem Beitrag geht es um...',
      date: '10.01.2024',
      image: '/images/post1.jpg',
      slug: "nA",
    },{
        title: 'Mein Zweiter Blogbeitrag',
        description: 'In diesem Beitrag geht es um...',
        date: '10.01.2024',
        image: '/images/post1.jpg',
        slug: "nA",
      },{
        title: 'Mein Dritter Blogbeitrag',
        description: 'In diesem Beitrag geht es um...',
        date: '10.01.2024',
        image: '/images/post1.jpg',
        slug: "nA",
      },{
        title: 'Mein Vierter Blogbeitrag',
        description: 'In diesem Beitrag geht es um...',
        date: '10.01.2024',
        image: '/images/post1.jpg',
        slug: "nA",
      },
  ]);

  // ... (Filterfunktionen für Kategorien, Tags, Datum)

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Alle Blogbeiträge</h1>

      {/* Filteroptionen (optional) */}
      {/* ... */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.title} className="bg-white text-black shadow-md rounded-lg p-6">
            <img src={post.image} alt={post.title} className="rounded-t-lg mb-4" />
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.description}</p>
            <Link href={`/posts/${post.slug}`} className="text-blue-500 hover:underline">
              Weiterlesen
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination (optional) */}
      {/* ... */}
    </div>
  );
}

export default BlogOverview;