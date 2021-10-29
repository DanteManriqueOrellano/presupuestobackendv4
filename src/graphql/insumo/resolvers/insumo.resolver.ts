import 'reflect-metadata'
import { Query, Resolver, Args, Mutation, Arg, Ctx } from 'type-graphql'
import { InsumoModel } from '../models/insumo.model';
import { IcontextInsumo } from '../context/contextInsumo';
import { InsumoInput } from '../inputs/insumo.input';


@Resolver()
export class Insumo {

    //@UseMiddleware(isAuth)
    @Mutation(() => InsumoModel)
    async agregarInsumo(
        @Args() insumo: InsumoInput,
        @Ctx() context: IcontextInsumo,
        
    ): Promise<InsumoModel> {
        return await context.dataSources.insumo.create({ dataObj: insumo})
    }
    @Query(() => [InsumoModel])
    async listarInsumos(
        @Ctx() context: IcontextInsumo
    ): Promise<InsumoModel[]> {
        return await context.dataSources.insumo.listAll()
    }

    @Mutation(() => String)
    async eliminarInsumoById(
        @Arg("id") id: string,
        @Ctx() context: IcontextInsumo
    ): Promise<string> {
        return await context.dataSources.insumo.deleteById(id)
    }
    @Mutation(() => InsumoModel)
    async actualizarInsumoById(
        @Args() insumo: InsumoModel,
        @Ctx() context: IcontextInsumo
    ): Promise<InsumoModel> {

        return context.dataSources.insumo.update({ dataObj: insumo }, insumo.id)
    }
}
