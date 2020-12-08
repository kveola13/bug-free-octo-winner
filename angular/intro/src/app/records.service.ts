import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) {
    
   }

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
    ]
  }
}
