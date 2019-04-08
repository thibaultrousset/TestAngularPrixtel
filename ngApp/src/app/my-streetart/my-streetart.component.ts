import { Component, OnInit } from '@angular/core';
import { StreetartsService } from '../streetarts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-streetarts',
  templateUrl: './my-streetart.component.html',
  styleUrls: ['./my-streetart.component.css']
})
export class MyStreetartsComponent implements OnInit {

  streetarts = [];
  body = {
    streetartId: '',
  };
  constructor(private _streetartsService: StreetartsService,
              private _router: Router) {

  }

  ngOnInit() {
    const id = localStorage.getItem('id');
    this._streetartsService.getMyStreetarts(id)
      .subscribe(
      res => this.streetarts = res,
      err => console.log(err)
      );
  }

  // get the name of the streetart I clicked on
  // the nme will be used for the update form
  getstreetartId(streetartId) {
    // put the streetart name in the local storage
    localStorage.setItem('streetart_id', streetartId);
  }

  // get the streetart name i clicked on , delete it from the database and
  // remove it from the connected user collection if it is in it
  removeMystreetart(streetartId) {
    this.body.streetartId = streetartId;
    this._streetartsService.removeMyStreetart(this.body)
      .subscribe(
      res => this._router.navigate(['/streetarts']),
      err => console.log('err')
      );
  }

}
