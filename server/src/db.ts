"use strict";

import { Client } from "pg";
import { getDatabaseUri } from "./config";

export type Database = {
    client: Client;
    connect: () => Promise<void>;
};

export const db: Database = {
    client: new Client({
        connectionString: getDatabaseUri(),
        host: "/var/run/postgresql",
        ssl: {
            rejectUnauthorized: false,
        }
    }),
    connect: async () => {
        await db.client.connect();
    },
};