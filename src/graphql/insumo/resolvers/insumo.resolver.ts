import 'reflect-metadata'
import { Query, Resolver, Args, Mutation, Arg, Ctx } from 'type-graphql'
import { InsumoModel } from '../models/insumo.model';
import { IcontextInsumo } from '../context/contextInsumo';
import { InsumoInput } from '../inputs/insumo.input';
require('dotenv').config()
import { GoogleSpreadsheet, ServiceAccountCredentials } from 'google-spreadsheet';


// Initialize the sheet - doc ID is the long id in the sheets URL
const doc:GoogleSpreadsheet = new GoogleSpreadsheet(process.env.SHEETID);
const credentials:ServiceAccountCredentials = {
    
      
        "private_key": String(process.env.GOOGLE_PRIVATE_KEY),
        "client_email": String(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) 
      
} //require('../../../../configooglesheet.json');

@Resolver()
export class Insumo {

    //@UseMiddleware(isAuth)
    /*@Mutation(() => InsumoModel)
    async agregarInsumo(
        @Args() insumo: InsumoInput,
        @Ctx() context: IcontextInsumo,
        
    ): Promise<InsumoModel> {
        return await context.dataSources.insumo.create({ dataObj: insumo})
    }*/
    @Query(() => [InsumoModel])
    async listarInsumos(
        @Ctx() context: IcontextInsumo
    ): Promise<InsumoModel[]> {
        await doc.useServiceAccountAuth(credentials); 
        await doc.loadInfo();
            const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
            const rows = await sheet.getRows();
            const listaInsumo:InsumoModel[] =	[]
            for(let i =0;i<rows.length;i++){
                listaInsumo.push({
                    id:rows[i].codigo,
                    insumo:rows[i].insumo,
                    umedida:rows[i].umedida,
                    categoria:rows[i].categoria
                })
            }
        return listaInsumo//await context.dataSources.insumo.listAll()
    }
/*
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
    }*/
}
