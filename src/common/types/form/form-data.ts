import * as z from "zod";

import { formInputSchema } from "./form-input";

export const formDataSchema = z.record(formInputSchema);
