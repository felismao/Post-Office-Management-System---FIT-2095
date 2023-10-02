import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DatabaseService } from "./database.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AddSenderComponent } from './add-sender/add-sender.component';
import { ListSenderComponent } from './list-sender/list-sender.component';
import { DeleteSenderComponent } from './delete-sender/delete-sender.component';
import { AddParcelComponent } from './add-parcel/add-parcel.component';
import { ListParcelComponent } from './list-parcel/list-parcel.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CurrentTimeComponent } from './current-time/current-time.component';

const appRoutes: Routes = [
  { path: "listsender", component: ListSenderComponent },
  { path: "addsender", component: AddSenderComponent },
  { path: "deletesender", component: DeleteSenderComponent },
  { path: "addparcel", component: AddParcelComponent },
  { path: "listparcel", component: ListParcelComponent },
  { path: "currentime", component: CurrentTimeComponent },
  { path: "",component:HomeComponent , pathMatch: "full" },
  { path: '**', component: PageNotFoundComponent},  // Wildcard route for a 404 page
];

@NgModule({
  declarations: [AppComponent, AddSenderComponent, ListSenderComponent, DeleteSenderComponent, AddParcelComponent, ListParcelComponent, CurrentTimeComponent, ],
  imports: [BrowserModule, HttpClientModule, FormsModule,RouterModule.forRoot(appRoutes,{useHash:true}), ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}