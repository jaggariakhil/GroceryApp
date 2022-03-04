import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GroceryService } from 'src/app/Services/grocery.service';
import { Grocery } from 'src/app/Models/grocery.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-grocery',
  templateUrl: './add-grocery.component.html',
  styleUrls: ['./add-grocery.component.css']
})
export class AddGroceryComponent implements OnInit,OnDestroy {

  constructor(private groceryService:GroceryService) { }
  index:number=0;
  btext="Add Item"
  @ViewChild('f',{read:NgForm}) gForm:any;
  editMode=0;

  ngOnInit(): void {
  }
  
  
  groceryEditSub:Subscription=this.groceryService.groceryUpdated.subscribe((i)=>{
    this.index=i;
    this.editMode=1;
    this.btext="Update Item"
    let g=this.groceryService.getGrocery(i);
    this.gForm.setValue({
      gname:g.gname,
      quantity:g.quantity,
      price:g.price
    })
    
        
        })
  
  onAdd(f:NgForm){
    if(f.invalid){
      return
    }
    const newGroceryItem=new Grocery(f.value.gname,f.value.quantity,f.value.price);
     
if(this.editMode){
  this.groceryService.updateGrocery(this.index,newGroceryItem);
}
if(!this.editMode){
  this.groceryService.AddGrocery(newGroceryItem);
}

     f.reset();
    }
    ngOnDestroy(): void {
        
    }

}
