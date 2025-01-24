React Native To-Do App
Project Overview
This project is a mobile application built using React Native to implement a simple and user-friendly to-do list application. The app enables users to manage their tasks effectively with features such as adding, viewing, editing, and deleting items. It consists of two primary screens:
List Screen: Displays a list of items with their details such as name and description.
Add Item Screen: Provides a user interface to add new items to the list.
Features
List Screen
Retrieve and display a list of items.
Each item in the list shows its name and description.
Interactive options to edit or delete existing items.
Add Item Screen
Input fields for entering details for a new item (e.g., name and description).
Navigation between the Add Item Screen and List Screen.
Validation to ensure required fields are completed before submission.
Data Handling
Use state management to handle the list of items dynamically.
Persist data locally to ensure it remains available even if the app is closed and reopened.
Styling
Basic styling for a visually appealing and easy-to-use interface.
A consistent and responsive design across both screens, ensuring usability on various device sizes.
Bonus Features (Optional)
Add functionality to edit and delete items from the list.
Implement error handling for input validation and user feedback.
Requirements
Environment
IDE: Android Studio,VS (or any other preferred IDE).
API Level: Tested on API Level 31; supports up to API Level 33.
Operating System: Development tested on Windows. Installation on macOS may have variations.
Tools
React Native CLI: For setting up and managing the project.
Expo: For seamless integration with the emulator and development tools.
Prerequisite Installations
Install React Native CLI globally:
npm install -g react-native-cli
Install Expo globally:
npm install -g expo-cli
Installation and Setup
Initialize the Project
Use the following command to initialize the project:
npx @react-native-community/cli init myapp
Note: The init command is deprecated in the latest React Native versions. Using npx ensures all required Node modules are installed globally.
Navigate to the project directory:
cd myapp
Start the App
Ensure your emulator is running.
Start the application using Expo:
npx expo start
//Alternatively, use the following command to run the app directly:
npx react-native run-android
Use the R key in the terminal to reload the app and reflect changes.
Usage Instructions
Adding Items:
Navigate to the Add Item Screen using the provided navigation button.
Enter the item name and description in the respective input fields.
Submit the form to add the item to the list.
Viewing Items:
View all added items on the List Screen, displayed with their names and descriptions.
Editing Items:
Select an item to edit and update its details.
Save changes, and the updated details will reflect in the list.
Deleting Items:
Directly delete items from the list using the delete option.
Development Notes
Framework Selection
React Native was chosen for its cross-platform capabilities and robust ecosystem, enabling a consistent experience across Android and iOS.
Node Modules
All necessary dependencies and libraries are installed globally during initialization using the npx command, ensuring the latest versions are used.
Reloading Changes
Press R in the terminal to reload the app and apply any code changes during development.
Additional Tools
Expo
Expo was used for:
Simplified connection with the emulator.
Streamlined development and debugging processes.
