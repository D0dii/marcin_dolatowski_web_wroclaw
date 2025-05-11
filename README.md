# Simplified E-commerce Client

A minimal, user-friendly frontend experience simulating a basic e-commerce flow. This application allows users to interact with a shopping cart, modify item quantities, and proceed through a streamlined checkout process including summary and confirmation screens.

Features

- 🛍️ Add products to the shopping cart
- 🔢 Change item quantity directly in cart
- ❌ Remove items from the cart
- 📄 Order summary screen before checkout
- ✅ Thank-you screen after completing a purchase
- 📱 Responsive design for mobile and desktop
- ⚙️ Stateful experience powered by modern frontend patterns

## My Approach

### Planning Phase

Before starting implementation, I outlined a clear development plan broken down into tasks and deliverable milestones. My goal was to create a minimal yet functional e-commerce frontend with shopping cart functionality and a smooth checkout flow — all optimized for maintainability and clarity.

### Task Breakdown

I divided the work into logical feature screens with dedicated responsibilities:

🛍️ Main Product Page

- Defined TypeScript types for product data
- Loaded product data from local JSON
- Built UI for product listing using reusable ProductCard component
- Implemented a local storage–based cart system with a custom hook
- Enabled navigation to the basket page

🧺 Cart page

- Fetched current basket from local storage
- Reused and extended logic from Step 1 to update basket contents (quantity changes, item removal)
- Ensured product quantity cannot fall below 1
- Calculated subtotal for each product type and the overall basket
- Added navigation to proceed to summary step or go back to main product list

📦 Cart summary

- Displayed the full order summary from local storage
- Rendered summary in a user-friendly table format
- Calculated final total cost
- Implemented submit button to finalize "transaction" (fake order saved to local storage)
- Navigation to return to edit cart if needed

🎉 Thank You Page

- Created standalone confirmation screen
- Fetched and displayed the submitted order summary
- Provided a link to return to the main page

### Milestone Structure

My roadmap was driven by completing major functional chunks:

🧱 INIT
✅ Initialized project with Next.js, TailwindCSS, ShadCN UI
✅ Organized project folder structure
✅ Imported static product data from local JSON

📄 MAIN PAGE
✅ Defined types and fetched product list
✅ Built reusable ProductCard component
✅ Created a custom React hook to manage basket in localStorage
✅ Added navigation to basket screen

🛒 CART PAGE
✅ Display products from basket with interactive quantity controls
✅ Prevent quantities under 1, allow removal
✅ Dynamically calculate totals
✅ Added forward/backward navigation

📋 CART SUMMARY
✅ Pulled cart data from localStorage
✅ Rendered order summary in readable format (table)
✅ Calculated full order cost
✅ Submit button triggered "purchase" save and redirect to summary
✅ Option to return to cart page

🙌 THANK YOU PAGE
✅ New route displaying confirmation and saved order summary
✅ Link to go back to main product list

### Potential Next Steps

While the MVP delivers the core checkout flow, I’ve considered several possible future enhancements:

🛒 Support for multiple named baskets using basket IDs in localStorage
🧮 Dynamic product types with filterable categories on main page
🗺️ Additional checkout steps (e.g. location, shipping)
🧠 Optional global state management using Zustand (currently not required)

## Technical & Process Challenges

During development, I faced a few notable obstacles that influenced implementation decisions and outcomes.

1. ⚛️ Jotai Atom Initialization
   Jotai atoms don’t provide native support for loading or undefined asynchronous states. To work around this, I initialized the atom state with undefined and added additional logic to handle that case explicitly. While effective, it slightly increased complexity in state-handling code.

2. 🚫 Static Hosting Limitations (GitHub Pages)
   GitHub Pages does not support dynamic routing (e.g. /thank-you/[id]), which required rethinking the routing structure. As a workaround, I introduced a flat /thank-you route — displaying only the most recent order stored locally, rather than supporting unique IDs per transaction.

3. ⏳ Limited Availability
   Juggling development with personal obligations — including vacation, work, and family responsibilities — impacted the depth and polish I could apply. Despite the time constraints, I prioritized core features and ensured a functional, extensible MVP.

## Setup instructions

```bash
#Clone the repository
git clone https://github.com/D0dii/marcin_dolatowski_web_wroclaw

#Change folder
cd marcin_dolatowski_web_wroclaw

#Install dependencies
npm install

#Run application
npm run dev
```
