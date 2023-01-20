using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using PokeAppCore7.Application.Common.Models;
using PokeAppCore7.Application.Common.Models.Base;

namespace PokeAppCore7.Application.Shared.DataObjects
{
    public class AbilityInfo
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("is_main_series")]
        public bool IsMainSeries { get; set; }

        [JsonProperty("generation")]
        public NamedAPIResource Generation { get; set; }

        [JsonProperty("names")]
        public List<NameType> Names { get; set; }

        [JsonProperty("effect_entries")]
        public List<VerboseEffectType> EffectEntries { get; set; }

        [JsonProperty("effect_changes")]
        public List<AbilityEffectChange> EffectChanges { get; set; }

        [JsonProperty("flavor_text_entries")]
        public List<AbilityFlavorText> AbilityFlavorTexts { get; set; }

        [JsonProperty("pokemon")]
        public List<AbilityPokemon> pokemons { get; set; }
    }

    public class AbilityEffectChange
    {
        [JsonProperty("effect_entries")]
        public List<EffectType> Effects { get; set; }
        
        [JsonProperty("version_group")]
        public NamedAPIResource VersionGroup { get; set; }
    }

    public class AbilityFlavorText
    {
        [JsonProperty("flavor_text")]
        public string FlavorText { get; set; }

        [JsonProperty("language")]
        public NamedAPIResource Language { get; set; }

        [JsonProperty("version_group")]
        public NamedAPIResource VersionGroup { get; set; }
    }

    public class AbilityPokemon
    {
        [JsonProperty("pokemon")]
        public NamedAPIResource Pokemon { get; set; }

        [JsonProperty("is_hidden")]
        public bool IsHidden { get; set; }

        [JsonProperty("slot")]
        public int Slot { get; set; }
    }

    public class AbilityData : NamedAPIResource {}
}