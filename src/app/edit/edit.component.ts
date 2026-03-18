import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{

  constructor(private router: ActivatedRoute){}

  ngOnInit(): void {

    let id = this.router.snapshot.paramMap.get('id');
    console.log(id)
    
  }

}
