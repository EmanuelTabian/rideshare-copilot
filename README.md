# Rideshare Copilot

[![Live Version](https://img.shields.io/badge/Live%20Version-Click%20Here-brightgreen)](https://www.rideshare-copilot.eu/login)

## Description

This application assists drivers in calculating their weekly net income, tracking their earnings trends, and managing car rentals by allowing them to buy, rent, or sell their own vehicles.

### Inspiration

This front-end project is highly inspired by the [Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/?couponCode=LETSLEARNNOW) by Jonas Schmedtmann. Additionally, the demo version of the **Wild Oasis** app, that served as inspiration can be found [here](https://the-wild-oasis.vercel.app/login).

**The Wild Oasis** leverages essential front-end capabilities of the **React.js framework** and integrates seamlessly with a backend configured on [Supabase](https://supabase.com/). My ambition was to develop a **custom backend** for Rideshare Copilot using **Python**, **Django**, and **PostgreSQL**, ensuring a tailored and robust solution for managing rideshare operations.

- For more information about the Rideshare Copilot backend, access this repository [here](https://github.com/EmanuelTabian/rideshare-copilot-backend).

### Overview

The application requires user **authentication**. Upon successful login, users can engage in a variety of activities such as browsing car rental listings, posting their own rental offers, calculating earnings based on commission rates and other expenses, and saving this data to generate earnings trend charts and additional insights.

## Table of Contents

- [Backend Integration](#backend-integration)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Running the Project](#running-the-project)
- [Deployment](#deployment)
- [Future Updates](#future-updates)

## Backend Integration

To run this application, it is essential to have the **Rideshare Copilot V2** backend service up and running. You can find the backend repository [here](https://github.com/EmanuelTabian/rideshare-copilot-backend). Ensure that the backend is properly configured and operational to enable full functionality of the application.

## Features

- **User Authentication**: Secure login and registration system to protect user data.
- **Earnings Calculator**: Calculate weekly net income based on gross income, commission rates, and various expenses. Save data to track earnings efficiently.
- **Dashboard**: Analyze earnings trends over the last 7, 30, or 90 days.
- **Car Rental Management**: Post, browse, and manage car rental listings.
- **Sorting**: Sort car listings according to user preferences.
- **Custom Backend**: Integrated with a custom backend built using Python, Django, and PostgreSQL.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Data Persistence**: Securely save and retrieve user data.
- **User Settings**: Manage user credentials.
- **User Authentication**: Secure login and registration system to protect user data.

## Techstack

| Technology            | Description                                                                                               |
| --------------------- | --------------------------------------------------------------------------------------------------------- |
| **React.js**          | A JavaScript library for building user interfaces.                                                        |
| **React Router**      | A collection of navigational components for routing in React applications.                                |
| **React Query**       | A data-fetching library for React, providing hooks for fetching, caching, and updating asynchronous data. |
| **React Hook Form**   | A library for managing form state and validation in React applications.                                   |
| **Context API**       | A React API for managing global state across the application.                                             |
| **Styled Components** | A library for writing CSS-in-JS, allowing for scoped and dynamic styling.                                 |
| **ESLint**            | A tool for identifying and fixing linting issues in JavaScript code.                                      |
| **React Hook**        | Functions that let you use state and other React features in functional components.                       |
| **React Hot Toast**   | A library for displaying toast notifications in React applications.                                       |
| **Recharts**          | A charting library built on React components for creating data visualizations.                            |
| **date-fns**          | A modern JavaScript date utility library for parsing, formatting, and manipulating dates.                 |
| **Vercel**            | A cloud platform for static sites and serverless functions, used for deploying the application.           |

### Prerequisites

## Installation
