import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
  NotFoundException, BadRequestException
} from "@nestjs/common";
import { HospitalService } from "./hospital.service";
import { CreateHospitalDto } from "./dto/create-hospital.dto";
import { UpdateHospitalDto } from "./dto/update-hospital.dto";
import { RolesGuard } from "../../guards/roles.guard";
import { Roles } from "../../decorators/roles.decorators";
import { UserRole } from "../user/models/user.models";
import { ValidationPipe } from "../../pipes/validation.pipe";
import { User } from "../user/entities/user.entity";

@Controller("hospital")
@UseGuards(RolesGuard)
export class HospitalController {
  constructor(private readonly hospitalService: HospitalService) {
  }

  @Post()
  @Roles(UserRole.SUPER_ADMIN)
  create(
    @Body(new ValidationPipe()) createHospitalDto: CreateHospitalDto,
    @Param("user") user: User
  ) {
    createHospitalDto.createdBy = user.id;
    return this.hospitalService.create(createHospitalDto);
  }

  @Get()
  findAll() {
    return this.hospitalService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    const hospital = await this.hospitalService.findOne(id);
    if (!hospital) {
      throw new NotFoundException();
    }
    return hospital;
  }

  @Patch(":id")
  @Roles(UserRole.SUPER_ADMIN)
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateHospitalDto: UpdateHospitalDto,
    @Param("user") user: User
  ) {
    updateHospitalDto.updatedBy = user.id;
    const res = await this.hospitalService.update(id, updateHospitalDto);
    if (res?.affected) {
      return true;
    } else {
      throw new BadRequestException();
    }
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.hospitalService.remove(id);
  }
}
