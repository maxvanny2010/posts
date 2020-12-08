import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post, PostsService} from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(private route: ActivatedRoute, private router: Router, private posts: PostsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      console.log(param);
      this.post = this.posts.getById(+param.id);
    });
  }

  loadPost(): void {
    this.router.navigate(['/posts', 44]).then(r => {});
  }
}
