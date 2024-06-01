<h1 align="center" id="title">Wanderlust</h1>

<p id="description">This MERN Stack Vacation Rental Platform is a comprehensive and feature-rich web application inspired by Airbnb. This platform allows users to list discover accommodations around the world. Utilizing the MERN stack (MongoDB Express.js React and Node.js) the application delivers a seamless and dynamic user experience for both hosts and guests.</p>
<h1 align="center">
🌐 MERN Stack
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs
</p>
<h2>🚀 Demo</h2>
<hr>
https://wanderlust-project-nsdn.onrender.com/listings
<hr>

<h2>💻 Built with</h2>

Technologies used in the project:

### Frontend  
<div align="center">  
<a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a>  
<a href="https://www.w3schools.com/css/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /></a>  
<a href="https://www.javascript.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a>  
<a href="https://getbootstrap.com/docs/3.4/javascript/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" alt="Bootstrap" height="50" /></a>  
</div>

</td><td valign="top" width="33%">



### Backend  
<div align="center">  
<a href="https://nodejs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="50" /></a>  
<a href="https://expressjs.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="50" /></a>  
</div>

</td><td valign="top" width="33%">



### Database  
<div align="center">  
<a href="https://www.mongodb.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="50" /></a>  
</div>

</td></tr></table>  

<br/>  

  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   1.User Authentication and Authorization:<br>Secure user registration and login system with passport (Passport is Express-compatible authentication middleware for Node.js.).<br>
*   2.Model-View-Controller (MVC) Architecture:<br> Clean separation of concerns for scalable and maintainable code. Models for data representation and database interactions using Mongoose. Controllers for handling application logic and coordinating between models and views. Views created with ejs for rendering dynamic and responsive user interfaces.
*   3.Listing Management:<br> Hosts can create update and manage property listings. Detailed listing pages with descriptions photos pricing and availability. Real-time updates and data synchronization with the backend.
*   4.Backend RESTful API: <br>Scalable and maintainable backend architecture built with Node.js and Express.js. Comprehensive API endpoints to handle all application logic and data manipulation. Middleware integration for logging authentication and error handling.
*   5.Database Management: <br>Utilization of MongoDB for efficient and flexible data storage. Schema design and data modeling with Mongoose for structured and consistent data. Aggregation and indexing to enhance query performance and application efficiency.
*   6.Deployment: <br>Deployment is done on render platform.
*   <h2>Use Cases:</h2> Vacation Rentals:<br> Users can list and book unique vacation homes apartments and other accommodations. Business Travel: Professionals can find suitable accommodations for short-term business trips. Event Hosting: Hosts can list properties suitable for hosting events workshops and retreats.

## Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^18
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the Repository:</p>

```
git clone https://github.com/saurabhbirari/Wanderlust.git
```

<p>2. Navigate to the Project Directory</p>

```
cd your-repo-name
```
<p>3. Set up the database:</p>
   - Create a `.env` file in the root directory of the project.
   - Add the following line to the `.env` file:

     ```
     ATLASDB_URL=mongodb://127.0.0.1:27017/wanderlust
     ```

<p>4. Set up Cloudinary:</p>
   - Go to [Cloudinary](https://cloudinary.com/) and sign up for a free account.
   - Once logged in, obtain your Cloudinary `CLOUD_NAME`, `CLOUD_API_KEY`, and `CLOUD_API_SECRET`.
   - Add these values to the `.env` file:

     ```
     CLOUD_NAME=your_cloud_name
     CLOUD_API_KEY=your_api_key
     CLOUD_API_SECRET=your_api_secret
     ```

<p>5. Set the secret for your Cloudinary storage:</p>
   - Add a `SECRET` key to your `.env` file and set it to a secure value:

     ```
     SECRET=your_cloudinary_secret
     ```

<p>6. Install Dependencies</p>

```
npm install
```

<p>7. Run the application using Nodemon:</p>

   ```
   nodemon app.js
   ```

<p>8. Start the Backend Server</p>

```
npm app.js  or nodemon app.js
```
<p>9. Access the project:</p>
   - Once the server is running, you can access the project at [http://localhost:8080]

<hr>
