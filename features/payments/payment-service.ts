export const paymentService = {
  async createCheckoutSession(courseId: string) {
    const response = await fetch("/api/payments/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ courseId }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Checkout failed");
    return data.url as string;
  },
};
