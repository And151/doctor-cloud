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
  Query,
  UseGuards
} from "@nestjs/common";
import { AppointmentsService } from "./appointments.service";
import { CreateAppointmentDto } from "./dto/create-appointment.dto";
import { UpdateAppointmentDto } from "./dto/update-appointment.dto";
import { RolesGuard } from "../../guards/roles.guard";
import { Roles } from "../../decorators/roles.decorators";
import { UserRole, UserTypes } from "../user/models/user.models";
import { ValidationPipe } from "../../pipes/validation.pipe";
import { User } from "../user/entities/user.entity";

@Controller("appointments")
@UseGuards(RolesGuard)
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {
  }

  @Post()
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER)
  create(@Body(new ValidationPipe()) createAppointmentDto: CreateAppointmentDto) {
    createAppointmentDto.is_approved = false;
    return this.appointmentsService.create(createAppointmentDto);
  }

  @Get("doctor")
  @Roles(UserRole.USER)
  async findDoctorAppointments(
    @Param("user") user: User
  ) {
    const res = await this.appointmentsService.findDoctorAppointments(user.id);
    // @ts-ignore
    return res.filter(item => item.doctor.id === user.id);
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
  async findOne(@Param("id") id: string) {
    const res = await this.appointmentsService.findOne(+id);
    if (res?.length) {
      return res[0];
    } else {
      throw new NotFoundException();
    }
  }

  @Patch(":id")
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER)
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body(new ValidationPipe()) updateAppointmentDto: UpdateAppointmentDto,
    @Param("user") user: User
  ) {
    if (user.type === UserTypes.USER) {
      throw new BadRequestException();
    }
    return this.appointmentsService.update(id, updateAppointmentDto);
  }

  @Delete(":id")
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER)
  remove(@Param("id") id: string) {
    return this.appointmentsService.remove(+id);
  }
}
