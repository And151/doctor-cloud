import { Module } from "@nestjs/common";
import { HospitalService } from "./hospital.service";
import { HospitalController } from "./hospital.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Hospital } from "./entities/hospital.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Hospital])
  ],
  controllers: [
    HospitalController
  ],
  providers: [
    HospitalService
  ],
  exports: [
    HospitalService
  ]
})
export class HospitalModule {
}
