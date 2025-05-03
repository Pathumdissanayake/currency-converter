# currency-converter
This is a simple Currency Converter app built with React Native and react-native-paper. It allows users to input an amount in one currency and convert it to another currency using real-time exchange rates fetched from a public API.

## Installation & Setup

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (version 14 or above)
- **npm** (comes with Node.js)
- **React Native CLI** (for Android/iOS development)
- **Android Studio** or **Xcode** (for running on Android/iOS emulators)

### Steps

1. **Clone the repository**:
   https://github.com/Pathumdissanayake/currency-converter
2. **Navigate to the project folder**:
   cd currency-converter
3. **Install dependencies:**:
   npm install
4.**Run the app**:
   **For iOS (requires macOS)**:
   npx react-native run-ios
   **For Android**:
   Make sure Android Studio is installed and your emulator is running, then:
   npx react-native run-android
   **For Web**:
   npm start

### Dependencies
react-native: The framework for building the mobile app.
react-native-paper: A library of components for building Material Design UIs.
react: The framework for building the web version of the app.

### Additional Notes
This application fetches real-time exchange rates from a public API (https://api.exchangerate-api.com).
The mobile app supports both iOS and Android platforms.
For the web version, it uses React and can be run on any modern web browser.
