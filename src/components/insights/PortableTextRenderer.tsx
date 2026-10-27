'use client';

import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-light mb-6">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-maroon-950 mt-12 mb-6 pb-3 border-b-2 border-gold-500/60 inline-block">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl sm:text-2xl font-serif font-bold text-maroon-950 mt-10 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold text-maroon-900 mt-6 mb-2">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gold-500 pl-6 py-4 my-8 italic bg-beige-50 rounded-r-2xl text-maroon-950/80 font-serif text-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-3 mb-8 pl-6 list-disc marker:text-gold-500 text-slate-700 font-light">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="space-y-3 mb-8 pl-6 list-decimal marker:text-gold-600 marker:font-bold text-slate-700 font-light">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-maroon-950">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-gold-600 hover:text-gold-700 underline font-medium transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <figure className="my-10 overflow-hidden rounded-2xl shadow-lg border border-beige-200">
          <div className="relative w-full h-[400px]">
            <Image
              src={urlFor(value).width(1200).height(800).url()}
              alt={value.alt || 'ICLC Legal Article Visual'}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="p-3 text-center text-xs text-slate-500 italic bg-beige-50 border-t border-beige-100">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default function PortableTextRenderer({ value }: { value: any }) {
  if (!value) return null;
  return <PortableText value={value} components={components} />;
}
