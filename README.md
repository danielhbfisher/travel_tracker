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

### Next Location Stay
Add and manage information about your next travel destination.

### Flight Information
View flights from your current location to your next destination, including flight trajectories on a world map.

### Distance from Friends
See the distance between you and your friends.

### Time Change Tracking
Monitor changes in proximity to friends and their travel itineraries on a weekly or monthly basis.

### Map Visualization
Visualize your current and next stays on a world map with different markers and transparency levels.

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
  - `CurrentLocationStay.js`: Component for managing the current location stay.
  - `NextLocationStay.js`: Component for managing the next location stay.
  - `MapComponent.js`: Component for displaying stays on a map.
  - `GooglePlacesAutocomplete.js`: Component for location autocomplete.
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
- Google Maps JavaScript API

### Notes

- Ensure that you have a valid Firebase project and replace the placeholder configuration in `firebase.js` with your actual Firebase configuration.
- If you encounter any issues with missing dependencies or build errors, make sure to check the installed versions and compatibility of the packages.

## License

This project is licensed under the MIT License.
```

Feel free to adjust the README file according to your project's specific details and any additional steps or configurations you might have.

## Testing

After updating the code, you can test the functionality:

1. **Run the application** using `yarn start`.
2. **Sign up or sign in** to your account.
3. **Navigate to the current location stay** page and enter your current location and stay duration.
4. **Add a next location stay** using the "Add Next Stay" button.
5. **Save the stays** and verify they are correctly displayed on the map with different markers and transparency levels.
6. **Ensure the stays are saved** in Firestore with the correct structure.

```
travel_tracker
├─ .babelrc
├─ .firebaserc
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ ORIG_HEAD
│  ├─ branches
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ lfs
│  │  └─ tmp
│  ├─ objects
│  │  ├─ 04
│  │  │  └─ 91ef9c4d053b8aacd50b513022b0003953f298
│  │  ├─ 07
│  │  │  └─ 1683feb3d6972773f38f8e2a65c8ce2e4a901c
│  │  ├─ 0d
│  │  │  └─ 34696375d434732b7803594291a6633f813ff7
│  │  ├─ 10
│  │  │  └─ 7f2f57890da278e06716bbb34826daf8e3e25a
│  │  ├─ 1b
│  │  │  ├─ 301695f0d98108f8ad817539164f973dd1b4dd
│  │  │  └─ f66ed7123334150c4ea6276ea6188bf78dd05f
│  │  ├─ 1d
│  │  │  └─ 2c6f9ae200e17c40247e328c3b7673828ab155
│  │  ├─ 21
│  │  │  ├─ 0d7bf8c995b671c7eea6595dbdef6a39552078
│  │  │  └─ ee8d3d1d808957f4d8fd025e6e930164c47962
│  │  ├─ 2e
│  │  │  ├─ 6cfe583128cc3edcb7b12d641a516862b070e5
│  │  │  └─ 7c72ceb760dcf18beb3cd8ba1ab021aaa19dcf
│  │  ├─ 30
│  │  │  └─ 087b37e00a50b6434e399a3d235f116c0f1857
│  │  ├─ 39
│  │  │  └─ 21cbbb26a218eb8376d1cdde4e816915423f79
│  │  ├─ 3b
│  │  │  └─ 5c59648460b0e183bad71192428712b609b5f7
│  │  ├─ 40
│  │  │  └─ 6b8cf5465fd36556903a09b154584cf462bbca
│  │  ├─ 41
│  │  │  └─ 5027e5ddaf944819977c1d5e9aaf49e835093f
│  │  ├─ 44
│  │  │  ├─ 19d83ed89996a94e58b6686afe18ff862c3a3f
│  │  │  └─ 29e957b46fc412fff5d579afeb6cfa63607c22
│  │  ├─ 45
│  │  │  └─ 09853cc822a8da8e8af9decab5057f70f836ae
│  │  ├─ 46
│  │  │  └─ 6f7f6ee1c2d0a98b25df01d7b6a7e1921c3dd1
│  │  ├─ 4e
│  │  │  └─ 2686f40e495500f08bacb6f0b8b1eb10c3c4d8
│  │  ├─ 5d
│  │  │  └─ da34481d96af743435f9303c75c757c1830c73
│  │  ├─ 5e
│  │  │  └─ 6a737dec4b10dc81eb9fd564ce44a5490fa733
│  │  ├─ 60
│  │  │  └─ 5b3db93ca575443e73617e466ae3c22d0c2092
│  │  ├─ 65
│  │  │  └─ b7fca04d556b347ec776513e89167b79f318c7
│  │  ├─ 6b
│  │  │  └─ 0bed4e1575f25c26715a6803d33ffaaa439a54
│  │  ├─ 6c
│  │  │  └─ 6276711595e21846875f0d14cbe7da45a15d7f
│  │  ├─ 71
│  │  │  ├─ 0f14231a9b6fcb8d38a5f96bc53e72e5e7abca
│  │  │  └─ 4f00b69cd9441acfa20c11b6c2c5e9da35abfb
│  │  ├─ 73
│  │  │  └─ 8d58d8651e088acb6dd99b3aae4b28e67503eb
│  │  ├─ 7a
│  │  │  └─ 1c425ad9d99b9657439fb582170e4268d070ac
│  │  ├─ 7b
│  │  │  └─ 48c2a109c2ad2dc44c1fe3f7a772a0a1e54350
│  │  ├─ 7e
│  │  │  └─ 4f15d02640d31c29b17994213fb7716b73fc89
│  │  ├─ 7f
│  │  │  └─ 9cee295dcd987672a872a21966d257e6a61928
│  │  ├─ 82
│  │  │  └─ 6c9f5d6014984b85cc095f543b56f4a7a45bb3
│  │  ├─ 84
│  │  │  └─ b39f1e5a6990d334bbc724fb786f61cbbace60
│  │  ├─ 8c
│  │  │  └─ e4e33569a5ba76ca0941c1120c818d0a910086
│  │  ├─ 8e
│  │  │  ├─ 8f2d097f1a3250fbe079226fd4c2af02167205
│  │  │  └─ a106f3aa76fcb2761a159477601d57355bd41b
│  │  ├─ 94
│  │  │  └─ 293385135de4514eb1ddb248bb4fe69b009ed6
│  │  ├─ 96
│  │  │  └─ 76501c857954c65a4aae764e046eaacff2e26d
│  │  ├─ 97
│  │  │  ├─ 61a5452e93b942654b87cff9df4814562d6e55
│  │  │  └─ eb296198671817e46a679c4147be8ff81281e8
│  │  ├─ 9a
│  │  │  └─ ecec98cb7d69cb3c42f9eadba20b5f216ddde0
│  │  ├─ 9f
│  │  │  └─ 0a61ec958259e9dbc091e88dc1455430306010
│  │  ├─ a1
│  │  │  ├─ 13fc308e3493bb2b609a63c3dadf4c369b9079
│  │  │  └─ 7fb80f89ae10c79249a78a744dbb5b86d8a7ab
│  │  ├─ a7
│  │  │  ├─ 9aa4175df79c500da79c9dfa9f2a6295a45bd7
│  │  │  ├─ a38dd5fe4fb05f8520e2eaae342092744855cc
│  │  │  └─ de8734f5b4fdb9484d8d5459057525575c5c4b
│  │  ├─ ac
│  │  │  └─ 36a726e1669e8086191757ce7f6878b106d57e
│  │  ├─ b2
│  │  │  └─ b8afc8c4e3378f9eaa283f3fb120cac04b51ab
│  │  ├─ b5
│  │  │  └─ 9dd9e37badc157329407dfe87c3963c5a6a30f
│  │  ├─ b8
│  │  │  └─ 4122c9193471a5009856422fbf8a4112b51dfd
│  │  ├─ b9
│  │  │  └─ 7d965254b97806245e41090fc85559366c5d86
│  │  ├─ bd
│  │  │  ├─ 5e203222de832f80dd37f41ad5f1afa34a1afd
│  │  │  └─ b358987a0ef86a73eacadeb359f5a29b6b9c34
│  │  ├─ c7
│  │  │  └─ ce1a3bb539c96768c51f2b292ddb2bcc6abe33
│  │  ├─ cc
│  │  │  ├─ 3884be8b10ade447dd3b5cfcda987124a579a0
│  │  │  └─ f328f9b2190857376868496d285d6ad72b98c3
│  │  ├─ cd
│  │  │  ├─ 1a4346fad67ab7af11456432a89a3732bda2bf
│  │  │  └─ 4681c846ab1b0dbd15599719a545db1c75dc02
│  │  ├─ ce
│  │  │  └─ d7186a088121eb1fde772fa0fad526e0b556a9
│  │  ├─ d3
│  │  │  └─ ca3293ef4a34c1e38c53313a1b86b223fdc384
│  │  ├─ da
│  │  │  └─ 33bf2452f4ebd28daaeec013cda3369d0ecdff
│  │  ├─ df
│  │  │  └─ 56f4cad9673c019c0a68dba490064b93e804f8
│  │  ├─ e6
│  │  │  ├─ 49d62a5e6ca1678ccfdb4a93e8db3500d6098f
│  │  │  ├─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  │  └─ ef7bb64098ae2eac5db71e606700a52ca7600c
│  │  ├─ ea
│  │  │  └─ 1f23dd6724e6a963aac6f24656217ecca892b0
│  │  ├─ f1
│  │  │  └─ 04ef89d3972b465c59fa5f8d9994754cc44f14
│  │  ├─ f3
│  │  │  └─ 608fcbc70d9858418b1e6a3058ea6ed9164ce0
│  │  ├─ f5
│  │  │  └─ 8719753359b3ded088cd0aa7a59cca9b7d616e
│  │  ├─ f7
│  │  │  └─ 2e8b36939a8ed5822d54730918273be6c1d64a
│  │  ├─ f9
│  │  │  └─ 176e9336fe6f6d0defe2e967d2534e3eeb542d
│  │  ├─ fa
│  │  │  └─ 0fe78bf840900d76752de8afc42dca7f4440c7
│  │  ├─ ff
│  │  │  └─ a153c2267dd96ed3aedb901faa96e189510297
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-564f9391e2ff9648d00d6bb07fbbc4e675257cf3.idx
│  │     └─ pack-564f9391e2ff9648d00d6bb07fbbc4e675257cf3.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .github
│  └─ workflows
│     └─ deploy.yml
├─ .gitignore
├─ .vscode
│  └─ settings.json
├─ LICENSE
├─ README.md
├─ firebase.json
├─ firestore.indexes.json
├─ firestore.rules
├─ functions
│  ├─ .eslintrc.js
│  ├─ .gitignore
│  ├─ index.js
│  ├─ package-lock.json
│  └─ package.json
├─ index.js
├─ package-lock.json
├─ package.json
├─ public
│  └─ index.html
├─ src
│  ├─ AddUserScreen.js
│  ├─ App.js
│  ├─ AuthScreen.js
│  ├─ CurrentLocationStay.js
│  ├─ DateRangePickerComponent.js
│  ├─ GooglePlacesAutocomplete.js
│  ├─ LoadGoogleMapsScript.js
│  ├─ MapComponent.js
│  ├─ NextLocationStay.js
│  ├─ UserContext.js
│  ├─ UserListScreen.js
│  ├─ app.json
│  ├─ firebase.js
│  └─ index.js
└─ webpack.config.js

```