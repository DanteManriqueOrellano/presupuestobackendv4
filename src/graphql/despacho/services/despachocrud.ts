import { getRepository, IEntity, IWherePropParam } from "fireorm";
import { BaseCrud } from "../../../../datastore";
import { DespachoModel } from "../models/despachoModel";

export class DespachoCrud extends BaseCrud {
    
    modelo = DespachoModel
    
    async findByIdEjecucionObra(id: string): Promise<any> {
        
        return getRepository(this.modelo).whereEqualTo('idEjecucionObra', id).findOne()
    }


    ///aca se colocaran nuevas funcionalidades com por ejemplo buscar por algun criterio fuera del id, o cualquier otra consulta
}