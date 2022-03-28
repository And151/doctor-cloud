import { TypeOrmModule } from "@nestjs/typeorm";

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    useFactory: async () => {
      return {
        type: "postgres",
        host: process.env.POSTGRES_HOST,
        port: +process.env.POSTGRES_PORT,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        entities: [__dirname + "/../**/*.entity{.ts,.js}"],
        synchronize: true
      };
    }
  })
];

