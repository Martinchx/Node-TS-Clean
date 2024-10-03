import { PaginationDto } from '../..';

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

//TODO: API resources like /products, /movies, /users, etc
export enum ResourceType {}

export interface PaginationResult {
  prev: string | null;
  next: string | null;
}

export type BuildPagination = (
  paginationDto: PaginationDto,
  total: number,
  resourceType: ResourceType,
  filtersQuery?: string,
) => PaginationResult;

export type SignToken = (payload: Record<string, any>, duration?: string) => Promise<string | null>;
