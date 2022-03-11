import { ApolloClient, InMemoryCache } from "@apollo/client";
import getConfig from "next/config";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
const BACKEND_URI = serverRuntimeConfig.BACKEND_URI || publicRuntimeConfig.BACKEND_URI;

const apolloClient = new ApolloClient({
  uri: `${BACKEND_URI}/graphql`,
  cache: new InMemoryCache(),
});

export default apolloClient;
