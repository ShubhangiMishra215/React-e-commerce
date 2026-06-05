# React E-Commerce App

A fully functional e-commerce web application built with React as a personal project to strengthen full-stack development skills. It features product browsing, detailed product views, and a cart system with toast notifications.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View a list of products on the homepage
- Click on a product to view its details on a separate page
- Add products to the cart from both the product listing and product detail pages
- View and manage items in the cart (remove items, clear cart)
- See toast notifications when items are added to the cart
- View related products on the product detail page

### Links

- Solution URL: (https://github.com/ShubhangiMishra215/React-e-commerce.git)
- Live Site URL: (https://react-e-commerce-peach.vercel.app/)

---

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [React Router DOM](https://reactrouter.com/) - Client-side routing
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Toastify](https://fkhadra.github.io/react-toastify/) - Toast notifications
- React Context API - Global state management for cart
- CSS Modules - Component-level custom styling
- Mobile-first workflow

### What I learned

Working on this project helped me solidify my understanding of React Context API for global state management. Managing the cart state across multiple components (product listing, product detail, and cart page) taught me how to structure context providers cleanly.

One key bug I debugged was duplicate toast notifications caused by rendering multiple `<ToastContainer />` instances. The fix was to mount a single `<ToastContainer />` at the root (`App.jsx`) and remove it from individual page components:

```jsx
// App.jsx — one global ToastContainer
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      {/* routes */}
    </>
  );
}
```

I also learned how to filter related products by category while excluding the current product:

```js
const relatedProducts = items.filter(
  pro =>
    pro.category.toLowerCase() === product.category.toLowerCase()
    && pro.id !== product.id
);
```

### Continued development

In future projects and iterations, I want to focus on:

- Adding a proper **checkout flow** with form validation
- Implementing **quantity controls** (+ / −) directly in the cart
- Adding **persistent cart state** using `localStorage`
- Exploring **Redux Toolkit** for more scalable state management
- Writing **unit and integration tests** with Vitest and React Testing Library

### Useful resources

- [React Router Docs](https://reactrouter.com/en/main) - Helped with dynamic routing for product detail pages using `useParams`.
- [React Toastify Docs](https://fkhadra.github.io/react-toastify/introduction) - Straightforward guide for setting up toast notifications.
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - My go-to reference for utility classes and responsive design.
- [MDN Web Docs](https://developer.mozilla.org/) - Always reliable for JavaScript fundamentals.

---

## Author

- GitHub - [@ShubhangiMishra215](https://github.com/ShubhangiMishra215)

---

