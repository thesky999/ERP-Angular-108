import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private userList = [];

  constructor() {
    let user = new User();
    user.userName = "Admin";
    user.password = "qwerty";
    this.userList.push(user);
   }

  public saveUser(user){
    this.userList.push(user);
  }

  public getAllUsers(){
    return this.userList;
  }

}
