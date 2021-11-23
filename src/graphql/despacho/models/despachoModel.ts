import { Collection  } from "fireorm";
import { type } from "os";
import { Field, ObjectType } from "type-graphql";
import { BaseDespachoType } from "../types/basedespachotype";
import { DespachoInsumoModel } from "./despachoinsumoModel";

//extiende a la base despacho type
@ObjectType()
@Collection()
export class DespachoModel extends BaseDespachoType {
    @Field(type => [DespachoInsumoModel])
    despachoinsumo: Array<DespachoInsumoModel>;
    @Field()
    idEjecucionObra:string

}