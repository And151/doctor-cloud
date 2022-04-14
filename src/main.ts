import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";

const corsOptions: CorsOptions = {
  allowedHeaders: '*',
  origin: 'http://localhost:4200',
  credentials: true,
  methods: ['POST', 'GET', 'PATCH', 'PUT', 'DELETE']
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions);
  await app.listen(8080);
}

bootstrap();
