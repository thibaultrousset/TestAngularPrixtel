import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StreetartsService } from '../streetarts.service';

@Component({
  selector: 'app-update-streetart',
  templateUrl: './update-streetart.component.html',
  styleUrls: ['./update-streetart.component.css']
})
export class UpdateStreetartComponent implements OnInit {


  // object that will get the html data
  // is set the figure name empty
  streetartData = {
    streetartId: ''
  };


  constructor(private _streetartsService: StreetartsService,
              private _router: Router) { }

  ngOnInit() {
  }

  // send the new data to update the Streetart I clicked on
  updateStreetart() {
    // get the Streetart name i set in local storage
    const streetartId = localStorage.getItem('streetart_id');
    this.streetartData.streetartId = streetartId;
    this._streetartsService.updateStreetart(this.streetartData)
      .subscribe(
      res => {
        console.log(res),
        this._router.navigate(['/myStreetarts']);
      },
      err => console.log(err)
      );
  }

}
