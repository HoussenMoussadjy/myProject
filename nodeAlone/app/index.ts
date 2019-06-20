import * as express from 'express';
import * as admin from 'firebase-admin';
import {UserModel} from './model/user.model';
import * as bodyParser from 'body-parser';
import {IdentityModel} from "../../front/src/app/model/identity.model";

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

const ref2 = db.collection('identity');


const ref = db.collection('users');


/*app.get('/', (req, res) => res.send('hello'));*/

app.get('/users', async (req, res) =>{
    const ref = db.collection('users');
    const userRef = await ref.get();
    const userOb: UserModel[] = [];

    userRef.forEach(user => userOb.push(user.data() as UserModel));
    res.status(200).send(userOb)
});

app.get('/identity', async (req, res) =>{
    const identityRef = await ref2.get();
    const identityOb: IdentityModel[] = [];

    identityRef.forEach(identity => identityOb.push(identity.data() as IdentityModel));
    res.status(201).send(identityOb)
});

app.post('/addUsers', async (req, res) =>{
    const addNewUser = await ref.add(req.body);
    res.status(201).send(addNewUser);
});

app.post('/identity', async (req, res) =>{
    const addNewIdentity = await ref2.add(req.body);
    res.status(201).send(addNewIdentity);
});

app.delete('/removeUsers/:id', async (req, res) =>{
    const deleteDoc = await db.collection('users').doc(req.params.id).delete();
    res.send('deleted !');
});

app.put('/changeAllUsers/:id', async (req, res) =>{
    const addChange = req.body;
    const userRef = await db.collection('users').doc(req.params.id).update(addChange);
    res.send('all changed !')
});

app.patch('/changeSomeUsers/:id', async (req, res) =>{
    const addChange = req.body;

    const userRef = await db.collection('users').doc(req.params.id);
    const updateSingle = userRef.update(req.body);
    res.send('changed !')
});

app.listen(4000,  () => {
    console.log('Example app listening on port 4000!')
});
