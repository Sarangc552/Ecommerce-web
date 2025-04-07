# Ecommerce-web app


A simple product listing UI built with **React**, **Tailwind CSS**, and **DummyJSON API**. Features category filters, price sorting, search with intelligent routing, pagination, and detailed product view.

 Features:
- 🔍 Global search across all pages
- 🗂️ Filter products by category
- 💰 Sort products by price (Low → High, High → Low)
- 📄 Pagination with 6 products per page
- 🌐 View product details on a separate page
- ⚡ Responsive and mobile-friendly layout

  ⚙️ Working Flow
1. Data Fetching
Products are fetched using Axios from the DummyJSON API.

Data is stored in a React state variable.

2. Global Search
Implemented using React Context.

User input from the Navbar updates the global state.

Products are filtered based on search keywords matching product titles .

3. Category Filter
Category buttons dynamically filter products.

Clicking a category updates a filter state and re-renders the product list.

4. Price Filter
A slider or input lets users select a price range.

Products are filtered to only show those within the selected price range.

5. Pagination
Products are paginated to display a limited number per page .

Users can navigate between pages using pagination buttons.

6. Product Card UI
Each product is shown as a card with:

Image

Title

Price

Rating

ENQUIRE button

Designed using Tailwind CSS for responsiveness and styling


# Technologies Used
React.js

Tailwind CSS

Axios

React Router (if used for navigation)

Context API


#Future Improvements

Add to cart and checkout functionality

User authentication

Backend integration


# Go into project folder
cd E-commerce  

# Run the app
npm run dev

#Tech Stack
.React
.Tailwind CSS
.React Router
.Axios
.MUI Rating
.DummyJSON API
