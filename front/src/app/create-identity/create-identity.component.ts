import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IdentityModel} from "../model/identity.model";


@Component({
  selector: 'app-create-identity',
  templateUrl: './create-identity.component.html',
  styleUrls: ['./create-identity.component.scss']
})
export class CreateIdentityComponent implements OnInit {

  identityForm: FormGroup;

  constructor(private httpClient: HttpClient,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
  }

  postIdentity(identity: IdentityModel) {
    this.httpClient.post<IdentityModel[]>('http://localhost:4000/identity', identity)
      .pipe()
      .subscribe();
  }

  submitForm() {
    this.postIdentity(this.identityForm.value);

  }

  initForm() {
    this.identityForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      lastName: ['', [Validators.required]],
      children: ['', [Validators.required]],
      age: [0, [Validators.required]],
    })
  }
}

