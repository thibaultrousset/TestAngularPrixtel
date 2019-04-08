import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable()
export class StreetartsService {

  private _streetartsUrl = 'http://localhost:3000/api/streetarts';
  private _newStreetartUrl = 'http://localhost:3000/api/newStreetart';
  private _myStreetartsUrl = 'http://localhost:3000/api/myStreetarts';
  private _updateStreetartUrl = 'http://localhost:3000/api/updateStreetart';


  constructor(private http: HttpClient) {
  }

  // get httprequest that send the user id and a figures univers to database on figures url
  getStreetarts() {
    return this.http.get<any>(this._streetartsUrl);
  }


  // post httprequest that send the user id and  figures data univers to database on new figures url
  newStreetart(streetartData) {
    return this.http.post<any>(this._newStreetartUrl, streetartData);
  }


  // put httprequest that send the user id and a figure name to database on my figures url
  removeMyStreetart(body) {
    return this.http.put<any>(this._myStreetartsUrl, body);
  }


  // get httprequest that send the user id to database on my Streetarts url
  getMyStreetarts(id) {
    return this.http.get<any>(this._myStreetartsUrl + '/' + id);
  }


  // post httprequest that send the user id and  Streetarts datas to database on update Streetart url
  updateStreetart(body) {
    return this.http.post<any>(this._updateStreetartUrl, body);
  }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 9) {
        // calculate total pages
        const totalPages = Math.ceil(totalItems / pageSize);

        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        } else if (currentPage > totalPages) {
            currentPage = totalPages;
        }

        let startPage: number;
        let endPage: number;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);


        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}
