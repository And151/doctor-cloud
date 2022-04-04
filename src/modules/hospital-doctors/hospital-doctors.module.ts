import { Module } from '@nestjs/common';
import { HospitalDoctorsService } from './hospital-doctors.service';
import { HospitalDoctorsController } from './hospital-doctors.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { HospitalDoctor } from "./entities/hospital-doctor.entity";
import { UserModule } from "../user/user.module";
import { HospitalModule } from "../hospital/hospital.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([HospitalDoctor]),
    UserModule,
    HospitalModule
  ],
  controllers: [
    HospitalDoctorsController
  ],
  providers: [
    HospitalDoctorsService
  ]
})
export class HospitalDoctorsModule {}
