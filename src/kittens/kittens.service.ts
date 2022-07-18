import { Injectable } from '@nestjs/common';
import { Ikitten } from './kittens.interface';

@Injectable()
export class KittensService {
  getKittens(): Ikitten {
    return { name: 'getKittens' };
  }

  postKittens(): Ikitten {
    return { name: 'postKittens' };
  }

  PutKittens(): Ikitten {
    return { name: 'putKittens' };
  }

  deleteKittens(): Ikitten {
    return { name: 'deleteKittens' };
  }
}
