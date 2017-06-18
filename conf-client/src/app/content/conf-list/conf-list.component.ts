import { Component, OnInit } from '@angular/core';
import { GetConfListService } from '../../services/get-conf-list.service';

import { Conf } from '../../conf.class';

@Component({
  selector: 'app-conf-list',
  templateUrl: './conf-list.component.html',
  providers: [
    GetConfListService
  ],
  styleUrls: ['./conf-list.component.css']
})
export class ConfListComponent implements OnInit {
  confs: Conf[];

  constructor(private getConfListService: GetConfListService) { }

  getConfList(): void {
    this.confs = this.getConfListService.getList();
  }
  ngOnInit(): void {
    this.getConfList();
  }

}
