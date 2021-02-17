import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  
})
export class ArtistaComponent {
  artista:any={};
  topTracks:any[]=[]
  loading:boolean;

  constructor(private router:ActivatedRoute,
              private sptify:SpotifyService) { 

    this.loading=true;            
    this.router.params.subscribe(params=>{
      
      this.getArtista(params['id'])
      this.getTopTracks(params['id'])
      
    })
  }
  getArtista(id:string){
    this.loading=true;
    this.sptify.getArtista(id)
          .subscribe(artista=>{
            console.log(artista);
            this.artista=artista;
            this.loading=false;
          });
  }
  getTopTracks(id:string){
    this.sptify.getTopTracks(id)
      .subscribe(topTracks=>{
        console.log(topTracks);
        this.topTracks=topTracks
      })
  }

  

}
