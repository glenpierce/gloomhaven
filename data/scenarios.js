//special_rules should be treated with some kind of macro that recognises them and applies them when loading
SPECIAL_RULES =
{
    living_corpse_two_levels_extra:
        {   "description": "All living corpses are two levels higher than the scenario level, up to a max of 7",
            "affected_deck": "Living Corpse",
            "extra_levels": 2
        }
};


SCENARIO_DEFINITIONS =
    [   { name: "#1 Black Barrow"
        , decks:
            [   {"name": "Bandit Guard", "deck_name": "Guard", "image": "Bandit-Guard.jpg"}
            ,   {"name": "Bandit Archer", "deck_name": "Archer", "image": "Bandit-Archer.jpg"}
            ,   {"name": "Living Bones", "deck_name": "Living Bones", "image": "Skeleton.jpg"}
            ]
        },
        { name: "#2 Barrow Lair"
        , decks:
            [   {"name": "Bandit Archer", "deck_name": "Archer", "image": "Bandit-Archer.jpg"}
            ,   {"name": "Bandit Commander", "deck_name": "Boss", "image": "Bandit-Leader.jpg"}
            ,   {"name": "Living Bones", "deck_name": "Living Bones", "image": "Skeleton.jpg"}
            ,   {"name": "Living Corpse", "deck_name": "Living Corpse", "image": "Zombie.jpg"}
            ]
        },
        { name: "#3 Inox Encampment"
        , decks:
            [   {"name": "Inox Guard", "deck_name": "Guard", "image": "Inox-Guard.jpg"}
            ,   {"name": "Inox Archer", "deck_name": "Archer", "image": "Inox-Archer.jpg"}
            ,   {"name": "Inox Shaman", "deck_name": "Shaman", "image": "Inox-Shaman.jpg"}
            ]
        },
        { name: "#4 Crypt of the Damned"
        , decks:
            [   {"name": "Living Bones", "deck_name": "Living Bones", "image": "Skeleton.jpg"}
            ,   {"name": "Bandit Archer", "deck_name": "Archer", "image": "Bandit-Archer.jpg"}
            ,   {"name": "Cultist", "deck_name": "Cultist", "image": "Cultist.jpg"}
            ,   {"name": "Earth Demon", "deck_name": "Earth Demon", "image": "Earth-Demon.jpg"}
            ,   {"name": "Wind Demon", "deck_name": "Wind Demon", "image": "Wind-Demon.jpg"}
            ]
        },
        { name: "#5 Ruinous Crypt"
        , decks:
            [   {"name": "Cultist", "deck_name": "Cultist", "image": "Cultist.jpg"}
            ,   {"name": "Living Bones", "deck_name": "Living Bones", "image": "Skeleton.jpg"}
            ,   {"name": "Night Demon", "deck_name": "Night Demon", "image": "Night-Demon.jpg"}
            ,   {"name": "Flame Demon", "deck_name": "Flame Demon", "image": "Flame-Demon.jpg"}
            ,   {"name": "Frost Demon", "deck_name": "Frost Demon", "image": "Frost-Demon.jpg"}
            ]
        },
        { name: "#6 Decaying Crypt"
        , decks:
            [   {"name": "Living Bones", "deck_name": "Living Bones", "image": "Skeleton.jpg"}
            ,   {"name": "Living Corpse", "deck_name": "Living Corpse", "image": "Zombie.jpg"}
            ,   {"name": "Living Spirit", "deck_name": "Living Spirit", "image": "Ghost.jpg"}
            ]
        },
        { name: "#7 Vibrant Grotto"
        , decks:
            [   {"name": "Forest Imp", "deck_name": "Imp", "image": "Black-Imp.jpg"}
            ,   {"name": "Cave Bear", "deck_name": "Cave Bear", "image": "Cave-Bear.jpg"}
            ,   {"name": "Inox Shaman", "deck_name": "Shaman", "image": "Inox-Shaman.jpg"}
            ,   {"name": "Earth Demon", "deck_name": "Earth Demon", "image": "Earth-Demon.jpg"}
            ]
        },
        { name: "#8 Gloomhaven Warehouse"
        , decks:
            [   {"name": "Living Bones", "deck_name": "Living Bones", "image": "Skeleton.jpg"}
            ,   {"name": "Living Corpse", "deck_name": "Living Corpse", "image": "Zombie.jpg"}
            ,   {"name": "Inox Bodyguard", "deck_name": "Boss", "image": "Inox-Bodyguard.jpg"}
            ]
        },
        { name: "#9 Diamond Mine"
        , decks:
            [   {"name": "Hound", "deck_name": "Hound", "image": "Hound.jpg"}
            ,   {"name": "Vermling Scout", "deck_name": "Scout", "image": "Vermling-Scout.jpg"}
            ,   {"name": "Merciless Overseer", "deck_name": "Boss", "image": "Merciless-Overseer.jpg"}
            ]
        },
        { name: "#10 Plane of Elemental Power"
        , decks:
            [   {"name": "Flame Demon", "deck_name": "Flame Demon", "image": "Flame-Demon.jpg"}
            ,   {"name": "Earth Demon", "deck_name": "Earth Demon", "image": "Earth-Demon.jpg"}
            ,   {"name": "Sun Demon", "deck_name": "Sun Demon", "image": "Sun-Demon.jpg"}
            ]
        },
        { name: "#11 Gloomhaven Square A"
        , decks:
            [   {"name": "Living Bones", "deck_name": "Living Bones", "image": "Skeleton.jpg"}
            ,   {"name": "Living Corpse", "deck_name": "Living Corpse", "image": "Zombie.jpg"}
            ,   {"name": "City Guard", "deck_name": "Guard", "image": "City-Guard.jpg"}
            ,   {"name": "City Archer", "deck_name": "Archer", "image": "City-Archer.jpg"}
            ,   {"name": "Captain of the Guard", "deck_name": "Boss", "image": "Guard-Captain.jpg"}
            ]
        },
        { name: "#12 Gloomhaven Square B"
        , decks:
            [   {"name": "Living Bones", "deck_name": "Living Bones", "image": "Skeleton.jpg"}
            ,   {"name": "Living Corpse", "deck_name": "Living Corpse", "image": "Zombie.jpg"}
            ,   {"name": "Cultist", "deck_name": "Cultist", "image": "Cultist.jpg"}
            ,   {"name": "City Guard", "deck_name": "Guard", "image": "City-Guard.jpg"}
            ,   {"name": "City Archer", "deck_name": "Archer", "image": "City-Archer.jpg"}
            ,   {"name": "Jekserah", "deck_name": "Boss", "image": "Jekserah.jpg"}
            ]
        },
        { name: "#13 Temple of the Seer"
        , decks:
            [   {"name": "Stone Golem", "deck_name": "Stone Golem", "image": "Stone-Golem.jpg"}
            ,   {"name": "Cave Bear", "deck_name": "Cave Bear", "image": "Cave-Bear.jpg"}
            ,   {"name": "Living Spirit", "deck_name": "Living Spirit", "image": "Ghost.jpg"}
            ,   {"name": "Spitting Drake", "deck_name": "Spitting Drake", "image": "Spitting-Drake.jpg"}
            ]
        },
        { name: "#14 Frozen Hollow"
        , decks:
            [   {"name": "Hound", "deck_name": "Hound", "image": "Hound.jpg"}
            ,   {"name": "Living Spirit", "deck_name": "Living Spirit", "image": "Ghost.jpg"}
            ,   {"name": "Frost Demon", "deck_name": "Frost Demon", "image": "Frost-Demon.jpg"}
            ]
        },
        { name: "#15 Shrine of Strength"
        , decks:
            [   {"name": "Stone Golem", "deck_name": "Stone Golem", "image": "Stone-Golem.jpg"}
            ,   {"name": "Savvas Icestorm", "deck_name": "Savvas Icestorm", "image": "Savvas-Icestorm.jpg"}
            ,   {"name": "Frost Demon", "deck_name": "Frost Demon", "image": "Frost-Demon.jpg"}
            ,   {"name": "Wind Demon", "deck_name": "Wind Demon", "image": "Wind-Demon.jpg"}
            ,   {"name": "Harrower Infester", "deck_name": "Harrower Infester", "image": "Harrower-Infester.jpg"}
            ]
        },
        { name: "#16 Mountain Pass"
        , decks:
            [   {"name": "Earth Demon", "deck_name": "Earth Demon", "image": "Earth-Demon.jpg"}
            ,   {"name": "Wind Demon", "deck_name": "Wind Demon", "image": "Wind-Demon.jpg"}
            ,   {"name": "Inox Guard", "deck_name": "Guard", "image": "Inox-Guard.jpg"}
            ,   {"name": "Inox Archer", "deck_name": "Archer", "image": "Inox-Archer.jpg"}
            ]
        },
        { name: "#17 Lost Island"
        , decks:
            [   {"name": "Vermling Scout", "deck_name": "Scout", "image": "Vermling-Scout.jpg"}
            ,   {"name": "Vermling Shaman", "deck_name": "Shaman", "image": "Vermling-Shaman.jpg"}
            ,   {"name": "Cave Bear", "deck_name": "Cave Bear", "image": "Cave-Bear.jpg"}
            ]
        },
        { name: "#18 Abandoned Sewers"
        , decks:
            [   {"name": "Giant Viper", "deck_name": "Giant Viper", "image": "Giant-Viper.jpg"}
            ,   {"name": "Ooze", "deck_name": "Ooze", "image": "Ooze.jpg"}
            ,   {"name": "Vermling Scout", "deck_name": "Scout", "image": "Vermling-Scout.jpg"}
            ]
        },
        { name: "#19 Forgotten Crypt"
        , decks:
            [   {"name": "Cultist", "deck_name": "Cultist", "image": "Cultist.jpg"}
            ,   {"name": "Living Bones", "deck_name": "Living Bones", "image": "Skeleton.jpg"}
            ,   {"name": "Living Spirit", "deck_name": "Living Spirit", "image": "Ghost.jpg"}
            ,   {"name": "Living Corpse", "deck_name": "Living Corpse", "image": "Zombie.jpg"}
            ]
        },
        { name: "#20 Necromancer's Sanctum"
        , decks:
            [   {"name": "Living Bones", "deck_name": "Living Bones", "image": "Skeleton.jpg"}
            ,   {"name": "Cultist", "deck_name": "Cultist", "image": "Cultist.jpg"}
            ,   {"name": "Night Demon", "deck_name": "Night Demon", "image": "Night-Demon.jpg"}
            ,   {"name": "Living Corpse", "deck_name": "Living Corpse", "image": "Zombie.jpg"}
            ,   {"name": "Jekserah", "deck_name": "Boss", "image": "Jekserah.jpg"}
            ]
        },
        { name: "#21 Infernal Throne"
        , decks:
            [   {"name": "Sun Demon", "deck_name": "Sun Demon", "image": "Sun-Demon.jpg"}
            ,   {"name": "Frost Demon", "deck_name": "Frost Demon", "image": "Frost-Demon.jpg"}
            ,   {"name": "Night Demon", "deck_name": "Night Demon", "image": "Night-Demon.jpg"}
            ,   {"name": "Wind Demon", "deck_name": "Wind Demon", "image": "Wind-Demon.jpg"}
            ,   {"name": "Earth Demon", "deck_name": "Earth Demon", "image": "Earth-Demon.jpg"}
            ,   {"name": "Flame Demon", "deck_name": "Flame Demon", "image": "Flame-Demon.jpg"}
            ,   {"name": "Prime Demon", "deck_name": "Boss", "image": "Prime-Demon.jpg"}
            ]
        },
        { name: "#22 Temple of the Elements"
        , decks:
            [   {"name": "Living Bones", "deck_name": "Living Bones", "image": "Skeleton.jpg"}
            ,   {"name": "Cultist", "deck_name": "Cultist", "image": "Cultist.jpg"}
            ,   {"name": "Earth Demon", "deck_name": "Earth Demon", "image": "Earth-Demon.jpg"}
            ,   {"name": "Flame Demon", "deck_name": "Flame Demon", "image": "Flame-Demon.jpg"}
            ,   {"name": "Frost Demon", "deck_name": "Frost Demon", "image": "Frost-Demon.jpg"}
            ,   {"name": "Wind Demon", "deck_name": "Wind Demon", "image": "Wind-Demon.jpg"}
            ]
        },
        { name: "#23 Deep Ruins"
        , decks:
            [   {"name": "Stone Golem", "deck_name": "Stone Golem", "image": "Stone-Golem.jpg"}
            ,   {"name": "Ancient Artillery", "deck": "Ancient Artillery", "image": "Ancient-Artillery.jpg"}
            ,   {"name": "Living Bones", "deck_name": "Living Bones", "image": "Skeleton.jpg"}
            ,   {"name": "Living Spirit", "deck_name": "Living Spirit", "image": "Ghost.jpg"}
            ]
        },
        { name: "#24 Echo Chamber"
        , decks:
            [   {"name": "Rending Drake", "deck_name": "Rending Drake", "image": "Vicious-Drake.jpg"}
            ,   {"name": "Ooze", "deck_name": "Ooze", "image": "Ooze.jpg"}
            ,   {"name": "Living Spirit", "deck_name": "Living Spirit", "image": "Ghost.jpg"}
            ]
        },
        { name: "#25 Icecrag Ascent"
        , decks:
            [   {"name": "Hound", "deck_name": "Hound", "image": "Hound.jpg"}
            ,   {"name": "Rending Drake", "deck_name": "Rending Drake", "image": "Vicious-Drake.jpg"}
            ,   {"name": "Spitting Drake", "deck_name": "Spitting Drake", "image": "Spitting-Drake.jpg"}
            ]
        },
        { name: "#26 Ancient Cistern"
        , decks:
            [   {"name": "Living Corpse", "deck_name": "Living Corpse", "image": "Zombie.jpg"}
            ,   {"name": "Ooze", "deck_name": "Ooze", "image": "Ooze.jpg"}
            ,   {"name": "Night Demon", "deck_name": "Night Demon", "image": "Night-Demon.jpg"}
            ,   {"name": "Black Imp", "deck_name": "Imp", "image": "Black-Imp.jpg"}
            ]
        },
        { name: "#27 Ruinous Rift"
        , decks:
            [   {"name": "Night Demon", "deck_name": "Night Demon", "image": "Night-Demon.jpg"}
            ,   {"name": "Wind Demon", "deck_name": "Wind Demon", "image": "Wind-Demon.jpg"}
            ,   {"name": "Frost Demon", "deck_name": "Frost Demon", "image": "Frost-Demon.jpg"}
            ,   {"name": "Sun Demon", "deck_name": "Sun Demon", "image": "Sun-Demon.jpg"}
            ,   {"name": "Earth Demon", "deck_name": "Earth Demon", "image": "Earth-Demon.jpg"}
            ,   {"name": "Flame Demon", "deck_name": "Flame Demon", "image": "Flame-Demon.jpg"}
            ]
        },
        { name: "#28 Outer Ritual Chamber"
        , decks:
            [   {"name": "Living Corpse", "deck_name": "Living Corpse", "image": "Zombie.jpg"}
            ,   {"name": "Cultist", "deck_name": "Cultist", "image": "Cultist.jpg"}
            ,   {"name": "Living Bones", "deck_name": "Living Bones", "image": "Skeleton.jpg"}
            ,   {"name": "Night Demon", "deck_name": "Night Demon", "image": "Night-Demon.jpg"}
            ,   {"name": "Sun Demon", "deck_name": "Sun Demon", "image": "Sun-Demon.jpg"}
            ]
        , special_rules:
            [ SPECIAL_RULES.living_corpse_two_levels_extra
            ]
        },
        { name: "#29 Sanctuary of Gloom"
        , decks:
            [   {"name": "Living Bones", "deck_name": "Living Bones", "image": "Skeleton.jpg"}
            ,   {"name": "Living Corpse", "deck_name": "Living Corpse", "image": "Zombie.jpg"}
            ,   {"name": "Living Spirit", "deck_name": "Living Spirit", "image": "Ghost.jpg"}
            ,   {"name": "Black Imp", "deck_name": "Imp", "image": "Black-Imp.jpg"}
            ]
        },
        { name: "#30 Shrine of the Depths"
        , decks:
            [   {"name": "Ooze", "deck_name": "Ooze", "image": "Ooze.jpg"}
            ,   {"name": "Lurker", "deck_name": "Lurker", "image": "Lurker.jpg"}
            ,   {"name": "Deep Terror", "deck_name": "Deep Terror", "image": "Deep-Terror.jpg"}
            ]
        },
        { name: "#31 Plane of the Night"
        , decks:
            [   {"name": "Deep Terror", "deck_name": "Deep Terror", "image": "Deep-Terror.jpg"}
            ,   {"name": "Night Demon", "deck_name": "Night Demon", "image": "Night-Demon.jpg"}
            ,   {"name": "Black Imp", "deck_name": "Imp", "image": "Black-Imp.jpg"}
            ]
        },
        { name: "#32 Decrepit Wood"
        , decks:
            [   {"name": "Harrower Infester", "deck_name": "Harrower Infester", "image": "Harrower-Infester.jpg"}
            ,   {"name": "Giant Viper", "deck_name": "Giant Viper", "image": "Giant-Viper.jpg"}
            ,   {"name": "Deep Terror", "deck_name": "Deep Terror", "image": "Deep-Terror.jpg"}
            ,   {"name": "Black Imp", "deck_name": "Imp", "image": "Black-Imp.jpg"}
            ]
        },
        { name: "#33 Savvas Armory"
        , decks:
            [   {"name": "Savvas Icestorm", "deck_name": "Savvas Icestorm", "image": "Savvas-Icestorm.jpg"}
            ,   {"name": "Savvas Lavaflow", "deck_name": "Savvas Lavaflow", "image": "Savvas-Lavaflow.jpg"}
            ,   {"name": "Frost Demon", "deck_name": "Frost Demon", "image": "Frost-Demon.jpg"}
            ,   {"name": "Flame Demon", "deck_name": "Flame Demon", "image": "Flame-Demon.jpg"}
            ,   {"name": "Wind Demon", "deck_name": "Wind Demon", "image": "Wind-Demon.jpg"}
            ,   {"name": "Earth Demon", "deck_name": "Earth Demon", "image": "Earth-Demon.jpg"}
            ]
        },
        { name: "#34 Scorched Summit"
        , decks:
            [   {"name": "Rending Drake", "deck_name": "Rending Drake", "image": "Vicious-Drake.jpg"}
            ,   {"name": "Spitting Drake", "deck_name": "Spitting Drake", "image": "Spitting-Drake.jpg"}
            ,   {"name": "Elder Drake", "deck_name": "Boss", "image": "Elder-Drake.jpg"}
            ]
        },
        { name: "#35 Gloomhaven Battlements A"
        , decks:
            [   {"name": "Flame Demon", "deck_name": "Flame Demon", "image": "Flame-Demon.jpg"}
            ,   {"name": "Frost Demon", "deck_name": "Frost Demon", "image": "Frost-Demon.jpg"}
            ,   {"name": "Earth Demon", "deck_name": "Earth Demon", "image": "Earth-Demon.jpg"}
            ,   {"name": "Wind Demon", "deck_name": "Wind Demon", "image": "Wind-Demon.jpg"}
            ,   {"name": "City Archer", "deck_name": "Archer", "image": "City-Archer.jpg"}
            ,   {"name": "City Guard", "deck_name": "Guard", "image": "City-Guard.jpg"}             
            ,   {"name": "Captain of the Guard", "deck_name": "Boss", "image": "Guard-Captain.jpg"}
            ]
        },
        { name: "#36 Gloomhaven Battlements B"
        , decks:
            [   {"name": "Flame Demon", "deck_name": "Flame Demon", "image": "Flame-Demon.jpg"}
            ,   {"name": "Frost Demon", "deck_name": "Frost Demon", "image": "Frost-Demon.jpg"}
            ,   {"name": "Earth Demon", "deck_name": "Earth Demon", "image": "Earth-Demon.jpg"}
            ,   {"name": "Wind Demon", "deck_name": "Wind Demon", "image": "Wind-Demon.jpg"}
            ,   {"name": "City Archer", "deck_name": "Archer", "image": "City-Archer.jpg"}
            ,   {"name": "Prime Demon", "deck_name": "Boss", "image": "Prime-Demon.jpg"}
            ]
        },
        { name: "#37 Doom Trench"
        , decks:
            [   {"name": "Lurker", "deck_name": "Lurker", "image": "Lurker.jpg"}
            ,   {"name": "Deep Terror", "deck_name": "Deep Terror", "image": "Deep-Terror.jpg"}
            ,   {"name": "Harrower Infester", "deck_name": "Harrower Infester", "image": "Harrower-Infester.jpg"}
            ]
        },
        { name: "#38 Slave Pens"
        , decks:
            [   {"name": "Inox Guard", "deck_name": "Guard", "image": "Inox-Guard.jpg"}
            ,   {"name": "Inox Archer", "deck_name": "Archer", "image": "Inox-Archer.jpg"}
            ,   {"name": "Inox Shaman", "deck_name": "Shaman", "image": "Inox-Shaman.jpg"}
            ,   {"name": "Stone Golem", "deck_name": "Stone Golem", "image": "Stone-Golem.jpg"}
            ]
        },
        { name: "#39 Treacherous Divide"
        , decks:
            [   {"name": "Cave Bear", "deck_name": "Cave Bear", "image": "Cave-Bear.jpg"}
            ,   {"name": "Frost Demon", "deck_name": "Frost Demon", "image": "Frost-Demon.jpg"}
            ,   {"name": "Spitting Drake", "deck_name": "Spitting Drake", "image": "Spitting-Drake.jpg"}
            ,   {"name": "Cultist", "deck_name": "Cultist", "image": "Cultist.jpg"}
            ,   {"name": "Living Bones", "deck_name": "Living Bones", "image": "Skeleton.jpg"}
            ]
        },
        { name: "#40 Ancient Defense Network"
        , decks:
            [   {"name": "Living Corpse", "deck_name": "Living Corpse", "image": "Zombie.jpg"}
            ,   {"name": "Flame Demon", "deck_name": "Flame Demon", "image": "Flame-Demon.jpg"}
            ,   {"name": "Cave Bear", "deck_name": "Cave Bear", "image": "Cave-Bear.jpg"}
            ,   {"name": "Stone Golem", "deck_name": "Stone Golem", "image": "Stone-Golem.jpg"}
            ,   {"name": "Forest Imp", "deck_name": "Imp", "image": "Black-Imp.jpg"}
            ]
        },
        { name: "#41 Timeworn Tomb"
        , decks:
            [   {"name": "Ancient Artillery", "deck": "Ancient Artillery", "image": "Ancient-Artillery.jpg"}
            ,   {"name": "Living Corpse", "deck_name": "Living Corpse", "image": "Zombie.jpg"}
            ,   {"name": "Living Spirit", "deck_name": "Living Spirit", "image": "Ghost.jpg"}
            ,   {"name": "Stone Golem", "deck_name": "Stone Golem", "image": "Stone-Golem.jpg"}
            ]
        },
        { name: "#42 Realm of the Voice"
        , decks:
            [   {"name": "Night Demon", "deck_name": "Night Demon", "image": "Night-Demon.jpg"}
            ,   {"name": "Wind Demon", "deck_name": "Wind Demon", "image": "Wind-Demon.jpg"}
            ,   {"name": "Living Spirit", "deck_name": "Living Spirit", "image": "Ghost.jpg"}
            ]
        },
        { name: "#43 - Drake Nest"
        , decks:
            [   {"name": "Flame Demon", "deck_name": "Flame Demon", "image": "Flame-Demon.jpg"}
            ,   {"name": "Rending Drake", "deck_name": "Rending Drake", "image": "Vicious-Drake.jpg"}
            ,   {"name": "Spitting Drake", "deck_name": "Spitting Drake", "image": "Spitting-Drake.jpg"}
            ]
        },
        { name: "#44 Tribal Assault"
        , decks:
            [   {"name": "Inox Guard", "deck_name": "Guard", "image": "Inox-Guard.jpg"}
            ,   {"name": "Inox Archer", "deck_name": "Archer", "image": "Inox-Archer.jpg"}
            ,   {"name": "Hound", "deck_name": "Hound", "image": "Hound.jpg"}
            ,   {"name": "Inox Shaman", "deck_name": "Shaman", "image": "Inox-Shaman.jpg"}
            ]
        },
        { name: "#45 Rebel Swamp"
        , decks:
            [   {"name": "City Guard", "deck_name": "Guard", "image": "City-Guard.jpg"}
            ,   {"name": "City Archer", "deck_name": "Archer", "image": "City-Archer.jpg"}
            ,   {"name": "Hound", "deck_name": "Hound", "image": "Hound.jpg"}
            ]
        },
        { name: "#46 Nightmare Peak"
        , decks:
            [   {"name": "Night Demon", "deck_name": "Night Demon", "image": "Night-Demon.jpg"}
            ,   {"name": "Frost Demon", "deck_name": "Frost Demon", "image": "Frost-Demon.jpg"}
            ,   {"name": "Wind Demon", "deck_name": "Wind Demon", "image": "Wind-Demon.jpg"}
            ,   {"name": "Savvas Icestorm", "deck_name": "Savvas Icestorm", "image": "Savvas-Icestorm.jpg"}
            ,   {"name": "Winged Horror", "deck_name": "Boss", "image": "Winged-Horror.jpg"}
            ]
        },
        { name: "#47 Lair of the Unseeing Eye"
        , decks:
            [   {"name": "Lurker", "deck_name": "Lurker", "image": "Lurker.jpg"}
            ,   {"name": "Deep Terror", "deck_name": "Deep Terror", "image": "Deep-Terror.jpg"}
            ,   {"name": "Harrower Infester", "deck_name": "Harrower Infester", "image": "Harrower-Infester.jpg"}
            ,   {"name": "The Sightless Eye", "deck_name": "Boss", "image": "The-Sightless-Eye.jpg"}
            ]
        },
        { name: "#48 - Shadow Weald"
        , decks:
            [   {"name": "Forest Imp", "deck_name": "Imp", "image": "Black-Imp.jpg"}
            ,   {"name": "Earth Demon", "deck_name": "Earth Demon", "image": "Earth-Demon.jpg"}
            ,   {"name": "Harrower Infester", "deck_name": "Harrower Infester", "image": "Harrower-Infester.jpg"}
            ,   {"name": "Dark Rider", "deck_name": "Boss", "image": "Dark-Rider-small.jpg"}
            ]
        },
        { name: "#49 Rebel's Stand"
        , decks:
            [   {"name": "Giant Viper", "deck_name": "Giant Viper", "image": "Giant-Viper.jpg"}
            ,   {"name": "City Archer", "deck_name": "Archer", "image": "City-Archer.jpg"}
            ,   {"name": "City Guard", "deck_name": "Guard", "image": "City-Guard.jpg"}
            ,   {"name": "Ancient Artillery", "deck": "Ancient Artillery", "image": "Ancient-Artillery.jpg"}
            ]
        },
        { name: "#50 Ghost Fortress"
        , decks:
            [   {"name": "Night Demon", "deck_name": "Night Demon", "image": "Night-Demon.jpg"}
            ,   {"name": "Sun Demon", "deck_name": "Sun Demon", "image": "Sun-Demon.jpg"}
            ,   {"name": "Earth Demon", "deck_name": "Earth Demon", "image": "Earth-Demon.jpg"}
            ]
        },
        { name: "#51 The Void"
        , decks:
            [   {"name": "The Gloom", "deck_name": "Boss", "image": "The-Gloom.jpg"}
            ]
        },
        { name: "#52 Noxious Cellar"
        , decks:
            [   {"name": "Spitting Drake", "deck_name": "Spitting Drake", "image": "Spitting-Drake.jpg"}
            ,   {"name": "Ooze", "deck_name": "Ooze", "image": "Ooze.jpg"}
            ,   {"name": "Vermling Scout", "deck_name": "Scout", "image": "Vermling-Scout.jpg"}
            ,   {"name": "Living Corpse", "deck_name": "Living Corpse", "image": "Zombie.jpg"}
            ,   {"name": "Vermling Shaman", "deck_name": "Shaman", "image": "Vermling-Shaman.jpg"}
            ]
        },
        { name: "#53 Crypt Basement"
        , decks:
            [   {"name": "Ooze", "deck_name": "Ooze", "image": "Ooze.jpg"}
            ,   {"name": "Living Corpse", "deck_name": "Living Corpse", "image": "Zombie.jpg"}
            ,   {"name": "Living Spirit", "deck_name": "Living Spirit", "image": "Ghost.jpg"}
            ,   {"name": "Living Bones", "deck_name": "Living Bones", "image": "Skeleton.jpg"}
            ,   {"name": "Giant Viper", "deck_name": "Giant Viper", "image": "Giant-Viper.jpg"}
            ]
        },
        { name: "#54 Palace of Ice"
        , decks:
            [   {"name": "Cave Bear", "deck_name": "Cave Bear", "image": "Cave-Bear.jpg"}
            ,   {"name": "Living Spirit", "deck_name": "Living Spirit", "image": "Ghost.jpg"}
            ,   {"name": "Frost Demon", "deck_name": "Frost Demon", "image": "Frost-Demon.jpg"}
            ,   {"name": "Harrower Infester", "deck_name": "Harrower Infester", "image": "Harrower-Infester.jpg"}
            ]
        },
        //TODO Show message that this is random, use deck tab instead
        { name: "#55 Foggy Thicket"
        , decks:
            [ ]
        },
        { name: "#56 Bandit's Wood"
        , decks:
            [   {"name": "Hound", "deck_name": "Hound", "image": "Hound.jpg"}
            ,   {"name": "Bandit Archer", "deck_name": "Archer", "image": "Bandit-Archer.jpg"}
            ,   {"name": "Rending Drake", "deck_name": "Rending Drake", "image": "Vicious-Drake.jpg"}
            ,   {"name": "Bandit Guard", "deck_name": "Guard", "image": "Bandit-Guard.jpg"}
            ]
        },
        { name: "#57 Investigation"
        , decks:
            [   {"name": "City Guard", "deck_name": "Guard", "image": "City-Guard.jpg"}
            ,   {"name": "City Archer", "deck_name": "Archer", "image": "City-Archer.jpg"}
            ,   {"name": "Hound", "deck_name": "Hound", "image": "Hound.jpg"}
            ]
        },
        { name: "#58 Bloody Shack"
        , decks:
            [   {"name": "Earth Demon", "deck_name": "Earth Demon", "image": "Earth-Demon.jpg"}
            ,   {"name": "Harrower Infester", "deck_name": "Harrower Infester", "image": "Harrower-Infester.jpg"}
            ,   {"name": "Black Imp", "deck_name": "Imp", "image": "Black-Imp.jpg"}
            ,   {"name": "City Guard", "deck_name": "Guard", "image": "City-Guard.jpg"}
            ]
        },
        { name: "#59 Forgotten Grove"
        , decks:
            [   {"name": "Cave Bear", "deck_name": "Cave Bear", "image": "Cave-Bear.jpg"}
            ,   {"name": "Hound", "deck_name": "Hound", "image": "Hound.jpg"}
            ,   {"name": "Forest Imp", "deck_name": "Imp", "image": "Black-Imp.jpg"}
            ]
        },
        { name: "#60 Alchemy Lab"
        , decks:
            [   {"name": "Ooze", "deck_name": "Ooze", "image": "Ooze.jpg"}
            ,   {"name": "Giant Viper", "deck_name": "Giant Viper", "image": "Giant-Viper.jpg"}
            ,   {"name": "Hound", "deck_name": "Hound", "image": "Hound.jpg"}
            ,   {"name": "Rending Drake", "deck_name": "Rending Drake", "image": "Vicious-Drake.jpg"}
            ,   {"name": "Spitting Drake", "deck_name": "Spitting Drake", "image": "Spitting-Drake.jpg"}
            ]
        },
        { name: "#61 Fading Lighthouse"
        , decks:
            [   {"name": "Ooze", "deck_name": "Ooze", "image": "Ooze.jpg"}
            ,   {"name": "Giant Viper", "deck_name": "Giant Viper", "image": "Giant-Viper.jpg"}
            ,   {"name": "Frost Demon", "deck_name": "Frost Demon", "image": "Frost-Demon.jpg"}
            ,   {"name": "Flame Demon", "deck_name": "Flame Demon", "image": "Flame-Demon.jpg"}
            ]
        },
        { name: "#62 Pit of Souls"
        , decks:
            [   {"name": "Living Bones", "deck_name": "Living Bones", "image": "Skeleton.jpg"}
            ,   {"name": "Living Spirit", "deck_name": "Living Spirit", "image": "Ghost.jpg"}
            ]
        },
        { name: "#63 Magma Pit"
        , decks:
            [   {"name": "Vermling Scout", "deck_name": "Scout", "image": "Vermling-Scout.jpg"}
            ,   {"name": "Inox Guard", "deck_name": "Guard", "image": "Inox-Guard.jpg"}
            ,   {"name": "Inox Archer", "deck_name": "Archer", "image": "Inox-Archer.jpg"}
            ,   {"name": "Flame Demon", "deck_name": "Flame Demon", "image": "Flame-Demon.jpg"}
            ]
        },
        { name: "#64 Underwater Lagoon"
        , decks:
            [   {"name": "Ooze", "deck_name": "Ooze", "image": "Ooze.jpg"}
            ,   {"name": "Forest Imp", "deck_name": "Imp", "image": "Black-Imp.jpg"}
            ,   {"name": "Rending Drake", "deck_name": "Rending Drake", "image": "Vicious-Drake.jpg"}
            ]
        },
        { name: "#65 Sulfur Mine"
        , decks:
            [   {"name": "Vermling Scout", "deck_name": "Scout", "image": "Vermling-Scout.jpg"}
            ,   {"name": "Hound", "deck_name": "Hound", "image": "Hound.jpg"}
            ,   {"name": "Inox Shaman", "deck_name": "Shaman", "image": "Inox-Shaman.jpg"}
            ]
        },
        { name: "#66 Clockwork Cove"
        , decks:
            [   {"name": "Ooze", "deck_name": "Ooze", "image": "Ooze.jpg"}
            ,   {"name": "Ancient Artillery", "deck": "Ancient Artillery", "image": "Ancient-Artillery.jpg"}
            ,   {"name": "Living Spirit", "deck_name": "Living Spirit", "image": "Ghost.jpg"}
            ,   {"name": "Stone Golem", "deck_name": "Stone Golem", "image": "Stone-Golem.jpg"}
            ]
        },
        { name: "#67 Arcane Library"
        , decks:
            [   {"name": "Forest Imp", "deck_name": "Imp", "image": "Black-Imp.jpg"}
            ,   {"name": "Cave Bear", "deck_name": "Cave Bear", "image": "Cave-Bear.jpg"}
            ,   {"name": "Stone Golem", "deck_name": "Stone Golem", "image": "Stone-Golem.jpg"}
            ]
        },
        { name: "#68 Toxic Moor"
        , decks:
            [   {"name": "Rending Drake", "deck_name": "Rending Drake", "image": "Vicious-Drake.jpg"}
            ,   {"name": "Black Imp", "deck_name": "Imp", "image": "Black-Imp.jpg"}
            ,   {"name": "Giant Viper", "deck_name": "Giant Viper", "image": "Giant-Viper.jpg"}
            ,   {"name": "Living Corpse", "deck_name": "Living Corpse", "image": "Zombie.jpg"}
            ]
        },
        { name: "#69 Well of the Unfortunate"
        , decks:
            [   {"name": "Vermling Scout", "deck_name": "Scout", "image": "Vermling-Scout.jpg"}
            ,   {"name": "Vermling Shaman", "deck_name": "Shaman", "image": "Vermling-Shaman.jpg"}
            ,   {"name": "Forest Imp", "deck_name": "Imp", "image": "Black-Imp.jpg"}
            ,   {"name": "Stone Golem", "deck_name": "Stone Golem", "image": "Stone-Golem.jpg"}
            ,   {"name": "Living Spirit", "deck_name": "Living Spirit", "image": "Ghost.jpg"}
            ]
        },
        { name: "#70 Chained Isle"
        , decks:
            [   {"name": "Night Demon", "deck_name": "Night Demon", "image": "Night-Demon.jpg"}
            ,   {"name": "Wind Demon", "deck_name": "Wind Demon", "image": "Wind-Demon.jpg"}
            ,   {"name": "Living Spirit", "deck_name": "Living Spirit", "image": "Ghost.jpg"}
            ]
        },
        { name: "#71 Windswept Highlands"
        , decks:
            [   {"name": "Spitting Drake", "deck_name": "Spitting Drake", "image": "Spitting-Drake.jpg"}
            ,   {"name": "Wind Demon", "deck_name": "Wind Demon", "image": "Wind-Demon.jpg"}
            ,   {"name": "Sun Demon", "deck_name": "Sun Demon", "image": "Sun-Demon.jpg"}
            ]
        },
        { name: "#72 Oozing Grove"
        , decks:
            [   {"name": "Ooze", "deck_name": "Ooze", "image": "Ooze.jpg"}
            ,   {"name": "Forest Imp", "deck_name": "Imp", "image": "Black-Imp.jpg"}
            ,   {"name": "Giant Viper", "deck_name": "Giant Viper", "image": "Giant-Viper.jpg"}
            ]
        },
        { name: "#73 Rockslide Ridge"
        , decks:
            [   {"name": "Hound", "deck_name": "Hound", "image": "Hound.jpg"}
            ,   {"name": "Inox Archer", "deck_name": "Archer", "image": "Inox-Archer.jpg"}
            ,   {"name": "Ancient Artillery", "deck": "Ancient Artillery", "image": "Ancient-Artillery.jpg"}
            ,   {"name": "Inox Guard", "deck_name": "Guard", "image": "Inox-Guard.jpg"}
            ,   {"name": "Inox Shaman", "deck_name": "Shaman", "image": "Inox-Shaman.jpg"}
            ]
        },
        { name: "#74 Merchant Ship"
        , decks:
            [   {"name": "Bandit Guard", "deck_name": "Guard", "image": "Bandit-Guard.jpg"}
            ,   {"name": "Bandit Archer", "deck_name": "Archer", "image": "Bandit-Archer.jpg"}
            ,   {"name": "Lurker", "deck_name": "Lurker", "image": "Lurker.jpg"}
            ,   {"name": "Deep Terror", "deck_name": "Deep Terror", "image": "Deep-Terror.jpg"}
            ]
        },
        { name: "#75 Overgrown Graveyard"
        , decks:
            [   {"name": "Living Bones", "deck_name": "Living Bones", "image": "Skeleton.jpg"}
            ,   {"name": "Living Corpse", "deck_name": "Living Corpse", "image": "Zombie.jpg"}
            ,   {"name": "Living Spirit", "deck_name": "Living Spirit", "image": "Ghost.jpg"}
            ]
        },
        { name: "#76 Harrower Hive"
        , decks:
            [   {"name": "Giant Viper", "deck_name": "Giant Viper", "image": "Giant-Viper.jpg"}
            ,   {"name": "Living Bones", "deck_name": "Living Bones", "image": "Skeleton.jpg"}
            ,   {"name": "Night Demon", "deck_name": "Night Demon", "image": "Night-Demon.jpg"}
            ,   {"name": "Harrower Infester", "deck_name": "Harrower Infester", "image": "Harrower-Infester.jpg"}
            ]
        },
        { name: "#77 Vault of Secrets"
        , decks:
            [   {"name": "City Guard", "deck_name": "Guard", "image": "City-Guard.jpg"}
            ,   {"name": "City Archer", "deck_name": "Archer", "image": "City-Archer.jpg"}
            ,   {"name": "Stone Golem", "deck_name": "Stone Golem", "image": "Stone-Golem.jpg"}
            ,   {"name": "Hound", "deck_name": "Hound", "image": "Hound.jpg"}
            ]
        },
        { name: "#78 Sacrifice Pit"
        , decks:
            [   {"name": "Bandit Guard", "deck_name": "Guard", "image": "Bandit-Guard.jpg"}
            ,   {"name": "Bandit Archer", "deck_name": "Archer", "image": "Bandit-Archer.jpg"}
            ,   {"name": "Cultist", "deck_name": "Cultist", "image": "Cultist.jpg"}
            ,   {"name": "Living Bones", "deck_name": "Living Bones", "image": "Skeleton.jpg"}
            ,   {"name": "Black Imp", "deck_name": "Imp", "image": "Black-Imp.jpg"}
            ]
        },
        { name: "#79 Lost Temple"
        , decks:
            [   {"name": "Stone Golem", "deck_name": "Stone Golem", "image": "Stone-Golem.jpg"}
            ,   {"name": "Giant Viper", "deck_name": "Giant Viper", "image": "Giant-Viper.jpg"}
            ,   {"name": "The Betrayer", "deck_name": "Boss", "image": "The-Betrayer.jpg"}
            ]
        },
        { name: "#80 Vigil Keep"
        , decks:
            [   {"name": "City Guard", "deck_name": "Guard", "image": "City-Guard.jpg"}
            ,   {"name": "City Archer", "deck_name": "Archer", "image": "City-Archer.jpg"}
            ,   {"name": "Ancient Artillery", "deck": "Ancient Artillery", "image": "Ancient-Artillery.jpg"}
            ,   {"name": "Hound", "deck_name": "Hound", "image": "Hound.jpg"}
            ]
        },
        { name: "#81 Temple of the Eclipse"
        , decks:
            [   {"name": "Night Demon", "deck_name": "Night Demon", "image": "Night-Demon.jpg"}
            ,   {"name": "Sun Demon", "deck_name": "Sun Demon", "image": "Sun-Demon.jpg"}
            ,   {"name": "Stone Golem", "deck_name": "Stone Golem", "image": "Stone-Golem.jpg"}
            ,   {"name": "Ancient Artillery", "deck": "Ancient Artillery", "image": "Ancient-Artillery.jpg"}
            ,   {"name": "The Colorless", "deck_name": "Boss", "image": "The-Colorless.jpg"}
            ]
        },
        { name: "#82 Burning Mountain"
        , decks:
            [   {"name": "Earth Demon", "deck_name": "Earth Demon", "image": "Earth-Demon.jpg"}
            ,   {"name": "Flame Demon", "deck_name": "Flame Demon", "image": "Flame-Demon.jpg"}
            ,   {"name": "Stone Golem", "deck_name": "Stone Golem", "image": "Stone-Golem.jpg"}
            ]
        },
        { name: "#83 Shadows Within"
        , decks:
            [   {"name": "Hound", "deck_name": "Hound", "image": "Hound.jpg"}
            ,   {"name": "Cultist", "deck_name": "Cultist", "image": "Cultist.jpg"}
            ,   {"name": "Living Bones", "deck_name": "Living Bones", "image": "Skeleton.jpg"}
            ,   {"name": "Living Spirit", "deck_name": "Living Spirit", "image": "Ghost.jpg"}
            ,   {"name": "Flame Demon", "deck_name": "Flame Demon", "image": "Flame-Demon.jpg"}
            ]
        },
        { name: "#84 Crystalline Cave"
        , decks:
            [   {"name": "Flame Demon", "deck_name": "Flame Demon", "image": "Flame-Demon.jpg"}
            ,   {"name": "Frost Demon", "deck_name": "Frost Demon", "image": "Frost-Demon.jpg"}
            ,   {"name": "Earth Demon", "deck_name": "Earth Demon", "image": "Earth-Demon.jpg"}
            ]
        },
        { name: "#85 Sun Temple"
        , decks:
            [   {"name": "Hound", "deck_name": "Hound", "image": "Hound.jpg"}
            ,   {"name": "Black Imp", "deck_name": "Imp", "image": "Black-Imp.jpg"}
            ,   {"name": "Night Demon", "deck_name": "Night Demon", "image": "Night-Demon.jpg"}
            ,   {"name": "Sun Demon", "deck_name": "Sun Demon", "image": "Sun-Demon.jpg"}
            ]
        },
        { name: "#86 Harried Village"
        , decks:
            [   {"name": "Cave Bear", "deck_name": "Cave Bear", "image": "Cave-Bear.jpg"}
            ,   {"name": "Vermling Shaman", "deck_name": "Shaman", "image": "Vermling-Shaman.jpg"}
            ,   {"name": "Vermling Scout", "deck_name": "Scout", "image": "Vermling-Scout.jpg"}
            ,   {"name": "Lurker", "deck_name": "Lurker", "image": "Lurker.jpg"}
            ]
        },
        { name: "#87 Corrupted Cove"
        , decks:
            [   {"name": "Lurker", "deck_name": "Lurker", "image": "Lurker.jpg"}
            ,   {"name": "Deep Terror", "deck_name": "Deep Terror", "image": "Deep-Terror.jpg"}
            ,   {"name": "Ooze", "deck_name": "Ooze", "image": "Ooze.jpg"}
            ,   {"name": "Black Imp", "deck_name": "Imp", "image": "Black-Imp.jpg"}
            ]
        },
        { name: "#88 Plane of Water"
        , decks:
            [   {"name": "Frost Demon", "deck_name": "Frost Demon", "image": "Frost-Demon.jpg"}
            ,   {"name": "Ooze", "deck_name": "Ooze", "image": "Ooze.jpg"}
            ,   {"name": "Lurker", "deck_name": "Lurker", "image": "Lurker.jpg"}
            ]
        },
        { name: "#89 Syndicate Hideout"
        , decks:
            [   {"name": "Bandit Archer", "deck_name": "Archer", "image": "Bandit-Archer.jpg"}
            ,   {"name": "Bandit Guard", "deck_name": "Guard", "image": "Bandit-Guard.jpg"}
            ,   {"name": "Cultist", "deck_name": "Cultist", "image": "Cultist.jpg"}
            ,   {"name": "Giant Viper", "deck_name": "Giant Viper", "image": "Giant-Viper.jpg"}
            ]
        },
        { name: "#90 Demonic Rift"
        , decks:
            [   {"name": "Earth Demon", "deck_name": "Earth Demon", "image": "Earth-Demon.jpg"}
            ,   {"name": "Wind Demon", "deck_name": "Wind Demon", "image": "Wind-Demon.jpg"}
            ,   {"name": "Night Demon", "deck_name": "Night Demon", "image": "Night-Demon.jpg"}
            ,   {"name": "Living Spirit", "deck_name": "Living Spirit", "image": "Ghost.jpg"}
            ]
        },
        { name: "#91 Wild Melee"
        , decks:
            [   {"name": "Cave Bear", "deck_name": "Cave Bear", "image": "Cave-Bear.jpg"}
            ,   {"name": "Hound", "deck_name": "Hound", "image": "Hound.jpg"}
            ,   {"name": "Bandit Guard", "deck_name": "Guard", "image": "Bandit-Guard.jpg"}
            ,   {"name": "Bandit Archer", "deck_name": "Archer", "image": "Bandit-Archer.jpg"}
            ,   {"name": "Living Spirit", "deck_name": "Living Spirit", "image": "Ghost.jpg"}
            ]
        },
        { name: "#92 Back Alley Brawl"
        , decks:
            [   {"name": "Bandit Guard", "deck_name": "Guard", "image": "Bandit-Guard.jpg"}
            ,   {"name": "City Guard", "deck_name": "Guard", "image": "City-Guard.jpg"}
            ,   {"name": "Inox Guard", "deck_name": "Guard", "image": "Inox-Guard.jpg"}
            ,   {"name": "Bandit Archer", "deck_name": "Archer", "image": "Bandit-Archer.jpg"}
            ,   {"name": "City Archer", "deck_name": "Archer", "image": "City-Archer.jpg"}
            ,   {"name": "Savvas Icestorm", "deck_name": "Savvas Icestorm", "image": "Savvas-Icestorm.jpg"}
            ,   {"name": "Frost Demon", "deck_name": "Frost Demon", "image": "Frost-Demon.jpg"}
            ,   {"name": "Wind Demon", "deck_name": "Wind Demon", "image": "Wind-Demon.jpg"}
            ]
        },
        { name: "#93 Sunken Vessel"
        , decks:
            [   {"name": "Lurker", "deck_name": "Lurker", "image": "Lurker.jpg"}
            ,   {"name": "Frost Demon", "deck_name": "Frost Demon", "image": "Frost-Demon.jpg"}
            ,   {"name": "Living Spirit", "deck_name": "Living Spirit", "image": "Ghost.jpg"}
            ]
        },
        { name: "#94 Vermling Nest"
        , decks:
            [   {"name": "Hound", "deck_name": "Hound", "image": "Hound.jpg"}
            ,   {"name": "Vermling Scout", "deck_name": "Scout", "image": "Vermling-Scout.jpg"}
            ,   {"name": "Vermling Shaman", "deck_name": "Shaman", "image": "Vermling-Shaman.jpg"}
            ,   {"name": "Cave Bear", "deck_name": "Cave Bear", "image": "Cave-Bear.jpg"}
            ]
        },
        { name: "#95 Payment Due"
        , decks:
            [   {"name": "Deep Terror", "deck_name": "Deep Terror", "image": "Deep-Terror.jpg"}
            ,   {"name": "Flame Demon", "deck_name": "Flame Demon", "image": "Flame-Demon.jpg"}
            ,   {"name": "Earth Demon", "deck_name": "Earth Demon", "image": "Earth-Demon.jpg"}
            ,   {"name": "Savvas Lavaflow", "deck_name": "Savvas Lavaflow", "image": "Savvas-Lavaflow.jpg"}
            ]
        }

    ];
