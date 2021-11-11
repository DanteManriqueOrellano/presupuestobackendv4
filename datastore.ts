import 'reflect-metadata'
import { getRepository, IEntity, EntityConstructorOrPath, BaseFirestoreRepository } from "fireorm";

import { RESTDataSource } from "apollo-datasource-rest";


export interface Context {
    dataSources: {
        basecrud: BaseCrud;//el crud debe tener el mismo nosmbre que el que se encuentra en el datasource de apollo.
    };
}
export type createInput<T> = {
    dataObj: T 
}

interface IDatabase {
    create<T>(input: createInput<T>, id?: string): Promise<any>;
    deleteById(id: string): Promise<string>;
    findById(id: string): Promise<any>;
    listAll(): Promise<any[]>;
    update<T>(input: createInput<T>, id?: any): Promise<IEntity>
}

export class BaseCrud extends RESTDataSource implements IDatabase {
    modelo: EntityConstructorOrPath<IEntity>
    repository: BaseFirestoreRepository<IEntity>

    constructor(model: any) {
        super();
        this.modelo = model
        this.repository = getRepository(this.modelo)
    }
    findById(id: string): Promise<any> {
        return this.repository.findById(id)
    }

    async create<T>(input: createInput<T>, _id?: string): Promise<any> {

        const insumoRepository = getRepository(this.modelo);
        
        return await this.repository.create(input.dataObj);

    }
    async deleteById(id: string): Promise<string> {
        this.repository.delete(id)
        return "Eliminado Exitosamente"
    }

    async listAll(): Promise<any[]> {
        return this.repository.find()
    }

    async update<T>(input: createInput<T>, id?: any): Promise<any> {

        let uninsumo: any = await this.repository.findById(id);
        uninsumo = input.dataObj;
        
        return this.repository.update(uninsumo);
    }
}