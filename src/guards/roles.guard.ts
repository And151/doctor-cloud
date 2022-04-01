import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { Reflector } from "@nestjs/core";
import { IUserRoles } from "../modules/user/models/user.models";
import { Request } from "express";
import { JwtService } from "@nestjs/jwt";
import { ROLES_METADATA_KEY } from "../constants";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService
  ) {
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<IUserRoles[]>(ROLES_METADATA_KEY, context.getHandler());
    if (!roles) {
      return true;
    }
    const request: Request = context.switchToHttp().getRequest();
    const bearerToken = request.headers.authorization;
    let user;
    try {
      user = this.jwtService.verify(bearerToken.slice(7));
      request.params.user = user;
    } catch (e) {
      throw new UnauthorizedException();
    }
    if (!roles.includes(user.roleId)) {
      throw new UnauthorizedException();
    }
    return true;
  }
}
