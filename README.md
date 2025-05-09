<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Wildlife Express Setup Guide</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f2f4f8;
      padding: 2rem;
      color: #333;
    }
    h1 {
      text-align: center;
      color: #2a7ae2;
    }
    details {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      margin: 1rem 0;
      padding: 1rem;
    }
    summary {
      font-weight: bold;
      font-size: 1.1rem;
      cursor: pointer;
    }
    code, pre {
      background: #f0f0f0;
      padding: 0.4rem 0.6rem;
      border-radius: 6px;
      display: block;
      margin: 0.5rem 0;
      font-size: 0.95rem;
    }
    .step {
      margin-top: 1rem;
    }
  </style>
</head>
<body>
  <h1>🐾 Wildlife Express Project Setup</h1>

  <details open>
    <summary>📦 Prerequisites</summary>
    <div class="step">
      <p>Before starting, make sure you have:</p>
      <ul>
        <li>✅ Node.js & npm installed</li>
        <li>✅ Git installed</li>
        <li>✅ A terminal or code editor</li>
      </ul>
    </div>
  </details>

  <details>
    <summary>📁 Clone the Repository</summary>
    <pre><code>git clone https://github.com/RaffyPetrov/wildlife.git
cd wildlife</code></pre>
  </details>

  <details>
    <summary>📦 Install Dependencies</summary>
    <pre><code>npm install</code></pre>
  </details>

  <details>
    <summary>🚀 Start the Server</summary>
    <p>To start the Express app:</p>
    <pre><code>npm start</code></pre>
    <p>The server will run on <strong>http://localhost:3000</strong></p>
  </details>

  <details>
    <summary>🧪 Test API Endpoints</summary>
    <p>You can use tools like <strong>Postman</strong> or <strong>cURL</strong> to test your endpoints:</p>
    <pre><code>GET http://localhost:3000/api/animals</code></pre>
  </details>

  <details>
    <summary>🛠 Environment Variables (Optional)</summary>
    <p>If using a `.env` file, create it in the root and add:</p>
    <pre><code>PORT=3000
MONGO_URI=mongodb://localhost:27017/wildlife</code></pre>
  </details>

  <footer style="text-align:center; margin-top:2rem; font-size:0.9rem;">
    Made with ❤️ by Raffy Petrov
  </footer>
</body>
</html>
