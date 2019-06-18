"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.on_user_created = functions.firestore
    .document('users/{userId}')
    .onCreate((snap, context) => {
    const newUser = snap.data();
    newUser.uid = snap.id;
    newUser.created = admin.firestore.FieldValue.serverTimestamp();
    return snap.ref.set(newUser);
});
//# sourceMappingURL=index.js.map