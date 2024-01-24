# React Redux Authentication App

This is a simple React application that uses Redux for state management and includes basic authentication features.

## Features

- **Redux State Management**: Utilizes Redux for managing the application state.
- **Authentication**: Implements a basic login/logout functionality using Redux.
- **TypeScript**: The application is written in TypeScript for enhanced type safety.
- **React Router**: Uses React Router for handling navigation and nested routes.
- **Axios**: Makes API requests using Axios for handling asynchronous data fetching.
- **Styled Components**: The app uses Styled Components for styling.

## Getting Started

1. **Install Dependencies::**
npm install

2. **Run the Application::**
npm start


Configuration

The Redux store is configured in src/store/store.ts.
Authentication actions and reducer are located in the src/store/actions/authActions.ts and src/store/reducers/authReducer.ts files.



3. **Folder Structure::**
src
|-- components
|   |-- MainPage.tsx
|   |-- InvoicesPage.tsx
|   |-- Layout.tsx
|   |-- Login.tsx
|   |-- SomeComponent.tsx
|-- store
|   |-- actions
|       |-- authActions.ts
|   |-- reducers
|       |-- authReducer.ts
|   |-- types
|       |-- authTypes.ts
|       |-- stateTypes.ts
|   |-- store.ts
|-- App.tsx
|-- index.tsx
|-- ...


# NestJS API with Prisma and CORS Support

This is a basic NestJS API template that integrates Prisma for database interaction and enables CORS (Cross-Origin Resource Sharing) for handling cross-origin requests.

## Getting Started

cd ./invoice-svc
cd ./nest-invoice-project

### Prerequisites

- Node.js and npm installed
- PostgreSQL database
- (Optional) Prisma CLI for database migrations (`npm install -g prisma`)

### Installation

1. **Install Dependencies::**

npm install

Set up your PostgreSQL database and update the database connection details in the .env file.

npx prisma generate

npx prisma migrate dev



2. **Run Application::**
Start the NestJS application:
npm run prisma:seed
npm run start:dev



Username: user1@example.com
password: password1

Username: user2@example.com
password: password2

3. **Api Endpoints::**

POST /auth/login: Authenticate a user

Username: user1@example.com
password: password1

Username: user2@example.com
password: password2

GET /invoices: Fetch a list of all invoices.
GET /invoices/:id: Get details of a specific invoice.


4. **Cors Configuration::**
CORS is enabled for all routes by default. You can customize CORS settings in the main.ts file.
