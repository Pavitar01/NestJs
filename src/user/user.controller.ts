/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Post, Res, Req, HttpStatus } from '@nestjs/common';
import { Header, HttpCode } from '@nestjs/common/decorators/http';
import { Request } from 'express';
@Controller('user')
export class UserController {
  @Post()
  @HttpCode(HttpStatus.OK) //status setting
  @Header('key', 'values') //header setting
  addUser(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ): string {
    // console.log(req);
    return 'hello';
  }
}
