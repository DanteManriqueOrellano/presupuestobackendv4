import { InsumoGlobalCrud } from "../services/insumo.global.Crud";

export interface IcontextInsumoGlobal {
    dataSources: {
        insumoglobal: InsumoGlobalCrud;//el crud debe tener el mismo nosmbre que el que se encuentra en el datasource de apollo.
    };
}