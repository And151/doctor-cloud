import { Global, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule } from "@nestjs/config";
import { databaseProviders } from "../config/database.providers";

@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async () => {
        return {
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: "10h" }
        };
      }
    }),
    ConfigModule.forRoot({
      envFilePath: `./config/.${process.argv[2]}.env`,
      isGlobal: true
    }),
    ...databaseProviders
  ],
  exports: [
    JwtModule,
    ConfigModule
  ]
})
export class GlobalModule {
}
