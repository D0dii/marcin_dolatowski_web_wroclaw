"use client";
import products from "@/data.json";
import { ProductCard } from "./product-card";

export function RecommendedProducts() {
  return (
    <div className="mt-6">
      <h2 className="text-center text-3xl text-semibold">Polecane produkty</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center md:flex flex-wrap gap-6 items-center mt-4">
        {products.slice(0, 2).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
