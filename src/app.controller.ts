import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { Public } from './auth/auth.decorator';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService, private user: UsersService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('token')
  async autorizationByToken(@Request() req) {
    return this.user.getById(req.user.id);
  }
}
