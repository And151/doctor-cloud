import { Injectable } from '@nestjs/common';
import { CreateDoctorEducationDto } from './dto/create-doctor-education.dto';
import { UpdateDoctorEducationDto } from './dto/update-doctor-education.dto';

@Injectable()
export class DoctorEducationService {
  create(createDoctorEducationDto: CreateDoctorEducationDto) {
    return 'This action adds a new doctorEducation';
  }

  findAll() {
    return `This action returns all doctorEducation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} doctorEducation`;
  }

  update(id: number, updateDoctorEducationDto: UpdateDoctorEducationDto) {
    return `This action updates a #${id} doctorEducation`;
  }

  remove(id: number) {
    return `This action removes a #${id} doctorEducation`;
  }
}
