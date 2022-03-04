import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Grocery } from 'src/app/Models/grocery.model';
import { GroceryService } from 'src/app/Services/grocery.service';

@Component({
  selector: 'app-glist',
  templateUrl: './glist.component.html',
  styleUrls: ['./glist.component.css']
})
export class GListComponent implements OnInit {

  glist:Grocery[]=[];
  count=0;
 
  groceryUpdatedSub:Subscription | undefined=this.groceryService.groceryListUpdatedListener().subscribe((list:Grocery[])=>{
    this.glist=list;
    this.count=this.glist.length;

    console.log(this.glist)
    
   });

  constructor(private groceryService:GroceryService,private router:Router) { }

  ngOnInit(): void {

    this.glist=this.groceryService.getGroceries();
    this.count=this.glist.length;
  
  }
 
onEdit(index:number){
  this.router.navigate(['/']);
  this.groceryService.groceryUpdated.next(index);
  


}

  onDelete(index:number){
    this.groceryService.delete(index);

  }
  ngOnDestroy(): void {
    this.groceryUpdatedSub?.unsubscribe();
}

}
