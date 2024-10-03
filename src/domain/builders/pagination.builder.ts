import { PaginationDto, PaginationResult, ResourceType } from '..';
import { envs } from '../../config';

export class PaginationBuilder {
  static build(
    paginationDto: PaginationDto,
    total: number,
    resourceType: ResourceType,
    filtersQuery?: string,
  ): PaginationResult {
    const { page, limit } = paginationDto;

    const baseUrl = `${envs.WEBSERVICE_URL}/${resourceType}`;
    const prev = page > 1 ? `${baseUrl}?page=${page - 1}&limit=${limit}${filtersQuery}` : null;
    const next = limit * page < total ? `${baseUrl}?page=${page + 1}&limit=${limit}${filtersQuery}` : null;

    return { prev, next };
  }
}
