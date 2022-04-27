import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from "@nestjs/common";
import { HospitalDoctorsService } from "./hospital-doctors.service";
import { CreateHospitalDoctorDto } from "./dto/create-hospital-doctor.dto";
import { UpdateHospitalDoctorDto } from "./dto/update-hospital-doctor.dto";
import { RolesGuard } from "../../guards/roles.guard";
import { Roles } from "../../decorators/roles.decorators";
import { UserRole } from "../user/models/user.models";

@Controller("hospital-doctors")
@UseGuards(RolesGuard)
export class HospitalDoctorsController {
  constructor(private readonly hospitalDoctorsService: HospitalDoctorsService) {
  }

  @Post()
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  create(@Body() createHospitalDoctorDto: CreateHospitalDoctorDto) {
    return this.hospitalDoctorsService.create(createHospitalDoctorDto);
  }

  @Get()
  findAll() {
    return this.hospitalDoctorsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.hospitalDoctorsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateHospitalDoctorDto: UpdateHospitalDoctorDto) {
    return this.hospitalDoctorsService.update(+id, updateHospitalDoctorDto);
  }

  @Delete(":userId")
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  async remove(
    @Param("userId", ParseIntPipe) userId: number,
    @Body("hospitalIds") hospitalIds: number[]
  ) {
    const res = await this.hospitalDoctorsService.remove(hospitalIds, userId);
    return !!res.affected;
  }
}
