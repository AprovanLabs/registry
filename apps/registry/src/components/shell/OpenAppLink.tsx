/**
 * Catalog shell CTA — one link to the product app; no sign-in on the catalog.
 */

import { Button } from "@/components/ui/button";

const PRODUCT_APP_URL = "https://aprovan.com/chat/";

export function OpenAppLink() {
  return (
    <Button asChild size="sm" variant="outline">
      <a href={PRODUCT_APP_URL}>Open the app</a>
    </Button>
  );
}
