# SaveAServing - Agastya Mittal

## Overview
SaveAServing is a web application designed to reduce food waste and fight hunger by connecting surplus food from businesses with donation centers and volunteers. The platform leverages AI-powered predictions to optimize food inventory, help businesses save money, and allow them to donate when they have surplus food. This application allows surplus food to reach those in need efficiently.

## Features / How it works
- **AI-Powered Predictions**: Allows businesses to predict food demand in order to reduce waste and optimize inventory.
- **Business Dashboard**: Add and manage menu items, track and add orders, and notify donation centers about surplus food.
- **Donation Center Dashboard**: Receive notifications about available donations and accept or decline donation requests.
- **Volunteer Dashboard**: View and accept volunteer opportunities for food transportation from businesses to donation centers.
- **User Authentication**: Secure login and signup for businesses, donation centers, and volunteers.

## Tech Stack
- **Frontend**: React, Material-UI
- **Backend**: Supabase (PostgreSQL, Authentication), JavaScript
- **AI**: Prophet used for demand prediction, written in Python
- **Cloud Services**: AWS SES for email notifications
- **Other Libraries**: React Router, Day.js, Twilio (for future SMS notifications)

## Future Roadmap
- **Team Collaboration**: Enable teams to collaborate on reducing food waste.
- **Mobile App**: Develop a mobile app for easier access.
- **Advanced Analytics**: Provide detailed insights into food waste and donation impact.
- **Gamification**: Introduce rewards for volunteers and businesses to encourage participation.
- **Integration with Local Governments**: Partner with local authorities to expand the reach.

## How to Run This Project
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/saveaserving.git
   cd saveaserving
   
2. **Install Dependencies**:
   npm install

3. **Input**:
   Supabase url and key - into dbClient.js, dbClient.py
   AWS SES region, accessKeyId, secretAccessKey - into businessdash.js and doncendash.js


4. **Start the Development Server**:
   npm start
   Open http://localhost:3000 in your browser.























# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
