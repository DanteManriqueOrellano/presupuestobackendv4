import { ArgsType, Field, ID, InputType, ObjectType } from "type-graphql";

@ArgsType()
@InputType()
export class EjecucionObraInput {
    @Field(type=>ID)
    id:string;
    @Field()
    nombrecompletoobra:string;
    @Field()
    alias:string;
}

