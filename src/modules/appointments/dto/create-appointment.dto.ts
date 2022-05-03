import { OmitType } from "@nestjs/swagger";
import { Appointment } from "../entities/appointment.entity";

export class CreateAppointmentDto extends OmitType(Appointment, ['id']) {}
