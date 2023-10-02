import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";


@Component({
  selector: 'app-list-parcel',
  templateUrl: './list-parcel.component.html',
  styleUrls: ['./list-parcel.component.css']
})
export class ListParcelComponent implements OnInit {
  parcelsDB: any;
  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
      this.dbService.listparcel().subscribe(result=> {
        this.parcelsDB = result;
      })
  }

}
