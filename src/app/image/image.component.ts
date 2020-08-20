import { Component, OnInit, ElementRef } from '@angular/core';
import { Photo } from '../model/image';
import { ImageService } from "../image.service";
import { Observable } from 'rxjs';
import { LoremIpsum } from "lorem-ipsum";
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';





@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

   lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

     listUsers: Photo[] = [];
    
     list: Photo[] = [];

     base64Image: any;
     index: number= 0;
      searchText;
      public data:Photo[] = [];






  constructor(private imageservice:ImageService, public element: ElementRef) { }

  ngOnInit() {

     for (let i = 0; i < 110; i++) {
      if (this.index>1083) {
        this.index= 0;
      }
      else
      {
        this.index++;
      }
     let myObject = {} as Photo;
     let usersUrl="https://picsum.photos/id/"+this.index+"/info";
     this.imageservice.getUsers(usersUrl).subscribe((data:any)=>{
        this.listUsers= this.listUsers.concat(data);
        myObject.id= this.listUsers[i].id;
        myObject.author= this.listUsers[i].author;
        myObject.url= this.listUsers[i].download_url;
        myObject.text= this.lorem.generateSentences(2);
        myObject.show= false;

        this.list.push(myObject);
        console.log("fgedfgfgdf", this.list.length);



     } );

          
           }
        
  }

saveInLocal(key, val): void {
  let fav: any= [];
    console.log('recieved= key:' + key + 'value:' + val);
    
    
   if (sessionStorage.getItem(key))
   {
     console.log("already exist");

   }

     else {
     fav = val;
     fav.show= false;
      sessionStorage.setItem(key, JSON.stringify(val));

    }
              Object.keys(sessionStorage).forEach(function(key){
                  console.log(sessionStorage.getItem(key));
              });


   }



    }