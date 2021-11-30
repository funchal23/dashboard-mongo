import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/telemetria', {
    autoCreate: true
  }), DashboardModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
