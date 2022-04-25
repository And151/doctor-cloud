import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateHospitalDoctorDto } from "./dto/create-hospital-doctor.dto";
import { UpdateHospitalDoctorDto } from "./dto/update-hospital-doctor.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { HospitalDoctor } from "./entities/hospital-doctor.entity";
import { Repository } from "typeorm/repository/Repository";
import { HospitalService } from "../hospital/hospital.service";
import { UserService } from "../user/user.service";
import { UserTypes } from "../user/models/user.models";
import { In } from "typeorm";

@Injectable()
export class HospitalDoctorsService {

  constructor(
    @InjectRepository(HospitalDoctor)
    private hospitalDoctorRepo: Repository<HospitalDoctor>,
    private hospitalService: HospitalService,
    private userService: UserService
  ) {
  }

  async create(createHospitalDoctorDto: CreateHospitalDoctorDto) {
    const hospital = await this.hospitalService.findOne(createHospitalDoctorDto.hospitalId);
    const doctor = await this.userService.findOne(createHospitalDoctorDto.userId);
    if (!hospital || !doctor || doctor.type !== UserTypes.DOCTOR) {
      throw new BadRequestException();
    }
    return this.hospitalDoctorRepo.save(createHospitalDoctorDto);
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

  remove(hospitalIds: number[], userId: number) {
    return this.hospitalDoctorRepo.delete({
      userId,
      hospitalId: In(hospitalIds)
    });
  }
}
