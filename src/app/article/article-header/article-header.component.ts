import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit {

  @Input()
  item;

  @Output()
  delete = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteArticle() {
    //emit方法，發送的意思，參數為要傳送的事件資料(預設時宣告為任意型別)
    this.delete.emit(this.item);
  }

}
