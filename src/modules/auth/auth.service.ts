import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthService {

  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {
  }

  async login(email: string, userPassword: string) {
    const user = await this.userService.getUserByEmail(email);
    if (!user) {
      throw new BadRequestException();
    }
    if (await this.userService.isPasswordsMatched(userPassword, user.password)) {
      delete user.password;
      const {...userObject} = user;
      return {
        jwt: this.jwtService.sign(userObject),
        user: user
      };
    }
    throw new BadRequestException();
  }
}
