import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HospitalDoctorsService } from './hospital-doctors.service';
import { CreateHospitalDoctorDto } from './dto/create-hospital-doctor.dto';
import { UpdateHospitalDoctorDto } from './dto/update-hospital-doctor.dto';

@Controller('hospital-doctors')
export class HospitalDoctorsController {
  constructor(private readonly hospitalDoctorsService: HospitalDoctorsService) {}

  @Post()
  create(@Body() createHospitalDoctorDto: CreateHospitalDoctorDto) {
    return this.hospitalDoctorsService.create(createHospitalDoctorDto);
  }

  @Get()
  findAll() {
    return this.hospitalDoctorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hospitalDoctorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHospitalDoctorDto: UpdateHospitalDoctorDto) {
    return this.hospitalDoctorsService.update(+id, updateHospitalDoctorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hospitalDoctorsService.remove(+id);
  }
}
