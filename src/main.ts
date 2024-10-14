import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3331, ()=>{
    console.log('Backen-1 started on port 3331');
  });
}
bootstrap();
