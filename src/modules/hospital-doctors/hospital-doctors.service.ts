import { Injectable } from '@nestjs/common';
import { CreateHospitalDoctorDto } from './dto/create-hospital-doctor.dto';
import { UpdateHospitalDoctorDto } from './dto/update-hospital-doctor.dto';

@Injectable()
export class HospitalDoctorsService {
  create(createHospitalDoctorDto: CreateHospitalDoctorDto) {
    return 'This action adds a new hospitalDoctor';
  }

  findAll() {
    return `This action returns all hospitalDoctors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hospitalDoctor`;
  }

  update(id: number, updateHospitalDoctorDto: UpdateHospitalDoctorDto) {
    return `This action updates a #${id} hospitalDoctor`;
  }

  remove(id: number) {
    return `This action removes a #${id} hospitalDoctor`;
  }
}
