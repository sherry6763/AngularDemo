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

  @Output()
  titleChanged = new EventEmitter<any>();

  newTitle = '';
  isEdit = false;
  constructor() { }

  ngOnInit(): void {
    this.newTitle = this.item.title;
  }

  doEdit(title) {
    this.newTitle = title;
    this.titleChanged.emit({ id: this.item.id, title: title }); //發送事件資料
  }

  deleteArticle() {
    //emit方法，發送的意思，參數為要傳送的事件資料(預設時宣告為任意型別)
    this.delete.emit(this.item);
  }

}
