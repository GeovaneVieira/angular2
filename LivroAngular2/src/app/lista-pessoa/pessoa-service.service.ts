import { Injectable } from '@angular/core';

@Injectable()
export class PessoaServiceService {

	nomesPessoas: string [] = ["Monalisa", "Geovane", "Angular 2"];

  	constructor() { }


	getPessoas(): string [] {
		return this.nomesPessoas;
	}

	setPessoa(nome: string): void {
		this.nomesPessoas.push(nome);
	}
}
