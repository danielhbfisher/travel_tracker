# travel_tracker

This project is a web application for tracking travel information for yourself and your friends. It helps you manage and view your travel itinerary, including current and future stays, flight information, and proximity to friends.

## Features
### User Authentication
Securely log in to your account.
### Add New Users
Add friends to your network to share travel information.
### View User List
See a list of all users in your network.
### Current Location Stay
Track how long you will be at your current location.
### Flight Information
View flights from your current location to your next destination, including flight trajectories on a world map.
### Next Location Stay
Manage information about your next travel destination.
### Distance from Friends
See the distance between you and your friends.
### Time Change Tracking
Monitor changes in proximity to friends and their travel itineraries on a weekly or monthly basis.

## Setup

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (version 14 or above)
- Yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/travel_tracker.git
   cd travel_tracker
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

### Directory Structure

- `src/`: Contains the source code of the application.
  - `App.js`: Main application component with routes.
  - `AuthScreen.js`: Component for user authentication.
  - `AddUserScreen.js`: Component for adding new users.
  - `UserListScreen.js`: Component for listing users.
  - `firebase.js`: Firebase configuration file.
  - `index.js`: Entry point for the application.
- `public/`: Contains static files such as `index.html`.

### Configuration

Ensure you have a `firebase.js` file in the `src/` directory with your Firebase configuration:

```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { firestore, auth, analytics };
```

### Running the Application

To run the application locally, use the following command:

```bash
yarn start
```

The application will be available at `http://localhost:8081`.

### Webpack Configuration

The project uses Webpack for bundling. Here is a summary of the Webpack configuration:

- Entry point: `src/index.js`
- Output directory: `dist`
- Babel loader for JavaScript and TypeScript files
- File loader for images
- HTML loader for HTML files
- CSS loader for CSS files
- HTMLWebpackPlugin to generate the `index.html`

### Development

The development server is configured to serve content from the `public` directory and will watch for changes in the source files.

### Dependencies

- React
- ReactDOM
- Firebase
- React Router DOM
- Webpack
- Babel

### Notes

- Ensure that you have a valid Firebase project and replace the placeholder configuration in `firebase.js` with your actual Firebase configuration.
- If you encounter any issues with missing dependencies or build errors, make sure to check the installed versions and compatibility of the packages.

## License

This project is licensed under the MIT License.
```

Feel free to adjust the README file according to your project's specific details and any additional steps or configurations you might have.