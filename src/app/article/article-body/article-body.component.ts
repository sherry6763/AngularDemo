import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-article-body',
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.css']
})
export class ArticleBodyComponent implements OnInit, OnChanges {

  @Input()
  item;

  @Input()
  counterC; //當被改變時就會觸發ngOnChanges

  constructor() {
    console.log("body-component:constructor");
  }

  ngOnInit(): void {
    console.log("body-component" + this.item.id + ":ngOnInit");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("body-component" + this.item.id + ":ngOnChanges");
    console.log(changes);
  }

}
