import { UserType } from '@prisma/client';
import * as bcrypt from 'bcryptjs'
import { Body, Controller, Param, Post, UnauthorizedException } from '@nestjs/common';

import { AuthService } from './auth.service';
import { GenerateProductKeyDto, SigninDto, SignupDto } from '../dtos/auth.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/signup/:userType')
  async signup(@Body() body: SignupDto, @Param('userType') userType: UserType,) {

    if (userType !== UserType.CONTRIBUTOR) {
      if (!body.productKey) {
        throw new UnauthorizedException()
      }
      const validProductKey = `${body.email}-${userType}-${process.env.PRODUCT_KEY_SECRET}`

      const isValidProductKey = await bcrypt.compare(validProductKey, body.productKey)

      if (!isValidProductKey) {
        throw new UnauthorizedException()
      }
    }

    return this.authService.signup(body, userType)
  }

  @Post('/signin')
  sugnin(@Body() body: SigninDto) {
    return this.authService.signin(body)
  }

  // UserTypeをCONTRIBUTOR以外でサインアップする時にkeyを作る必要がある
  @Post('/key')
  generateProductKey(@Body() { email, userType }: GenerateProductKeyDto) {
    return this.authService.generateProductKey(email, userType)
  }
}
