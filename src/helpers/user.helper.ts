import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";

const saltOrRounds = 10;

@Injectable()
export class UserHelper {

  hashPassword(password): Promise<string> {
    return bcrypt.hash(password, saltOrRounds);
  }

  isPasswordMatch(password, hash): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

}
