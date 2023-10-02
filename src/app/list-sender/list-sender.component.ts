import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";

@Component({
  selector: 'app-list-sender',
  templateUrl: './list-sender.component.html',
  styleUrls: ['./list-sender.component.css']
})
export class ListSenderComponent implements OnInit {
  sendersDB:any;
  constructor(private dbService: DatabaseService) {}

  ngOnInit(): void {
      this.dbService.listsender().subscribe(result=>{
        this.sendersDB = result;
      })
  }

}
