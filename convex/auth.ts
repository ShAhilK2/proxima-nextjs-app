import { Auth, QueryCtx } from "./_generated/server";



export const verifyAuth = async(ctx : QueryCtx )=>{
    const identify = await ctx.auth.getUserIdentity();


    if(!identify){
        throw new Error("Unauthorized");
    }

    return identify;
}