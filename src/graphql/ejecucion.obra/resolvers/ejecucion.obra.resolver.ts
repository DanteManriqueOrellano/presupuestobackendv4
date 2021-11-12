import { Args, Ctx, Mutation, Query, Resolver } from "type-graphql";
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

    @Query(() => EjecucionObraModel)
    async listaEjecucionObra(
        @Ctx() context: EjecucionObraContex
    ):Promise<EjecucionObraModel[]>{
        return await context.dataSources.ejecucionobra.listAll()
    }

    @Query(() => EjecucionObraModel)
    async buscaUnaEjecucionObra(
        @Args() ejecucionobra: EjecucionObraInput,
        @Ctx() context: EjecucionObraContex
    ):Promise<EjecucionObraModel>{
        return await context.dataSources.ejecucionobra.findById(ejecucionobra.id)
    }
}