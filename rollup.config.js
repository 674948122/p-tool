export default {
    input: "src/index.js",
    output: [
        {
            file: "dist/index.esm.js",
            format: "es",
        },
        {
            file: "dist/index.cjs.js",
            format: "cjs",
        },
        {
            file: "dist/index.umd.js",
            format: "umd",
            name: "PdgTool",
        },
    ],
};
