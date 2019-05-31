import * as express from 'express';
import * as admin from 'firebase-admin';
import {UserModel} from './model/user.model';


const app = express();


const serviceAccount = require("C:\\Users\\pirat\\WebstormProjects\\untitled2\\nodeAlone\\monprojet.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://monprojet-3cd36.firebaseio.com"
});

const db = admin.firestore();


app.get('/', (req, res) => res.send('hello'));

app.get('/users', async (req, res) =>{
    const user: UserModel[] = [];
    const userRef = await ref.get();

    userRef.forEach((user) =>
        user.push(user.data() as UserModel));
    res.send({data: user});
});

app.listen(4000);
