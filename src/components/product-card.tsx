import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/types";
import { useCart } from "@/hooks/use-cart";

export function ProductCard({ product }: { product: Product }) {
  const formatPrice = (price: { main: number; fractional: number }) => {
    return `$${price.main}.${price.fractional.toString().padStart(2, "0")}`;
  };

  const { cart, addToCart, removeFromCart } = useCart();
  return (
    <Card className="overflow-hidden w-[200px]">
      <CardHeader className="p-0">
        <Image src="/groceries.svg" alt={product.name} width={200} height={150} />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <p className="text-xl font-bold mt-2">{formatPrice(product.price)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {cart.find((p) => p.id === product.id) ? (
          <Button onClick={() => removeFromCart(product.id)} className="w-full">
            Usuń z koszyka
          </Button>
        ) : (
          <Button onClick={() => addToCart(product)} className="w-full">
            Dodaj do koszyka
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
