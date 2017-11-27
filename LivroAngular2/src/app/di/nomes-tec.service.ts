import { Injectable, Optional } from '@angular/core';
import { MeuLogService } from './meu-log.service';

@Injectable()
export class NomesTecService {

	constructor(@Optional() private meulog: MeuLogService) { 
	}

	getNomesTec(): string [] {
		if (this.meulog) {
			this.meulog.setLog('Consultou o array de tecnologias');
		}
		return ['Angular 2', 'JavaScript', 'TypeScript', 'HTML', 'CSS'];  
	}
}
