# Project Overview
This project is developed as part of the SwEng 2025 module (CSU22013-CSU33013) with Microsoft.


Check out our project progress and management information ->
https://sweng-group11.notion.site/

Team Members:
- Elizabeth O'Sullivan (team lead/ documentation)
- Vansh Khetan (product owner)
- Harry Fitzpatrick (Backend Team lead)
- Arnav Sanghi (Frontend Team Lead)
- Joseph Reidy (NLP team - Joint lead)
- Lukas Anderson (NLP team - Joint lead)

# Manual Setup Guide 
# Backend Setup

Prerequisites

    Python 3.9, 3.10, or 3.11
    Flask and other dependencies (specified in requirements.txt)

Check Python & pip

    python --version
    pip --version

Navigate to the backend Directory

    cd backend

Create & Activate a Virtual Environment (recommended)

    python -m venv venv
    # macOS/Linux
    source venv/bin/activate
    venv\Scripts\activate

Install Dependencies

    pip install -r requirements.txt

Run the Backend Server

    python app.py

The server should be running at http://localhost:5000.

# Frontend Setup
Prerequisites

    Node.js (v16+)
    npm

Check Node & npm

    node -v
    npm -v

Navigate to the frontend Directory

    cd frontend

Install Dependencies

    npm install

Start the Frontend Development Server

    npm run dev

The frontend should be running at http://localhost:3000.


