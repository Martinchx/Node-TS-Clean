import { z } from 'zod';

import { PaginationDto } from '../../../domain';

export const paginationSchema: z.ZodType<PaginationDto> = z.object({
  page: z.number().positive().int(),
  limit: z.number().positive().int(),
});
