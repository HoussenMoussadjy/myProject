import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import {UserModel} from "./user.model";
import {IdentityModel} from "./identity.model";


admin.initializeApp();


exports.on_user_created = functions.firestore
    .document('users/{userId}')
    .onCreate((snap) => {

        const newUser: UserModel= snap.data() as UserModel;
        newUser.uid = snap.id;
        newUser.created = admin.firestore.FieldValue.serverTimestamp();
        return snap.ref.set(newUser)
    });

exports.on_identity_created = functions.firestore
    .document('identity/{identityId}')
    .onCreate((snap) => {

        const newIdentity: IdentityModel = snap.data() as IdentityModel;
        newIdentity.uid = snap.id;
        newIdentity.created = admin.firestore.FieldValue.serverTimestamp();
        return snap.ref.set(newIdentity)
    });


