import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
//Allow json format
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

const URL_BACKEND = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) {}

  //list parcel
  listparcel() {
    return this.http.get(URL_BACKEND + "/parcel");
  }
  //add parcel
  addparcel(data: any) {
    return this.http.put(URL_BACKEND + "/sender/addparcel", data, httpOptions);
  }
  // add sender
  addsender(data:any) {
    return this.http.post(URL_BACKEND + "/sender", data, httpOptions);
  }

  //list sender
  listsender() {
    return this.http.get(URL_BACKEND + "/sender");
  }
  deletesender(data:any) {
    return this.http.delete(URL_BACKEND + "/sender/"+ data, httpOptions);
  }

}
