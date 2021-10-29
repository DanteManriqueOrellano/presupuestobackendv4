import 'reflect-metadata';
import { Container } from "typedi";

import dependencyInjectorLoader from './dependencyInjector';
import expressLoader from './express';


import * as fireorm from 'fireorm';
import fireormLoader from './fireorm';


export default async ({ expressApp }: any) => {
    const fireormConnection = await fireorm.initialize(await fireormLoader());
    
    console.info('DB loaded and connected!');

    const resolvers = require('../graphql/mainResolver').default//Insumo
    
   
    //inyecta las instancias de todos los modelos y los almacena en el objeto mysource
    Container.set('mysource', await dependencyInjectorLoader({
        
        resolvers
    }))
    
        
    await expressLoader({ app: expressApp });//las que no son clases que no se instancian se leen aca.
    console.info('✌️ Express loaded');


};