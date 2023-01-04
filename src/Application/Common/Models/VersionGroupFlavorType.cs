using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using PokeAppCore7.Application.Common.Models.Base;

namespace PokeAppCore7.Application.Common.Models
{
    public class VersionGroupFlavorType
    {
        [JsonProperty("text")]
        public string Text { get; set; }

        [JsonProperty("language")]
        public NamedAPIResource Language { get; set; }

        [JsonProperty("version_group")]
        public NamedAPIResource VersionGroup { get; set; }
    }
}