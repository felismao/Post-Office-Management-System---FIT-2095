import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-delete-sender',
  templateUrl: './delete-sender.component.html',
  styleUrls: ['./delete-sender.component.css']
})
export class DeleteSenderComponent implements OnInit {
  sendersDB:any;
  constructor(private dbService: DatabaseService, private router: Router) {}

  onGetSender() {
    console.log("From on Sender");

    return this.dbService.listsender().subscribe(data => {
      this.sendersDB = data;
    });
  }
  onDeleteSender(data:any) {
    this.dbService.deletesender(data).subscribe(result => {
      this.onGetSender();
      this.router.navigate(["/listsender"]);
    });
  }
  ngOnInit() {
    this.onGetSender();
  }


}
