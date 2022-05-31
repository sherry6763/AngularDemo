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
    this.datasvc.doDelete(item).subscribe((result) => {
      this.data = this.data.filter((v) => {
        return v.id !== item.id;
      });
    }, (error) => {
      console.log(error);
    });
  }

  //修改標題
  doModify(post: any) {
    this.datasvc.doModify(post).subscribe((result) => {
      //使用map方式可傳回全新物件陣列
      this.data = this.data.map((item) => {
        if (item.id == post.id) {
          return Object.assign({}, item, post);
        }
        return item;
      });
    }, (error) => {
      console.log(error);
    });
  }

}
