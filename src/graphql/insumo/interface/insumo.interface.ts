import { Field, ID, InterfaceType } from "type-graphql";

@InterfaceType()
export abstract class IInsumoInterface{
    @Field(type=>ID)
    id:string;

}
