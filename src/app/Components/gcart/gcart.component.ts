import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Grocery } from 'src/app/Models/grocery.model';
import { GroceryService } from 'src/app/Services/grocery.service';

@Component({
  selector: 'app-gcart',
  templateUrl: './gcart.component.html',
  styleUrls: ['./gcart.component.css']
})
export class GcartComponent implements OnInit ,OnDestroy {

  glist:Grocery[]=[];
  totalPrice=0;
  totalQuantity=0;

  constructor(private groceryService:GroceryService) { }


  
  ngOnInit(): void {
    this.totalPrice=this.groceryService.totalPrice();
  
  this.totalQuantity=this.groceryService.totalQuantity();
  }


  groceryUpdatedSub:Subscription =this.groceryService.groceryListUpdatedListener().subscribe((list:Grocery[])=>{
  this.glist=list;
 // console.log(this.totalPrice);
  this.totalPrice=this.groceryService.totalPrice();
  
  this.totalQuantity=this.groceryService.totalQuantity();
  
 });

  
  

ngOnDestroy(): void {
    
}



  



  


}
