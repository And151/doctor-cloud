import { Module } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsController } from './analytics.controller';
import { UserModule } from "../user/user.module";
import { HospitalModule } from "../hospital/hospital.module";

@Module({
  controllers: [AnalyticsController],
  providers: [AnalyticsService],
  imports: [
    UserModule,
    HospitalModule
  ]
})
export class AnalyticsModule {}
