import { Injectable } from '@nestjs/common';
import { CreateDoctorProfessionDto } from './dto/create-doctor-profession.dto';
import { UpdateDoctorProfessionDto } from './dto/update-doctor-profession.dto';

@Injectable()
export class DoctorProfessionsService {
  create(createDoctorProfessionDto: CreateDoctorProfessionDto) {
    return 'This action adds a new doctorProfession';
  }

  findAll() {
    return `This action returns all doctorProfessions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} doctorProfession`;
  }

  update(id: number, updateDoctorProfessionDto: UpdateDoctorProfessionDto) {
    return `This action updates a #${id} doctorProfession`;
  }

  remove(id: number) {
    return `This action removes a #${id} doctorProfession`;
  }
}
