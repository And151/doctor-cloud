import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserHelper } from "../../helpers/user.helper";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  controllers: [
    UserController
  ],
  providers: [
    UserService,
    UserHelper
  ],
  exports: [
    UserService
  ]
})
export class UserModule {
}
