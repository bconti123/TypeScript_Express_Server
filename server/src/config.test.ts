import { describe, test, expect } from "vitest";

describe("config come from env", () => {
    test("see it works", async () => {
        process.env.SECRET_KEY = "abc";
        process.env.PORT = "5001";

        // Re-import
        const { config } = await import("./config");
        expect(config.SECRET_KEY).toBe("abc");
        expect(config.PORT).toEqual(5001);

        delete process.env.SECRET_KEY;
        delete process.env.PORT;
    })
}) 