import { Args, Ctx, Mutation, Resolver } from "type-graphql";
import { EjecucionObraContex } from "../context/ejecucion.obra.context";
import { EjecucionObraInput } from "../inputs/ejecucion.obra.input";
import { EjecucionObraModel } from "../models/ejecucion.obra.model";

@Resolver()
export class EjecucionObraResolver{
    @Mutation(()=>EjecucionObraModel)
    async agregaEjecucionObra(
        @Args() ejecucionobra: EjecucionObraInput,
        @Ctx() context: EjecucionObraContex
    ):Promise<EjecucionObraModel>{
        return await context.dataSources.ejecucionobra.create({dataObj:ejecucionobra})
    }

    @Mutation(()=>EjecucionObraModel)
    async listaEjecucionObra(
        @Ctx() context: EjecucionObraContex
    ):Promise<EjecucionObraModel[]>{
        return await context.dataSources.ejecucionobra.listAll()
    }
    
    @Mutation(()=>EjecucionObraModel)
    async buscaUnaEjecucionObra(
        @Args() ejecucionobra: EjecucionObraInput,
        @Ctx() context: EjecucionObraContex
    ):Promise<EjecucionObraModel>{
        return await context.dataSources.ejecucionobra.findById(ejecucionobra.id)
    }
}