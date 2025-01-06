# Ip Address Tracker

The website was made for the [Frontend Mentor](https://www.frontendmentor.io).

## Demo

You can see a live demo of the project here: [Live Demo](#)

## Screenshots

![Desktop View](#, "Desktop View")
![Mobile View](#, "Mobile View")

## Technology Stack

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript for better code quality.
- **Redux Toolkit**: State management for handling global data.
- **Axios**: For making HTTP requests to the IP Geolocation API.
- **Leaflet/Google Maps**: For displaying the interactive map.
- **SASS/CSS Modules**: For styling components.

## API Used

This project uses the [IP Geolocation API by IPify](https://geo.ipify.org/docs) to determine the location of an IP address. The API provides the following details:

- **IP Address**: The queried IP address.
- **Location**: Country, region, city, postal code, and coordinates (latitude and longitude).
- **Timezone**: Timezone information.
- **ISP**: Internet Service Provider associated with the IP address.

---

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  
The page will reload when you make changes, and you will see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.  
The build is minified, and the filenames include hashes for cache management.

### `npm run lint`

Runs ESLint to analyze the `src/` directory for potential errors or style issues.  
This ensures code quality and consistency across the project.

### `npm run preview`

Starts a local server to preview the production build.  
Use this to test how the app will behave after deployment.  
Open [http://localhost:4173](http://localhost:4173) to view the production build.

### `npm run test`

Runs unit tests using **Vitest**.  
Vitest is a fast and modern testing framework that supports TypeScript and ES modules.  
Tests are located in the `src/__tests__` directory or alongside component files.  
Test results are displayed in the terminal.

### `npm run test:e2e`

Runs end-to-end (E2E) tests using **WebdriverIO**.  
WebdriverIO is a browser automation tool that allows testing the application in real-world conditions.  
Test configuration is located in the `wdio.conf.ts` file.  
Tests are located in the `tests/e2e` directory.  
Test results are displayed in the terminal.

### `npm run storybook`

Starts **Storybook** in development mode.  
Storybook is a tool for developing and testing UI components in isolation.  
Open [http://localhost:6006](http://localhost:6006) to view Storybook.  
Components and their stories are located in the `src/stories` directory.  
Storybook automatically reloads when files are changed.

### `npm run build-storybook`

Builds **Storybook** for production.  
The built version of Storybook will be available in the `storybook-static` directory.  
Use this command to deploy Storybook to a hosting service (e.g., GitHub Pages or Chromatic).

### `npm run chromatic`

Runs **Chromatic** to publish and review your Storybook.  
Chromatic is a tool for visual testing and collaboration on UI components.  
It helps catch visual regressions and streamline UI reviews.  
Make sure to set up the `.env` file with the required Chromatic project token.

---

# Solution Retrospective

## What are you most proud of, and what would you do differently next time?

In this project, I focused heavily on testing. I fully covered my application with tests: unit tests, screenshot tests, integration tests, and end-to-end (e2e) tests. It was very challenging, as I had no prior experience with testing, and I had to spend a couple of nights diving deep into the documentation. I faced many difficulties, most often related to version incompatibilities and configuring specific setups.

Next time, I would like to dedicate more time to the architecture of my application. I am trying to follow the Feature Slice Design, but I feel that I still don’t fully grasp it yet.

## What challenges did you encounter, and how did you overcome them?

Wow, there were so many difficulties that it’s hard to even talk about them all! But I can say this: I’m genuinely glad that I finished this project. On the other hand, now I’ll always have something to refer to if I need to test my new application in the future.

It’s hard to fully appreciate everything I’ve learned. I discovered so many new things, and I’m most proud of the fact that I was able to solve many problems on my own.

## What specific areas of your project would you like help with?

I faced the most challenges with end-to-end (e2e) and integration tests. Additionally, RTK (Redux Toolkit) was new to me, and I haven’t yet explored RTK Query. It doesn’t look great that I didn’t use RTK Query...

I would be really happy if you could provide feedback or comments on my project!
