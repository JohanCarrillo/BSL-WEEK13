import { Injectable } from '@nestjs/common';
import { Ikitten } from './kittens.interface';

@Injectable()
export class KittensService {
	getKittens(queries): string {
		return JSON.stringify({
			name: 'getKittens',
			...queries,
		});
	}

	postKittens(body): string {
		return JSON.stringify({
			name: 'postKitten',
			...body,
		});
	}

	PutKittens(param): string {
		return JSON.stringify({
			name: 'putKittens',
			...param,
			infoBodyPust: 'jsonEnviadoEnElBody',
		});
	}

	deleteKittens(id: string): string {
		return JSON.stringify({
			name: 'deleteKittens',
			kittenID: id,
		});
	}
}
