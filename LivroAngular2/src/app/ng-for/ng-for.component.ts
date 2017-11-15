import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

	pessoas: any[] = [
		{id: 1, nome:'Monalisa'}, 
		{id: 2, nome:'Geovane'}, 
		{id: 3, nome:'Lídia'}, 
		{id: 4, nome:'José'}
	]

	meuSave(index:number, pessoa:any) {
		return pessoa.id
	}

	atualizar() {
		this.pessoas = [
			{id: 1, nome:'Monalisa'}, 
			{id: 2, nome:'Geovane'}, 
			{id: 3, nome:'Lídia'}, 
			{id: 4, nome:'José'},
			{id: 5, nome:'Cida'}
		]
	
	}

	constructor() { }

  	ngOnInit() {
  	}

}
