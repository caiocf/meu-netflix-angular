import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title: any;
  @ViewChild('trailer', {static: true}) trailer : ElementRef<HTMLVideoElement>;

  constructor() {
  }

  ngOnInit() {
  }

  playvideo(){
      this.trailer.nativeElement.play()
  }

  stopVideo(){
    this.trailer.nativeElement.currentTime = 0;
    this.trailer.nativeElement.pause();
  }

  getMueted():boolean {
    return this.trailer.nativeElement.muted;
  }

  toggleSound(){
    this.trailer.nativeElement.muted = !this.trailer.nativeElement.muted;
  }
}
