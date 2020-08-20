import { Component, OnInit } from '@angular/core';
import { Photo } from '../model/image';




@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  list: Photo[] = [];
 
  constructor() { }

  ngOnInit(): void {


           /**   Object.keys(sessionStorage).forEach(function(key){
                *  let obj = {} as Photo;
                *  obj = JSON.parse(sessionStorage.getItem(key));
                * console.log(obj);
                }); */

               for (let i = 0; i < 110; i++) {
                  if (sessionStorage.getItem(i.toString()))
                  {
                    this.list.push(JSON.parse(sessionStorage.getItem(i.toString())));
                  }
                }

    
  }

    delete(key, val): void {
    sessionStorage.removeItem(key);
    window.location.reload();

    }


}
