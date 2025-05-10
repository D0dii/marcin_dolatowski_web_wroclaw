import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function EmptyCart() {
  return (
    <div className="container py-16 text-center">
      <div className="max-w-md mx-auto">
        <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
        <h1 className="text-2xl font-bold mb-4">Twój koszyk jest pusty</h1>
        <p className="text-muted-foreground mb-8">Wygląda na to, że jeszcze nic do niego nie dodałeś.</p>
        <Button asChild>
          <Link href="/">Kontynuuj zakupy</Link>
        </Button>
      </div>
    </div>
  );
}
