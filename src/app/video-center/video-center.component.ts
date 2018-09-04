import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { Video } from '../Video';
import { VideoService } from '../service/video.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit, OnChanges {
  selectedVideo: Video;
  form: NgForm;
  showInterBlock: boolean;
  constructor(private videoService: VideoService) {
    this.showInterBlock = false;
    console.log('Contructor');
  }

  videos: Video[];
  /*   videos: Video[] = [
    {
      '_id': '123', 'title': 'ReactiveFormsModule', 'description': 'ReactiveFormsModule',
      'url': 'https://angular.io/api/forms/ReactiveFormsModule'
    },
    {
      '_id': '456', 'title': 'ActiveFormsModule', 'description': 'ActiveFormsModule',
      'url': 'https://angular.io/api/forms/ReactiveFormsModule'
    },
    {
      '_id': '789', 'title': 'PassiveFormsModule', 'description': 'PassiveFormsModule',
      'url': 'https://angular.io/api/forms/ReactiveFormsModule'
    },
    {
      '_id': '147', 'title': 'TentativeFormsModule', 'description': 'TentativeFormsModule',
      'url': 'https://angular.io/api/forms/ReactiveFormsModule'
    }
  ]; */

  ngOnInit() {
    this.videoService.getVideos().subscribe(result => {
      this.videos = result;
    }, err => {
      console.error(err);
    }
    );
    console.log('On Init');
  }

  url(event) {
    this.selectedVideo = event;
  }

  addVideo(f) {
    const formValues: Video = f.value;
    this.videoService.postVideo(formValues).subscribe((result) => {
      console.log('Video Posted successfully', result);
      this.videos.push(result);
    }, error => {
      console.log('Error Posting videos');
    });
  }

  ngOnChanges(changes: any) {
    console.log('OnChanges called');
  }

  /* ngDoCheck() {
    console.log('DoCheck called');
  } */
}
