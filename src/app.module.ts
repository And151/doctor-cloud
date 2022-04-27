import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from "./modules/user/user.module";
import { GlobalModule } from "./global.module";
import { AuthModule } from "./modules/auth/auth.module";
import { HospitalModule } from './modules/hospital/hospital.module';
import { HospitalDoctorsModule } from './modules/hospital-doctors/hospital-doctors.module';
import { AppointmentsModule } from './modules/appointments/appointments.module';
import { RolesModule } from './modules/roles/roles.module';
import { UniversityModule } from './modules/university/university.module';
import { DoctorEducationModule } from './modules/doctor-education/doctor-education.module';
import { ProfessionsModule } from './modules/professions/professions.module';
import { DoctorProfessionsModule } from './modules/doctor-professions/doctor-professions.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';

@Module({
  imports: [
    GlobalModule,
    UserModule,
    AuthModule,
    HospitalModule,
    HospitalDoctorsModule,
    AppointmentsModule,
    RolesModule,
    UniversityModule,
    DoctorEducationModule,
    ProfessionsModule,
    DoctorProfessionsModule,
    AnalyticsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
