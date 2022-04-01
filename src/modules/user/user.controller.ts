import {
  Body, ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param, ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  UseInterceptors
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { ValidationPipe } from "../../pipes/validation.pipe";
import { RolesGuard } from "../../guards/roles.guard";
import { Roles } from "../../decorators/roles.decorators";
import { UserRole } from "./models/user.models";
import { UpdateResult } from "typeorm";

@Controller("user")
@UseGuards(RolesGuard)
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post()
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  async create(
    @Body(new ValidationPipe()) createUserDto: CreateUserDto
  ) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  findAll() {
    return this.userService.findAll();
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
