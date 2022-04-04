import { OmitType } from "@nestjs/swagger";
import { HospitalDoctor } from "../entities/hospital-doctor.entity";

export class CreateHospitalDoctorDto extends OmitType(HospitalDoctor, ["id"]) {
}
