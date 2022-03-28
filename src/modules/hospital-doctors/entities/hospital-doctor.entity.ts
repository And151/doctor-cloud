import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Hospital } from "../../hospital/entities/hospital.entity";
import { User } from "../../user/entities/user.entity";

@Entity({
  name: "hospital_doctors"
})
export class HospitalDoctor {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Hospital, hospital => hospital.id)
  @JoinColumn({name: "hospital_id"})
  hospitalId: number;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({name: "doctor_id"})
  doctorId: number;
}
