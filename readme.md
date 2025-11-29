 Airtable Dynamic Form Builder
A full-stack MERN app that will allow users to authenticate with Airtable, build dynamic forms using Airtable table fields, apply conditional logic, submit responses, and sync all data across Airtable and MongoDB.
This sample showcases Airtable OAuth integration, dynamic UI rendering, form logic, and dual data storage; hence, it is appropriate for production use as well as interview submission.
???? Features

Airtable Authentication ????
Secure OAuth login with Airtable.
Automatically retrieves user bases and tables.
Manages tokens safely in backend.
Dynamic Form Builder
Users can:
Select an Airtable table
Auto-import all fields
Drag & arrange form fields
Add fiel dvalidation
Add conditional logic (show/hide questions)
Dynamic Form Rendering
Forms refrsh in real-time on user input.
Real-time dynamic question visibility.

Dual Data Synchronization
Responses to submitted forms are stored in:
Airtable
MongoDB for analytics and backups

Submission Dashboard ????
View all form responses
Search, sort, filter
Export CSV / JSON

???? Modern UI
Built with React + TailwindCSS
Clean, responsive design
Smooth user experience
Tech Stack ????
Frontend
React.js
Tailwind CSS
Axios
React Router
Zustand / Context API


Backend
Node.js
Express.j
MongoDB + Mongoose
Airtable API
JWT Authentication
Project Structure ????
Airtable-Connected-Dynamic-Form-Builder/
│
├── client/                 # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   └── utils/
│   └── package.json
│
├── server/                 # Node Backend
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── utils/
│   └── server.js

│
├── README.md
└── .gitignore

⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/AvinashBNandre/Airtable-Connected-Dynamic-Form-Builder.git
cd Airtable-Connected-Dynamic-Form-Builder

Setup Backend ????

Install dependencies
cd server
npm install
Create .env file
Add the following:
MONGO_URI=
AIRTABLE_CLIENT_ID=
AIRTABLE_CLIENT_SECRET=
REDIRECT_URI=http://localhost:5000/api/auth/callback
JWT_SECRET=your_secret_key
PORT=5000
Run backend
npm run dev
Setup Frontend ????
Install dependencies
cd ./client
npm install
Run frontend
npm start's


Testing the App ????(Flow with the path)
Login with Airtable Choose a base → table Create form fields & logic Submit form Check Airtable + MongoDB for synced data View submissions in dashboard License ???? 
