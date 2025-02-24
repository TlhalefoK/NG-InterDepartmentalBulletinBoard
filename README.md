Secure MEAN Stack Backend – NG Interdepartmental Government Bulletin Board

**Introduction**
This project is the backend implementation for a MEAN (MongoDB, Express, Angular, Node.js) application with a focus on security. It follows best practices in application security, including encrypted data storage, secure authentication, and HTTPS communication.


**Technologies Used**
1. Node.js (Runtime environment)
2. Express.js (Backend framework)
3. MongoDB (NoSQL database)
4. Mongoose (ODM for MongoDB)
5. OpenSSL (For SSL certificates and secure connections)
6. Nodemon (Auto-restart during development)
7. JWT (JSON Web Tokens) (For authentication)
8. REST Client (For API testing in VS Code)


**Setup Instructions**

_MongoDB Setup_
1.	Create a free MongoDB Atlas account at MongoDB.
2.	Click Try Free and choose Cloud.
3.	Build a database and select Free/Shared.
4.	Click Create Cluster and wait for deployment.
5.	Click Connect > Connect your application.
6.	Copy the connection string and store it securely.
7.	Under Database Access, generate a secure password for your admin user and save it.

_OpenSSL Setup_
1.	Download OpenSSL from Win32 OpenSSL.
2.	Install the Win64 Light version.
3.	Open a terminal in VS Code and navigate to the bin folder of OpenSSL.
4.	Generate a private key: 
5.	openssl genrsa -out privatekey.pem 1024
6.	Create an openssl.cfg file with the required configuration (see OpenSSL Docs).
7.	Generate a certificate signing request: 
8.	openssl req -new -key privatekey.pem -out certrequest.csr
9.	Sign the certificate: 
10.	openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem
11.	Store certificate.pem and privatekey.pem securely.

_Backend API Setup_
1.	Install Node.js (LTS version recommended).
2.	Clone this repository and navigate to the backend directory: 
3.	git clone <repository-url>
4.	cd backend
5.	Initialize a new Node.js project: 
6.	npm init -y
7.	Install dependencies: 
8.	npm install express mongoose dotenv jsonwebtoken bcryptjs cors nodemon
9.	Modify package.json scripts section: 
10.	"scripts": {
      "start": "node server.js",
      "dev": "nodemon server.js"
    }
11.	Create a .env file and configure: 
12.	MONGO_URI=<your-mongodb-connection-string>
13.	JWT_SECRET=<your-secret-key>
14.	Run the server in development mode: 
15.	npm run dev

**Running the Application**
1. Development mode: npm run dev
2. Production mode: npm start

**API Endpoints**

_Authentication_

1. POST	/api/auth/register	Register a new user
2. POST	/api/auth/login	Authenticate user & return token

_Bulletin Management_

1. GET	/api/bulletins	Get all bulletins
2. POST	/api/bulletins	Create a new bulletin
3. DELETE	/api/bulletins/:id	Delete a bulletin


**Authentication & Security**
1. JWT Authentication: Used to secure API endpoints.
2. Bcrypt: Hashes passwords before storing them.
3. CORS: Configured to allow only specified domains.
4. SSL Encryption: Ensures secure communication.


**Testing**
1. Install the REST Client VS Code extension.
2. Create test.http and add API requests for quick testing.
3. Click Send Request to test endpoints.


**License**
This project is licensed under the MIT License. See LICENSE for details.
________________________________________
**Author**: Tlhalefo Kgari **Project**: Secure MEAN Stack Backend – NG Interdepartmental Government Bulletin Board

