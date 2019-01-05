import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   tracks: any[];
   showoutterSpinner:boolean = true;
   loadSearch:boolean = false;
   songTitle:string;
   heading:string;
   showinnerSpinner:boolean;
  

  constructor(private dataservice:DataService) { }

  ngOnInit() { 
   
    if(this.loadSearch != true ){
         this.getTopTenTracks();
     }
     else{
      this.getSearchResult(this.songTitle);
     }
  }
    getTopTenTracks(){
       this.dataservice.getTopTenTracks().subscribe((tracks) =>{
        this.tracks = tracks.message.body.track_list;
        this.heading =`TOP ${this.tracks.length} Songs`;
        for(let i = 0; i < this.tracks.length; i++){
            
        }
 
        
      },
      (err)=>{
        console.log(err);
      },
      () => {
        this.showoutterSpinner= false;
      });
    }

    getSearchResult(songTitle){
      this.songTitle = songTitle;
      this.showinnerSpinner =true;
    this.dataservice.getSearchResult(this.songTitle).subscribe((results) =>{
      this.tracks = results.message.body.track_list;
      this.heading =`Search Result`;
      this.showinnerSpinner = false;
    }),
    (err) =>{
      console.log(err);
    }
    () =>{
      this.loadSearch = false;
     
    }
    }
}
