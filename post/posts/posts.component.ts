import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any = [];
  posts_id: string = '';
  k:any = [];
  constructor(
    private ps: ApiService,
    private activerouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //router id
    this.posts_id = this.activerouter.snapshot.params['id'];

    //post find with id
    this.ps.getPosts().subscribe((data: any) => {
        data.find((el: any) => {
          if(el.userId == this.posts_id){
            this.posts.push(el);
          }
        });
    })
  }

}
