import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  //宣告型別
  counter = 0;
  data;

  constructor(public datasvc: DataService) { }

  ngOnInit(): void {
    this.datasvc.getData().subscribe((result) => {
      this.data = result;
    })
  }

  //刪除文章
  doDelete(item) {
    this.datasvc.doDelete(item).subscribe({
      next: (result) => {
        this.data = this.data.filter((v) => {
          return v.id !== item.id;
        });
      },
      error: (e) => console.log(e)
    });
  }

  //修改標題
  doModify(post: any) {
    this.datasvc.doModify(post).subscribe({
      next: (result) => {
        this.data = this.data.map((item) => {
          if (item.id == post.id) {
            return Object.assign({}, item, post);
          }
          return item;
        });
      },
      error: (e) => console.log(e)
    });
  }

}
