import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UnauthorizedException,
  UseGuards
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { ValidationPipe } from "../../pipes/validation.pipe";
import { RolesGuard } from "../../guards/roles.guard";
import { Roles } from "../../decorators/roles.decorators";
import { UserRole, UserTypes } from "./models/user.models";
import { UpdateResult } from "typeorm";
import { RegisterUserDto } from "./dto/register-user.dto";
import { randomUUID } from "crypto";
import { SuccessHttpCode } from "../../http-codes/success.http-code";

@Controller("user")
@UseGuards(RolesGuard)
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get("current")
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.USER)
  async getByToken(@Param("user") user: { id: number; roleId: number }) {
    if (!user || !user.id) {
      throw new UnauthorizedException();
    }
    return this.userService.findOne(+user.id);
  }

  @Post()
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  async create(
    @Body(new ValidationPipe()) createUserDto: CreateUserDto
  ) {
    return await this.userService.create(createUserDto);
  }

  @Post("/register")
  async register(
    @Body(new ValidationPipe()) registerUserDto: RegisterUserDto
  ) {
    registerUserDto.type = UserTypes.USER;
    registerUserDto.roleId = UserRole.USER;
    registerUserDto.isApproved = false;
    registerUserDto.confirmationCode = randomUUID();
    const user = await this.userService.register(registerUserDto);
    if (user?.id) {
      const emailRes = await this.userService.sendApprovalEmail(user.email, user.confirmationCode);
      console.log(emailRes);
      if (emailRes) {
        return SuccessHttpCode.emailSent();
      } else {
        console.log('delete');
        await this.userService.remove(user.id);
        console.log('deleted');
        throw new BadRequestException("Not Registered.");
      }
    } else {
      throw new BadRequestException("Not Registered.");
    }
  }

  @Get()
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  findAll() {
    return this.userService.findAll();
  }

  @Get("/doctors")
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.USER)
  findAllDoctors() {
    return this.userService.findAllDoctors();
  }

  @Get("/doctors/:id")
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.USER)
  async findDoctor(@Param("id", ParseIntPipe) id: number) {
    const user: User = await this.userService.findOne(id);
    if (user.type !== UserTypes.DOCTOR || user.roleId !== UserRole.USER) {
      throw new NotFoundException();
    }
    return user;
  }

  @Get(":id")
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  async findOne(@Param("id", ParseIntPipe) id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Patch(":id")
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body(new ValidationPipe()) updateUserDto: UpdateUserDto) {
    const res: UpdateResult = await this.userService.update(id, updateUserDto);
    if (!res.affected) {
      throw new NotFoundException();
    }
    return true;
  }

  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number) {
    const result = await this.userService.remove(id);
    console.log(result);
    if (!result.raw) {
      throw new NotFoundException();
    }
    return result;
  }
}
