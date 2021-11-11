//se va a instanciar los cruds

import { InsumoGlobalCrud } from "../graphql/insumo.global/services/insumo.global.Crud"

export default (model: any) => {
    return new InsumoGlobalCrud(model)

};