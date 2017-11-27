import { Injectable, Output, EventEmitter } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';

@Injectable()
export class ContatosDataBaseService {

	meusContatos: ContatoModel[] = [];
	@Output() enviarCotato = new EventEmitter();

	constructor() { }

	setContato(novoContato: ContatoModel):void {
		this.meusContatos.push(novoContato);
		this.enviarCotato.emit(this.meusContatos);
	}

	getContato(id: number): ContatoModel {
		let contato: ContatoModel;
		contato = this.meusContatos[id];
		return contato;
	}
}
