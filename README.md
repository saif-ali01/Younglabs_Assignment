# <h1> 🚀 Younglabs Assignment - Greeting App<h1/>
This is a simple React + Express.js application that takes a user's name as input and returns a personalized greeting message. It is built with React (frontend) and Express.js (backend), and deployed using Render (backend) and Netlify (frontend).

🖥️ Live Demo
🔗[ Visit the Live App ](https://assignment-younglabs.netlify.app/).

# 📌 Features
✅ User enters their name in an input field. <br/>
✅ Fetches a greeting message from the backend using Axios.<br/>
✅ Displays a personalized greeting message.<br/>
✅ Handles validation and API errors gracefully.<br/>
✅ Styled with Tailwind CSS.<br/>

# 🏗️ Tech Stack
## Frontend
React.js (Functional Components, Hooks)<br/>
Axios (for API requests)<br/>
Tailwind CSS (for styling)<br/>
Netlify (for deployment)<br/>
## Backend
Node.js with Express.js <br/>
CORS enabled<br/>
Render (for deployment)

# 🚀 Getting Started
## 1️⃣ Clone the Repository
```bash
 [https://github.com/your-username/your-repo-name.git](https://github.com/saif-ali01/Younglabs_Assignment.git)
```
cd younglabs_assignment

#2️⃣ Backend Setup
cd younglabs_assignment\server

## Install dependencies
``` bash
npm install
```
Run the backend
``` bash
node index.js
```

The backend will run on http://localhost:3000 by default.

# 3️⃣ Frontend Setup
cd younglabs_assignment\app

Install dependencies
```bash
npm install
```
Run the frontend
``` bash
npm run dev
```
The frontend will run on http://localhost:5173 ( using Vite).

##🌐 API Endpoint
## GET /api/greet
Fetch a greeting message for a given name.

Request
```http
GET /api/greet?name=John
```
### Response
```json
{
  "message": "Hello, John!"
}
```
# 🚀 Deployment
Frontend: Hosted on Netlify → https://assignment-younglabs.netlify.app/ <br/>
Backend: Hosted on Render → https://younglabs-assignment-d8nw.onrender.com

Developed with ❤️ by Saif Ali

🔗 GitHub: [saif-ali01](https://github.com/saif-ali01) <br/>
🔗 LinkedIn: [saif-linkedin](https://www.linkedin.com/in/saif-ali-285581243/)

