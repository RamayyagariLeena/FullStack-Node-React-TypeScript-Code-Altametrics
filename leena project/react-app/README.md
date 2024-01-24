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
