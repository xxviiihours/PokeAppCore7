using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace PokeAppCore7.Application.Common.Models.Base
{
    public class PaginatedList<T>
    {
        [JsonProperty("count")]
        public int Count { get; set; }

        [JsonProperty("next")]
        public string Next { get; set; }

        [JsonProperty("previous")]
        public string Previous { get; set; }
        
        [JsonProperty("results")]
        public List<T> Results { get; set; }
    }
}