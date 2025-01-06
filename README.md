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

Runs ESLint to analyze the src/ file for potential errors or style issues.  
This ensures code quality and consistency across the project.

### `npm run preview`

Starts a local server to preview the production build.  
Use this to test how the app will behave after deployment.  
Open [http://localhost:4173](http://localhost:4173) to view the production build.

## //npm run test

//retrospective
//smile
// photos and url preview

```javascript
const test = 5;
test++;
function omg() {
  return test--;
}
omg();
```
