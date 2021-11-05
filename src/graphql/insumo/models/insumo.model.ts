import 'reflect-metadata'

import { ArgsType, Field, ObjectType, registerEnumType } from 'type-graphql'
import { Collection } from "fireorm";
import { BaseInsumoType } from '../types/insumo.type';

export enum u_medida {
    UND = "UND",
    KG = "KG",
    BOL = "BOL",
    M = "M",
    M2 = "M2",
    M3 = "M3",
    GLB = "GLB",
    MES = "MES",
    GAL = "GAL",
    PZA = "PZA",
    PLN = "PLN",//PLANCHA
    P2 = "P2",
    PLG = "PLG",//PLIEGO
    RLL = "RLL",//ROLLO
    MLL = "MLL",//MILLAR
    DIA = "DIA",
    GR = "GRAMO",
    LT = "LT"//LITRO
}
registerEnumType(u_medida, {
    name: "u_medida",
    description: "UNIDADES DE MEDIDA"
})

@ArgsType()
@ObjectType()
@Collection('Insumo') //nombre personalizado de la coleccion
export class InsumoModel extends BaseInsumoType {
    @Field()
    insumo: string;
    @Field()
    precio?: number;
    @Field(_type => u_medida)
    umedida?: u_medida;
    @Field()
    categoria: string
}