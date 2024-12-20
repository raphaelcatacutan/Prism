import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const infoSchema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().optional(),
    sex: z.string().optional(),
    citizenship: z.string().optional(),
    personId: z.number().optional(),
})

export type PersonalInfo = z.infer<typeof infoSchema>
