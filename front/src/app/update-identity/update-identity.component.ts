import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AngularFirestore} from "@angular/fire/firestore";
import {FormBuilder, FormGroup} from "@angular/forms";
import {IdentityModel} from "../model/identity.model";
//import {IdentityModel} from "../model/identity.model";

@Component({
  selector: 'app-update-identity',
  templateUrl: './update-identity.component.html',
  styleUrls: ['./update-identity.component.scss']
})
export class UpdateIdentityComponent implements OnInit {

  id: string;
  identity: IdentityModel;
  identityForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
  //this.UpdateIdentity()
  }

 /* UpdateIdentity() {
    return this.afs.collection<IdentityModel>("identity").doc(uid).set(this.identityForm.value)
      .pipe()
      .subscribe()
  }*/

  initForm() {

    this.identityForm = this.fb.group({
      name: [],
      children: [],
      age: []
    })

 }

}
