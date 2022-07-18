import { Controller, Delete, Get, HttpCode, Post, Put } from '@nestjs/common';
import { KittensService } from './kittens.service';

@Controller('kittens')
export class KittensController {
	constructor(private readonly kittensService: KittensService) {}

	@Get()
	@HttpCode(200)
	getKittens() {
		return this.kittensService.getKittens();
	}

	@Post()
	@HttpCode(201)
	postKittens() {
		return this.kittensService.postKittens();
	}

	@Put()
	@HttpCode(200)
	putKittens() {
		return this.kittensService.PutKittens();
	}

	@Delete()
	@HttpCode(200)
	deleteKittens() {
		return this.kittensService.deleteKittens();
	}
}
