# Server

This folder contains the server-side code for the project.

You likely would not need to modify this folder unless you are adding new API
routes or modifying the server configuration.

## Adding new API routers

If an API route is not yet implemented, you can add it by

1. Creating a new file in the `/src/server/api/routers` folder.

   ```ts
   import { z } from "zod";
   import {
     createTRPCRouter,
     publicProcedure,
     privateProcedure,
   } from "@/server/api/trpc";

   export const labelsRouter = createTRPCRouter({
     getAll: publicProcedure.query(
       async ({ ctx }) =>
         await ctx.db.labels.findMany({
           select: {
             id: true,
             name: true,
             typeOf: true,
           } satisfies Prisma.LabelsSelect,
         }),
     ),
     create: privateProcedure.mutation(
       z.object({
         name: z.string(),
         typeOf: z.string(),
       }),
       async ({ ctx, input }) =>
         await ctx.db.labels.create({
           data: {
             name: input.name,
             typeOf: input.typeOf,
           },
         }),
     ),
     // Add more procedures here
   });
   ```

2. Export the new router in `/src/server/api/routers/index.ts` file.

   ```ts
   // ... other exports
   export * from "./labels";
   ```

3. Import and add the new router to the `apiRouters` object in the
   `/src/server/api/root.ts` file.

   ```ts
   // ... other imports
   import { labelsRouter } from "./labels";
   import { usersRouter } from "./users";

   export const apiRouters = {
     labels: labelsRouter,
     users: usersRouter,
     // Add more routers here
   };
   ```
