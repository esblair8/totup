# stripe-webhooks

## Setup env vars

- `cp supabase/functions/stripe-webhook/.env.example supabase/functions/stripe-webhook/.env`
- add your own keys

## Test locally

- Terminal 1:
  - ` supabase functions serve --no-verify-jwt stripe-webhook --env-file ./supabase/functions/stripe-webhook/.env`
- Terminal 2:
  - `stripe listen --forward-to localhost:54321/functions/v1/stripe-webhook`
- Terminal 3 (optional):
  - `stripe trigger payment_intent.succeeded`

## Deploy

- `supabase functions deploy --no-verify-jwt stripe-webhook`
- `supabase secrets set --env-file ./supabase/functions/stripe-webhook/.env`
