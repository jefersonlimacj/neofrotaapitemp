import rodarServidor from "./rodarServidor";
import { resolvers } from "./graphql/resolvers";
import {typeDefs} from "./graphql/typeDefs";

rodarServidor({ typeDefs, resolvers });
