import { PartialType } from '@nestjs/swagger';
import { CreateDoctorEducationDto } from './create-doctor-education.dto';

export class UpdateDoctorEducationDto extends PartialType(CreateDoctorEducationDto) {}
