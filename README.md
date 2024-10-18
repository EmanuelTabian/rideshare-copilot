# Rideshare Copilot

[![Live Version](https://img.shields.io/badge/Live%20Version-Click%20Here-brightgreen)](https://www.rideshare-copilot.eu/login)

## Description

This application assists drivers in calculating their weekly net income, tracking their earnings trends, and managing car rentals by allowing them to buy, rent, or sell their own vehicles.

## Inspiration

This front-end project is highly inspired by the [Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/?couponCode=LETSLEARNNOW) by Jonas Schmedtmann. Additionally, the demo version of the **Wild Oasis** app, that served as inspiration can be found [here](https://the-wild-oasis.vercel.app/login).

**The Wild Oasis** leverages essential front-end capabilities of the **React.js framework** and integrates seamlessly with a backend configured on [Supabase](https://supabase.com/). My ambition was to develop a **custom backend** for Rideshare Copilot using **Python**, **Django**, and **PostgreSQL**, ensuring a tailored and robust solution for managing rideshare operations.

- For more information about the Rideshare Copilot backend, access this repository [here](https://github.com/EmanuelTabian/rideshare-copilot-backend).

## Overview

The application requires user **authentication**. Upon successful login, users can engage in a variety of activities such as browsing car rental listings, posting their own rental offers, calculating earnings based on commission rates and other expenses, and saving this data to generate earnings trend charts and additional insights.

## Table of Contents

- [Backend Integration](#backend-integration)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Running the Project](#running-the-project)
- [Usage](#usage)
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
| **Vercel**            | A cloud platform for static sites and serverless functions, used for deploying the application.           |
| **React.js**          | A JavaScript library for building user interfaces.                                                        |
| **React Router**      | A collection of navigational components for routing in React applications.                                |
| **TanStack Query**    | A data-fetching library for React, providing hooks for fetching, caching, and updating asynchronous data. |
| **React Hook Form**   | A library for managing form state and validation in React applications.                                   |
| **Context API**       | A React API for managing global state across the application.                                             |
| **Styled Components** | A library for writing CSS-in-JS, allowing for scoped and dynamic styling.                                 |
| **React Hot Toast**   | A library for displaying toast notifications in React applications.                                       |
| **Recharts**          | A charting library built on React components for creating data visualizations.                            |
| **ESLint**            | A tool for identifying and fixing linting issues in JavaScript code.                                      |

## Setup and Installation

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Install Node.js from [nodejs.org](https://nodejs.org/). This project requires Node.js version 14 or higher.
- **npm or Yarn**: Ensure you have npm (comes with Node.js) or Yarn installed for managing dependencies.

Once you have these prerequisites installed, you can proceed with the installation steps.

### Installation Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/EmanuelTabian/rideshare-copilot-v2.git
   cd rideshare-copilot-v2
   ```

2. **Install Dependencies**:

   - Using npm:

   ```bash
   npm install
   ```

   - Or using Yarn:

   ```bash
   yarn install
   ```

3. **Set Up Backend URL Environment Variable**:

   - Ensure the **Rideshare Copilot Backend** app is set up and running. The repository can be found [here](https://github.com/EmanuelTabian/rideshare-copilot-backend).
   - Start the backend development server:
     ```bash
     python manage.py runserver
     ```
   - Create a `.env` file in the root directory and add the necessary **backend URL** variable. Refer to the `.env.example` file for guidance.
     ```bash
     VITE_RIDEBACKEND_DEV_URL=http://localhost:<backend-port>/api
     ```

## Running the project

This application runs in conjunction with the **Rideshare Copilot Backend**. For detailed configuration steps, refer to the backend repository [here](https://github.com/EmanuelTabian/rideshare-copilot-backend).

**Run the Application**:

- Using npm:

```bash
npm start
```

- Or using Yarn:

```bash
yarn start
```

**Access the Application**:

- Open your browser and navigate to `http://localhost:<frontend-port>` to see the application in action.

## Usage

Once you have accessed the application, follow these steps to get started:

### 1. Register or Log In

- **Register**: If you are a new user, click on the **`Sign Up`** button and fill in the required details to create an account. Fill in a strong password as the backend features **password validators**.
- **Log In**: If you already have an account, click on the **`Log In`** button and enter your credentials.

### 2. Browse Car Rental Listings

- After logging in, navigate to the **`Cars`** section.
- Browse through the available car rental listings.
- Use the sorting options to filter listings based on your preferences.

### 3. Post a Car Rental Offer

- Click on the **`+New Post`** button.
- Fill in the details of your car rental offer, including the car model, rental price, optional image etc.
- The form will guide you through three distinct sections, each accessible via the **`Next`** button. Progressing to the subsequent section requires completion of all mandatory fields:
  - **General Specs**
  - **Additional Specs**
  - **Optional Specs**
- **Submit** the form to post your rental offer.

### 4. Calculate Earnings

- Navigate to the **`Calculator`** section.
- Enter your gross income, commission rates, and other expenses.
- Click on the **`Save`** button to register your income details.
- Save at least **two** income entries to track your earnings over time via **Dashboard** section chart.

### 5. Update or Delete Earnings Entry

- Navigate to the **`Calculator`** section.
- Locate the earnings entry you wish to update or delete.
  - **Update**: Click on the **`Edit`** button next to the entry. Fill in the prompted form with the updated details and click **`Save`** to apply the changes.
  - **Delete**: Click on the **`Delete`** button next to the entry. Confirm the deletion to remove the entry from your records.

### 6. View Dashboard

- Go to the **`Dashboard`** section.
- Analyze your earnings trends over the last `7, 30, or 90 days`.
- Use the `charts` to gain insights into your earnings patterns.

### 7. Manage User Settings

- Go to the **`Settings`** section.
- Update your user credentials as needed.
- **Password update** requires a strong password, otherwise you will be prompted with errors.
- Save the changes to update your profile.
- Click on the **`Delete Account`** button and confirm the action to permanently delete your account and all associated data.

### 8. Log Out

- When you are done, click on the **`Log Out`** icon to securely log out of the application.

By following these steps, you can effectively navigate and utilize the features of the Rideshare Copilot application.
