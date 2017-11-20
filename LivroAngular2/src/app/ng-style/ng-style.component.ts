import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

	tamanho: number = 20;
	valorFonte: string = 20 + 'px';

	validaTamanho: boolean = false;
	validaCor: boolean = false;


  	constructor() { }

  	ngOnInit() {
	}
	
	incrementar(): void {
		this.tamanho ++;
		this.valorFonte = this.tamanho + 'px';
	}

	mudarTamanho(): void {
		this.validaTamanho = !this.validaTamanho;
	}

	mudarCor(): void {
		this.validaCor = !this.validaCor;
	}

}
