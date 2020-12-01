import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() add: EventEmitter<Post> = new EventEmitter<Post>();
  @ViewChild('titleInput') inputRef: ElementRef;
  title = '';
  text = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  addPost(): void {
    if (this.title.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      };
      this.add.emit(post);
      console.log(post);
    }
    this.title = this.text = '';

  }

  focusTitle(): void {
    this.inputRef.nativeElement.focus();
  }
}
