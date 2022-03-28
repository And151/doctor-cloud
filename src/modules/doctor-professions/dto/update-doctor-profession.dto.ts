import { PartialType } from '@nestjs/swagger';
import { CreateDoctorProfessionDto } from './create-doctor-profession.dto';

export class UpdateDoctorProfessionDto extends PartialType(CreateDoctorProfessionDto) {}
