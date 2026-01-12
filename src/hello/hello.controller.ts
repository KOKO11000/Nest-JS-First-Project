import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
    @Get()
    getHello(): string {
        return `Hello Netanel Ozeri Welcome to Nest JS!!!`
    }
}
