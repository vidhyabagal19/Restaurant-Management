import { Injectable } from '@angular/core';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  newData:any []=[
  {
    "id": 1,
    "photo": "assets/pasta1.jpg",
    "name": "Pasta",
    "price": 180,
    "menutype": "snacks",
    "category": 1
  },
  {
    "id": 2,
    "photo": "assets/pizzaveg.jpg",
    "name": "Pizza",
    "price": 250,
    "menutype": "snacks",
    "category": 1
  },
  {
    "id": 3,
    "photo": "assets/coldcoffee.jpg",
    "name": "Cold-Coffee",
    "price": 120,
    "menutype": "beverages",
    "category": 1
  },
  {
    "id": 4,
    "photo": "assets/nburger.jpg",
    "name": "Chicken Burger",
    "price": 220,
    "menutype": "snacks",
    "category": 2
  },
  {
    "id": 5,
    "photo": "assets/rich-chocolate-brownie.jpg",
    "name": "Brownie",
    "price": 90,
    "menutype": "desserts",
    "category": 1
  },
  {
    "id": 6,
    "photo": "assets/hot coffee.jpg",
    "name": "Hot Coffee",
    "price": 150,
    "menutype": "beverages",
    "category": 1
  }
];

newData2: any []=[...this.newData];

  constructor() { }


  getItem() {
    return this.newData;
  
  }

  addItem(food: any) {
    this.newData.push(food);
    return this.newData;
  }

  deleteItem(id: number) {
    let index = this.newData.findIndex((item) => item.id == id);
    this.newData.splice(index, 1);
    return this.newData;
  }

  filterMenuType(type: string){
    return this.newData.filter(
    (item) => item.menutype.toLowerCase() === type.toLowerCase()
  );}

  updateItem(updtValue:any){
    let index = this.newData.findIndex((i) => i.id == updtValue.id)
    this.newData[index]= updtValue;
    return this.newData
  }
}
