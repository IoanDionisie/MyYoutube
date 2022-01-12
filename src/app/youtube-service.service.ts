import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeServiceService {

  apiKey: string = 'AIzaSyBqeBevmmkjHbNE0Og8VfCuPWfk-mJpP0c';
  constructor(public http: HttpClient) { }

  getVideosForChanel(channel: string, maxResults: number): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    console.log(url);
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }

  searchByKeyword(keyword: string, maxResults: number): Observable<Object>  {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey  + "&order=date&part=snippet&type=video,id&q=" + keyword + "&maxResults=" + maxResults;
    console.log(url);
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }

}
