import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-sender',
  templateUrl: './add-sender.component.html',
  styleUrls: ['./add-sender.component.css']
})
export class AddSenderComponent {
  parcelsDB: any;
  id: string = "";
  sender: string = "";
  address: string = "";
  weight:number = 0;
  fragile: boolean = false;
  name: string ="";
  parcels:any;

  constructor(private dbService: DatabaseService, private router: Router) { }

  addsender(){
    let sender = {"id": this.id, "name": this.name}
    this.dbService.addsender(sender).subscribe(result=>{
      this.router.navigate(["/listsender"]);
    });
  }
}
