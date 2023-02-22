import { Component, OnInit ,Input, OnChanges, SimpleChanges, EventEmitter, Output} from '@angular/core';
import { count } from 'rxjs';
import { Iproduct } from 'src/app/models/iproduct';
import { Storeclass } from 'src/app/models/storeclass';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges{

UserFeedback:number=0;


  //catid: bags =>1,shoes=2
  count=0;
counter(){
  this.count++;
}




  // prdlist:Iproduct={id:20,name:"bags",quantity:20,price:200,categoryid:1,img:"https://i.pinimg.com/236x/51/6c/2b/516c2b1d347fb88d1e78cfe3bb2c38ee.jpg"};
  // ///////////////////////////////////////////////////////////
  prdlist:Iproduct[];
  @Input() recivedCatID:number=0;
  prdlistOfCat:Iproduct[]=[]
  ordertotalprice:number =0;
  
  @Output() TotalPriceChanged:EventEmitter<number>; 
  constructor(){
    this.TotalPriceChanged=new EventEmitter<number>();

    this.prdlist=[{id:19,name:" bag",quantity:1,price:200,categoryid:1,img:"https://i.pinimg.com/236x/51/6c/2b/516c2b1d347fb88d1e78cfe3bb2c38ee.jpg"},
    {id:21,name:"  shoes",quantity:0,price:300,categoryid:2,img:"https://i.pinimg.com/236x/ce/37/5f/ce375fe3b3892069e17ddab49709c43b.jpg"},
    {id:22,name:"  shoes",quantity:1,price:200,categoryid:2,img:"https://i.pinimg.com/236x/bb/7f/12/bb7f121266ef4ca4c2b180640ba66559.jpg"},
    {id:20,name:"  bag",quantity:2,price:190,categoryid:1,img:"https://i.pinimg.com/236x/a6/17/42/a61742c8c7e5d47a63abe45d692924be.jpg"}]
  }
  ngOnChanges(): void {
    this.getProductbyCatID()
  ;



  
  }
 
//class:

// storeclas:Storeclass=new Storeclass('bag',['qena','Aswan','loxour'],'https://i.pinimg.com/236x/a6/17/42/a61742c8c7e5d47a63abe45d692924be.jpg')
showimg:boolean=true;

// showdiv:string="“Thanks for purchasing from our Store” ";
toggleimg(){
  
this.showimg =!this.showimg;

}

 private getProductbyCatID(){
if(this.recivedCatID==0){
this.prdlistOfCat=Array.from(this.prdlist);
return;
}

this.prdlistOfCat=  this.prdlist.filter((prd)=>prd.categoryid==this.recivedCatID);
 }

 UpdateTotalPrice(prdPrice:number,itemsCount:any){



  this.ordertotalprice += (prdPrice* +itemsCount)



  this.TotalPriceChanged.emit(this.ordertotalprice);
 }




 



}

  


  
  
// store:storeclass={name:"bag",branches:["qena","egypt","Aswan"],img:"https://i.pinimg.com/236x/a6/17/42/a61742c8c7e5d47a63abe45d692924be.jpg",clientname:"sozan"}
  // };


