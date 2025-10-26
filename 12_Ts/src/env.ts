import { z } from "zod"

const envSchema = z.object({
    PORT: z.string().optional()
})


function createEnv(env: NodeJS.ProcessEnv){
   const validateResult =  envSchema.safeParse(env);

   if(!validateResult.success)
    throw new Error(validateResult.error.message);
   
   return validateResult.data;
}

export const env = createEnv(process.env)