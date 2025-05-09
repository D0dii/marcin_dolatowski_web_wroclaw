"use client";
import { ProductCard } from "@/components/product-card";
import products from "@/data.json";

export default function Home() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Nasze produkty</h1>

      <div className="flex flex-wrap gap-6 items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
