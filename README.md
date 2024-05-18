# Chat Nexus Backend

This repository contains the backend code for a web chat application named Chat Nexus, built using Socket.io, MongoDB, Express.js, and Node.js.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/pulkit-1110/chat-nexus-backend
   ```

2. Navigate to the backend directory:

   ```bash
   cd backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file based on the provided `.env.sample` and fill in the necessary environment variables:

   ```dotenv
   PORT=8000
   MONGO_URI="mongodb://127.0.0.1:27017/chat_nexus"
   JWT_SECRET=sample_jwt_secret
   ADMIN_SECRET_KEY=sample_admin_key
   NODE_ENV=development
   CLIENT_URL=frontend_url
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_cloud_api_key
   CLOUDINARY_API_SECRET=your_cloud_secret
   ```

5. Start the server:
   ```bash
   npm run start
   ```

## Features

- One-to-one chat
- Group chat (minimum 3 participants required)
- Attachment sharing (files, videos, images)
- Notifications for inactive users
- Typing indicator

## Technologies Used

- Socket.io
- MongoDB
- Express.js
- Node.js

## Contributors

- [Pulkit Uppal](https://github.com/pulkit-1110)

## License

This project is licensed under the [MIT License](LICENSE).
