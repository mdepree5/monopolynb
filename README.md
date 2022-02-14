<div id="top"></div>



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src='https://monopolynb.s3.amazonaws.com/favicon.png' alt="Logo" width="50" height="50">
  </a>

<h1 align="center">Monopolynb</h1>
  <h3 style='font-style: italic' align="center">They say there's no place like home . . . but if there was, what would it feel like?</h3>
  <h1 align="center"></h1>
  
  <p align="justify">The idea was simple: what if we took popular vacation rental website <a href="https://www.airbnb.com/">AirbBnB</a> and put our own nostalgic spin on it?
Fast forward 7 days of rigorous full-stack development, Monopolynb is what the world would have if the Parker Brothers had access to React, Redux, and growing software developer <a href="https://github.com/mdepree5">Mitch DePree</a>. Looking for a place away from home that feels like home? We've got you covered.
  </p>
  <p align="center">
    <br />
    <a href="https://monopolynb.herokuapp.com/"><strong>Visit us »</strong></a>
    <br />
    <br />
    <a href="#getting-started">Get Started</a>
    ·
    <a href="https://github.com/mdepree5/monopolynb/wiki">Explore Docs</a>
    ·
    <a href="https://github.com/mdepree5/monopolynb/issues">Report Bug</a>
  </p>
</div>

<!-- Built With -->
<h2 align="left">Built with </h2>
<p align="left">
    <a href="https://reactjs.org/"><strong>React</strong></a>
    ·
    <a href="https://redux.js.org/">Redux</a>
    ·
    <a href="https://expressjs.com/">Express</a>
    ·
    <a href="https://www.postgresql.org/">PostgresQL</a>
    ·
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">Pure CSS</a>
  </p>

<!-- GETTING STARTED -->
<h1 align="center"></h1>

## Getting Started
To get a local copy up and running follow these simple example steps.

1. Clone the repository
    ```sh
    git clone git@github.com:mdepree5/monopolynb.git
    ```
2. Install dependencies in root directory
    ```sh
    npm install
    ```
3. Create a POSTGRESQL user in PSQL
    ```sh
    psql -c "CREATE USER <username> WITH PASSWORD '<password>' CREATEDB"
    ```
4. Create .env file and add username, password, database name, JWT/secret, port
    ```sh
    touch .env
    ```
5. Add proxy to frontend package.json. Port must match .env
    ```sh
    "proxy": "http://localhost:5000"
    ```
6. Create and populate database
    ```sh
    npx dotenv sequelize db:create
    npx dotenv sequelize db:migrate
    npx dotenv sequelize db:seed:all
    ```
7. Start backend server
    ```sh
    npm start
    ```
7. Start frontend server and navigate to https://localhost:3000/
    ```sh
    npm start
    ```
<h1 align="center"></h1>


<!-- CONTACT -->
<h1 align="center">Contact Us</h1>
<p align="center">
<a href="https://github.com/mdepree5"><strong>Github »</strong></a>
· 
<a href="https://www.linkedin.com/in/mitchell-depree-4a5686155"><strong>LinkedIn »</strong></a>
</p>



<p align="right">(<a href="#top">back to top</a>)</p>
