import { Component, OnInit } from '@angular/core';
import { CreateConfService } from '../../services/create-conf/create-conf.service';
import { GetConfListService } from '../../services/get-conf-list/get-conf-list.service';

import { Conf } from '../../conf.class';

import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-conf-create',
  templateUrl: './conf-create.component.html',
  styleUrls: ['./conf-create.component.css']
})
export class ConfCreateComponent implements OnInit {

  stateCtrl: FormControl;
  filteredStates: any;

  constructor(
    private createConfService: CreateConfService,
    private getConfService: GetConfListService) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));
  }

  filterStates(val: string) {
    return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.states;
  }

  model = new Conf();
  response: any;
  error: any;

  states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

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
      city: this.model.city,
      state: this.model.state,
      zip: this.model.zip,
      tags: [
        this.model.tags
      ],
      url: this.model.url,
      date: this.model.date
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
