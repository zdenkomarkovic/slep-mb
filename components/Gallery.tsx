"use client";

import { useState } from "react";
import Image from "next/image";

const IMAGES = Array.from({ length: 10 }, (_, i) => ({
  src: `/slep%20(${i + 1}).jpg`,
  alt: `Šlep služba i kombi prevoz MB — slika ${i + 1}`,
}));

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelected(index);
  const closeLightbox = () => setSelected(null);
  const prev = () =>
    setSelected((s) => (s !== null ? (s - 1 + IMAGES.length) % IMAGES.length : null));
  const next = () =>
    setSelected((s) => (s !== null ? (s + 1) % IMAGES.length : null));

  return (
    <section id="galerija" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Naš rad
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Galerija
          </h2>
          <p className="text-slate-400 text-lg">
            Pogledajte kako radimo — kvalitetno i profesionalno.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {IMAGES.map((img, i) => (
            <button
              key={img.src}
              onClick={() => openLightbox(i)}
              className={`relative overflow-hidden rounded-xl bg-slate-800 group cursor-pointer aspect-square ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
              aria-label={`Otvori sliku ${i + 1}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={closeLightbox}
            aria-label="Zatvori"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-lg hover:bg-white/10 transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Prethodna slika"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={IMAGES[selected].src}
              alt={IMAGES[selected].alt}
              fill
              className="object-contain"
              sizes="90vw"
              quality={90}
            />
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-lg hover:bg-white/10 transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Sledeća slika"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
            {selected + 1} / {IMAGES.length}
          </div>
        </div>
      )}
    </section>
  );
}
