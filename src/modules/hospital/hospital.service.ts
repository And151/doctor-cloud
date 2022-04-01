import { Injectable } from "@nestjs/common";
import { CreateHospitalDto } from "./dto/create-hospital.dto";
import { UpdateHospitalDto } from "./dto/update-hospital.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm/repository/Repository";
import { Hospital } from "./entities/hospital.entity";

@Injectable()
export class HospitalService {
  constructor(
    @InjectRepository(Hospital)
    private hospitalRepository: Repository<Hospital>
  ) {
  }

  create(createHospitalDto: CreateHospitalDto) {
    return this.hospitalRepository.save(createHospitalDto);
  }

  findAll() {
    return this.hospitalRepository.find();
  }

  findOne(id: number) {
    return this.hospitalRepository.findOneById(id);
  }

  update(id: number, updateHospitalDto: UpdateHospitalDto) {
    return this.hospitalRepository.update(id, updateHospitalDto);
  }

  remove(id: number) {
    return `This action removes a #${id} hospital`;
  }
}
