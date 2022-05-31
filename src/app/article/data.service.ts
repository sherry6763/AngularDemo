import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get('http://localhost:4200/api/articles.json');
  }

  //刪除文章
  doDelete(item) {
    return this.http.delete('http://localhost:4200/api/articles/' + item.id);
  }

  //修改標題
  doModify(post: any) {
    return this.http.put('http://localhost:4200/api/articles/' + post.id, post);
  }

}
