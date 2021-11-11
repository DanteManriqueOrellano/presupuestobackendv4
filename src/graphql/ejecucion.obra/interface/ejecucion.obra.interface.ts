import { Field, ID, InterfaceType } from "type-graphql";

@InterfaceType()
export abstract class EjecucionObraInterface{
    @Field(type=>ID)
    id:string;
}  