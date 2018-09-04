import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../Video';

@Component({
  selector: 'app-video-list',
  templateUrl: './videoList.component.html',
  styleUrls: ['./videoList.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() videos: Video[];
  @Output() emitUrl = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }
  url(video) {
    this.emitUrl.emit(video);
  }
}
