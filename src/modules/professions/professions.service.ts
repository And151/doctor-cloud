import { Injectable } from '@nestjs/common';
import { CreateProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';

@Injectable()
export class ProfessionsService {
  create(createProfessionDto: CreateProfessionDto) {
    return 'This action adds a new profession';
  }

  findAll() {
    return `This action returns all professions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profession`;
  }

  update(id: number, updateProfessionDto: UpdateProfessionDto) {
    return `This action updates a #${id} profession`;
  }

  remove(id: number) {
    return `This action removes a #${id} profession`;
  }
}
