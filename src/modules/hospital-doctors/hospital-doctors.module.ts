import { Module } from '@nestjs/common';
import { HospitalDoctorsService } from './hospital-doctors.service';
import { HospitalDoctorsController } from './hospital-doctors.controller';

@Module({
  controllers: [HospitalDoctorsController],
  providers: [HospitalDoctorsService]
})
export class HospitalDoctorsModule {}
