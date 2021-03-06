import { NestFactory } from "@nestjs/core";

import { AppModule } from "@/app.module";
import { PrismaService } from "@/prisma.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);
  app.enableCors();
  await app.listen(3300);
}
bootstrap();
