import { Arg, Args, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { IDespachoContext } from "../context/despachocontext";
import { DespachoInput } from "../inputs/despachoinput";
import { DespachoModel } from "../models/despachoModel";


@Resolver()
export class DespachoResolver {

    @Mutation(() => DespachoModel)
    async agregarDespacho(
        @Args() undespacho: DespachoInput,
        @Ctx() context: IDespachoContext,

    ): Promise<DespachoModel> {
        const insumos = undespacho.despachoinsumo.map((val) => {
            return { id: val.id, insumo: val.insumo, cantidad: val.cantidad, umedida: val.umedida, categoria: val.categoria }

        })

        const despachoinsumo = {
            id: "",
            nroDespacho:undespacho.nroDespacho,
            nroRequerimiento: undespacho.nroRequerimiento,
            fechaPedido: undespacho.fechaPedido,
            fechaDespacho: undespacho.fechaDespacho,
            despachoinsumo: insumos,
            idEjecucionObra:undespacho.idEjecucionObra
        }
        

        return await context.dataSources.despacho.create({ dataObj: despachoinsumo })
    }
    @Query(() => [DespachoModel])
    async listarDespachos(
        @Ctx() context: IDespachoContext
    ): Promise<DespachoModel[]> {
        return await context.dataSources.despacho.listAll()
    }

    @Query(()=>DespachoModel)
    async buscaDespachoByIdEjecucionObra(
        @Arg("id") id: string,
        @Ctx() context: IDespachoContext
    ):Promise<DespachoModel>{
        return context.dataSources.despacho.findByIdEjecucionObra(id)

    }


    @Mutation(() => String)
    async eliminarDespachoById(
        @Arg("id") id: string,
        @Ctx() context: IDespachoContext
    ): Promise<string> {
        return await context.dataSources.despacho.deleteById(id)
    }
    @Mutation(() => DespachoModel)
    async actualizarDespachoById(
        @Args() undespacho: DespachoInput,
        @Ctx() context: IDespachoContext
    ): Promise<DespachoModel> {

        return context.dataSources.despacho.update({ dataObj: undespacho }, undespacho.id)
    }
}