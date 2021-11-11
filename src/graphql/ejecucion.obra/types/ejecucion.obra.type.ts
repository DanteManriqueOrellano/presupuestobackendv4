import { ObjectType } from "type-graphql";
import { EjecucionObraInterface } from "../interface/ejecucion.obra.interface";

@ObjectType({implements:EjecucionObraInterface})
export class BaseEjecucionObraType implements EjecucionObraInterface{
    id:string
}