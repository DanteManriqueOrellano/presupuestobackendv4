import { ObjectType } from "type-graphql";
import { IInsumoGlobalInterface } from "../interface/insumo.global.interface";

@ObjectType({implements:IInsumoGlobalInterface})
export class BaseInsumoType implements IInsumoGlobalInterface {
    id:string;
    
}
