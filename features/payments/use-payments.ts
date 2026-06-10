import { useState } from "react";
import { paymentService } from "./payment-service";

export function usePayments() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startCheckout = async (courseId: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const url = await paymentService.createCheckoutSession(courseId);
      if (url) {
        window.location.href = url;
      }
    } catch (err: any) {
      setError(err.message || "Failed to start checkout");
    } finally {
      setIsLoading(false);
    }
  };

  return { startCheckout, isLoading, error };
}
