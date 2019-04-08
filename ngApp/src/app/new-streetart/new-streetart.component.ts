import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { StreetartsService } from '../streetarts.service';

@Component({
  selector: 'app-new-streetart',
  templateUrl: './new-streetart.component.html',
  styleUrls: ['./new-streetart.component.css']
})
export class NewStreetartComponent implements OnInit {

  constructor(private _streetartsService: StreetartsService,
              private _router: Router) { }

  // the object with the data I will send to database to create a new Streetart
  // i set an empty parameter tha doesn't exist in the form of the html
  streetartData = {
    streetartCreator: ''
  };



  // new Streetarts doesn't belong to connected user but to its creator.
  newStreetart() {
    const creator = localStorage.getItem('id');
    this.streetartData.streetartCreator = creator;
    this._streetartsService.newStreetart(this.streetartData)
      .subscribe(
      res => {
        this._router.navigate(['/streetarts']);
        console.log(res);
      },
      err => console.log(err)
      );
  }


  ngOnInit() {
  }

}
