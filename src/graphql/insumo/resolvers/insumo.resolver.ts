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
    
      
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC79EZLvGaZgqLe\n1I4boyNeW9AvlH48c/0LvIWSHuO33gf8lxcFH/08CSGmVlqJLEcHohKyYLTlYzrZ\nDJ+ARUsl+UAugSGxwfQQRZLCiE05QSBsrNCqGn5dhN4hQLOHNqUzo7pYvqoj+4tU\nVwtrvxv4S96A/TiMv3PDZweaIcQQNEZ6zl59dR/M/xRSciQFnJ7VCk2WlgQWyF21\nJugKPt6Oc+z7E0kcRpM1zCW+9jdrV+6ALyddSDDUYBgOYPkw/FFYLNY+nGN3BeMR\n28naPcoW85Febmw9hrFrzJqwN1qPTrB0XuGUj2n3Kqh6AW98Vit0AUr/WeIrloAF\n+4unhTIrAgMBAAECggEAGqidld1tkgV483EjjOD5Qcd1AmKl+w4ajKEbMuwFsY0h\nBd8qSTRN10eWScECy2UH2BnRXBKiZczKyoFjWC6753FwfIgdTtirNOmhVM0/YskN\nf8yNNitW1A3l8cJ7FEkYanglFLRKbpsdmoNUH9616WRddV81N6VqFoOVDPQQGpoJ\nPRr1MUr46HZE/kL+Azz/ZA2/HxXZTm0vCAPK1ElMUya5BsPD1kbJ0nfX3e5mjTK0\n5QZ5rTAbKQ+Da5IUL9VQiSWWX5UfCFE9Vl2kXIxFJqhvHyR304dbSL7KsbLJ0FjN\n7TJHfT2U/iNlI3FV/nHuswk/zCq2JhCw2aYSbUOT0QKBgQDmtAfRw1go0uUsflMH\n4kssK2tKba3RmFI1Vih/Q+KyYQ3Iq9LTXZspkpXjGO9w/WALtW5R56mDpFf0wj8W\n2kYI7+SUJ07tZvMsaIcFCzjDh++uhjXuECUjFuzL6UwcC/BH9XjJ/Ouz4f1iMRA0\nNVZ+MppAmvoDTi9nqJcmxmZo2wKBgQDQkEEb9Ou0HHPk+jI+KFSHYprc2yJhAHci\n9DYkJHmmu49rcj9T9zFBXd/7PjTPHaPivoryI1l1WGMeE4J8861rIvlTzvfnhDBb\nNhb2WSheNRSN020b+5VWM6ieaqxpLtg5iiSvmZfHqTxxC6qCkjoSYkz6dl8sYgbp\n0AC83HA08QKBgQCCDcFOtfGv6du5rmj+S8qW1s9AAP545oaJfM2NmOZmKqJLmtlZ\nwC4lTHZktHze1GddkmTjlVYRWQcgepR4PIo4pYvVHSe4W04AndhntoDEcZBjcVNb\npgxZcKYC+bynHu/QkQgLziHNoTtnLEN3Ow5MTBh7DSKd1GiS5g53lGbM+wKBgDrx\nqhUWoU7kA7UhKPX8O/ePXKkynYLAuOr+Dhck3+TJeX0qas92O0t4FodRS2eFvv2k\nUGyipPPPKSQk62oZDFgNKF4RTmr2JxyAKvkwtYH6inaS3HFeJxSXwP4Us+l+Pcn1\nSuz+AbGCGPzyCRyh6xurAIqAzeEjS0Tlbm/x9RxhAoGBAMy1/S0BREC32tXuIU1X\ndL2Pm6MDhfUJWa7UaxkKwx5p6efzsS3ocMShEAaZG4mZTXnU2HkifA0jTcpzcsQN\ntpU4fSDKDuETghaA3vSwWt+CCg7DnyYP8F33WPz1MKKZMYm0PU08bVxarWE9yjeC\nCKL7HE5JPpKJfC8hMvDM/yig\n-----END PRIVATE KEY-----\n",//String(process.env.GOOGLE_PRIVATE_KEY),
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
