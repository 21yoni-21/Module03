# Addis Eats Rendering Strategy

## Route Strategies

| Route | Strategy | Reason |
|---|---|---|
| `/` | Static | The home page does not depend on the user and changes rarely. |
| `/menu` | ISR - 1 hour | Dishes can change occasionally, but fast loading is important. |
| `/menu/[id]` | Static via generateStaticParams | The known dish IDs can be generated at build time. |
| `/cart` | Client | The cart belongs to the current user and contains personal state. |
| `/checkout` | Dynamic | Checkout may depend on the user's session and live pricing. |
| `/not-found` | Static | The not-found page is the same for every user. |

## Rendering Controls

### Menu

The menu uses:

```js
export const revalidate = 3600;