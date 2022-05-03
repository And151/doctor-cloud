import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { AppointmentsService } from "./appointments.service";
import { CreateAppointmentDto } from "./dto/create-appointment.dto";
import { UpdateAppointmentDto } from "./dto/update-appointment.dto";
import { RolesGuard } from "../../guards/roles.guard";
import { Roles } from "../../decorators/roles.decorators";
import { UserRole } from "../user/models/user.models";
import { ValidationPipe } from "../../pipes/validation.pipe";

@Controller("appointments")
@UseGuards(RolesGuard)
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {
  }

  @Post()
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER)
  create(@Body(new ValidationPipe()) createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentsService.create(createAppointmentDto);
  }

  @Get()
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER)
  findAll(
    @Query("limit") limit?: number,
    @Query("offset") offset?: number
  ) {
    return this.appointmentsService.findAll(limit, offset);
  }

  @Get(":id")
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER)
  findOne(@Param("id") id: string) {
    return this.appointmentsService.findOne(+id);
  }

  @Patch(":id")
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER)
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body(new ValidationPipe()) updateAppointmentDto: UpdateAppointmentDto
  ) {
    return this.appointmentsService.update(id, updateAppointmentDto);
  }

  @Delete(":id")
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER)
  remove(@Param("id") id: string) {
    return this.appointmentsService.remove(+id);
  }
}
