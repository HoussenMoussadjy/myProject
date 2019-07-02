import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  id: string;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
  ) {
  }

  ngOnInit() {
  }

}
