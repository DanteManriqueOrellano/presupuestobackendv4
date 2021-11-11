import { Field, ID, InterfaceType } from "type-graphql";

@InterfaceType()
export abstract class IInsumoGlobalInterface{
    @Field(type=>ID)
    id:string;

}
