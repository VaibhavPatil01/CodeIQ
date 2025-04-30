# 🧑‍💻 CodeIQ – AI-Powered Code Reviewer

Welcome to **CodeIQ**, the smart assistant for your code!  
Built using **React**, **Express**, and **Google Gemini AI**, this app helps you review and improve your code instantly — whether it's bugs, performance, or readability, CodeIQ has your back.

## 🔗 Live Demo

[Give it a try here](https://code-reviewer-frontend-eta.vercel.app/)

## 📸 Screenshots

### 💡 Light Mode  
<img src="https://i.postimg.cc/Yqfb7pK2/Screenshot-2025-05-01-020315.png" alt="Code Reviewer Screenshot" width="500"/>

### 🌙 Dark Mode 
<img src="https://i.postimg.cc/1tHkCb0J/Screenshot-2025-05-01-020332.png" alt="Code Reviewer Screenshot" width="500"/>

## 🛠 Tech Stack

### 🖥️ Frontend
- React.js
- @monaco-editor/react (code editor)
- React Markdown
- Rehype Highlight
- Custom CSS with Light/Dark theming

### 🔙 Backend
- Node.js with Express
- Google Gemini AI (for code review)
- CORS
- Body Parser

## 🎯 Features

- 🧠 **AI-powered code review** using Google Gemini
- ⌨️ Monaco Editor with syntax highlighting
- 🌗 Light & Dark mode toggle
- 📝 Markdown-rendered AI suggestions
- 🚀 Fast and responsive UI

## 🛠️ How to Run the Project Locally

Follow the steps below to set up and run both the frontend and backend on your local machine.
### 1. Clone the Repository

```
git clone https://github.com/your-username/code-reviewer.git
cd Code Review
```

### 2. Frontend Setup
```
cd Frontend
npm install
```
Create a .env file in the frontend/ folder with the following:  
```
VITE_BACKEND_URL = http://localhost:3000
```  
Start the frontend server:    
```
npm run dev
```  

### 2. Backend Setup  
```
cd Backend
npm install
```
Create a .env file in the backend/ folder with the following:  
```
GEMINI_API_KEY = your_google_gemini_api_key_here
```  
Start the backend server:  
```
npm start
```  

## 🙌 Thanks for Visiting

If you found this project helpful, consider giving it a ⭐ on GitHub!  
Feel free to fork, use, improve, or share!
