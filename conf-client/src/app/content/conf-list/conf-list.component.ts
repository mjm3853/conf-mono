import { Component, OnInit } from '@angular/core';
import { GetConfListService } from '../../services/get-conf-list/get-conf-list.service';

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
  errorMessage: string;
  confs: Conf[];
  mode = 'Observable';

  constructor(private getConfListService: GetConfListService) { }

  getConfList(): void {
    this.getConfListService.getList()
      .subscribe(
      confs => this.confs = confs,
      error => this.errorMessage = <any>error
      );
  }
  
  ngOnInit(): void {
    this.getConfList();
  }

}
