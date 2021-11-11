import { ArgsType, Field, ID, InputType, ObjectType } from "type-graphql";
import { u_medida } from "../models/insumo.global.model";

@ArgsType()
@InputType()
export class  InsumoGlobalInput  {
    @Field(type => ID)
    id:string;
    @Field()
    insumo: string;
    @Field(type => u_medida)
    umedida?: u_medida;
    @Field()
    categoria: string
}