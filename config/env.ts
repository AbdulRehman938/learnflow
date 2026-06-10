export const env = {
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key",
    serviceRole: process.env.SUPABASE_SERVICE_ROLE_KEY || "",
  },
  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY || "",
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || "",
  },
  app: {
    url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  },
};
