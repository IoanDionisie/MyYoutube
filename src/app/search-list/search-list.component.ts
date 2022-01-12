import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { takeUntil } from 'rxjs';
import { Video } from 'src/models/Video';
import { YouTube } from 'youtube-node';
import { YoutubeServiceService } from '../youtube-service.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  videosList: Array<Video> = [];

  @Input() input = ''; 
  searchWord: string = '';

  constructor(private ytService: YoutubeServiceService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.searchWord = changes["input"].currentValue;
    this.videosList = [];
    
    this.ytService
      .searchByKeyword(this.searchWord, 15)
      .subscribe(lista => {
        console.log(lista)
        for (let elem of lista["items"]) {
          this.videosList.push(elem);
        }
      });
  }

}
