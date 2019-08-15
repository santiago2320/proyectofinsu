import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-home-comprador',
  templateUrl: './home-comprador.component.html',
  styleUrls: ['./home-comprador.component.css']
})
export class HomeCompradorComponent implements OnInit {

	minValue: number = 0;
	maxValue: number = 2000000;
	labelValue: string;
	options: Options = {
	  floor: 0,
	  ceil: 4000000,
	  step: 10000,
	  enforceStep: false,
	  enforceRange: false,
	  getSelectionBarColor: (value: number): string => {
	   return '#FC9A0D';
	 },
	 getPointerColor: (value: number): string => {        
	     return '#FC9A0D';
	 }
	};

  constructor() { }

  ngOnInit() {
  	this.actualizarLabel();
  }

  actualizarLabel(){
    this.labelValue="Precio $" + this.maxValue;
  }

}
