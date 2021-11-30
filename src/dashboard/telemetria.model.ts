import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TelemetriaDocument = Telemetria & Document;

@Schema()
export class Telemetria {
    @Prop()
    speed: number;
    @Prop()
    gear: number;
    @Prop()
    drs: number;
    @Prop()
    throttle: number;
    @Prop()
    steer: number;
    @Prop()
    brake: number;
    @Prop()
    engineRPM: number;
    @Prop()
    revLightsPercent: number;
    @Prop()
    engineTemperature: number;
}

export const TelemetriaSchema = SchemaFactory.createForClass(Telemetria);