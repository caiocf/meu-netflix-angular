import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-titles',
  templateUrl: './list-titles.component.html',
  styleUrls: ['./list-titles.component.scss']
})
export class ListTitlesComponent implements OnInit {
  @Input() title: String;
  @Input() list : [];

  constructor() { }

  ngOnInit() {
  }

}
