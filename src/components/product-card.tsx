"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/types";
import { useCart } from "@/hooks/use-cart";
import { formatPrice, getBasePathUrl } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";
import { IncreaseDecreaseQuantity } from "./increase-decrease-quantity";
import { Trash2Icon } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantityInCart,
    decreaseQuantityInCart,
    getProductQuantity,
  } = useCart();
  if (cart === undefined) {
    return (
      <Card className="overflow-hidden w-[200px]">
        <CardHeader className="p-0">
          <Skeleton className="h-[150px] w-full" />
        </CardHeader>
        <CardContent className="p-4">
          <Skeleton className="h-5 w-3/4 mb-2" />
          <Skeleton className="h-6 w-1/2 mt-2" />
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Skeleton className="h-10 w-full" />
        </CardFooter>
      </Card>
    );
  }
  return (
    <Card className="overflow-hidden w-[200px]">
      <CardHeader className="p-0">
        <Image src={getBasePathUrl("/groceries.svg")} alt={product.name} width={200} height={150} />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <p className="text-xl font-bold mt-2">{formatPrice(product.price)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {cart.find((p) => p.id === product.id) ? (
          <div className="flex gap-2 justify-between w-full">
            <IncreaseDecreaseQuantity
              increaseQuantityInCart={increaseQuantityInCart}
              decreaseQuantityInCart={decreaseQuantityInCart}
              item={{ ...product, quantity: getProductQuantity(product.id) }}
            />
            <Button onClick={() => removeFromCart(product.id)}>
              <Trash2Icon className="h-4 w-4" />
              <span className="sr-only">Usuń z koszyka</span>
            </Button>
          </div>
        ) : (
          <Button onClick={() => addToCart(product)} className="w-full">
            Dodaj do koszyka
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
