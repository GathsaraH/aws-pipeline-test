import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 8081;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(`⛱ Test Project Zea Cloud listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
  });
}
bootstrap();
