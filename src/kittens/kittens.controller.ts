import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	Query,
} from '@nestjs/common';
import { KittensService } from './kittens.service';

@Controller()
export class KittensController {
	constructor(private readonly kittensService: KittensService) {}

	@Get('/getKittens')
	@HttpCode(200)
	getKittens(@Query() query): string {
		return this.kittensService.getKittens(query);
	}

	@Post('/postKitten')
	@HttpCode(201)
	postKittens(@Body() body): string {
		return this.kittensService.postKittens(body);
	}

	@Put('/putKitten/:queryEjemploPut')
	@HttpCode(200)
	putKittens(@Param() param): string {
		return this.kittensService.PutKittens(param);
	}

	@Delete('/deleteKitten/:id')
	@HttpCode(200)
	deleteKittens(@Param('id') id): string {
		return this.kittensService.deleteKittens(id);
	}
}
