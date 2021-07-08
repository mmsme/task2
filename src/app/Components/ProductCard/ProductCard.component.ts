import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ProductCard',
  templateUrl: './ProductCard.component.html',
  styleUrls: ['./ProductCard.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
