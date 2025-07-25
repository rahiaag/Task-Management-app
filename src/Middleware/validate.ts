import { z } from 'zod';

export const createTaskSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  status: z.enum(['PENDING', 'IN_PROGRESS', 'COMPLETED']),
});
