import { ArgsType, Field, ID, InputType, Int, ObjectType } from "type-graphql";
import { DespachoInsumoInput } from "./despachoinsumoInput";

@ObjectType('despachoinput')
@ArgsType()
@InputType()
export class DespachoInput {
    @Field(type => ID)
    id: string
    @Field()
    nroDespacho: string;
    @Field()
    nroRequerimiento: string;
    @Field()
    fechaPedido: string;
    @Field()
    fechaDespacho: string
    @Field(type =>  [DespachoInsumoInput])
    despachoinsumo: DespachoInsumoInput[]

}