# NextJS Shopify Frontend

## Docker image: [Link](https://github.com/AlexanderHulbe/nextjs-commerce/pkgs/container/nextjs-commerce)

### Environment Variables

```Dockerfile
SITE_NAME="[Name you want to display]"
SHOPIFY_REVALIDATION_SECRET="[to validate shopify webhooks]"
SHOPIFY_STOREFRONT_ACCESS_TOKEN="[shopify storefornt public api token]"
SHOPIFY_STORE_DOMAIN="[your-shopify-store-subdomain].myshopify.com"
NEXT_PUBLIC_URL="[public url for frontend]"
```
## Shopify Instructions

- install [Headless App](https://apps.shopify.com/headless)
- install [Headless Theme](https://github.com/instantcommerce/shopify-headless-theme)
- Add frontend domain to theme
- copy [custom routes](https://github.com/AlexanderHulbe/nextjs-commerce/blob/main/app/%5Bpage%5D/custom%20redirects.txt) from repo into Theme
- Add this Script to Settings => Checkout => Orderstatus page => Additional scripts

```html
<script>setTimeout(function() {
   window.location.href = "https://[fontend-domain]/thank-you";
}, 5000);</script>
```
