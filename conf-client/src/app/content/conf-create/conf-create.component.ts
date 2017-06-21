import { Component, OnInit } from '@angular/core';
import { CreateConfService } from '../../services/create-conf/create-conf.service';

import { Conf } from '../../conf.class';

@Component({
  selector: 'app-conf-create',
  templateUrl: './conf-create.component.html',
  styleUrls: ['./conf-create.component.css']
})
export class ConfCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
