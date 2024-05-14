export const config = {
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
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
