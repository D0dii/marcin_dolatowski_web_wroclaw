import { calculateItemTotalPrice, formatPrice } from "@/lib/utils";
import { CartItem } from "@/types";

export function SummaryItem({ item }: { item: CartItem }) {
  const total = calculateItemTotalPrice(item);
  return (
    <div className="flex items-center py-4 border-b">
      <div className="flex-1">
        <h3 className="font-medium">{item.name}</h3>
      </div>
      <div className="grid grid-cols-3 gap-4 text-right">
        <div className="text-muted-foreground">{item.quantity}x</div>
        <div className="text-muted-foreground">{formatPrice(item.price)}</div>
        <div className="font-medium">{total.toFixed(2)} zł</div>
      </div>
    </div>
  );
}
