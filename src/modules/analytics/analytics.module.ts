import { Module } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsController } from './analytics.controller';
import { UserModule } from "../user/user.module";
import { HospitalModule } from "../hospital/hospital.module";
import { AppointmentsModule } from "../appointments/appointments.module";

@Module({
  controllers: [AnalyticsController],
  providers: [AnalyticsService],
  imports: [
    UserModule,
    HospitalModule,
    AppointmentsModule
  ]
})
export class AnalyticsModule {}
