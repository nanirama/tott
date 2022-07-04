import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://strapi.trady.dev/graphql",
    cache: new InMemoryCache(),
});

export default client;