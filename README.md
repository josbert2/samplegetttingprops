# getStaticProps Example Next.js Component
This is the companion code base for this blog post, [Understanding ISR in Next.js](https://www.espressocode.tech/blog/isg-nextjs). We are using `getStaticProps` to get data before the page is rendered (SSR) to populate the component's props.

Using ISR, the pre-generated HTML is cached on the server and served to subsequent requests. When the cache expires, Next.js re-generates the page in the background and updates the cache. This allows for faster response times and a more dynamic user experience without sacrificing the benefits of server-side rendering.

So, while ISR is a form of static site generation, it still uses server-side rendering to generate the initial HTML and therefore can be considered a form of SSR.

[Deployed on Netlify](https://eclectic-zabaione-3ea2da.netlify.app/)


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
