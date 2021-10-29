import 'reflect-metadata'
import { Container } from 'typedi';
import apolloFactory from "./apollo"
import insumoFactory from './insumo'
import despachoFactory from './despacho'

import { InsumoModel } from '../graphql/insumo/indexModels';
import { ApolloServer } from 'apollo-server-express';
import { DespachoModel } from '../graphql/despacho/models/despachoModel';


export default ({ resolvers }: { resolvers:  any  }) => {
	try {
		const apolloInstance: Promise<ApolloServer>  =  apolloFactory({ resolvers })
    	Container.set('apolloInstance', apolloInstance);

		console.log(resolvers)
		/*const inst = models.map((es: any) => {
			let tmp = new es()
			
			Container.set(tmp.constructor.name, tmp)//inyecta las instancias de todos los modelos que conforman el resolver
		})*/

		const insumoInstance = insumoFactory(InsumoModel)
		
		const despachoInstance = despachoFactory(DespachoModel) 
		//tener en cuenta que el nombre de la llave del objeto tiene que ser el mismo del contexto para evitar errores
		return {
			insumo: insumoInstance,
			despacho: despachoInstance
		
		};//va a retornar un objeto de instancias
	} catch (e) {
		console.error('🔥 Error on dependency injector loader: %o', e);
		throw e;
	}
};