import { Component, OnInit } from '@angular/core';
import { StreetartsService } from '../streetarts.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-streetarts',
  templateUrl: './streetarts.component.html',
  styleUrls: ['./streetarts.component.css']
})
export class StreetartsComponent implements OnInit {


  // array tha will get back from response all the Streetarts from database
  streetarts = [];

  // array of all items to be paged
  allItems = [];

  // pager object
  pager: any = {};

  // paged items
  pagedItems = [];

  body = {
    'streetart': '',
    'id': '',
    'collec': ''
  };

  constructor(private _streetartsService: StreetartsService, private _authService: AuthService) {
  }


  // On the init of the page I get all the Streetart of database
  ngOnInit() {
    this._streetartsService.getStreetarts()
      .subscribe(
        data => {
          // set items to json response
          this.allItems = data,

            // initialize to page 1
            this.setPage(1);
        },
        err => console.log(err)
      );
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this._streetartsService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }



   getStreetarts() {
    // get id of pressed button

    this._streetartsService.getStreetarts()
      .subscribe(
        data => {
          // set items to json response
          this.allItems = data,

            // initialize to page 1
            this.setPage(1);
        },
        err => console.log(err)
      );
  }

}
