import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators'
import {HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:Http) { 

  }



  getTopTenTracks(){
  return  this.http.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=5b5bce6aa74542789fb4e8b8f8a45b5e`)
    .pipe(map(res => res.json()));
  }


  getTrackLyric(trackId:string){
    return  this.http.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=5b5bce6aa74542789fb4e8b8f8a45b5e`)
  
      .pipe(map(res => res.json()));
    }
    getTrack(trackId:string){
      return  this.http.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${trackId}&apikey=5b5bce6aa74542789fb4e8b8f8a45b5e`)
        .pipe(map(res => res.json()));
      }

      getSearchResult(searchInput:string){
        return  this.http.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=${searchInput}&page_size=10&page=1&s_track_rating=desc&apikey=5b5bce6aa74542789fb4e8b8f8a45b5e`)
          .pipe(map(res => res.json()));
        }
}
