import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  getData(){
    return [
      {
        name: "Ola",
        online: true
      },
      {
        name: "ABC",
        online: false
      },
      {
        name: "XYZ",
        online: true
      }
    ];
  }
}
