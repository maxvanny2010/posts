import {Component, OnInit} from '@angular/core';
import {PostsService} from '../posts.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  showId = false;

  constructor(public postsService: PostsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((query) => {
      console.log(query);
      this.showId = !!query.showId;
    });
  }

}
