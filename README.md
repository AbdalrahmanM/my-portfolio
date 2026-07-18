This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Vercel deployment

The contact form sends mail from the `/api/mail` serverless route. Add these
variables in **Vercel > Project Settings > Environment Variables** for the
Production environment, then redeploy the project:

```text
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=a_sender_verified_in_sendgrid
CONTACT_TO_EMAIL=abdodj18@gmail.com
CONTACT_ALLOWED_ORIGINS=https://your-production-domain.vercel.app
CONTACT_RATE_LIMIT_SALT=a_long_random_value
```

`SENDGRID_FROM_EMAIL` must exactly match a verified Single Sender or an address
on an authenticated SendGrid domain. The API intentionally returns `503` when
`SENDGRID_API_KEY` is missing and `502` when SendGrid rejects delivery.

Cloudflare Turnstile is recommended for public deployments. Create one widget
for the production domain and add the matching pair:

```text
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_public_site_key
TURNSTILE_SECRET_KEY=your_private_secret_key
TURNSTILE_EXPECTED_HOSTNAME=your-production-domain.vercel.app
```

Never commit real API keys or secret keys. Use `.env.local` for local testing;
`.env.example` documents the complete variable list.

## Design system

The portfolio redesign is documented in
`design-system/abdulrahman-portfolio/MASTER.md`. It is based on the official
UI/UX Pro Max Portfolio Grid recommendation: asymmetric bento composition,
Inter typography, dark cinematic neutrals, cobalt interaction color, and
purposeful Framer Motion transitions with reduced-motion support.
