import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://kpeqplsx:wIzuNk5h10IDQ_5D_kwzfZv_fwZfHtwi@jackal.rmq.cloudamqp.com/kpeqplsx'],
      queue: 'telemetria_queue',
      queueOptions: {
        durable: false
      },
    },
  });

  app.listen();
}
bootstrap();
