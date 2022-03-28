import { Module } from '@nestjs/common';
import { DoctorEducationService } from './doctor-education.service';
import { DoctorEducationController } from './doctor-education.controller';

@Module({
  controllers: [DoctorEducationController],
  providers: [DoctorEducationService]
})
export class DoctorEducationModule {}
