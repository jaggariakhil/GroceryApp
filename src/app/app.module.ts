import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GListComponent } from './Components/glist/glist.component';
import { AddGroceryComponent } from './Components/add-grocery/add-grocery.component';
import { GcartComponent } from './Components/gcart/gcart.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Components/header/header.component';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    GListComponent,
    AddGroceryComponent,
    GcartComponent,
    HeaderComponent,
    

  ],
  imports: [
  
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
