import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any = '';
  constructor(
    private posts: ApiService
  ) { }

  ngOnInit(): void {

    //user data
    this.posts.getUsers().subscribe((data: any) => {
      this.users = data;
    })
  }

}
