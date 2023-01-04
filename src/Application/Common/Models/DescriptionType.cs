using Newtonsoft.Json;
using PokeAppCore7.Application.Common.Models.Base;

namespace PokeAppCore7.Application.Common.Models
{
    public class DescriptionType
    {
        [JsonProperty("description")]
        public string Description { get; set; }
        
        [JsonProperty("language")]
        public NamedAPIResource Language { get; set; }
    }
}