import { Prisma } from '@prisma/postgres/client';

// Narrow to the fields allowed from the API for creation
export type CreateUserDto = Pick<Prisma.UserCreateInput, 'email' | 'first_name' | 'last_name'>;
