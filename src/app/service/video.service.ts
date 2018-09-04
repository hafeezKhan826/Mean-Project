import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Video } from '../Video';


@Injectable()
export class VideoService {

    private baseUrl = 'api/';
    serviceResult;
    constructor(private http: HttpClient) {
    }

    getVideos(): Observable<any> {
        const url = this.baseUrl + 'videos';
        return this.http.get(url).map((res: HttpResponse<any>) => {
            this.serviceResult = res;
            return this.serviceResult;
        }).
            catch(this.errorHandler);
    }

    postVideo(video: Video): Observable<any> {
        const url = this.baseUrl + 'video';
        return this.http.post(url, video).map((res: HttpResponse<any>) => {
            this.serviceResult = res;
            return this.serviceResult;
        }).catch(this.errorHandler);
    }
    errorHandler(arg0: any): any {
        return Observable.throw;
    }
}
