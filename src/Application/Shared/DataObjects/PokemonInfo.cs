using System.Collections.Generic;
using Newtonsoft.Json;
using PokeAppCore7.Application.Common.Models;
using PokeAppCore7.Application.Common.Models.Base;

namespace PokeAppCore7.Application.Shared.DataObjects
{
    public class PokemonInfo
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("base_experience")]
        public int BaseExperience { get; set; }

        [JsonProperty("height")]
        public int Height { get; set; }

        [JsonProperty("is_default")]
        public bool IsDefault { get; set; }

        [JsonProperty("order")]
        public int Order { get; set; }

        [JsonProperty("weight")]
        public int Weight { get; set; }

        [JsonProperty("abilities")]
        public List<PokemonAbility> Abilities { get; set; }

        [JsonProperty("forms")]
        public List<NamedAPIResource> Forms { get; set; }

        [JsonProperty("game_indices")]
        public List<VersionIndexType> GameIndices { get; set; }

        [JsonProperty("held_items")]
        public List<PokemonHeldItem> HeldItems { get; set; }

        [JsonProperty("location_area_encounters")]
        public string LocationAreaEncounters { get; set; }

        [JsonProperty("moves")]
        public List<PokemonMove> Moves { get; set; }

        [JsonProperty("past_types")]
        public List<PokemonPastType> PastTypes { get; set; }

        [JsonProperty("sprites")]
        public PokemonSprites Sprites { get; set; }

        [JsonProperty("species")]
        public NamedAPIResource Species { get; set; }

        [JsonProperty("stats")]
        public List<PokemonStat> Stats { get; set; }

        [JsonProperty("types")]
        public List<PokemonType> Types { get; set; }


    }

    public class PokemonAbility
    {
        [JsonProperty("ability")]
        public NamedAPIResource Ability { get; set; }

        [JsonProperty("is_hidden")]
        public bool IsHidden { get; set; }

        [JsonProperty("slot")]
        public int Slot { get; set; }
    }

    public class PokemonType
    {
        [JsonProperty("slot")]
        public int Slot { get; set; }

        [JsonProperty("type")]
        public NamedAPIResource Type { get; set; }
    }

    public class PokemonFormType
    {
        [JsonProperty("slot")]
        public int Slot { get; set; }

        [JsonProperty("type")]
        public NamedAPIResource Type { get; set; }
    }

    public class PokemonPastType
    {
        [JsonProperty("generation")]
        public NamedAPIResource Generation { get; set; }

        [JsonProperty("types")]
        public List<PokemonType> Types { get; set; }
    }

    public class PokemonHeldItem
    {
        [JsonProperty("item")]
        public NamedAPIResource Item { get; set; }

        [JsonProperty("version_details")]
        public List<PokemonHeldItemVersion> VersionDetails { get; set; }
    }

    public class PokemonHeldItemVersion
    {
        [JsonProperty("version")]
        public NamedAPIResource Version { get; set; }

        [JsonProperty("rarity")]
        public int Rarity { get; set; }
    }

    public class PokemonMove
    {
        [JsonProperty("move")]
        public NamedAPIResource Move { get; set; }

        [JsonProperty("version_group_details")]
        public List<PokemonMoveVersion> VersionGroupDetails { get; set; }
    }

    public class PokemonMoveVersion
    {

        [JsonProperty("move_learn_method")]
        public NamedAPIResource MoveLearnMethod { get; set; }

        [JsonProperty("version_group")]
        public NamedAPIResource VersionGroup { get; set; }

        [JsonProperty("level_learned_at")]
        public int LevelLearnedAt { get; set; }
    }

    public class PokemonStat
    {
        [JsonProperty("stat")]
        public NamedAPIResource Stat { get; set; }

        [JsonProperty("effort")]
        public int Effort { get; set; }

        [JsonProperty("base_stat")]
        public int BaseStat { get; set; }
    }

    public class PokemonSprites
    {
        [JsonProperty("front_default")]
        public string FrontDefault { get; set; }

        [JsonProperty("front_shiny")]
        public string FrontShiny { get; set; }

        [JsonProperty("front_female")]
        public string FrontFemale { get; set; }

        [JsonProperty("front_shiny_female")]
        public string FrontShinyFemale { get; set; }

        [JsonProperty("back_default")]
        public string BackDefault { get; set; }

        [JsonProperty("back_female")]
        public string BackFemale { get; set; }

        [JsonProperty("back_shiny")]
        public string BackShiny { get; set; }

        [JsonProperty("back_shiny_female")]
        public string BackShinyFemale { get; set; }

        [JsonProperty("other")]
        public PokemonOther Other { get; set; }
    }

    public class PokemonOther
    {
        [JsonProperty("official-artwork")]
        public PokemonOfficialArtwork OfficialArtwork { get; set; }
    }
    
    public class PokemonOfficialArtwork
    {
        [JsonProperty("front_default")]
        public string FrontDefault { get; set; }
    }
    
    public class PokemonData : NamedAPIResource {

    }
}