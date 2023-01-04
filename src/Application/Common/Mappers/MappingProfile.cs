using System;
using System.Linq;
using System.Reflection;
using AutoMapper;

namespace PokeAppCore7.Application.Common.Mappers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            ApplyMappingsFromAssembly(AppDomain.CurrentDomain.GetAssemblies());
        }

        private void ApplyMappingsFromAssembly(Assembly[] assemblies)
        {

            foreach (var assembly in assemblies.Where(p => p.FullName.Contains("PokeAppCore7")))
            {

                var types = assembly.GetExportedTypes()
                    .Where(t => t.GetInterfaces().Any(i => i.IsGenericType && i.GetGenericTypeDefinition() == typeof(IMapFrom<>)))
                    .ToList();

                foreach (var type in types)
                {
                    var instance = Activator.CreateInstance(type);

                    var methodInfo = type.GetMethod("Mapping");

                    methodInfo?.Invoke(instance, new object[] { this });

                }
            }
        }
    }
}