import { ArgsType, Field, ID, InputType, Int, ObjectType } from "type-graphql";


@ArgsType()
@InputType()
@ObjectType('despachoinsumoinput')
export class DespachoInsumoInput {
    @Field(type => ID)
    id: string;
    @Field()
    insumo: string;
    @Field()
    umedida: string;
    @Field(type => Int)
    cantidad: number;
    @Field()
    categoria: string;
}
