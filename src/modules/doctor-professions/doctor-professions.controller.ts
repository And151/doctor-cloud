import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DoctorProfessionsService } from './doctor-professions.service';
import { CreateDoctorProfessionDto } from './dto/create-doctor-profession.dto';
import { UpdateDoctorProfessionDto } from './dto/update-doctor-profession.dto';

@Controller('doctor-professions')
export class DoctorProfessionsController {
  constructor(private readonly doctorProfessionsService: DoctorProfessionsService) {}

  @Post()
  create(@Body() createDoctorProfessionDto: CreateDoctorProfessionDto) {
    return this.doctorProfessionsService.create(createDoctorProfessionDto);
  }

  @Get()
  findAll() {
    return this.doctorProfessionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorProfessionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoctorProfessionDto: UpdateDoctorProfessionDto) {
    return this.doctorProfessionsService.update(+id, updateDoctorProfessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorProfessionsService.remove(+id);
  }
}
