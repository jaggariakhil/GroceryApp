import {  NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddGroceryComponent } from "./Components/add-grocery/add-grocery.component";
import { GcartComponent } from "./Components/gcart/gcart.component";
import { GListComponent } from "./Components/glist/glist.component";

const appRoutes:Routes=[
    {path:"",component:AddGroceryComponent},
    {path:'checkout',component:GcartComponent},
    {path:'grocerylist',component:GListComponent}
    
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
  
  })
export class AppRoutingModule{

}