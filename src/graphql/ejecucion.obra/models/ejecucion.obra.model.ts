import { Collection } from "fireorm";
import { ArgsType, Field, ObjectType } from "type-graphql";
import { BaseEjecucionObraType } from "../types/ejecucion.obra.type";

@ArgsType()
@ObjectType()
@Collection('ejecucionobra')
export class EjecucionObraModel extends BaseEjecucionObraType{
    @Field()
    nombrecompletoobra:string;
    @Field()
    alias:string
}
