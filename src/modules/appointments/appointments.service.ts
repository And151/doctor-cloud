import { Injectable } from "@nestjs/common";
import { CreateAppointmentDto } from "./dto/create-appointment.dto";
import { UpdateAppointmentDto } from "./dto/update-appointment.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Appointment } from "./entities/appointment.entity";
import { Repository } from "typeorm/repository/Repository";

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepo: Repository<Appointment>
  ) {
  }

  create(createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentRepo.save(createAppointmentDto);
  }

  findAll(limit?: number, offset?: number) {
    return this.appointmentRepo.find({
      skip: offset,
      take: limit,
      relations: ["doctor", "user", "hospital"]
    });
  }

  findDoctorAppointments(id: number) {
    return this.appointmentRepo.find({
      where: {
        doctor: id,
      },
      relations: ["doctor", "user", "hospital"]
    });
  }

  findOne(id: number) {
    return this.appointmentRepo.find({
      where: {
        id
      },
      relations: ["doctor", "user", "hospital"]
    });
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return this.appointmentRepo.update(id, updateAppointmentDto);
  }

  remove(id: number) {
    return this.appointmentRepo.delete(id);
  }

  count() {
    return this.appointmentRepo.count();
  }
}
