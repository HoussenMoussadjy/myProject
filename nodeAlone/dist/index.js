"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const app = express();
const serviceAccount = require("C:\\Users\\pirat\\WebstormProjects\\untitled2\\nodeAlone\\monprojet.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://monprojet-3cd36.firebaseio.com"
});
const db = admin.firestore();
app.use(bodyParser());
const cors = require('cors');
app.use(cors());
const ref = db.collection('users');
app.get('/users', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const ref = db.collection('users');
    const userRef = yield ref.get();
    const userOb = [];
    userRef.forEach(user => userOb.push(user.data()));
    res.status(200).send(userOb);
}));
app.post('/addUsers', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const addNewUser = yield ref.add(req.body);
    res.status(201).send(addNewUser);
}));
app.post('/identity', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const ref2 = db.collection('identity');
    const addNewIdentity = yield ref.add(req.body);
    res.status(201).send(addNewIdentity);
}));
app.delete('/removeUsers/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const deleteDoc = yield db.collection('users').doc(req.params.id).delete();
    res.send('deleted !');
}));
app.put('/changeAllUsers/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const addChange = req.body;
    const userRef = yield db.collection('users').doc(req.params.id).update(addChange);
    res.send('all changed !');
}));
app.patch('/changeSomeUsers/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const addChange = req.body;
    const userRef = yield db.collection('users').doc(req.params.id);
    const updateSingle = userRef.update(req.body);
    res.send('changed !');
}));
app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
});
//# sourceMappingURL=index.js.map