import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-musiclyric',
  templateUrl: './musiclyric.component.html',
  styleUrls: ['./musiclyric.component.css']
})
export class MusiclyricComponent implements OnInit {
  trackId:string ;
  lyric:any;
  track:any;
  showSpinner:boolean = true;
  

  constructor(
   private dataservice:DataService, 
   private route:ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
   this.trackId = id;
 
   this.getTrack(this.trackId);

  }


  getTrackLyric(trackId:string){
    this.dataservice.getTrackLyric(trackId).subscribe((lyric) =>{
      this.lyric = lyric.message.body.lyrics;
      
       this.showSpinner = false;
    }),
    (err)=>{
      console.log('Error '+ err);
    },
    () =>{
      

    }
  }

  getTrack(trackId:string){
    this.dataservice.getTrack(trackId).subscribe((track) =>{
      this.track = track.message.body.track;
      
    
      
    },
     (err)=>{
       console.log('Error '+ err);
     },
     () =>{
           this.getTrackLyric(trackId);
     }
    );
    
   
   
  }

}
