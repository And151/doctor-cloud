import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserRoleName } from "../../user/models/user.models";

@Entity({
  name: "roles"
})
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: UserRoleName,
    default: UserRoleName.USER
  })
  name: string;
}
