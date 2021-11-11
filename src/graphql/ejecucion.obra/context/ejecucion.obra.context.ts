import { EjecucionObraCRUD } from "../services/ejecucion.obra.service";

export interface EjecucionObraContex{
    dataSources:{
        ejecucionobra:EjecucionObraCRUD
    }
}