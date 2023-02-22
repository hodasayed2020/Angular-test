import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Icategory } from 'src/app/models/icategory';
import { ProductComponent } from '../product/product.component';




@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.scss']
})
export class OrderParentComponent implements AfterViewInit {
catlist:Icategory[]
selectedCatID:number=0;
receivedTotalPrice:number=0
receivedname:number=0
// @ViewChild('UserName')user!:ElementRef;

@ViewChild(ProductComponent)productRef!:ProductComponent;


constructor(){
  this.catlist =[{id:1,name:"bag"},{id:2,name:"shoes"}]

}
  ngAfterViewInit(): void {
  // this.user.nativeElement.value="hello"  ;
console.log(this.productRef.prdlistOfCat);



  }

OnTotalPrice(TotalPrice:number){
this.receivedTotalPrice=TotalPrice;
}

GetArray(){
  console.log(this.productRef.prdlistOfCat);
  
}

}
