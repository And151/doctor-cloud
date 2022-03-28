import { PartialType } from '@nestjs/swagger';
import { CreateHospitalDoctorDto } from './create-hospital-doctor.dto';

export class UpdateHospitalDoctorDto extends PartialType(CreateHospitalDoctorDto) {}
