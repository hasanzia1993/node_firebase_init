const admin = require('firebase-admin');

const serviceAccount = require('./discount-offer-deals-firebase-adminsdk-2d0xv-d25870f04b.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
