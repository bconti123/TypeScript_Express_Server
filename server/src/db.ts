"use strict";

import { Client } from "pg";

type db = {
    client: Client;
    connect: () => Promise<void>;
};

const db: db = {
    client: new Client({
        connectionString: process.env.DATABASE_URL,
    }),
    connect: async () => {
        await db.client.connect();
    },
};

export default db;