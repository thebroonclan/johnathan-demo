/** @type {import("open-next").OpenNextConfig} */
export default {
  output: {
    cloudflare: {
      name: "johnathan-next", // any name is fine
    },
  },
  functionOptions: {
    wrapper: "default",
    converter: "default",
  },
};