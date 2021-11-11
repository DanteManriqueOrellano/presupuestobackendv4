import { EjecucionObraCRUD } from "../graphql/ejecucion.obra/services/ejecucion.obra.service";

export default (model: any) => {
    return new EjecucionObraCRUD(model)

};