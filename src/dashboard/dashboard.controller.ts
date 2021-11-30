import { Controller, Get, Injectable } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Telemetria, TelemetriaDocument } from './telemetria.model';

@Controller('dashboard')
export class DashboardController {

    constructor(
        @InjectModel(Telemetria.name) private readonly model: Model<TelemetriaDocument>
    ){}

    @Get()
    retornaTelemetrias(){
        return this.all();
    }

    @EventPattern('telemetria')
    async salvar(telemetria: any){
        await this.create({
            speed: telemetria.speed,
            drs: telemetria.drs,
            gear: telemetria.gear,
            brake: telemetria.brake,
            engineRPM: telemetria.engineRPM,
            steer: telemetria.steer,
            throttle: telemetria.throttle,
            engineTemperature: telemetria.engineTemperature,
            revLightsPercent: telemetria.revLightsPercent
        }); 
    }

    async create(data): Promise<Telemetria> {
        return new this.model(data).save();
    }

    async all(): Promise<Telemetria[]> {
        return this.model.find().limit(1).sort({_id: -1});
    }
}
