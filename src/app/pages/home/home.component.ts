import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredPostsList:Array<object>;
  constructor(private postService : PostsService){}

  ngOnInit(): void {
   this.postService.loadFeaturedPosts().subscribe(val=>{
    this.featuredPostsList = val;
   })
 }
}
