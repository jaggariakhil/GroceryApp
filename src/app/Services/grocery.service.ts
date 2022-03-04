import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AddGroceryComponent } from '../Components/add-grocery/add-grocery.component';
import { Grocery } from '../Models/grocery.model';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  groceryUpdated=new Subject<number>();


  gList:Grocery[]=[];

   groceryListUpdated=new Subject<Grocery[]> ();
  

  constructor() { 

    
  }

  

  

 getGroceries(){
   return this.gList;
 } 

 getGrocery(index:number){
   return this.gList[index];
 }

 updateGrocery(index:number,grocery:Grocery){
   this.gList[index]=grocery;
 }


 

 groceryListUpdatedListener(){
   return this.groceryListUpdated.asObservable();
 }



AddGrocery(grocery:Grocery){
  
this.gList.push(grocery);
this.groceryListUpdated.next(this.gList);
console.log(this.gList)
}
delete(index:number){
  this.gList.splice(index,1);
  this.groceryListUpdated.next(this.gList);
}
totalQuantity(){
  let tQuant=0
  for(let i of this.gList)
{
 
  const quantity=+i.quantity
  tQuant=tQuant+quantity
  
}
return tQuant;
}

totalPrice()
{
  let tPrice=0
  let tQuant=0
for(let i of this.gList)
{
  const price=+i.price
  const quantity=+i.quantity
  tQuant=tQuant+quantity
  tPrice=tPrice+ price*quantity;
}
return tPrice;

}
}
