import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../user/user.service";
import { User } from "../user/entities/user.entity";

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
      return this.generateResponseWithToken(user);
    }
    throw new BadRequestException();
  }

  async refreshAccessToken(accessToken: string) {
    let userPayload: any;
    try {
      userPayload = this.jwtService.decode(accessToken);
      if (!userPayload || !userPayload.id) {
        throw new Error();
      }
    } catch (e) {
      throw new BadRequestException();
    }
    const user = await this.userService.findOne(userPayload.id);
    if (!user) {
      throw new BadRequestException();
    }
    return this.generateResponseWithToken(user);
  }

  private generateResponseWithToken(user: User) {
    return {
      accessToken: this.jwtService.sign({ id: user.id }),
      user: user
    };
  }
}
