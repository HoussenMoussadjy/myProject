import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import {hostels} from "./hotel";

admin.initializeApp();

const app = express();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Mon CV',
        name: 'HOUSSEN MOUSSADJY',
        profile: 'PROFIL',
        experience: 'EXPERIENCE',
        formation: 'FORMATION',
        skills: 'COMPETENCES',
        contact: 'CONTACT',
        interests: 'INTERETS',
        jobName: 'Développeur Web',
        resume: 'J’ai 19 ans, je suis en phase de devenir développeur JavaScript et je souhaite postuler pour un stage ' +
            'dans 5 mois.',
        experienceTitle: 'Parcours vers l’Emploi: OBJECTIF EMPLOI OUEST (Bezons) 2018-2019',
        copyright: 'Copyright Houssen Moussadjy 2019 - Toute reproduction interdite',
        experienceList: 'Travail sur la cohésion d’équipe\n' +
            'Titulaire du B2i (Brevet informatique et internet)\n' +
            'Titulaire du SST (Sauveteur Secouriste du Travail)',
        interestsList: 'TENNIS\n' +
            'LECTURE DE ROMANS\n' +
            'DEVELOPPEMENT PERSONNEL',
        contactList: '(+33) 7 82 30 61 52\n' +
            'houssen128@protonmail.com\n' +
            'Asnières-sur-Seine 92600',
        formationList: 'Licence AES (1ère année)\n' +
            'Saint-Denis, La Réunion\n' +
            '2017/2018',
        formation2List: 'Baccalauréat ES (Économique et Social)\n' +
            'Antananarivo, Madagascar\n' +
            '2017',
        skillsList: 'HTML\n' +
            'CSS\n' +
            'JAVASCRIPT'
    });
});



app.get('/hostels', (req, res) =>
    res.status(200).send({
        data: hostels
        }));

app.post('/addHostels', (req, res) =>
    res.status(201).send({
        data: hostels
    }));

export const helloWorld = functions.https.onRequest(app);

