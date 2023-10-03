import { StackContext, AstroSite } from "sst/constructs";

export function Blog({ stack }: StackContext) {

  const blog = new AstroSite(stack, "blog", {
    path: 'packages/blog'
  })
  stack.addOutputs({
    URL: blog.url
  })
}
