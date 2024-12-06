# 📸 Photo Album App

A Node.js web application for creating and managing photo albums using Express and MongoDB.

## ✨ Features

- 📁 Create and manage photo albums
- 🖼️ Upload images to albums
- 🗑️ Delete images and albums with automatic cleanup
- 📱 Responsive design using Bootstrap
- 💾 MongoDB storage for data persistence

## 🔧 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- Git

## 🚀 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd photo-album-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a 'uploads' folder in the root directory of the project.
```bash
mkdir uploads
```

4. Start MongoDB service 
```bash
# On macOS with Homebrew
brew services start mongodb-community

# On Ubuntu
sudo service mongod start

# On Windows
net start MongoDB
```

5. Start the application:
```bash
npm start
# or
node app.js
```

## 💻 Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Create a new album by clicking the "Create new Album" button.
3. Upload images to the album by clicking the "Add New Image" button.
4. View, manage, and delete your photos and albums

## 🔨 Tech Stack

- Backend: Node.js, Express
- Database: MongoDB with Mongoose
- Views: EJS templates
- Styling: Bootstrap 5
- File Upload: Multer
- HTTP Methods: Method Override

## ⚠️ Important Notes
- The uploads directory is gitignored to prevent committing user-uploaded files
- Make sure MongoDB is running before starting the application
- Ensure proper read/write permissions for the uploads directory