import { Module } from '@nestjs/common';
import { DoctorProfessionsService } from './doctor-professions.service';
import { DoctorProfessionsController } from './doctor-professions.controller';

@Module({
  controllers: [DoctorProfessionsController],
  providers: [DoctorProfessionsService]
})
export class DoctorProfessionsModule {}
