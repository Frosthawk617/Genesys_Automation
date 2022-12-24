Hooks.on('getActorSheetHeaderButtons',(sheet, buttons)=>{
    const target = (sheet.actor);
    if (game.user.isGM) {
    buttons.unshift({
        class: 'gen-button',
        label: 'NPC-Gen',
        icon: 'fas fa-swimmer',
        onclick: () => {
            main(target);
        }
    });
    }
});

async function main(target){
    const pack = game.packs.get("world.npc-talents");
    const Characs = [
        {
            "name": "Small Creature",
            "characs": {
              "brawn": 1,
              "agility": 2,
              "intellect": 1,
              "cunning": 3,
              "willpower": 1,
              "presence": 1
            },
            "power_level": {
              "combat": -1,
              "social": -1,
              "general": 0
            },
            "ex": "Mouse, bird, snake, cat"
          },
          {
            "name": "Large Creature",
            "characs": {
              "brawn": 4,
              "agility": 2,
              "intellect": 1,
              "cunning": 2,
              "willpower": 1,
              "presence": 1
            },
            "power_level": {
              "combat": 1,
              "social": -1,
              "general": 0
            },
            "ex": "Bear, ox, horse, cow, ram"
          },
          {
            "name": "Stealthy Creature",
            "characs": {
              "brawn": 2,
              "agility": 3,
              "intellect": 1,
              "cunning": 3,
              "willpower": 1,
              "presence": 1
            },
            "power_level": {
              "combat": 0,
              "social": -1,
              "general": 0
            },
            "ex": "Puma, deer, shark"
          },
          {
            "name": "Huge Creature",
            "characs": {
              "brawn": 5,
              "agility": 1,
              "intellect": 1,
              "cunning": 1,
              "willpower": 1,
              "presence": 1
            },
            "power_level": {
              "combat": 1,
              "social": -1,
              "general": -1
            },
            "ex": "Elephant, dinosaur"
          },
          {
            "name": "Average Person ",
            "characs": {
              "brawn": 2,
              "agility": 2,
              "intellect": 2,
              "cunning": 2,
              "willpower": 2,
              "presence": 2
            },
            "power_level": {
              "combat": 0,
              "social": 0,
              "general": 0
            },
            "ex": "Any regular person"
          },
          {
            "name": "Tough Person",
            "characs": {
              "brawn": 3,
              "agility": 2,
              "intellect": 2,
              "cunning": 2,
              "willpower": 2,
              "presence": 1
            },
            "power_level": {
              "combat": 0,
              "social": -1,
              "general": 0
            },
            "ex": "Laborer, mob tough, soldier"
          },
          {
            "name": "Smart Person",
            "characs": {
              "brawn": 1,
              "agility": 2,
              "intellect": 3,
              "cunning": 2,
              "willpower": 2,
              "presence": 2
            },
            "power_level": {
              "combat": -1,
              "social": 0,
              "general": 0
            },
            "ex": "Student, medic, hacker"
          },
          {
            "name": "Sociable Person",
            "characs": {
              "brawn": 2,
              "agility": 2,
              "intellect": 2,
              "cunning": 2,
              "willpower": 1,
              "presence": 3
            },
            "power_level": {
              "combat": 0,
              "social": 0,
              "general": 0
            },
            "ex": "Politician, manager"
          },
          {
            "name": "Jack of All Trades",
            "characs": {
              "brawn": 3,
              "agility": 3,
              "intellect": 3,
              "cunning": 3,
              "willpower": 3,
              "presence": 3
            },
            "power_level": {
              "combat": 1,
              "social": 1,
              "general": 1
            },
            "ex": "Any competent person"
          },
          {
            "name": "Skilled Warrior",
            "characs": {
              "brawn": 4,
              "agility": 3,
              "intellect": 2,
              "cunning": 2,
              "willpower": 3,
              "presence": 1
            },
            "power_level": {
              "combat": 2,
              "social": 0,
              "general": 0
            },
            "ex": "Knight, berserker, veteran"
          },
          {
            "name": "Savant",
            "characs": {
              "brawn": 2,
              "agility": 1,
              "intellect": 5,
              "cunning": 2,
              "willpower": 2,
              "presence": 1
            },
            "power_level": {
              "combat": -1,
              "social": -1,
              "general": 1
            },
            "ex": "Scholar, researcher, surgeon"
          },
          {
            "name": "Born Leader",
            "characs": {
              "brawn": 2,
              "agility": 2,
              "intellect": 2,
              "cunning": 3,
              "willpower": 3,
              "presence": 5
            },
            "power_level": {
              "combat": 0,
              "social": 2,
              "general": 0
            },
            "ex": "President, ruler, general"
          },
          {
            "name": "Cunning Foe",
            "characs": {
              "brawn": 2,
              "agility": 4,
              "intellect": 2,
              "cunning": 4,
              "willpower": 2,
              "presence": 2
            },
            "power_level": {
              "combat": 1,
              "social": 0,
              "general": 1
            },
            "ex": "Spy, assassin, military scout"
          },
          {
            "name": "Mastermind",
            "characs": {
              "brawn": 3,
              "agility": 3,
              "intellect": 4,
              "cunning": 4,
              "willpower": 5,
              "presence": 3
            },
            "power_level": {
              "combat": 1,
              "social": 2,
              "general": 2
            },
            "ex": "The main villain in a story"
          }
    ]
    
    const Defense = [
        {
            "name": "Tough Skin",
            "ex": "Minions, rivals, nemeses",
            "power_level": {
              "combat": 0,
              "social": 0,
              "general": 0
            },
            "defense": {
              "soak": 1,
              "wound threshold": 2
            }
          },
          {
            "name": "Armored Hide",
            "ex": "Rival or nemesis animals or non-humans",
            "power_level": {
              "combat": 1,
              "social": 0,
              "general": 0
            },
            "defense": {
              "soak": 2,
              "wound threshold": 5
            }
          },
          {
            "name": "Dodgy",
            "ex": "Minions, rivals, nemeses",
            "power_level": {
              "combat": 0,
              "social": 0,
              "general": 0
            },
            "defense": {
              "melee defense": 1,
              "ranged defense": 1
            }
          },
          {
            "name": "Close Combatant",
            "ex": "Rivals, nemeses",
            "power_level": {
              "combat": 0,
              "social": 0,
              "general": 0
            },
            "defense": {
              "melee defense": 2
            }
          },
          {
            "name": "Camouflaged",
            "ex": "Rival or nemesis animals or non-humans",
            "power_level": {
              "combat": 1,
              "social": 0,
              "general": 0
            },
            "defense": {
              "melee defense": 1,
              "ranged defense": 2
            }
          },
          {
            "name": "Hardy",
            "ex": "Rivals, nemeses",
            "power_level": {
              "combat": 0,
              "social": 0,
              "general": 0
            },
            "defense": {
              "wound threshold": 5
            }
          },
          {
            "name": "Very Tough",
            "ex": "Rival animals or non-humans and all nemeses",
            "power_level": {
              "combat": 1,
              "social": 0,
              "general": 0
            },
            "defense": {
              "wound threshold": 10
            }
          },
          {
            "name": "Giant Body",
            "ex": "Silhouette 3 or higher animal rivals and nemeses",
            "power_level": {
              "combat": 2,
              "social": 0,
              "general": 0
            },
            "defense": {
              "wound threshold": 25
            }
          },
          {
            "name": "Savvy",
            "ex": "Nemeses",
            "power_level": {
              "combat": 0,
              "social": 0,
              "general": 0
            },
            "defense": {
              "strain threshold": 5
            }
          },
          {
            "name": "Mental Giant",
            "ex": "Main character nemeses",
            "power_level": {
              "combat": 0,
              "social": 1,
              "general": 0
            },
            "defense": {
              "strain threshold": 10
            }
          }
    ]
    
    const Skills = [{
        "name": "Basic Creature",
        "skills": {
          "athletics": 1,
          "brawl": 1,
          "survival": 2,
          "vigilance": 2
        },
        "power_level": {
          "combat": 0,
          "social": 0,
          "general": 0
        }
      },
      {
        "name": "Ferocious Creature",
        "skills": {
          "athletics": 3,
          "brawl": 4,
          "perception": 2,
          "survival": 3,
          "vigilance": 1
        },
        "power_level": {
          "combat": 1,
          "social": 0,
          "general": 1
        }
      },
      {
        "name": "Predatory Creature",
        "skills": {
          "brawl": 3,
          "coordination": 3,
          "perception": 4,
          "survival": 2,
          "stealth": 3
        },
        "power_level": {
          "combat": 1,
          "social": 0,
          "general": 1
        }
      },
      {
        "name": "Territorial Creature",
        "skills": {
          "brawl": 2,
          "resilience": 3,
          "survival": 4,
          "vigilance": 4
        },
        "power_level": {
          "combat": 0,
          "social": 0,
          "general": 2
        }
      },
      {
        "name": "Soldier",
        "skills": {
          "athletics": 2,
          "discipline": 1,
          "melee": 2,
          "ranged": 2,
          "resilience": 2,
          "vigilance": 2
        },
        "power_level": {
          "combat": 1,
          "social": 0,
          "general": 1
        }
      },
      {
        "name": "Duelist",
        "skills": {
          "cool": 3,
          "coordination": 3,
          "melee": 5,
          "stealth": 1
        },
        "power_level": {
          "combat": 1,
          "social": 0,
          "general": 0
        }
      },
      {
        "name": "Scout/Sniper",
        "skills": {
          "cool": 2,
          "perception": 3,
          "ranged": 5,
          "stealth": 4,
          "survival": 3,
          "vigilance": 3
        },
        "power_level": {
          "combat": 2,
          "social": 0,
          "general": 2
        }
      },
      {
        "name": "Brawler/Laborer",
        "skills": {
          "athletics": 3,
          "brawl": 2,
          "resilience": 3
        },
        "power_level": {
          "combat": 0,
          "social": 0,
          "general": 0
        }
      },
      {
        "name": "Gunslinger",
        "skills": {
          "cool": 3,
          "coordination": 2,
          "ranged": 4,
          "skulduggery": 3
        },
        "power_level": {
          "combat": 1,
          "social": 0,
          "general": 0
        }
      },
      {
        "name": "Sailor",
        "skills": {
          "athletics": 2,
          "operating": 3,
          "perception": 2,
          "ranged": 1,
          "vigilance": 1
        },
        "power_level": {
          "combat": 0,
          "social": 0,
          "general": 1
        }
      },
      {
        "name": "Spy/Con Artist",
        "skills": {
          "cool": 2,
          "charm": 3,
          "deception": 4,
          "knowledge": 1,
          "skulduggery": 4,
          "stealth": 3
        },
        "power_level": {
          "combat": 0,
          "social": 2,
          "general": 2
        }
      },
      {
        "name": "Thief/Assassin",
        "skills": {
          "coordination": 3,
          "deception": 2,
          "melee": 3,
          "skulduggery": 4,
          "stealth": 5,
          "streetwise": 3,
          "vigilance": 1
        },
        "power_level": {
          "combat": 1,
          "social": 0,
          "general": 4
        }
      },
      {
        "name": "Researcher",
        "skills": {
          "astrocartography": 5,
          "computers": 3,
          "discipline": 2,
          "knowledge": 5,
          "perception": 4
        },
        "power_level": {
          "combat": 0,
          "social": 0,
          "general": 5
        }
      },
      {
        "name": "Natural Philosopher",
        "skills": {
          "alchemy": 4,
          "knowledge": 4,
          "medicine": 2,
          "negotiation": 1,
          "perception": 2
        },
        "power_level": {
          "combat": 0,
          "social": 0,
          "general": 3
        }
      },
      {
        "name": "Doctor",
        "skills": {
          "cool": 2,
          "discipline": 2,
          "leadership": 1,
          "medicine": 4,
          "melee": 1
        },
        "power_level": {
          "combat": 0,
          "social": 1,
          "general": 2
        }
      },
      {
        "name": "Knight/Warrior Leader",
        "skills": {
          "athletics": 1,
          "discipline": 2,
          "driving": 3,
          "leadership": 3,
          "melee": 4,
          "riding": 3
        },
        "power_level": {
          "combat": 1,
          "social": 2,
          "general": 2
        }
      },
      {
        "name": "Captain of a Vessel",
        "skills": {
          "astrocartography": 4,
          "coercion": 2,
          "discipline": 3,
          "leadership": 4,
          "operating": 4,
          "ranged": 3
        },
        "power_level": {
          "combat": 1,
          "social": 2,
          "general": 3
        }
      },
      {
        "name": "Politician/Official",
        "skills": {
          "charm": 4,
          "coercion": 2,
          "cool": 2,
          "leadership": 3,
          "negotiation": 5,
          "vigilance": 1
        },
        "power_level": {
          "combat": 0,
          "social": 3,
          "general": 1
        }
      },
      {
        "name": "Mage",
        "skills": {
          "alchemy": 2,
          "arcana": 4,
          "coercion": 2,
          "knowledge": 4
        },
        "power_level": {
          "combat": 2,
          "social": 0,
          "general": 2
        }
      },
      {
        "name": "Priest",
        "skills": {
          "charm": 2,
          "discipline": 3,
          "divine": 4,
          "knowledge": 4
        },
        "power_level": {
          "combat": 2,
          "social": 1,
          "general": 2
        }
      },
      {
        "name": "Druid",
        "skills": {
          "knowledge": 4,
          "primal": 4,
          "survival": 3,
          "vigilance": 2
        },
        "power_level": {
          "combat": 2,
          "social": 0,
          "general": 2
        }
      },
      {
        "name": "Pilot/Driver/Rider",
        "skills": {
          "cool": 2,
          "coordination": 3,
          "driving": 4,
          "piloting": 4,
          "ranged": 3,
          "riding": 4
        },
        "power_level": {
          "combat": 1,
          "social": 0,
          "general": 3
        }
      },
      {
        "name": "Merchant",
        "skills": {
          "charm": 2,
          "deception": 3,
          "negotiation": 3,
          "perception": 2,
          "vigilance": 3
        },
        "power_level": {
          "combat": 0,
          "social": 3,
          "general": 0
        }
      },
      {
        "name": "Crime Boss",
        "skills": {
          "brawl": 4,
          "coercion": 5,
          "discipline": 2,
          "leadership": 2,
          "ranged": 2,
          "streetwise": 4
        },
        "power_level": {
          "combat": 2,
          "social": 3,
          "general": 1
        }
      },
      {
        "name": "Bureaucrat",
        "skills": {
          "cool": 3,
          "discipline": 3,
          "knowledge": 2,
          "negotiation": 2,
          "vigilance": 3
        },
        "power_level": {
          "combat": 0,
          "social": 3,
          "general": 1
        }
      },
      {
        "name": "Mechanic",
        "skills": {
          "athletics": 2,
          "brawl": 1,
          "computers": 1,
          "mechanics": 4,
          "resilience": 3
        },
        "power_level": {
          "combat": 0,
          "social": 0,
          "general": 3
        }
      },
      {
        "name": "Hacker",
        "skills": {
          "computers": 5,
          "cool": 2,
          "deception": 2,
          "streetwise": 2
        },
        "power_level": {
          "combat": 0,
          "social": 1,
          "general": 3
        }
      },
      {
        "name": "Criminal Tough",
        "skills": {
          "brawl": 2,
          "coercion": 3,
          "resilience": 3,
          "skulduggery": 3,
          "streetwise": 2
        },
        "power_level": {
          "combat": 0,
          "social": 1,
          "general": 2
        }
      },
      {
        "name": "Investigator",
        "skills": {
          "charm": 2,
          "coercion": 2,
          "discipline": 3,
          "perception": 3,
          "streetwise": 3,
          "survival": 3,
          "vigilance": 3
        },
        "power_level": {
          "combat": 0,
          "social": 2,
          "general": 3
        }
      },
      {
        "name": "Wrangler/Survivalist",
        "skills": {
          "athletics": 4,
          "coordination": 2,
          "perception": 3,
          "ranged": 2,
          "riding": 3,
          "survival": 4
        },
        "power_level": {
          "combat": 0,
          "social": 0,
          "general": 3
        }
      },
      {
        "name": "Cop/Town Guard",
        "skills": {
          "coercion": 2,
          "driving": 2,
          "leadership": 2,
          "melee": 2,
          "ranged": 2
        },
        "power_level": {
          "combat": 1,
          "social": 1,
          "general": 0
        }
      }]
    
    const WepPacks = [
        {
            "name": "Small Beast or Creature",
            "power_level": {
              "combat": 0,
              "social": 0,
              "general": 0
            },
            "desc": "Creatures and wild animals attack with their claws, teeth, tusks, or hooves. We treat these attacks as equipment, and have provided a few options here. These profiles represent creatures that are human-sized or smaller.",
            "equipment": {
                "weapons": [
                {
                    "weapon": "Teeth and claws",
                    "skill": "Brawl",
                    "damage": 2,
                    "critical": 3,
                    "range": "engaged",
                    "special": "Vicious 1"
                },
                {
                    "weapon": "Hooves and tusks",
                    "skill": "Brawl",
                    "damage": 2,
                    "critical": 4,
                    "range": "engaged",
                    "special": "Knockdown, Stun 2"   
                }
            ],
            "armour": [],
            "flavour": "None."
        }
        },
          {
            "name": "Large Beast or Creature",
            "power_level": {
              "combat": 1,
              "social": 0,
              "general": 0
            },
            "desc": "Large creatures, as with small ones, treat their attacks as equipment. These profiles represent creatures much larger than a human, such as an elephant or large dinosaur.",
           "equipment": {
            "weapons": [
                {
                    "weapon": "Gaping maw or razor claws",
                    "skill": "Brawl",
                    "damage": 4,
                    "critical": 2,
                    "range": "engaged",
                    "special": "Vicious 3"
                },
                {
                    "weapon": "Tentacles or thundering hooves",
                    "skill": "Brawl",
                    "damage": 5,
                    "critical": 4,
                    "range": "engaged",
                    "special": "Knockdown, Concussive 1"   
                }
            ],
            "armour":[],
            "flavour": "None."
        }
          },
          {
            "name": "Manual Laborer",
            "power_level": {
              "combat": 0,
              "social": 0,
              "general": 0
            },
            "desc": "Manual laborers may be farmers, peasants, or others with access to pitchforks, shovels, sledgehammers, or other tools they can use as improvised weapons.",
            "equipment":{
            "weapons": [
                {
                    "weapon": "Large farming implement",
                    "skill": "Melee [Heavy]",
                    "damage": 3,
                    "critical": 5,
                    "range": "engaged",
                    "special": "Cumbersome 3, Inferior"
                }
            ],
            "armour":[
                {
                    "name": "Heavy clothers",
                    "defense": {
                        "soak": 1
                    }
                }
            ],
            "flavour": "Heavy clothes (+1 soak)."
        }
          },
          {
            "name": "Basic Citizen",
            "power_level": {
              "combat": 0,
              "social": 0,
              "general": 0
            },
            "desc": "In every setting, there are multitudes of average people simply living out their lives. This equipment package is for any character who has no reason to have weapons, armor, or specialized gear.",
            "weapons": "Fists (Brawl; Damage +0; Critical 6; Range [Engaged]; Disorient 1, Knockdown).",
            "equipment":{
                "weapons": [
                    {
                        "weapon": "Fists",
                        "skill": "Brawl",
                        "damage": 0,
                        "critical": 6,
                        "range": "engaged",
                        "special": "Disorient 1, Knockdown"
                    }
                ],
                "armour":[],
                "flavour": "Clothing appropriate to the specific era, average coin purse or wallet."
            }     
          }  
        ]

    var page1Final = buildPage1();
    var page2Final = buildPage2();
    var page3Final = buildPage3();
    var page4Final = await buildPage4();
    var page5Final = buildPage5();
    
    const myDialogOptions = {
      width: 800,
      height: "auto"
    };
    
    new Dialog({
      title: "My Dialog Title",
      content: page1Final,
      buttons: {
        button1: {
          label: "Next",
          callback: (html) => {
            if (typeof $(html).find(".chars:checkbox:checked")[0] != "undefined") {
            var checkedID = $(html).find(".chars:checkbox:checked")[0].id;
            var selectedChar = Characs.find(x=>x.id === checkedID);
            } else {console.log("No char selected");}
            nextDialogue("Defense",page2Final,(html) => {
              if (typeof $(html).find(".defence:checkbox:checked")[0] != "undefined") {
                var type = $(html).find("#type").val();
                var checkedIDArray = []; 
                for (var i =0; i < $(html).find(".defence:checkbox:checked").length; i++) {
                checkedIDArray.push($(html).find(".defence:checkbox:checked")[i].id);
                }
                var selectedDefArray =[];
                for (var selec of checkedIDArray) {
                var selectedDef = Defense.find(x=>x.id === selec);
                selectedDefArray.push(selectedDef)
                }
              } else {console.log("No Defense Selected");}
                nextDialogue("Skills",page3Final, (html)=>{
                  if(typeof $(html).find(".skills:checkbox:checked")[0] != "undefined") {
                    var checkedID = $(html).find(".skills:checkbox:checked")[0].id;
                    var selectedSkills = Skills.find(x=>x.id === checkedID);
                  } else {}
                    nextDialogue("Talents",page4Final, (html)=>{
                      if (typeof $(html).find(".talent:checkbox:checked")[0] != "undefined") {
                        var talentIds = []; 
                        for (var i =0; i < $(html).find(".talent:checkbox:checked").length; i++) {
                            talentIds.push($(html).find(".talent:checkbox:checked")[i].id);
                        }
                      }
                        nextDialogue("Weapon Packs", page5Final, (html)=>{
                          var checkCust = $(html).find(".cust:checkbox:checked")[0];
                          if (typeof $(html).find(".wepcust:checkbox:checked")[0] != "undefined") {
                          var checkedID = $(html).find(".wepcust:checkbox:checked")[0].id;
                          var selectedWepPack = WepPacks.find(x=>x.id === checkedID);
                          } else {
                            var custName = $(html).find("#wepName").val();
                            var custSkill = $(html).find("#skill").val();
                            var custDmg = $(html).find("#damage").val();
                            var custCrit = $(html).find("#crit").val();
                            var custRange = $(html).find("#range").val();
                            var custSpecial = $(html).find("#special").val();
                            var custArmName = $(html).find("#armName").val();
                            var custSoak = $(html).find("#soak").val();
                            var custPackObj =            {
                              "name": custName,
                              "power_level": {
                                "combat": 0,
                                "social": 0,
                                "general": 0
                              },
                              "desc": "Manual laborers may be farmers, peasants, or others with access to pitchforks, shovels, sledgehammers, or other tools they can use as improvised weapons.",
                              "equipment":{
                              "weapons": [
                                  {
                                      "weapon": custName,
                                      "skill": custSkill,
                                      "damage": custDmg,
                                      "critical": custCrit,
                                      "range": custRange,
                                      "special": custSpecial
                                  }
                              ],
                              "armour":[
                                  {
                                      "name": custArmName,
                                      "defense": {
                                          "soak": custSoak
                                      }
                                  }
                              ],
                              "flavour": "Heavy clothes (+1 soak)."
                          }
                            }
                          }
                          updateActor(selectedChar, selectedDefArray, selectedSkills,type, talentIds, selectedWepPack, custPackObj);
                    })
                    })
                })
            })
    
          },
        },
        button2:{
          label: "Export",
          callback: ()=>{Move.startExport()}
        }
      },
      default: "button1"
    },myDialogOptions).render(true);

   async function nextDialogue(title,content, callback) {
        new Dialog({
            title: title,
            content: content,
            buttons: {
              button1: {
                label: "Next",
                callback: callback
              },
            },
      default: "button1"
          },myDialogOptions).render(true);
    }  
    
    function buildPage1() {
        var page = '';
        var i = 0;
        for (var element of Characs) {
            element.id = "select-"+i+"";
            var pageAdd = `<tr><td><input type="checkbox" name="" id="select-`+i+`" class="chars"></td><td>`+element.name+`</td><td>Brawn:`+element.characs.brawn+` Agility:`+element.characs.agility+` Intellect:`+element.characs.intellect+` Cunning:`+element.characs.cunning+` Willpower:`+element.characs.willpower+` Presence:`+element.characs.presence+`</td><td>`+element.ex+`</td></tr>`;
           i++;
            page = page + pageAdd;
    }
    var pageString = page.toString();
    var page1Final = `
    <div>
    <table>
    <tr><td></td><td>Name</td><td>Characteristics</td><td>Examples</td></tr>
    `+pageString+`
    </table>
        </div>
    `;
    return page1Final;
    }
    
    function buildPage2() {
        var page = '';
        var i = 0;
        for (var element of Defense) {
            element.id = "select-"+i+"";
            var keyDirty = Object.keys(element.defense);
            var valueDirty = Object.values(element.defense);
            var key = cleaner(keyDirty);
            var value = cleaner(valueDirty);
            var tempDefense = '';
            for (var j = 0; j < key.length; j++) {
              var keyPos = ''+key[j]+': '+value[j]+',          ';
              tempDefense = tempDefense + keyPos;
            }
            var pageAdd = `<tr><td><input type="checkbox" name="" id="select-`+i+`" class="defence"></td><td>`+element.name+`</td><td>`+tempDefense+`</td><td>`+element.ex+`</td></tr>`;
           i++;
            page = page + pageAdd;
    }
    var pageString = page.toString();
    var pageFinal = `
    <div>
    <table>
    <tr><td></td><td>Name</td><td>Defenses</td><td>Examples</td></tr>
    `+pageString+`
    <select id="type"><option value="minion">Minion</option><option value="rival">Rival</option><option value="Nemesis">Nemesis</option></select>
    </table>
        </div>
    `;
    return pageFinal;
    }
    
    function buildPage3() {
        var page = '';
        var i = 0;
        for (var element of Skills) {
            element.id = "select-"+i+"";
          var keyDirty = Object.keys(element.skills);
          var valueDirty = Object.values(element.skills);
          var key = cleaner(keyDirty);
          var value = cleaner(valueDirty);
          var tempSkill = '';
          for (var j = 0; j < key.length; j++) {
            var keyPos = ''+key[j]+': '+value[j]+',          ';
            tempSkill = tempSkill + keyPos;
          }
            var pageAdd = `<tr><td><input type="checkbox" name="" id="select-`+i+`" class="skills"></td><td>`+element.name+`</td><td>`+tempSkill+`</td></tr>`;
           i++;
            page = page + pageAdd;
    }
    var pageString = page.toString();
    var pageFinal = `
    <div>
    <table>
    <tr><td></td><td>Name</td><td>Skills</td></tr>
    `+pageString+`
    </table>
        </div>
    `;
    return pageFinal;
    }
    
    async function buildPage4() {
        var talents = game.packs.get("world.npc-talents").index.contents;
        var page = '';
        var i = 0;
        for (var t = 0; t < talents.length; t++) {
            var talent = await talents[t];
            var id =  talent._id;
            var doc = await pack.getDocument(id);
            var data = await game.items.fromCompendium(doc);
          var pageAdd = `<tr><td><input type="checkbox" name="" id="`+data.name+`" class="talent"></td><td>`+data.name+`</td><td>`+data.data.description+`</td></tr>`;
           i++;
         page = page + pageAdd;
    }
    var pageString = page.toString();
    var pageFinal = `
    <div>
    <table>
    <tr><td></td><td>Name</td><td>Skills</td></tr>
    `+pageString+`
    </table>
        </div>
    `;
    return pageFinal;
    }

    function buildPage5() {
        var page = '';
        var i = 0;
        for (var element of WepPacks) {
            element.id = "select-"+i+"";
         
          var key = element.equipment.weapons;
          var tempWep = '';
          for (var j = 0; j < key.length; j++) {
            var keyPos = ''+key[j].weapon+' ';
            tempWep = tempWep + keyPos;
          }
            var pageAdd = `<tr><td><input type="checkbox" name="" id="select-`+i+`" class="wepcust"></td><td>`+element.name+`</td><td>`+tempWep+`</td></tr>`;
           i++;
            page = page + pageAdd;
    }
    var pageString = page.toString();
    var pageFinal = `
    <div>
    <table>
    <tr><td>Custom</td><td>Weapon Name</td><td>Skill</td><td>Damage</td><td>Critical</td><td>Range</td><td>Special</td><td>Armor Name</td><td>Soak</td></tr>
    <tr><td><input type="checkbox" name="" id="cust"></td><td><input type="text" id="wepName"></td><td><input type="text" id="skill"></td><td><input type="number" id="damage"></td><td><input type="number" id="crit"></td><td><select name="" id="range"><option value="engaged">Engaged</option><option value="Short">Short</option><option value="Medium">Medium</option><option value="Long">Long</option><option value="Extreme">Extreme</option></select></td><td><input type="text" id="special"></td><td><input type="text" id="armName"></td><td><input type="number" id="soak"></td></tr>
    </table>
    <table>

    `+pageString+`
    </table>
        </div>
    `;
    return pageFinal;
    }
    
    function cleaner(array) {
            var cleanArray = [];
            array.forEach(element => {
                if (typeof element !== 'undefined') {
                    cleanArray.push(element);
                }
            });
            return cleanArray;
          } 
    
    async function updateActor(selectedChar, selectedDefArray, selectedSkills, type, talentIds, selectedWepPack, custPackObj){

        if (typeof selectedChar != "undefined") {
        // Attributes------------------------------------
        target.update({ "data.attributes.Brawn.value": selectedChar.characs.brawn });
        target.update({ "data.attributes.Agility.value": selectedChar.characs.agility });
        target.update({ "data.attributes.Intellect.value": selectedChar.characs.intellect });
        target.update({ "data.attributes.Cunning.value": selectedChar.characs.cunning });
        target.update({ "data.attributes.Willpower.value": selectedChar.characs.willpower });
        target.update({ "data.attributes.Presence.value": selectedChar.characs.presence });
        } else {console.log("No Chars selected");}
        //Defence-----------------------------------------
        if (typeof selectedDefArray != "undefined" || typeof type != "undefined") {
        if (type === "minion") {
            var wound = 5;
            var strain = 0 + selectedChar.characs.willpower;
        } else if ( type === "rival") {
            var wound = 8;
            var strain = 0 + selectedChar.characs.willpower;
        } else {
            var wound = 12;
            var strain = 10 + selectedChar.characs.willpower; 
        }
      
        for (var y = 0; y < selectedDefArray.length; y++) {
        let key = Object.keys(selectedDefArray[y].defense);
        let value = Object.values(selectedDefArray[y].defense);
        for (var i = 0; i < key.length; i++) {
    
            switch (key[i]) {
                case "wound threshold":
                    wound += value[i];
                    break;
                case "strain threshold":
                    strain += value[i]
                    break;
                case "soak":
                    target.update({'data.attributes.Soak.value': value[i]});
                    break;    
                case "melee defense":
                    break;    
                case "ranged defense":
                    target.update({'data.attributes.Defence-Ranged.value': value[i]});
                    break;    
                default:
                    break;
            }
            if (target.data.type === "minion") {
                var minorChar = "data.unit_wounds.value"
            } else {
                var minorChar = "data.attributes.Wounds.value"
            }
    target.update({[`${minorChar}`]: wound});
    target.update({'data.attributes.Strain.value': strain});
        }
    
        }
      } else {console.log("No Def to update");}
    //Skills
    if (typeof selectedSkills != "undefined") {
    let skillKey = Object.keys(selectedSkills.skills);
    let skillValue = Object.values(selectedSkills.skills)
    for (let s = 0; s < skillKey.length; s++) {
        var skillLoc = capitalizeFirstLetter(skillKey[s]);
        target.update({[`data.attributes.${skillLoc}.value`]: skillValue[i]});
    }
  } else {console.log("No skills to update");}
    
  if (typeof talentIds != "undefined") {
    
    ///Talents
    
    for(var talent of talentIds) {
    const id = pack.index.getName(talent)._id;
    const doc = await pack.getDocument(id);
    const data = game.items.fromCompendium(doc);
    await target.createEmbeddedDocuments('Item', [data]);


 

}
  } else{
    console.log("no talents to update");
  }
/// Weps
if (typeof selectedWepPack === "undefined"){
  var selectedWep = custPackObj.equipment.weapons;
} else {
 var selectedWep = selectedWepPack.equipment.weapons;
}
for (let w = 0; w < selectedWep.length; w++) {
  const element = selectedWep[w];
  if (element.skill === "Brawl"|| element.skill === "Melee"){
    var damage = 0;
    var modDam = element.damage;
  } else {
  var damage = element.damage;
  var modDam = 0;}
  var range = capitalizeFirstLetter(element.range);
  if (element.skill ==="Melee [Heavy]") {
    var skill = "Melee";
  } else if (element.skill ==="Melee [Light]") {
    var skill = "Melee";
  }else {var skill = element}
  
const wepData={
    name: element.weapon,
    type: "weapon",
    data: {
      type: "weapon",
          attributes: {
            attr1666873111572: {
              mod: "damage",
              modtype: "Weapon Stat",
              value: modDam
            }
          },
          characteristic: {
            value: "Brawn"
          },
          damage: {
            abrev: "Dam",
            value: damage,
            type: "Number"
          },
          crit: {
            value: element.critical
          },
          range: {
            value: range
          },
          skill: {
            value: skill
          },
          special: {
            value: element.special
          }
        }}

  
  await target.createEmbeddedDocuments('Item', [wepData])
}
var mActor = target;
const wait = async (ms) => new Promise((resolve)=> setTimeout(resolve, ms));
(async () => {
   for (let i of mActor.itemTypes.weapon) {
	await i.sheet.render(true);

}
    await wait(200)
    //continue to do things after a 200ms wait.
	for (let i of mActor.itemTypes.weapon) {	
	let toClose = Object.values(ui.windows).find(w => w.constructor.name === 'ItemSheetFFG' && w.title == i.name);
	if (toClose) toClose.close();
	}
})();

if (typeof selectedWepPack === "undefined") {
var selectedArm = custPackObj.equipment.armour;
} else {
  var selectedArm = selectedWepPack.equipment.armour;
}
for (let w = 0; w < selectedArm.length; w++) {
  const element = selectedArm[w];
  if (typeof element.defense.soak != "undefined") {
    var armSoak = element.defense.soak;
  }
  if (typeof element.defense.melee != "undefined") {
    var armMelee = element.defense.melee.value;
  }
  if (typeof element.defense.ranged != "undefined") {
    var armRanged = element.defense.ranged.value;
  }
const armData={
    name: element.name,
    type: "armour",
    data: {
      soak: {value: armSoak,
      type: "Number",
      label: "Soak",
      adjusted: armSoak
    }
    }
}
  
  await target.createEmbeddedDocuments('Item', [armData])
  console.log(armData);
  
}
    }
  
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    }

    class Move{
      
      static startExport() {
        var content = Move.exportPage();
          new Dialog({
              title: "Export items to Item Directory",
              content: content,
              buttons: {
                button1: {
                  label: "Export",
                  callback: (html)=>{
                    if (typeof $(html).find(".item:checkbox:checked")[0] != "undefined") {
                      var checkedIDArray = []; 
                      for (var i =0; i < $(html).find(".item:checkbox:checked").length; i++) {
                      checkedIDArray.push($(html).find(".item:checkbox:checked")[i].id);
                      }
                      var selectedItemArray =[];
                      for (var selec of checkedIDArray) {
                      const target = canvas.tokens.controlled[0].actor;
                      const items = target.data.items.contents;
                      var selectedItem = items.find(x=>x.name === selec);
                      Item.create(selectedItem.data);
                      }
                    } else {console.log("No Items Selected");}}
                }}
          }).render(true);
      }
      
          static exportPage() {
            const target = canvas.tokens.controlled[0].actor;
            const items = target.data.items.contents;
            var page = '';
            var i = 0;
            for (var element of items) {
                element.data.id = "select-"+i+"";
                var pageAdd = `<tr><td><input type="checkbox" name="" id="`+element.data.name+`" class="item"></td><td>`+element.data.name+`</td></tr>`;
               i++;
                page = page + pageAdd;
        }
        var pageString = page.toString();
        var page1Final = `
        <div>
        <table>
        <tr><td></td><td>Item</td></tr>
        `+pageString+`
        </table>
            </div>
        `;
        return page1Final;
        }
      }
      window.Move=Move;
