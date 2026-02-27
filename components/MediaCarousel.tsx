'use client'

import { useState } from 'react'
import type { GalleryItem } from '@data/projects'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function MediaCarousel({ items }: { items: GalleryItem[] }) {
    const [current, setCurrent] = useState(0)

    const prev = () => setCurrent(i => (i - 1 + items.length) % items.length)
    const next = () => setCurrent(i => (i + 1) % items.length)

    const item = items[current]

    return (
        <div className="relative w-full rounded-2xl overflow-hidden bg-gray-900 border border-gray-700 select-none">
            {/* Media area */}
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                {item.type === 'image' ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        key={item.src}
                        src={`${BASE_PATH}${item.src}`}
                        alt={`Galeria ${current + 1}`}
                        className="absolute inset-0 w-full h-full object-contain"
                    />
                ) : (
                    <video
                        key={item.src}
                        src={`${BASE_PATH}${item.src}`}
                        controls
                        className="absolute inset-0 w-full h-full object-contain"
                    />
                )}
            </div>

            {/* Prev / Next arrows */}
            {items.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        aria-label="Anterior"
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                    >
                        ‹
                    </button>
                    <button
                        onClick={next}
                        aria-label="Próximo"
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                    >
                        ›
                    </button>
                </>
            )}

            {/* Dot indicators */}
            {items.length > 1 && (
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
                    {items.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            aria-label={`Ir para item ${i + 1}`}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${i === current
                                ? 'bg-purple-500 scale-110'
                                : 'bg-gray-500 hover:bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            )}

            {/* Counter badge */}
            <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-full bg-black/60 text-xs text-gray-300">
                {current + 1} / {items.length}
            </div>
        </div>
    )
}
