import { Injectable } from "@nestjs/common";
import { CreateUniversityDto } from "./dto/create-university.dto";
import { UpdateUniversityDto } from "./dto/update-university.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { University } from "./entities/university.entity";
import { Repository } from "typeorm/repository/Repository";

@Injectable()
export class UniversityService {

  constructor(
    @InjectRepository(University)
    private universityRepository: Repository<University>
  ) {
  }

  create(createUniversityDto: CreateUniversityDto) {
    return this.universityRepository.create(createUniversityDto);
  }

  findAll() {
    return this.universityRepository.find();
  }

  findOne(id: number) {
    return this.universityRepository.findOneById(id);
  }

  update(id: number, updateUniversityDto: UpdateUniversityDto) {
    return this.universityRepository.update(id, updateUniversityDto);
  }

  remove(id: number) {
    return this.universityRepository.delete(id);
  }
}
