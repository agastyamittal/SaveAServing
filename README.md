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
   Open a new terminal
   run *git clone https://github.com/your-repo/saveaserving.git*
   run *cd saveaserving*
   
2. **Install Dependencies**:
   run *npm install*
   Use package.json to see all dependencies

3. **Input**:
   Supabase url and key - into dbClient.js, dbClient.py
   AWS SES region, accessKeyId, secretAccessKey - into businessdash.js and doncendash.js

4. **Create Database Tables**:
   run sql commands in createTables.sql in supabase sql editor

5. **Start the Development Server**:
   run *npm start*
   Open http://localhost:3000 in your browser.

6. **Set Up the API backed by ML Model**:
   Complete step 3
   Open a new terminal
   cd into the /src/ai folder
   Install uvicorn - run *pip install uvicorn*
   run *uvicorn main:app --reload*

7. **All features of this application are now running**