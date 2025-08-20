import { Prisma } from '@prisma/postgres/client';

// Allow updating any user fields except `id`
export type UpdateUserDto = Partial<
  Pick<
    Prisma.UserUpdateInput,
    'email' | 'first_name' | 'last_name' | 'pinned_post_id'
  >
>;
