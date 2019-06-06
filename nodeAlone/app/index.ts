import * as express from 'express';
import * as admin from 'firebase-admin';
import {UserModel} from './model/user.model';
import * as bodyParser from 'body-parser';


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

/*app.get('/', (req, res) => res.send('hello'));*/

app.get('/users', async (req, res) =>{
    const ref = db.collection('users');
    const userRef = await ref.get();
    const userOb: UserModel[] = [];

    userRef.forEach(user => userOb.push(user.data() as UserModel));
    res.status(200).send(userOb)
});

app.post('/addUsers', async (req, res) =>{
    const addPost = req.body;

    const addNewHostel = await ref.add(addPost);
    res.send('posted !').status(201);

});

app.delete('/removeUsers/:id', async (req, res) =>{
    const deleteDoc = await db.collection('users').doc(req.params.id).delete();
    res.send('deleted !')
});

app.put('/changeAllUsers/:id', async (req, res) =>{
    const addChange = req.body;

    const userRef = await db.collection('users').doc(req.params.id);
    const updateSingle = userRef.update(req.body);
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
