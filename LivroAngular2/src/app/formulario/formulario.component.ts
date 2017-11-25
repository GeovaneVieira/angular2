import { Component, OnInit } from '@angular/core';
import { Contatos } from './contatos';

@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	contato: Contatos = new Contatos('Geovane', '(32)1111-1111', 'contato@email.com');

	constructor() { }

	ngOnInit() {
	}

	enviarDados() {
		alert(`Seu nome é: ${this.contato.nome}`);
		alert(`Seu telefone é: ${this.contato.telefone}`);
		alert(`Seu e-mail é: ${this.contato.email}`);
	}
}
