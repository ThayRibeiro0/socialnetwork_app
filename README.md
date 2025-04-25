
# 🧠 Social Network App 🌐

The Social Network API is a RESTful back-end application built using Node.js, Express.js, and MongoDB. It allows users to interact through thoughts, reactions, and friend relationships. This project simulates the core logic behind a social media platform and is ideal for practicing CRUD operations and NoSQL database integration.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Build the Project](#build-the-project)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)

## Description

The **Social Network App** provides the following features:

- Create and manage user profiles.
- Post thoughts and interact with other users through reactions.
- Add and remove friends from a friend list.
- API built with Express and MongoDB, following RESTful principles.
- Ideal for demonstrating CRUD operations and backend logic.

## Installation

### Clone the Repository

1. Clone the repository to your local machine:

```bash
git clone https://github.com/ThayRibeiro0/socialnetwork_app
```

2. Navigate to the project directory:

```bash
cd socialnetwork_app
```

3. Install the dependencies:

```bash
npm install
```

This will install all necessary packages listed in `package.json`.

4. Ensure MongoDB is running on your machine.

## Usage

To start the server locally, run:

```bash
npm run start
```

Once running, the server will be listening at:

```
http://localhost:3001
```

You can test the API endpoints using tools like **Insomnia** or **Postman**.

## Build the Project

As this is a backend-focused project, there's no build command needed. Simply ensure your development environment is set up and use:

```bash
npm run dev
```

To run the app with **Nodemon** for automatic restarts during development.

## Deployment

To deploy this backend project:

- Set up a cloud MongoDB database (e.g., MongoDB Atlas).
- Configure environment variables for your production database URI.
- Deploy on platforms like **Render**, **Netlify**, or **Heroku**.

### Deployed Application
Check the live application here:  
[🔗 [Kanban Board Live](https://kanbanboard-app.onrender.com/board)](https://kanbanboard-app.onrender.com)

## Screenshots

<div>
  <img src="./public/screenshots/GET Users.png" alt="GET_Users" width="600" height="300">
  <img src="./public/screenshots/GET Thoughts.png" alt="GET_Thoughts" width="600" height="300">
  <img src="./public/screenshots/GET User ID.png" alt="GET_User_ID" width="600" height="300">
  <img src="./public/screenshots/GET Thought ID.png.png" alt="GET_Thought_ID" width="600" height="300"> 
  <img src="./public/screenshots/POST User.png" alt="POST_User" width="600" height="300">
  <img src="./public/screenshots/UPDATE User.png" alt="UPDATE_User" width="600" height="300">
  <img src="./public/screenshots/DELETE User.png" alt="DELETE_User" width="600" height="300">
  <img src="./public/screenshots/ADD Friend to User.png" alt="ADD_Friend" width="600" height="300">
  <img src="./public/screenshots/DELETE Friend from User.png" alt="DEL_Friend" width="600" height="300">
</div>


## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript (ES6+)
- RESTful API structure
- Insomnia (for testing)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! If you find bugs or have suggestions, please open an issue or submit a pull request on the [GitHub repository](https://github.com/ThayRibeiro0/socialnetwork_app).
