import { Component } from '@angular/core';
import { User } from './model/user';
import { TypeormService } from './typeorm.service';

@Component({
  selector: 'ttb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private typeorm: TypeormService) {
    const user = new User();
    user.firstName = 'Test';
    user.lastName = 'Elek';
    user.age = 5;
    this.typeorm.connection.manager.save(user).then(newUser => {
      console.log(newUser);
    });
  }
}
