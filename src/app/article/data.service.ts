import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data;
  constructor(private http: HttpClient) {
    http.get('http://localhost:4200/api/articles.json')
      .subscribe((result) => {
        this.data = result;
      })
  }

  //刪除文章
  doDelete(item) {
    this.data = this.data.filter((v) => {
      return v.id !== item.id;
    });
  }

  //修改標題
  doModify(post: any) {
    //使用map方式可傳回全新物件陣列
    this.data = this.data.map((item) => {
      if (item.id == post.id) {
        return Object.assign({}, item, post);
      }
      return item;
    });
  }

}
