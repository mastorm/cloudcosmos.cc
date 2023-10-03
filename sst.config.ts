import { SSTConfig } from "sst";
import { Blog } from "./stacks/BlogStack";

export default {
  config(_input) {
    return {
      name: "cloudcosmoscc",
      region: "eu-west-1",
    };
  },
  stacks(app) {
    app.stack(Blog);
  }
} satisfies SSTConfig;
