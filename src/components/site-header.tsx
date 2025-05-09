"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/use-cart";

export function SiteHeader() {
  const { cart } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between ">
        <Link href="/" className="font-bold text-xl">
          ShopSimple
        </Link>

        <Link href="/cart">
          <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cart.length > 0 && (
              <Badge
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                variant="destructive"
              >
                {cart.length}
              </Badge>
            )}
            <span className="sr-only">Zobacz koszyk</span>
          </Button>
        </Link>
      </div>
    </header>
  );
}
