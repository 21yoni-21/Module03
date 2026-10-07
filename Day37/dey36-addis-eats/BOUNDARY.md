# Day 38 — Server & Client Component Boundaries

## Server Components

### app/layout.js
- Server Component
- Provides the main application layout.
- Does not need browser state or event handlers.

### app/menu/page.js
- Server Component
- Async component.
- Gets the menu data on the server.

### app/menu/DishList.jsx
- Server Component.
- Displays the dishes.
- Does not use state or browser events.

### app/menu/[id]/page.js
- Server Component.
- Displays individual dish information.

## Client Components

### app/menu/error.js
- Client Component.
- Uses the Next.js error boundary and reset functionality.

### app/menu/CategoryBar.jsx
- Client Component.
- Uses useState.
- Uses button click events to select a category.

### app/menu/FilterShell.jsx
- Client Component.
- Uses useState.
- Allows the user to show or hide the dishes.

### app/providers.jsx
- Client Component.
- Provides cart context and React state.

## Server and Client Composition

The Server Component MenuPage passes DishList through
the Client Component FilterShell using children.

Example:

<FilterShell>
  <DishList dishes={menuDishes} />
</FilterShell>

FilterShell does not import DishList directly.

## Main Rule

The "use client" boundary should be as low as possible.

Server Components should handle server data and rendering.

Client Components should only be used when browser
interactivity, state, events, or context are required.