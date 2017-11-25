import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-event-binding',
	templateUrl: './event-binding.component.html',
	styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

	habilitarBotao: boolean = false;
	valores: string[] = [];
	idade:number = 0;

	constructor() { }

	ngOnInit() {
	}

	meuClick(): void {
		console.log('Evento click do botão');
	}

	digitou($event): void {
		console.log($event);
	}

	digitouVarTemplate(valor): void {
		console.log(valor);
	}

	validaSenha(valor: string): void {
		if (valor.length >= 5) {
			this.habilitarBotao = true;
		}
		else {
			this.habilitarBotao = false;
		}
	}

	gravarSenha(senha: string): void {
		alert ('Senha gravada com sucesso. Sua senha é:' + senha);
	}

	adicionar(valor: string): void {
		this.valores.push(valor);
	}

	verIdade(valor): void {
		let ano = new Date();
		this.idade = ano.getFullYear()-valor;
	}
}
