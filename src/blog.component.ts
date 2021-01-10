import {Component, OnInit} from '@angular/core';

interface BlogPost {
  header: string;
  content: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  posts: BlogPost[] = [
    {header: 'Title 1', content: 'text 1'},
    {header: 'Title 2', content: 'text 2'},
  ];

  editedHeader = '';
  editedContent = '';
  editedPost: BlogPost | undefined = undefined;

  submit(): void {
    if (this.editedPost) {
      this.editedPost.header = this.editedHeader;
      this.editedPost.content = this.editedContent;
      this.editedPost = undefined;
    }
  }
}
