import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const infoSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    sex: z.string(),
    citizenship: z.string(),
})

export type PersonalInfo = z.infer<typeof infoSchema>
