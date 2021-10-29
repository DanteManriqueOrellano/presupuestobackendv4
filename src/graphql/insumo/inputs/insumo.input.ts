import { ArgsType, Field, ID, InputType, ObjectType } from "type-graphql";
import { u_medida } from "../models/insumo.model";

@ArgsType()
@InputType()
export class  InsumoInput  {
    @Field(type => ID)
    id:string;
    @Field()
    insumo: string;
    @Field()
    precio: number;
    @Field(_type => u_medida)
    umedida?: u_medida;
    @Field()
    categoria: string
}