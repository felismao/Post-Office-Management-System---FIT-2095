import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "./database.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent{
  parcelsDB: any;
  sendersDB:any;

  section = 1;

  id: string = "";
  sender: string = "";
  address: string = "";
  weight:number = 0;
  fragile: boolean = false;
  name: string ="";
  parcels:any;

  constructor(private dbService: DatabaseService) {}
 
  //list parcel
  
  listparcel(){
    this.dbService.listparcel().subscribe(result=> {
      this.parcelsDB = result;
    })
  }

  //list sender
  listsender(){
    this.dbService.listsender().subscribe(result=>{
      this.sendersDB = result;
    })
  }

  //add parcel
  addparcel() {
    let parcel = { "id": this.id, "parcels": { "address": this.address, "weight": this.weight, "fragile":this.fragile }};
    this.dbService.addparcel(parcel).subscribe(result => {
      this.listparcel();
      this.section = 4;
    });
  }

  // add sender
  addsender(){
    let sender = {"id": this.id, "name": this.name}
    this.dbService.addsender(sender).subscribe(result=>{
      this.listsender()
      this.section = 5;
    })
  }
  changeSection(newSection: number) {
    this.section = newSection;
    if (this.section == 4) {
      this.listparcel();
    }
    if (this.section == 5) {
      this.listsender();
    }

    this.resetValues();
  }
  resetValues() {
    this.id = "";
    this.sender = "";
    this. address= "";
    this. weight = 0;
    this. fragile = false;
    this.name ="";
  }
  
}