# 🐾 Wildlife Express Project Setup

This is a Node.js & Express-based application where users can publish animal-related posts, and others can vote on them. Below is a detailed, interactive guide to run the app locally.

## 📦 Prerequisites
Before starting, make sure you have:
- ✅ Node.js & npm installed
- ✅ Git installed
- ✅ A terminal or code editor (e.g., VS Code)

## 📁 Clone the Repository
Run the following command to clone the repository:


git clone https://github.com/RaffyPetrov/wildlife.git
cd wildlife

</head>
<body>
  <h1>🐾 Wildlife Express Project Setup</h1>
  
  <p class="intro">
    This is a Node.js & Express-based application where users can publish animal-related posts, and others can vote on them.
    Below is a detailed, interactive guide to run the app locally.
  </p>

  <details open>
    <summary>📦 Prerequisites</summary>
    <div class="step">
      <p>Before starting, make sure you have:</p>
      <ul>
        <li>✅ Node.js & npm installed</li>
        <li>✅ Git installed</li>
        <li>✅ A terminal or code editor (e.g., VS Code)</li>
      </ul>
    </div>
  </details>


  <details>
    <summary>📦 Install Dependencies</summary>
    <pre><code>npm install</code></pre>
  </details>

  <details>
    <summary>🔌 Key Dependencies</summary>
    <p>The following dependencies are required for the project to function properly:</p>
    <ul>
      <li><strong>bcrypt</strong>: A library for hashing and checking passwords securely.</li>
      <li><strong>express</strong>: The core web framework for building the server-side application.</li>
      <li><strong>express-handlebars</strong>: Template engine used for rendering views (HTML files) dynamically.</li>
      <li><strong>express-session</strong>: Middleware for managing user sessions (authentication and login tracking).</li>
      <li><strong>mongoose</strong>: MongoDB object modeling library for interacting with MongoDB databases in an easy way.</li>
    </ul>
    <p>These dependencies are automatically installed when you run <code>npm install</code>.</p>
  </details>

  <details>
    <summary>🚀 Start the Server</summary>
    <p>To start the Express app:</p>
    <pre><code>npm start</code></pre>
    <p>The server will run on <strong>http://localhost:3000</strong></p>
  </details>

  <details>
    <summary>🧪 Test API Endpoints</summary>
    <p>You can use tools like <strong>Postman</strong> or <strong>cURL</strong> to test your API endpoints:</p>
    <pre><code>GET http://localhost:3000/api/animals</code></pre>
    <p>This endpoint will return a list of animal posts, where each post can have votes and descriptions.</p>
  </details>

  <details>
    <summary>📨 What This App Does</summary>
    <ul>
      <li>📝 Users can post animal-related content with details like name, description, and images.</li>
      <li>👍 Other users can vote (upvote/like) these animal posts.</li>
      <li>📧 Posts display the emails of users who have voted on them.</li>
    </ul>
  </details>

  <details>
    <summary>🛠 Environment Variables (Optional)</summary>
    <p>If you're using a `.env` file, create it in the root directory and add the following:</p>
    <pre><code>PORT=3000
MONGO_URI=mongodb://localhost:27017/wildlife</code></pre>
  </details>

  <footer>
    Made with ❤️ by Raffy Petrov
  </footer>
</body>
</html>
