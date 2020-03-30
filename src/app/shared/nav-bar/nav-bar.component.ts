import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() menuToggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() opened = false;

  constructor() { }

  ngOnInit() {
  }

  toggle():void{
    this.opened = !this.opened;
    this.menuToggle.emit(this.opened);
  }
}
