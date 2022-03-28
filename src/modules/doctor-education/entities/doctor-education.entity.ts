import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";
import { University } from "../../university/entities/university.entity";

@Entity({
  name: "doctor_education"
})
export class DoctorEducation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => University, university => university.id)
  @JoinColumn({name: "university_id"})
  universityId: number;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({name: "doctor_id"})
  doctorId: number;
}
