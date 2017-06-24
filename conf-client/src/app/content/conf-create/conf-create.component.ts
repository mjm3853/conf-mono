import { Component, OnInit } from '@angular/core';
import { CreateConfService } from '../../services/create-conf/create-conf.service';

import { Conf } from '../../conf.class';

@Component({
  selector: 'app-conf-create',
  templateUrl: './conf-create.component.html',
  styleUrls: ['./conf-create.component.css']
})
export class ConfCreateComponent implements OnInit {

  constructor(private createConfService: CreateConfService) { }

  model = new Conf();
  response: any;
  error: any;

  get diagnostic() { return JSON.stringify(this.model); }

  submitted = false;

  resetForm() {
    this.model = new Conf();
  }

  submitForm() {
    this.submitted = true;
    var conference_details = {
      name: this.model.name,
      description: this.model.description,
      location: "Manchester, NH",
      tags: [
        "react",
        "redux"
      ],
      url: "https://en.wikipedia.org/wiki/Conference",
      date: "October 25, 2017"
    }
    this.createConfService.createConf(conference_details)
      .subscribe(
      response => this.response = response,
      error => this.error = error
      )
    this.resetForm();
  }

  ngOnInit() {

  }

}
