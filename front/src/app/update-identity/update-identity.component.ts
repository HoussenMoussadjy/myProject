import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-update-identity',
  templateUrl: './update-identity.component.html',
  styleUrls: ['./update-identity.component.scss']
})
export class UpdateIdentityComponent implements OnInit {

  id: string;

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log(this.id)
  }

}
