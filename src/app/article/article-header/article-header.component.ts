import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit, OnChanges {
  @Output()
  delete = new EventEmitter<any>();

  @Output()
  titleChanged = new EventEmitter<any>();

  @Input()
  item;

  isEdit = false;
  orig_item;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.item) {
      //保存新增物件的內容
      this.orig_item = changes.item.currentValue;
      //當有值傳入時建立新的物件
      this.item = Object.assign({}, changes.item.currentValue);
    }
  }
  ngOnInit(): void {
  }

  //編輯標題
  doEdit() {
    //這裡emit的item已經和當初傳入的item是不一樣的物件了
    this.titleChanged.emit(this.item);
  }

  //取消編輯
  doCancel() {
    this.item = Object.assign({}, this.orig_item); //復原物件
    this.isEdit = false;
  }

  deleteArticle() {
    //emit方法，發送的意思，參數為要傳送的事件資料(預設時宣告為任意型別)
    this.delete.emit(this.item);
  }

}
