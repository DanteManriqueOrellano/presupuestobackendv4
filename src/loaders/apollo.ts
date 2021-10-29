import 'reflect-metadata'
import { ApolloServer} from "apollo-server-express";
import { buildSchema } from 'type-graphql'
import Container from 'typedi';

export default async ({ resolvers }: { resolvers: any }) => {


    const schemas: Promise<any> = buildSchema({
        resolvers: resolvers,
        validate: false,
        //pubSub activar cuando se configure las subscripciones

    })

    const server = new ApolloServer({
        schema: await schemas,
        playground: true,
        introspection: true,
        formatError: (err) => {
            // Don't give the specific errors to the client.
            if (err.message.startsWith('Database Error: ')) {
                return new Error('Internal server error')
            }
            return err
        },

        dataSources: () => (Container.get('mysource')),

       /* subscriptions: {
            onConnect: async (connectionParams, webSocket) => {

                webSocket.on('connection', (ws) => {
                    console.log('Client connected');
                    ws.on('close', () => console.log('Client disconnected'));
                });
                //console.log(connectionParams);
                console.log("dentro de onConect")
            },
            onDisconnect: async (con, web) => {

                console.log("dentro de on disocnect")
            },
            path: "/graphql",

        },*/// activar cuando se configure las subscripciones

            
        
    });
    return await server
    
}
