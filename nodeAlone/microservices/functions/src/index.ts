import * as functions from 'firebase-functions';
import {UserModel} from "./user.model";

import * as admin from 'firebase-admin';

admin.initializeApp();

exports.on_user_created = functions.firestore
    .document('users/{userId}')
    .onCreate((snap, context) => {

        const newUser: UserModel= snap.data() as UserModel;
        newUser.uid = snap.id;
        return snap.ref.set(newUser)

    });

