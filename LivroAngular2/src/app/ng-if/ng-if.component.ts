import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

	mostrarNome: boolean = true;

	cursos: string [] = [];

	mostrar(): void {
		this.mostrarNome = !this.mostrarNome;
	}

	getValor(): boolean {
		return this.mostrarNome
	}

	addCurso():void {
		this.cursos.push('Angular 2');
	}

  constructor() { }

  ngOnInit() {
  }

}
