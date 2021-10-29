import { ObjectType } from "type-graphql";
import { IInsumoInterface } from "../interface/insumo.interface";

@ObjectType({implements:IInsumoInterface})
export class BaseInsumoType implements IInsumoInterface {
    id:string;
    
}
