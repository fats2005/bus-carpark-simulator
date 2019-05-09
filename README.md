# Bus Carpark Simulator

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description & Constraints

The application is a simulation of a robot operated bus moving in a carpark, of dimensions 5 units x 5 units.

There are no other obstructions in the carpark.

The bus is free to roam around the carpark, but must be prevented from exiting the carpark. Any movement that would result in the bus leaving the carpark must be prevented, however further valid movement commands must still be allowed.

The bus must not exit the carpark during movement. This also includes the initial placement of the bus.

Any move that would cause the bus to exit the carpark must be ignored.

## Tech Specification

    - React
    - Jest
    - Enzyme

## Available Scripts

### `npm install`

Intalls all dependencies of the project.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Testing Instructions

`npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
