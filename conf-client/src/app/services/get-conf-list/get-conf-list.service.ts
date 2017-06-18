import { Conf } from '../../conf.class';
import { Injectable } from '@angular/core';

@Injectable()
export class GetConfListService {

  getList(): Promise<Conf[]> {
    let confs = [{
      name: "Test Conf",
      description: "Description",
      tags: [
        "a",
        "b"
      ],
      imgLink: "../../public/image/erlichConf.png",
      date: "June 15, 2017"
    }]
    return Promise.resolve(confs);
  }

}
