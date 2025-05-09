import { describe, test, expect, vi } from "vitest";

describe("config come from env", () => {
    test("dev env works", async () => {
        process.env.SECRET_KEY = "abc";
        process.env.PORT = "5001";
        process.env.NODE_ENV = "dev";
        process.env.DATABASE_URI = "favorite_db";

        vi.resetModules();

        // Re-import
        const { config, getDatabaseUri } = await import("./config");
        expect(config.SECRET_KEY).toBe("abc");
        expect(config.PORT).toEqual(5001);
        expect(config.NODE_ENV).toBe("dev");
        expect(getDatabaseUri()).toBe("favorite_db");

        delete process.env.SECRET_KEY;
        delete process.env.PORT;
        delete process.env.NODE_ENV;
        delete process.env.DATABASE_URI;
        console.debug(process.env.NODE_ENV);
    });
    test("test env works", async () => {
        process.env.SECRET_KEY = "abc";
        process.env.PORT = "5001";
        process.env.NODE_ENV = "test";

        vi.resetModules();

        // Re-import
        const { config, getDatabaseUri } = await import("./config");

        expect(config.SECRET_KEY).toBe("abc");
        expect(config.PORT).toEqual(5001);
        expect(config.NODE_ENV).toBe("test");
        expect(getDatabaseUri()).toBe("database_name_test");

        delete process.env.SECRET_KEY;
        delete process.env.PORT;
        delete process.env.NODE_ENV;
        delete process.env.DATABASE_URI;
    })
}) 