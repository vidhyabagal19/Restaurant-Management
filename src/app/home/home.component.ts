import { Component } from '@angular/core';
import { CafeService } from '../cafe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  myForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cafeService: CafeService,
  ) {
    this.myForm = this.fb.group({
      id: ['', Validators.required],
      photo: ['', [Validators.required]],
      name: ['', Validators.required],
      price: ['', Validators.required],
      menutype: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  data: any[] = [];
  filteredData: any[] = [...this.data];

  getItem() {
    this.data = this.cafeService.getItem();
    this.filteredData = this.data;
  }

  addItem() {
    console.log(this.myForm.value);
    if (this.myForm.valid) {
      this.data = this.cafeService.addItem(this.myForm.value);
      this.filteredData = this.data;
      this.myForm.reset();
    } else {
      console.log('Invalid Details');
    }
  }

  editItem(id:string){
    this.router.navigate(['edit', id])
    let data = this.filteredData.find(item => item.id == id)
    console.log(data)
    this.myForm.setValue(data)
  }

  deleteItem(id: number) {
    this.data = this.cafeService.deleteItem(id);
    this.filteredData = this.data;
  }

  isVeg = false;
  isNonVeg = false;

  filterVeg() {
    this.getItem();
    this.filteredData = this.data.filter(items => {
      if(this.isVeg && this.isNonVeg){
        return true
      } else if(this.isVeg){
        return items.category == 1
      } else if(this.isNonVeg){
        return items.category == 2
      } else {
        return true;
      }
    });
     
  }

  searchF = '';

  searchItem() {
    this.getItem();
    let text = this.searchF.trim().toLowerCase();
    console.log(text);

    if (text == '') {
      console.log('empty state');
      this.filteredData = this.data;
      return;
    }

    console.log(this.filteredData);
    this.filteredData = this.data.filter((items) =>
      items.name.trim().toLowerCase().includes(text),
    );

    console.log(this.filteredData);
  }

  filterMenuType(type: string) {
    this.data = this.cafeService.filterMenuType(type);
    this.filteredData = this.data;
  }



  updateItem(){
    this.data=this.cafeService.updateItem(this.myForm.value);
    this.filteredData = this.data;
  }
}



