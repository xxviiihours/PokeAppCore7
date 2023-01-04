using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace PokeAppCore7.Application.Common.Mappers
{
    public static class MappingExtension
    {
        public static Task<List<TDestination>> ProjectToListAsync<TDestination>(this IQueryable<TDestination> queryable, IConfigurationProvider configuration)
            => queryable.ProjectTo<TDestination>(configuration).ToListAsync();
    }
}