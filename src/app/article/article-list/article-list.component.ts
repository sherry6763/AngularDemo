import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  //宣告型別
  counter = 0;
  data$: Observable<any>;

  constructor(public datasvc: DataService) { }

  ngOnInit(): void {
    this.data$ = this.datasvc.getData();
  }

}
