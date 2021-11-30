import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DashboardController } from './dashboard.controller';
import { TelemetriaSchema } from './telemetria.model';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Telemetria', schema: TelemetriaSchema}])
    ],
    controllers: [DashboardController]
})
export class DashboardModule {}
