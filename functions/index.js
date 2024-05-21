// functions/index.js
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
admin.initializeApp();

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// helloWorld function to respond with "Hello from Firebase!"
exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// addUser function to add user data to Firestore
exports.addUser = onRequest(async (request, response) => {
  const userData = request.body; // Expecting user data in the request body
  try {
    const docRef = await admin.firestore().collection("users").add(userData);
    response.status(200).send(`User added with ID: ${docRef.id}`);
  } catch (error) {
    console.error("Error adding user: ", error);
    response.status(500).send("Error adding user");
  }
});
