import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    preset: "ts-jest",
    testEnvironment: "node",
    transform: {
        "^.+\\.ts$": "ts-jest",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

export default config;