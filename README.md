# Project Title

A brief description of your project.

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

Instructions on how to install and set up your project.
