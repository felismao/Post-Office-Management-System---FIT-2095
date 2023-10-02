import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-parcel',
  templateUrl: './add-parcel.component.html',
  styleUrls: ['./add-parcel.component.css']
})
export class AddParcelComponent  {
  parcelsDB: any;
  id: string = "";
  sender: string = "";
  address: string = "";
  weight:number = 0;
  fragile: boolean = false;
  name: string ="";
  parcels:any;

  constructor(private dbService: DatabaseService, private router: Router) { }

  addparcels() {
    let parcel = { "id": this.id, "parcels": { "address": this.address, "weight": this.weight, "fragile":this.fragile }};
    this.dbService.addparcel(parcel).subscribe(result => {
      this.router.navigate(["/listparcel"]);
    });
  }
}
