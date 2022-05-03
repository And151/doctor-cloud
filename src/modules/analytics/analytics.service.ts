import { Injectable } from '@nestjs/common';
import { CreateAnalyticsDto } from './dto/create-analytics.dto';
import { UpdateAnalyticsDto } from './dto/update-analytics.dto';
import { HospitalService } from "../hospital/hospital.service";
import { UserService } from "../user/user.service";
import { AppointmentsService } from "../appointments/appointments.service";

@Injectable()
export class AnalyticsService {
  constructor(
    private hospitalService: HospitalService,
    private userService: UserService,
    private appointmentService: AppointmentsService
  ) {
  }

  create(createAnalyticsDto: CreateAnalyticsDto) {
    return 'This action adds a new analytics';
  }

  findAll() {
    return `This action returns all analytics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} analytics`;
  }

  update(id: number, updateAnalyticsDto: UpdateAnalyticsDto) {
    return `This action updates a #${id} analytics`;
  }

  remove(id: number) {
    return `This action removes a #${id} analytics`;
  }

  async getStats() {
    const hospitalsCount = await this.hospitalService.count();
    const doctorsCount = await this.userService.doctorsCount();
    const patientsCount = await this.userService.patientsCount();
    const bookedAppointmentsCount = await this.appointmentService.count();
    return {
      hospitalsCount,
      doctorsCount,
      patientsCount,
      bookedAppointmentsCount
    }
  }
}
