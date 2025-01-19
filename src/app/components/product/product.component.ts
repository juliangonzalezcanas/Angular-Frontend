import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  id: number;
  price: number;
  name: string;
  img: string;

  
  constructor(){
    this.id = 0;
    this.price = 0;
    this.name = '';
    this.img = ''
  }


}
