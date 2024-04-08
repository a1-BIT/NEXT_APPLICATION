import { z } from "zod";

const schema = z.object({
  price: z.number(),
  name: z.string(),
});

export default schema;
