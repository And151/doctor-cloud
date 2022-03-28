import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DoctorEducationService } from './doctor-education.service';
import { CreateDoctorEducationDto } from './dto/create-doctor-education.dto';
import { UpdateDoctorEducationDto } from './dto/update-doctor-education.dto';

@Controller('doctor-education')
export class DoctorEducationController {
  constructor(private readonly doctorEducationService: DoctorEducationService) {}

  @Post()
  create(@Body() createDoctorEducationDto: CreateDoctorEducationDto) {
    return this.doctorEducationService.create(createDoctorEducationDto);
  }

  @Get()
  findAll() {
    return this.doctorEducationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorEducationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoctorEducationDto: UpdateDoctorEducationDto) {
    return this.doctorEducationService.update(+id, updateDoctorEducationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorEducationService.remove(+id);
  }
}
