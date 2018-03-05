import { Injectable } from '@angular/core';
// import { Connection } from 'typeorm';
import { User } from './model/user';

declare const window: any;
const { createConnection } = window.require('typeorm');

@Injectable()
export class TypeormService {

  connection;
  constructor() {

    createConnection({
      type: 'sqlite',
      database: './database.sq3',
      entities: [
        User
      ],
      synchronize: true,
      logging: false
    }).then(connection => {
      this.connection = connection;
    }).catch(error => console.log(error));
  }

}
