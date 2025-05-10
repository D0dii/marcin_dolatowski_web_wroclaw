"use client";
import { ProductCard } from "@/components/product-card";
import products from "@/data.json";

export default function Home() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Nasze produkty</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center md:flex flex-wrap gap-6 items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
