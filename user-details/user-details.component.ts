import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  posts_id:string = '';
  user:any = '';
  constructor(
    private activerouter:ActivatedRoute,
    private ap:ApiService
  ) { }

  ngOnInit(): void {
    //router id
    this.posts_id = this.activerouter.snapshot.params['id'];
    

    //data
    this.ap.getUsers().subscribe((data:any)=>{
      this.user = data.find((el:any)=>{
        return el.id == this.posts_id;
      });
    });
  }

}
