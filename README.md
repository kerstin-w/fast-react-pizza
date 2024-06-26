# Fast React Pizza

The project is a simple application where users can order pizzas from a menu. It does not require user accounts or login. The pizza menu is loaded from an API and users can add multiple pizzas to a cart before ordering. The order requires the user's name, phone number, and address. Optionally, the user can provide GPS location for easier delivery. Users can mark their order as "priority" for an additional 20% of the cart price. Orders are made by sending a POST request with the order data to an API. Payments are made on delivery and each order is assigned a unique order number for tracking. Users can also mark their order as "priority" even after it has been placed.

This project was created for learining purposes and to practice building a simple application with React, Redux, React Router, and Tailwind CSS.

# Live Website

Check out the live website [here](https://fast-react-pizza-kw.netlify.app/).

## Table of Contents

- [Business Requirements](#business-requirements)
- [Features](#features)
  - [User](#user)
  - [Menu](#menu)
  - [Cart](#cart)
  - [Order](#order)
- [Technologies](#technologies)
- [Installation](#installation)

## Business Requirements

- Very simple application, where users can order one or more pizzas from a menu.
- Requires no user accounts and no login
- The pizza menu can change, so it should be loaded from an API
- User can add multiple pizzas to a cart before ordering
- Ordering requires jsut the users name, phone number and address
- If possible, GPS location should also be provided, to make delivery easier
- Users can mark their order as "priority" for and additonal 20% of the cart price
- Orders are made by sending a `POST` request with the order data (user date + selected pizzas) to an API
- Payments are made on delivery, so no payment processing is required
- Each order will get a unique order number, which the user can use to track their order
- Users should also be able to mark their order as "priority" order even after it has been placed

## Features

### User

Global UI state

### Menu

Global remote state (fetch from API)

### Cart

Global UI state

### Order

Global remote state (POST to API and fetched from API)

## Technologies

- **Routing:** [React Router](https://reactrouter.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:**
  - Remote state management: [React Router](https://reactrouter.com/)
  - UI State management: [Redux](https://redux.js.org/)

## Installation

To install and set up the project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
```

2. Navigate to the project directory:

```bash
cd your-repo
```

3. Install the dependencies for **React Router**:

```bash
npm install react-router-dom
```

4. Install the dependencies for **Tailwind CSS**:

```bash
npm install tailwindcss
npx tailwindcss init
```

**Configure Tailwind:**
tailwind.config.js

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

**Include Tailwind in Your CSS**
Create a src/tailwind.css file and add the following lines:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Replace the contents of the generated tailwind.config.js with the following:

5. Install the dependencies for **Redux**:

```bash
npm install redux react-redux
```

6. Start the development server:

```bash
npm start
```
