# Project Title

A brief description of your project.

## Table of Contents

- [Business Requirements](#business-requirements)
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

## Installation

Instructions on how to install and set up your project.
