import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit, OnChanges {

  @Input('selectedVideo') selectedVideo: any;
  title: string;
  url: string;
  description: string;
  editDescription: boolean;
  editTitle: boolean;
  editUrl: boolean;
  constructor() { }

  ngOnInit() { }
  ngOnChanges(changes: any) {
    const selectedVideoChanges = changes.selectedVideo;
    if (selectedVideoChanges.currentValue) {
      this.selectedVideo = selectedVideoChanges.currentValue;
    }

  }
  addVideo() {
    this.title = '';
    this.url = '';
    this.description = '';
    this.editDescription = false;
    this.editTitle = false;
    this.editUrl = false;
  }
}
