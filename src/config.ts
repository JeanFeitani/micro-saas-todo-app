export const config = {
  stripe: {
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
    webhookSecret: '',
    plans: {
      free: {
        priceId: 'price_1P6WLzRuZYK3hvMNA5J92E04',
        quota: {
          TASKS: 5,
        },
      },
      pro: {
        priceId: 'price_1P6WM9RuZYK3hvMNe98vImXe',
        quota: {
          TASKS: 100,
        },
      },
    },
  },
}
