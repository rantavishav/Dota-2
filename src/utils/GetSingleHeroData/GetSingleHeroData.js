/* eslint-disable max-len */
const heroData = [
  {
    id: 1,
    name: 'npc_dota_hero_antimage',
    npe_desc_loc: 'Slashes his foes with mana-draining attacks',
    description:
      'Should Anti-Mage have the opportunity to gather his full strength, few can stop his assaults. <b>Draining mana</b> from enemies with every strike or <b>teleporting short distances</b> to escape an ambush, cornering him is a challenge for any foe.',
    bio: "he monks of Turstarkuri watched the rugged valleys below their mountain monastery as wave after wave of invaders swept through the lower kingdoms. Ascetic and pragmatic, in their remote monastic eyrie they remained aloof from mundane strife, wrapped in meditation that knew no gods or elements of magic. Then came the Legion of the Dead God, crusaders with a sinister mandate to replace all local worship with their Unliving Lord's poisonous nihilosophy. From a landscape that had known nothing but blood and battle for a thousand years, they tore the souls and bones of countless fallen legions and pitched them against Turstarkuri. The monastery stood scarcely a fortnight against the assault, and the few monks who bothered to surface from their meditations believed the invaders were but demonic visions sent to distract them from meditation. They died where they sat on their silken cushions. Only one youth survived--a pilgrim who had come as an acolyte, seeking wisdom, but had yet to be admitted to the monastery. He watched in horror as the monks to whom he had served tea and nettles were first slaughtered, then raised to join the ranks of the Dead God's priesthood. With nothing but a few of Turstarkuri's prized dogmatic scrolls, he crept away to the comparative safety of other lands, swearing to obliterate not only the Dead God's magic users--but to put an end to magic altogether.",
    role_levels: [],
    abilites: [
      {
        locilized_name: 'antimage_mana_break',
        isAgs: false,
        isAgsShard: false,
        cooldown: null,
        mana_cost: null,
        name: null,
        description: null,
        trivia_description: null,
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'antimage_blink',
        isAgs: false,
        isAgsShard: false,
        cooldown: null,
        mana_cost: null,
        name: null,
        description: null,
        trivia_description: null,
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'antimage_counterspell',
        isAgs: false,
        isAgsShard: false,
        cooldown: null,
        mana_cost: null,
        name: null,
        description: null,
        trivia_description: null,
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'antimage_mana_void',
        isAgs: false,
        isAgsShard: false,
        cooldown: null,
        mana_cost: null,
        name: null,
        description: null,
        trivia_description: null,
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'antimage_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'antimage_mana_overload',
        cooldown: null,
        mana_cost: null,
        name: 'COUNTERSPELL',
        description: null,
        trivia_description: null,
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'antimage_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'antimage_mana_overload',
        cooldown: '0.0',
        mana_cost: '50',
        name: 'BLINK FRAGMENT',
        description: null,
        trivia_description: null,
        ability_info: null,
        ability_stats: null,
      },
    ],
  },
  {
    id: 2,
    name: 'npc_dota_hero_axe',
    npe_desc_loc: 'Taunts and forces enemies to attack him',
    description:
      'One after another, Axe cuts down his foes. Marching ahead of his team, he <b>locks his enemies in battle</b> then counters their blows with a <b>deadly spin</b> of his weapon. Slamming his <b>culling blade</b> through a weakened enemy, he is always charging onward.',
    bio: "As a grunt in the Army of Red Mist, Mogul Khan set his sights on the rank of Red Mist General. In battle after battle he proved his worth through gory deed. His rise through the ranks was helped by the fact that he never hesitated to decapitate a superior. Through the seven year Campaign of the Thousand Tarns, he distinguished himself in glorious carnage, his star of fame shining ever brighter, while the number of comrades in arms steadily dwindled. On the night of ultimate victory, Axe declared himself the new Red Mist General, and took on the ultimate title of 'Axe.' But his troops now numbered zero. Of course, many had died in battle, but a significant number had also fallen to Axe's blade. Needless to say, most soldiers now shun his leadership. But this matters not a whit to Axe, who knows that a one-man army is by far the best.",
    role_levels: [1, 0, 0, 2, 2, 3, 0, 0, 3],
    abilites: [
      {
        locilized_name: 'axe_berserkers_call',
        isAgs: false,
        isAgsShard: false,
        cooldown: '17.0 / 15.0 / 13.0 / 11.0',
        mana_cost: '80 / 90 / 100 / 110',
        name: "BERSERKER'S CALL",
        description: null,
        trivia_description: null,
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'axe_battle_hunger',
        isAgs: false,
        isAgsShard: false,
        cooldown: '20.0 / 15.0 / 10.0 / 5.0',
        mana_cost: '50 / 60 / 70 / 80',
        name: 'BATTLE HUNGER',
        description:
          'Enrages an enemy unit, causing it to be slowed and take damage over time until it kills another unit or the duration ends. Axe gains movement speed for each unit affected with Battle Hunger, half speed from creeps.',
        trivia_description:
          "Ordinary heroes cannot withstand Mogul Khan's rage for battle, such that it injures them until it is satisfied.",
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'axe_counter_helix',
        isAgs: false,
        isAgsShard: false,
        cooldown: '0.3',
        mana_cost: '0',
        name: 'COUNTER HELIX',
        description:
          'When attacked, Axe has a chance to perform a helix counter attack, dealing pure damage to all nearby enemies.',
        trivia_description: 'Axe is the only reinforcement this army needs.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'axe_culling_blade',
        isAgs: false,
        isAgsShard: false,
        cooldown: '75.0 / 65.0 / 55.0',
        mana_cost: '60 / 120 / 180',
        name: 'CULLING BLADE',
        description:
          'Axe spots a weakness and strikes, instantly killing an enemy unit with low health, or dealing moderate damage otherwise. When an enemy hero is killed with Culling Blade, its cooldown is reset, and Axe and nearby allied units gain bonus movement speed.',
        trivia_description:
          'Mogul Khan is the embodiment of battle and fury, launching into a gruesome fatality against those who dare engage the Axe in combat.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'axe_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'axe_berserkers_call',
        cooldown: null,
        mana_cost: null,
        name: 'COUNTER HELIX',
        description:
          'Counter Helix now applies a stacking -20% Attack Damage debuff for 6s to enemies hit by it. Increases Counter Helix Chance by 10%.',
        trivia_description: null,
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'axe_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'axe_berserkers_call',
        cooldown: '17.0 / 15.0 / 13.0 / 11.0',
        mana_cost: '80 / 90 / 100 / 110',
        name: "BERSERKER'S CALL",
        description:
          "Berserker's Call applies Battle Hunger to affected units. Battle Hunger also reduces enemy armor by 7 and grants Axe 7 armor per affected target.<br />Reduces Berserker's Call cooldown by 3.",
        trivia_description:
          "Mogul Khan's warcry taunts opponents into engaging in an unconquerable battle with the Axe.",
        ability_info: null,
        ability_stats: null,
      },
    ],
  },
  {
    id: 3,
    name: 'npc_dota_hero_bane',
    npe_desc_loc: 'Puts his enemies to sleep, incapacitating them',
    description:
      'Bane brings terror to his enemies with his arsenal of <b>disabling abilities</b>. Whether trapping a foe within a contagious nightmare, or gripping an enemy in place, he gives allies all the time they need to slay their enemy.',
    bio: "When the gods have nightmares, it is Bane Elemental who brings them.  Also known as Atropos, Bane was born from the midnight terrors of the goddess Nyctasha.  A force of terror too powerful to be contained by sleep, he surfaced from her slumbers, fed upon her immortality, and stole his vaporous form from her inky blood.  He is the essence of fear.  Mortals who hear his voice hear their darkest secrets whispered in their ear.  He calls to the hidden fear in every Hero's heart.  Wakefulness is no protection, for Bane's black blood, continuously dripping, is a tar that traps his enemies in nightmare.  In the presence of Bane, every Hero remembers to fear the dark.",
    role_levels: [0, 2, 1, 3, 0, 1, 0, 0, 0],
    abilites: [
      {
        locilized_name: 'bane_enfeeble',
        isAgs: false,
        isAgsShard: false,
        cooldown: '28.0 / 21.0 / 14.0 / 7.0',
        mana_cost: '40 / 50 / 60 / 70',
        name: 'ENFEEBLE',
        description: "Lowers the enemy's total attack damage, cast speed, and regeneration.",
        trivia_description:
          'Each tendril of fear that Atropos weaves increases the vulnerability of his victims to arcane and unknown arts.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'bane_brain_sap',
        isAgs: false,
        isAgsShard: false,
        cooldown: '17.0 / 15.0 / 13.0 / 11.0',
        mana_cost: '100 / 120 / 140 / 160',
        name: 'BRAIN SAP',
        description:
          'Feasts on the vital energies of an enemy unit, healing Bane and dealing damage.',
        trivia_description:
          'Atropos finds no greater pleasure than to harvest the fear he creates.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'bane_nightmare',
        isAgs: false,
        isAgsShard: false,
        cooldown: '24.0 / 21.0 / 18.0 / 15.0',
        mana_cost: '165',
        name: 'NIGHTMARE',
        description:
          'Puts the target enemy or friendly Hero to sleep. Sleeping units are awakened when damaged. If the target was directly attacked, the Nightmare passes to the attacking unit. Bane can attack nightmared targets freely. Enemy Units take Pure Damage Per Second while in Nightmare.',
        trivia_description:
          'A stolen prowess from the goddess Nyctasha is to put his prey into forever sleep.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'bane_fiends_grip',
        isAgs: false,
        isAgsShard: false,
        cooldown: '120.0 / 110.0 / 100.0',
        mana_cost: '200 / 300 / 400',
        name: "FIEND'S GRIP",
        description:
          "CHANNELED - Grips an enemy unit, disabling it and causing heavy damage over time, while stealing mana every 0.5 seconds based on the unit's maximum mana.",
        trivia_description:
          'Victims of Atropos are frequently torn apart by vivid conjurations of their own nightmares.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'bane_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'bane_brain_sap',
        cooldown: null,
        mana_cost: null,
        name: 'BRAIN SAP',
        description:
          'Causes Brain Sap to become a 550 AoE spell. Secondary targets only heal for 25%.',
        trivia_description: null,
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'bane_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'bane_fiends_grip',
        cooldown: '120.0 / 110.0 / 100.0',
        mana_cost: '200 / 300 / 400',
        name: "FIEND'S GRIP",
        description:
          "Reduces Fiend's Grip cooldown by 45 seconds. Fiend's Grip now creates two uncontrollable illusions that are also channeling Fiend's Grip on the target. Illusions takes 700% incoming damage and immediately dies if they are interrupted. Damage does not stack.",
        trivia_description:
          'Victims of Atropos are frequently torn apart by vivid conjurations of their own nightmares.',
        ability_info: null,
        ability_stats: null,
      },
    ],
  },
  {
    id: 4,
    name: 'npc_dota_hero_bloodseeker',
    npe_desc_loc: 'Chases down low health enemies with increased speed',
    description:
      'Bloodseeker forces difficult decisions on his enemies. Able to drive his foes to a retreat by bathing a large area with a <b>damaging ritual</b>, his gruesome ultimate asks his opponents to <b>hold still, or die.</b>',
    bio: 'Strygwyr the Bloodseeker is a ritually sanctioned hunter, Hound of the Flayed Twins, sent down from the mist-shrouded peaks of Xhacatocatl in search of blood. The Flayed Ones require oceanic amounts of blood to keep them sated and placated, and would soon drain their mountain empire of its populace if the priests of the high plateaus did not appease them. Strygwyr therefore goes out in search of carnage. The vital energy of any blood he lets, flows immediately to the Twins through the sacred markings on his weapons and armor. Over the years, he has come to embody the energy of a vicious hound; in battle he is savage as a jackal. Beneath the Mask of the Bloodseeker, in the rush of bloody quenching, it is said that you can sometime see the features of the Flayers taking direct possession of their Hound.',
    role_levels: [1, 0, 1, 1, 1, 0, 0, 0, 1],
    abilites: [
      {
        locilized_name: 'bloodseeker_bloodrage',
        isAgs: false,
        isAgsShard: false,
        cooldown: '14.0 / 12.0 / 10.0 / 8.0',
        mana_cost: '25',
        name: 'BLOODRAGE',
        description:
          'Drives Bloodseeker into a bloodthirsty rage which causes him to attack faster and deal more spell damage at the cost of a percentage of his health per second. Provides half attack speed to allied heroes.',
        trivia_description: 'Strygwyr shares his animalistic thirst for bloodshed.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'bloodseeker_blood_bath',
        isAgs: false,
        isAgsShard: false,
        cooldown: '15.0 / 14.0 / 13.0 / 12.0',
        mana_cost: '90 / 100 / 110 / 120',
        name: 'BLOOD RITE',
        description:
          'Bloodseeker baptizes an area in sacred blood. After 2.9 seconds the ritual completes, causing any enemies caught in the area to take damage and become silenced.',
        trivia_description:
          'The Flayed Twins are ever willing to aid those who spill blood upon the field of battle.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'bloodseeker_thirst',
        isAgs: false,
        isAgsShard: false,
        cooldown: null,
        mana_cost: null,
        name: 'THIRST',
        description:
          "Bloodseeker is invigorated by the wounds of his enemies, restoring some life when he kills a unit. Restores for half values when denying, or if an ally kills a nearby enemy hero. Also gains bonus movement speed when an enemy hero's health falls below 80%, with the bonuses increasing as their health falls further. If an enemy hero's health falls below 25%, he will also gain vision and True Sight of that hero. Bonuses stack per hero. Unlocks max movement speed for Bloodseeker.",
        trivia_description: 'Strygwyr becomes frenzied when blood is spilled.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'bloodseeker_rupture',
        isAgs: false,
        isAgsShard: false,
        cooldown: '70.0',
        mana_cost: '00 / 150 / 200',
        name: 'RUPTURE',
        description:
          "Causes an enemy unit's skin to rupture, dealing initial damage based on its current health. If the unit moves, it takes damage based on the distance moved.  The damage is dealt through spell immunity.",
        trivia_description: 'When the Bloodseeker hunts you, injuries become fatalities.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'bloodseeker_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'bloodseeker_bloodrage',
        cooldown: null,
        mana_cost: null,
        name: 'BLOODRAGE',
        description:
          'Bloodrage attacks now deal 2% of the target’s max health as pure damage and heals Bloodseeker for that amount. Only works for Bloodseeker.',
        trivia_description: null,
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'bloodseeker_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'bloodseeker_rupture',
        cooldown: '70.0',
        mana_cost: '100 / 150 / 200',
        name: 'RUPTURE',
        description:
          "Grants Bloodseeker two charges of Rupture and reduces Rupture's Cooldown to 40s",
        trivia_description:
          'Victims of Atropos are frequently torn apart by vivid conjurations of their own nightmares.',
        ability_info: null,
        ability_stats: null,
      },
    ],
  },
  {
    id: 5,
    name: 'npc_dota_hero_crystal_maiden',
    npe_desc_loc: 'Unleashes a high damage blizzard upon her foes',
    description:
      'Able to keep her <b>allies supplied with mana</b> as she <b>slows down enemies</b> to ensure a kill, Crystal Maiden is a helpful addition to any team. And, when the opportunity arises, she can unleash her <b>massive ultimate ability</b> to devastate her foes.',
    bio: 'Born in a temperate realm, raised with her fiery older sister Lina, Rylai the Crystal Maiden soon found that her innate elemental affinity to ice created trouble for all those around her. Wellsprings and mountain rivers froze in moments if she stopped to rest nearby; ripening crops were bitten by frost, and fruiting orchards turned to mazes of ice and came crashing down, spoiled. When their exasperated parents packed Lina off to the equator, Rylai found herself banished to the cold northern realm of Icewrack, where she was taken in by an Ice Wizard who had carved himself a hermitage at the crown of the Blueheart Glacier. After long study, the wizard pronounced her ready for solitary practice and left her to take his place, descending into the glacier to hibernate for a thousand years. Her mastery of the Frozen Arts has only deepened since that time, and now her skills are unmatched.',
    role_levels: [0, 3, 2, 2, 1, 0, 0, 0, 0],
    abilites: [
      {
        locilized_name: 'crystal_maiden_crystal_nova',
        isAgs: false,
        isAgsShard: false,
        cooldown: '14.0 / 12.0 / 10.0 / 8.0',
        mana_cost: '25',
        name: 'BLOODRAGE',
        description:
          'Drives Bloodseeker into a bloodthirsty rage which causes him to attack faster and deal more spell damage at the cost of a percentage of his health per second. Provides half attack speed to allied heroes.',
        trivia_description: 'Strygwyr shares his animalistic thirst for bloodshed.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'crystal_maiden_frostbite',
        isAgs: false,
        isAgsShard: false,
        cooldown: '15.0 / 14.0 / 13.0 / 12.0',
        mana_cost: '90 / 100 / 110 / 120',
        name: 'BLOOD RITE',
        description:
          'Bloodseeker baptizes an area in sacred blood. After 2.9 seconds the ritual completes, causing any enemies caught in the area to take damage and become silenced.',
        trivia_description:
          'The Flayed Twins are ever willing to aid those who spill blood upon the field of battle.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'crystal_maiden_brilliance_aura',
        isAgs: false,
        isAgsShard: false,
        cooldown: null,
        mana_cost: null,
        name: 'THIRST',
        description:
          "Bloodseeker is invigorated by the wounds of his enemies, restoring some life when he kills a unit. Restores for half values when denying, or if an ally kills a nearby enemy hero. Also gains bonus movement speed when an enemy hero's health falls below 80%, with the bonuses increasing as their health falls further. If an enemy hero's health falls below 25%, he will also gain vision and True Sight of that hero. Bonuses stack per hero. Unlocks max movement speed for Bloodseeker.",
        trivia_description: 'Strygwyr becomes frenzied when blood is spilled.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'crystal_maiden_freezing_field',
        isAgs: false,
        isAgsShard: false,
        cooldown: '70.0',
        mana_cost: '00 / 150 / 200',
        name: 'RUPTURE',
        description:
          "Causes an enemy unit's skin to rupture, dealing initial damage based on its current health. If the unit moves, it takes damage based on the distance moved.  The damage is dealt through spell immunity.",
        trivia_description: 'When the Bloodseeker hunts you, injuries become fatalities.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'crystal_maiden_freezing_field',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'bloodseeker_bloodrage',
        cooldown: null,
        mana_cost: null,
        name: 'BLOODRAGE',
        description:
          'Bloodrage attacks now deal 2% of the target’s max health as pure damage and heals Bloodseeker for that amount. Only works for Bloodseeker.',
        trivia_description: null,
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'crystal_maiden_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'crystal_maiden_freezing_field',
        cooldown: '70.0',
        mana_cost: '100 / 150 / 200',
        name: 'RUPTURE',
        description:
          "Grants Bloodseeker two charges of Rupture and reduces Rupture's Cooldown to 40s",
        trivia_description:
          'Victims of Atropos are frequently torn apart by vivid conjurations of their own nightmares.',
        ability_info: null,
        ability_stats: null,
      },
    ],
  },
  {
    id: 6,
    name: 'npc_dota_hero_drow_ranger',
    npe_desc_loc: 'Slows with her frost-tipped arrows',
    description:
      "Not many can escape Drow Ranger once she's within range. After her foes have been <b>silenced</b> with a <b>chilling blast</b>, she finishes them off with a barrage of <b>slowing, ice-tipped arrows</b> that few can survive.",
    bio: "Drow Ranger's given name is Traxex--a name well suited to the short, trollish, rather repulsive Drow people. But Traxex herself is not a Drow. Her parents were travelers in a caravan set upon by bandits, whose noisy slaughter of innocents roused the ire of the quiet Drow people.<br><br>After the battle settled, the Drow discovered a small girl-child hiding in the ruined wagons, and agreed she could not be abandoned. Even as child, Traxex showed herself naturally adept at the arts they prized: Stealth, silence, subtlety. In spirit, if not in physique, she might have been a Drow changeling, returned to her proper home. But as she grew, she towered above her family and came to think of herself as ugly. After all,  her features were smooth and symmetrical, entirely devoid of warts and coarse whiskers.<br><br>Estranged from her adopted tribe, she withdrew to live alone in the woods. Lost travelers who find their way from the forest sometimes speak of an impossibly beautiful Ranger who peered at them from deep among the trees, then vanished like a dream before they could approach. Lithe and stealthy, icy hot, she moves like mist in silence. That whispering you hear is her frozen arrows finding an enemy's heart.",
    role_levels: [2, 0, 0, 1, 0, 0, 0, 1, 0],
    abilites: [
      {
        locilized_name: 'drow_ranger_frost_arrows',
        isAgs: false,
        isAgsShard: false,
        cooldown: '14.0 / 12.0 / 10.0 / 8.0',
        mana_cost: '25',
        name: 'BLOODRAGE',
        description:
          'Drives Bloodseeker into a bloodthirsty rage which causes him to attack faster and deal more spell damage at the cost of a percentage of his health per second. Provides half attack speed to allied heroes.',
        trivia_description: 'Strygwyr shares his animalistic thirst for bloodshed.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'drow_ranger_wave_of_silence',
        isAgs: false,
        isAgsShard: false,
        cooldown: '15.0 / 14.0 / 13.0 / 12.0',
        mana_cost: '90 / 100 / 110 / 120',
        name: 'BLOOD RITE',
        description:
          'Bloodseeker baptizes an area in sacred blood. After 2.9 seconds the ritual completes, causing any enemies caught in the area to take damage and become silenced.',
        trivia_description:
          'The Flayed Twins are ever willing to aid those who spill blood upon the field of battle.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'drow_ranger_multishot',
        isAgs: false,
        isAgsShard: false,
        cooldown: null,
        mana_cost: null,
        name: 'THIRST',
        description:
          "Bloodseeker is invigorated by the wounds of his enemies, restoring some life when he kills a unit. Restores for half values when denying, or if an ally kills a nearby enemy hero. Also gains bonus movement speed when an enemy hero's health falls below 80%, with the bonuses increasing as their health falls further. If an enemy hero's health falls below 25%, he will also gain vision and True Sight of that hero. Bonuses stack per hero. Unlocks max movement speed for Bloodseeker.",
        trivia_description: 'Strygwyr becomes frenzied when blood is spilled.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'drow_ranger_marksmanship',
        isAgs: false,
        isAgsShard: false,
        cooldown: '70.0',
        mana_cost: '00 / 150 / 200',
        name: 'RUPTURE',
        description:
          "Causes an enemy unit's skin to rupture, dealing initial damage based on its current health. If the unit moves, it takes damage based on the distance moved.  The damage is dealt through spell immunity.",
        trivia_description: 'When the Bloodseeker hunts you, injuries become fatalities.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'drow_ranger_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'drow_ranger_marksmanship',
        cooldown: null,
        mana_cost: null,
        name: 'BLOODRAGE',
        description:
          'Bloodrage attacks now deal 2% of the target’s max health as pure damage and heals Bloodseeker for that amount. Only works for Bloodseeker.',
        trivia_description: null,
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'drow_ranger_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'drow_ranger_marksmanship',
        cooldown: '70.0',
        mana_cost: '100 / 150 / 200',
        name: 'RUPTURE',
        description:
          "Grants Bloodseeker two charges of Rupture and reduces Rupture's Cooldown to 40s",
        trivia_description:
          'Victims of Atropos are frequently torn apart by vivid conjurations of their own nightmares.',
        ability_info: null,
        ability_stats: null,
      },
    ],
  },
  {
    id: 7,
    name: 'npc_dota_hero_earthshaker',
    npe_desc_loc: 'Disrupts enemy team with his chain stuns',
    description:
      "Whether <b>blocking an enemy's escape</b>, dividing their forces, or <b>shattering the ground</b> beneath gathered foes, Earthshaker is at his best when he strikes without warning. Whatever survives the <b>aftershocks</b> still has a swing from his <b>mighty totem</b> to look forward to.",
    bio: 'Like a golem or gargoyle, Earthshaker was one with the earth but now walks freely upon it. Unlike those other entities, he created himself through an act of will, and serves no other master. In restless slumbers, encased in a deep seam of stone, he became aware of the life drifting freely above him. He grew curious.<br><br>During a season of tremors, the peaks of Nishai shook themselves loose of avalanches, shifting the course of rivers and turning shallow valleys into bottomless chasms. When the land finally ceased quaking, Earthshaker stepped from the settling dust, tossing aside massive boulders as if throwing off a light blanket.<br><br>He had shaped himself in the image of a mortal beast, and named himself Raigor Stonehoof. He bleeds now, and breathes, and therefore he can die. But his spirit is still that of the earth; he carries its power in the magical totem that never leaves him. And on the day he returns to dust, the earth will greet him as a prodigal son.',
    role_levels: [0, 1, 1, 2, 0, 0, 0, 0, 3],
    abilites: [
      {
        locilized_name: 'earthshaker_fissure',
        isAgs: false,
        isAgsShard: false,
        cooldown: '14.0 / 12.0 / 10.0 / 8.0',
        mana_cost: '25',
        name: 'BLOODRAGE',
        description:
          'Drives Bloodseeker into a bloodthirsty rage which causes him to attack faster and deal more spell damage at the cost of a percentage of his health per second. Provides half attack speed to allied heroes.',
        trivia_description: 'Strygwyr shares his animalistic thirst for bloodshed.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'earthshaker_enchant_totem',
        isAgs: false,
        isAgsShard: false,
        cooldown: '15.0 / 14.0 / 13.0 / 12.0',
        mana_cost: '90 / 100 / 110 / 120',
        name: 'BLOOD RITE',
        description:
          'Bloodseeker baptizes an area in sacred blood. After 2.9 seconds the ritual completes, causing any enemies caught in the area to take damage and become silenced.',
        trivia_description:
          'The Flayed Twins are ever willing to aid those who spill blood upon the field of battle.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'earthshaker_aftershock',
        isAgs: false,
        isAgsShard: false,
        cooldown: null,
        mana_cost: null,
        name: 'THIRST',
        description:
          "Bloodseeker is invigorated by the wounds of his enemies, restoring some life when he kills a unit. Restores for half values when denying, or if an ally kills a nearby enemy hero. Also gains bonus movement speed when an enemy hero's health falls below 80%, with the bonuses increasing as their health falls further. If an enemy hero's health falls below 25%, he will also gain vision and True Sight of that hero. Bonuses stack per hero. Unlocks max movement speed for Bloodseeker.",
        trivia_description: 'Strygwyr becomes frenzied when blood is spilled.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'earthshaker_echo_slam',
        isAgs: false,
        isAgsShard: false,
        cooldown: '70.0',
        mana_cost: '00 / 150 / 200',
        name: 'RUPTURE',
        description:
          "Causes an enemy unit's skin to rupture, dealing initial damage based on its current health. If the unit moves, it takes damage based on the distance moved.  The damage is dealt through spell immunity.",
        trivia_description: 'When the Bloodseeker hunts you, injuries become fatalities.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'earthshaker_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'earthshaker_fissure',
        cooldown: null,
        mana_cost: null,
        name: 'BLOODRAGE',
        description:
          'Bloodrage attacks now deal 2% of the target’s max health as pure damage and heals Bloodseeker for that amount. Only works for Bloodseeker.',
        trivia_description: null,
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'earthshaker_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'earthshaker_enchant_totem',
        cooldown: '70.0',
        mana_cost: '100 / 150 / 200',
        name: 'RUPTURE',
        description:
          "Grants Bloodseeker two charges of Rupture and reduces Rupture's Cooldown to 40s",
        trivia_description:
          'Victims of Atropos are frequently torn apart by vivid conjurations of their own nightmares.',
        ability_info: null,
        ability_stats: null,
      },
    ],
  },
  {
    id: 8,
    name: 'npc_dota_hero_juggernaut',
    npe_desc_loc: 'Slices through his enemies with precise strikes',
    description:
      'In a <b>flurry of slashes</b>, Juggernaut cuts down his foes. Sprinting and <b>spinning into battle</b> with reckless abandon, and nearly invincible once he is able to begin his assault, stopping Juggernaut can often be just as difficult as surviving him.',
    bio: "No one has ever seen the face hidden beneath the mask of Yurnero the Juggernaut. It is only speculation that he even has one. For defying a corrupt lord, Yurnero was exiled from the ancient Isle of Masks--a punishment that saved his life. The isle soon after vanished beneath the waves in a night of vengeful magic. He alone remains to carry on the Isle's long Juggernaut tradition, one of ritual and swordplay. The last practitioner of the art, Yurnero's confidence and courage are the result of endless practice; his inventive bladework proves that he has never stopped challenging himself. Still, his motives are as unreadable as his expression. For a hero who has lost everything twice over, he fights as if victory is a foregone conclusion. ",
    role_levels: [2, 0, 0, 0, 0, 0, 1, 1, 0],
    abilites: [
      {
        locilized_name: 'juggernaut_blade_fury',
        isAgs: false,
        isAgsShard: false,
        cooldown: '14.0 / 12.0 / 10.0 / 8.0',
        mana_cost: '25',
        name: 'BLOODRAGE',
        description:
          'Drives Bloodseeker into a bloodthirsty rage which causes him to attack faster and deal more spell damage at the cost of a percentage of his health per second. Provides half attack speed to allied heroes.',
        trivia_description: 'Strygwyr shares his animalistic thirst for bloodshed.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'juggernaut_healing_ward',
        isAgs: false,
        isAgsShard: false,
        cooldown: '15.0 / 14.0 / 13.0 / 12.0',
        mana_cost: '90 / 100 / 110 / 120',
        name: 'BLOOD RITE',
        description:
          'Bloodseeker baptizes an area in sacred blood. After 2.9 seconds the ritual completes, causing any enemies caught in the area to take damage and become silenced.',
        trivia_description:
          'The Flayed Twins are ever willing to aid those who spill blood upon the field of battle.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'juggernaut_blade_dance',
        isAgs: false,
        isAgsShard: false,
        cooldown: null,
        mana_cost: null,
        name: 'THIRST',
        description:
          "Bloodseeker is invigorated by the wounds of his enemies, restoring some life when he kills a unit. Restores for half values when denying, or if an ally kills a nearby enemy hero. Also gains bonus movement speed when an enemy hero's health falls below 80%, with the bonuses increasing as their health falls further. If an enemy hero's health falls below 25%, he will also gain vision and True Sight of that hero. Bonuses stack per hero. Unlocks max movement speed for Bloodseeker.",
        trivia_description: 'Strygwyr becomes frenzied when blood is spilled.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'juggernaut_omni_slash',
        isAgs: false,
        isAgsShard: false,
        cooldown: '70.0',
        mana_cost: '00 / 150 / 200',
        name: 'RUPTURE',
        description:
          "Causes an enemy unit's skin to rupture, dealing initial damage based on its current health. If the unit moves, it takes damage based on the distance moved.  The damage is dealt through spell immunity.",
        trivia_description: 'When the Bloodseeker hunts you, injuries become fatalities.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'juggernaut_blade_fury',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'bloodseeker_bloodrage',
        cooldown: null,
        mana_cost: null,
        name: 'BLOODRAGE',
        description:
          'Bloodrage attacks now deal 2% of the target’s max health as pure damage and heals Bloodseeker for that amount. Only works for Bloodseeker.',
        trivia_description: null,
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'juggernaut_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'juggernaut_swift_slash',
        cooldown: '70.0',
        mana_cost: '100 / 150 / 200',
        name: 'RUPTURE',
        description:
          "Grants Bloodseeker two charges of Rupture and reduces Rupture's Cooldown to 40s",
        trivia_description:
          'Victims of Atropos are frequently torn apart by vivid conjurations of their own nightmares.',
        ability_info: null,
        ability_stats: null,
      },
    ],
  },
  {
    id: 9,
    name: 'npc_dota_hero_mirana',
    npe_desc_loc: 'Stuns enemies with precise arrows from afar',
    description:
      'As she takes aim from a distance with her <b>deadly arrow</b>, Mirana must always be ready to leap into battle. Able to <b>shield her allies</b> from the eyes of her enemies, she ensures that her team is always on the prowl.',
    bio: "Born to a royal family, a blood princess next in line for the Solar Throne, Mirana willingly surrendered any claim to mundane land or titles when she dedicated herself completely to the service of Selemene, Goddess of the Moon. Known ever since as Princess of the Moon, Mirana prowls the sacred Nightsilver Woods searching for any who would dare poach the sacred luminous lotus from the silvery pools of the Goddess's preserve. Riding on her enormous feline familiar, she is poised, proud and fearless, attuned to the phases of the moon and the wheeling of the greater constellations. Her bow, tipped with sharp shards of lunar ore, draws on the moon's power to charge its arrows of light.",
    role_levels: [1, 1, 1, 1, 0, 0, 2, 0, 0],
    abilites: [
      {
        locilized_name: 'mirana_starfall',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'mirana_arrow',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'mirana_leap',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'mirana_invis',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'mirana_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'mirana_leap',
      },
      {
        locilized_name: 'mirana_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'mirana_arrow',
      },
    ],
  },
  {
    id: 10,
    name: 'npc_dota_hero_morphling',
    npe_desc_loc: 'Rides the waves to flank enemies',
    description:
      'Shifting his attributes to suit his situation, Morphling can be as <b>elusive</b> as he is deadly. Whether <b>riding a wave</b> to flank an enemy, or boosting his health before escaping into his <b>deceptive replication</b>, few can hope to corner him.',
    bio: "For dark eons the comet circled. Held in thrall to a distant sun, bound by gravity's inexorable pull, the massive ball of ice careened through the blackness between worlds, made strange by its dark journey. On the eve of the ancient war of the Vloy, it punched down through the sky and lit a glowing trail across the night, a sign both armies took for an omen. The frozen ball melted in a flash of boiling heat, as below two forces enjoined in battle across the border of a narrow river. Thus freed from its icy stasis, the Morphling was born into conflict, an elemental power at one with the tides of the ocean, capricious and unconstrained. He entered the fight, instinctively taking the form of the first general who dared set foot across the water, and then struck him dead. As the motley warriors clashed, he shifted from form to form throughout the battle, instantly absorbing the ways of these strange creatures--now a footsoldier, now an archer, now the cavalryman--until, by the time the last soldier fell, Morphling had played every part. The battle's end was his beginning.",
    role_levels: [3, 0, 1, 1, 0, 2, 3, 0, 0],
    abilites: [
      {
        locilized_name: 'morphling_waveform',
        isAgs: false,
        isAgsShard: false,
        cooldown: '14.0 / 12.0 / 10.0 / 8.0',
        mana_cost: '25',
        name: 'BLOODRAGE',
        description:
          'Drives Bloodseeker into a bloodthirsty rage which causes him to attack faster and deal more spell damage at the cost of a percentage of his health per second. Provides half attack speed to allied heroes.',
        trivia_description: 'Strygwyr shares his animalistic thirst for bloodshed.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'morphling_adaptive_strike_agi',
        isAgs: false,
        isAgsShard: false,
        cooldown: '15.0 / 14.0 / 13.0 / 12.0',
        mana_cost: '90 / 100 / 110 / 120',
        name: 'BLOOD RITE',
        description:
          'Bloodseeker baptizes an area in sacred blood. After 2.9 seconds the ritual completes, causing any enemies caught in the area to take damage and become silenced.',
        trivia_description:
          'The Flayed Twins are ever willing to aid those who spill blood upon the field of battle.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'morphling_adaptive_strike_str',
        isAgs: false,
        isAgsShard: false,
        cooldown: null,
        mana_cost: null,
        name: 'THIRST',
        description:
          "Bloodseeker is invigorated by the wounds of his enemies, restoring some life when he kills a unit. Restores for half values when denying, or if an ally kills a nearby enemy hero. Also gains bonus movement speed when an enemy hero's health falls below 80%, with the bonuses increasing as their health falls further. If an enemy hero's health falls below 25%, he will also gain vision and True Sight of that hero. Bonuses stack per hero. Unlocks max movement speed for Bloodseeker.",
        trivia_description: 'Strygwyr becomes frenzied when blood is spilled.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'morphling_morph_agi',
        isAgs: false,
        isAgsShard: false,
        cooldown: '70.0',
        mana_cost: '00 / 150 / 200',
        name: 'RUPTURE',
        description:
          "Causes an enemy unit's skin to rupture, dealing initial damage based on its current health. If the unit moves, it takes damage based on the distance moved.  The damage is dealt through spell immunity.",
        trivia_description: 'When the Bloodseeker hunts you, injuries become fatalities.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'morphling_morph_str',
        isAgs: false,
        isAgsShard: false,
        cooldown: '70.0',
        mana_cost: '00 / 150 / 200',
        name: 'RUPTURE',
        description:
          "Causes an enemy unit's skin to rupture, dealing initial damage based on its current health. If the unit moves, it takes damage based on the distance moved.  The damage is dealt through spell immunity.",
        trivia_description: 'When the Bloodseeker hunts you, injuries become fatalities.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'morphling_replicate',
        isAgs: false,
        isAgsShard: false,
        cooldown: '70.0',
        mana_cost: '00 / 150 / 200',
        name: 'RUPTURE',
        description:
          "Causes an enemy unit's skin to rupture, dealing initial damage based on its current health. If the unit moves, it takes damage based on the distance moved.  The damage is dealt through spell immunity.",
        trivia_description: 'When the Bloodseeker hunts you, injuries become fatalities.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'morphling_morph_str',
        isAgs: false,
        isAgsShard: false,
        cooldown: null,
        mana_cost: null,
        name: 'BLOODRAGE',
        description:
          'Bloodrage attacks now deal 2% of the target’s max health as pure damage and heals Bloodseeker for that amount. Only works for Bloodseeker.',
        trivia_description: null,
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'morphling_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'morphling_adaptive_strike_agi',
        cooldown: '70.0',
        mana_cost: '100 / 150 / 200',
        name: 'RUPTURE',
        description:
          "Grants Bloodseeker two charges of Rupture and reduces Rupture's Cooldown to 40s",
        trivia_description:
          'Victims of Atropos are frequently torn apart by vivid conjurations of their own nightmares.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'morphling_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'morphling_replicate',
        cooldown: '70.0',
        mana_cost: '100 / 150 / 200',
        name: 'RUPTURE',
        description:
          "Grants Bloodseeker two charges of Rupture and reduces Rupture's Cooldown to 40s",
        trivia_description:
          'Victims of Atropos are frequently torn apart by vivid conjurations of their own nightmares.',
        ability_info: null,
        ability_stats: null,
      },
    ],
  },
  {
    id: 11,
    name: 'npc_dota_hero_nevermore',
    npe_desc_loc: 'Unleashes the souls of fallen enemies for damage',
    description:
      '<b>Capturing souls</b> from every kill he makes, Shadow Fiend is always gathering his power. Every assault, each carefully aimed raze that kills an enemy, brings him closer to <b>unleashing his gathered souls</b> in a deadly blast of scouring energy.',
    bio: "It is said that Nevermore the Shadow Fiend has the soul of a poet, and in fact he has thousands of them. Over the ages he has claimed the souls of poets, priests, emperors, beggars, slaves, philosophers, criminals and (naturally) heroes; no sort of soul escapes him. What he does with them is unknown. No one has ever peered into the Abysm whence Nevermore reaches out like an eel from among astral rocks. Does he devour them one after another? Does he mount them along the halls of an eldritch temple, or pickle the souls in necromantic brine? Is he merely a puppet, pushed through the dimensional rift by a demonic puppeteer? Such is his evil, so intense his aura of darkness, that no rational mind may penetrate it. Of course, if you really want to know where the stolen souls go, there's one sure way to find out: Add your soul to his collection. Or just wait for Nevermore.",
    role_levels: [2, 0, 3, 0, 0, 0, 0, 0, 0],
    abilites: [
      {
        locilized_name: 'nevermore_shadowraze1',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'nevermore_necromastery',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'nevermore_dark_lord',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'nevermore_requiem',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'nevermore_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'nevermore_necromastery',
      },
      {
        locilized_name: 'nevermore_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'nevermore_requiem',
      },
    ],
  },
  {
    id: 12,
    name: 'npc_dota_hero_phantom_lancer',
    npe_desc_loc: 'Creates illusions of himself to trick or attack foes',
    description:
      'Phantom Lancer storms enemy forces with an <b>endless supply of clones</b>. Leading his illusory army, he can cut foes apart in a breathtaking <b>flurry of attacks</b>, send clones to push into enemy territory, or use his doppelgangers to <b>mislead and elude foes</b> if cornered.',
    bio: "The remote village of Pole had no knowledge of the wars raging in the heart of the kingdom. For them, the quiet of spear fishing, and a family meal were all that a full life required. Yet war came for them nonetheless. Joining the able-bodied conscripts as they filed passed their homes, the humble lancer Azwraith vowed to bring peace to his kingdom, and in so doing, his people. Placed with his kin in the vanguard of the final assault against the Dread Magus Vorn, the cost to his fellows was absolute. As the charging force battled toward the fortress, Azwraith alone among his kind remained standing, and he alone was able to infiltrate the keep.<br><br>Focused and infuriated by the slaughter of his brothers, Azwraith bested each of the wizard's deadly traps and conjured guardians. Soon the simple fisherman arrived at Vorn's tower sanctum. The pair dueled through the night, pike to staff, as chaos raged below, and with a deafening cry Azwraith pierced his enemy. But the wizard did not simply expire; he exploded into uncountable shards of light, penetrating his killer with power. As the dust settled and the smoke of combat began to clear, Azwraith found himself standing among a throng of his kin. Each seemed to be dressed as he was, each seemed armed as he was, and he could sense that each thought as he did. Aware that his allies were approaching, he willed these phantoms to hide themselves, and one by one they began to vanish into nothingness. As the soldiers came upon the sanctum, they found the warrior that had bested the wizard. When they approached their champion, the lancer vanished. The pikeman who had stood before them was no more than another phantom.",
    role_levels: [2, 0, 1, 0, 0, 0, 2, 1, 0],
    abilites: [
      {
        locilized_name: 'phantom_lancer_spirit_lance',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'phantom_lancer_doppelwalk',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'phantom_lancer_phantom_edge',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'phantom_lancer_juxtapose',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'phantom_lancer_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'phantom_lancer_spirit_lance',
      },
      {
        locilized_name: 'phantom_lancer_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'phantom_lancer_juxtapose',
      },
    ],
  },
  {
    id: 13,
    name: 'npc_dota_hero_puck',
    npe_desc_loc: 'Orbs to enemies and silences them',
    description:
      'Puck has a talent for confounding its enemies with playfully <b>elusive</b> mischief. By teleporting to its <b>damaging orb</b> in order to hop short distances, it attacks foes with bursts of <b>silencing dust</b>. By the time its enemies can react, Puck has long since escaped.',
    bio: "While Puck seems at first glance a mischievous, childish character, this quality masks an alien personality. The juvenile form of a Faerie Dragon, a creature that lives for eons, Puck spends countless millennia in its childish form. So while it is technically true that Puck is juvenile, it will continue to be so when the cities of the present age have sloughed away into dust. Its motives are therefore inscrutable, and what appears to be play may in fact hide a darker purpose. Its endless fondness for mischief is the true indicator of Puck's true nature.",
    role_levels: [0, 0, 2, 3, 0, 0, 3, 0, 3],
    abilites: [
      {
        locilized_name: 'puck_illusory_orb',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'puck_waning_rift',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'puck_phase_shift',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'puck_dream_coil',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'puck_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'puck_waning_rift',
      },
      {
        locilized_name: 'puck_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'puck_dream_coil',
      },
    ],
  },
  {
    id: 14,
    name: 'npc_dota_hero_pudge',
    npe_desc_loc: 'Drains enemy life to heal himself',
    description:
      "A crafty trickster, Pugna turns the enemy's power against itself as he blasts their defenses. While his <b>nether ward</b> strikes nearby foes that dare to cast a spell, he <b>drains life</b> from enemies to ensure he will be ready for the next assault.",
    bio: "In the realm of Pugna's birth, near the vents of the Nether Reaches, there stood a lamasery devoted to the Arts of Oblivion, which drew its power from the nether energies. The Grandmaster of the temple compound had himself passed into Oblivion several years prior, leaving his academy without a leader. From the moment of their master's death, the regents of the temple began rites of divination to identify their master's reincarnation, and eventually all signs converged on the immediate neighborhood. Several villages squatted in the shadow of the temple, their alleys and plazas full of the laughter of squalling children.<br><br>Pugna, a mere thirteen months of age, was but one candidate among the local brats, and on the appointed day he was presented at the temple alongside two other promising tots. The lamas offered a jumble of worn relics to the children, treasured possessions of their former grandmaster. One boy reached for a porphyry wand that had belonged to the lama...and put it in his nostril. An impish girl pulled out an amulet that had also been the lama's, and immediately swallowed it. Pugna regarded the other two coolly, gave a merry laugh, and blasted them with gouts of emerald flame, reducing them to ashes in an instant. He then snatched up the wand and amulet, saying 'Mine!' The regents hoisted the beaming Pugna on their shoulders, wrapped him in their grandmaster's vestments, and rushed him to the throne before his mood could change. Within five years, the temple itself was another pile of ash, which pleased Pugna to no end.",
    role_levels: [0, 0, 2, 0, 0, 0, 0, 2, 0],
    abilites: [
      {
        locilized_name: 'pudge_meat_hook',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'pudge_rot',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'pudge_flesh_heap',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'pudge_dismember',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'pudge_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'pudge_dismember',
      },
      {
        locilized_name: 'pudge_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'pudge_rot',
      },
    ],
  },
  {
    id: 15,
    name: 'npc_dota_hero_razor',
    npe_desc_loc: 'Steals enemy damage to add to his own',
    description:
      'With a deadly <b>lightning storm</b> at his command, Razor charges into battle. Deploying a <b>sweeping ring</b> of electrified plasma to fry his enemies, he links with foes to <b>drain</b> them of their power and use it against them.',
    bio: 'Among the emblematic powers that populate the Underscape, Razor the Lightning Revenant is one of the most feared. With his whip of lightning, he patrols the Narrow Maze, that treacherous webwork of passages by which the souls of the dead are sorted according to their own innate intelligence, cunning and persistence. Drifting above the Maze, Razor looks down on the baffled souls below, and delivers jolts of scalding electricity that both punish and quicken the souls as they decide their own fates, hurrying on toward luminous exits or endlessly dark pits. Razor is the eternal embodiment of a dominating power, abstract and almost clinical in his application of power. Yet he has a lordly air that suggests he takes a sardonic satisfaction in his work.',
    role_levels: [2, 0, 1, 0, 0, 2, 0, 1, 0],
    abilites: [
      {
        locilized_name: 'razor_plasma_field',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'razor_static_link',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'razor_unstable_current',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'razor_eye_of_the_storm',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'razor_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'razor_unstable_current',
      },
      {
        locilized_name: 'razor_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'razor_eye_of_the_storm',
      },
    ],
  },
  {
    id: 16,
    name: 'npc_dota_hero_sand_king',
    npe_desc_loc: 'Burrows to stun and slow enemies',
    description:
      'Not many can survive an ambush from Sand King. Demolishing everything around him with waves of <b>deadly vibration</b> from his ultimate, he <b>evades counterattacks</b> by hiding himself in a scouring gust of sand, and <b>stuns foes</b> by striking them from beneath.',
    bio: "The sands of the Scintillant Waste are alive and sentient--the whole vast desert speaks to itself, thinking thoughts only such a vastness can conceive. But when it needs must find a form to communicate with those of more limited scope, it frees a fragment of itself, and fills a carapace of magic armor formed by the cunning Djinn of Qaldin. This essential identity calls itself Crixalis, meaning 'Soul of the Sand,' but others know it as Sand King.  Sand King takes the form of a huge arachnid, inspired by the Scintillant Waste's small but ubiquitous denizens; and this is a true outward expression of his ferocious nature. Guardian, warrior, ambassador--Sand King is all of these things, inseparable from the endless desert that gave him life.",
    role_levels: [0, 1, 2, 2, 1, 0, 2, 0, 3],
    abilites: [
      {
        locilized_name: 'sandking_burrowstrike',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'sandking_sand_storm',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'sandking_caustic_finale',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'sandking_epicenter',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'sandking_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'sandking_epicenter',
      },
      {
        locilized_name: 'sandking_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'sandking_burrowstrike',
      },
    ],
  },
  {
    id: 17,
    name: 'npc_dota_hero_storm_spirit',
    npe_desc_loc: 'Zips across the map to engage in fights',
    description:
      'Storm Spirit is never one to miss a fight. <b>Zipping</b> from across the battlefield in a bolt of lightning, he strikes enemies from every direction with <b>exploding remnants</b> and <b>charged attacks</b>, then disappears while his enemies are still scrambling to react.',
    bio: "Storm Spirit is literally a force of nature--the wild power of wind and weather, bottled in human form. And a boisterous, jovial, irrepressible form it is! As jolly as a favorite uncle, he injects every scene with crackling energy. But it was not always thus, and there was tragedy in his creation. Generations ago, in the plains beyond the Wailing Mountains, a good people lay starving in drought and famine. A simple elementalist, Thunderkeg by name, used a forbidden spell to summon the spirit of the storm, asking for rain. Enraged at this mortal's presumption, the Storm Celestial known as Raijin lay waste to the land, scouring it bare with winds and flood. Thunderkeg was no match for the Celestial--at least until he cast a suicidal spell that forged their fates into one: he captured the Celestial in the cage of his own body. Trapped together, Thunderkeg's boundless good humor fused with Raijin's crazed energy, creating the jovial Raijin Thunderkeg, a Celestial who walks the world in physical form. ",
    role_levels: [2, 0, 2, 1, 0, 0, 3, 0, 1],
    abilites: [
      {
        locilized_name: 'storm_spirit_static_remnant',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'storm_spirit_electric_vortex',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'storm_spirit_overload',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'storm_spirit_ball_lightning',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'storm_spirit_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'storm_spirit_overload',
      },
      {
        locilized_name: 'storm_spirit_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'storm_spirit_electric_vortex',
      },
    ],
  },
  {
    id: 18,
    name: 'npc_dota_hero_sven',
    npe_desc_loc: 'Cleaves down enemies with his incredible strength',
    description:
      'Sven is always eager to charge into a fight. He <b>stuns grouped enemies</b> as he wades into battle, and once he ignites his <b>damage-boosting ultimate</b>, a few swings of his massive sword are often more than enough to slay his foes.',
    bio: "Sven is the bastard son of a Vigil Knight, born of a Pallid Meranth, raised in the Shadeshore Ruins.  With his father executed for violating the Vigil Codex, and his mother shunned by her wild race, Sven believes that honor is to be found in no social order, but only in himself.  After tending his mother through a lingering death, he offered himself as a novice to the Vigil Knights, never revealing his identity.  For thirteen years he studied in his father's school, mastering the rigid code that declared his existence an abomination.  Then, on the day that should have been his In-Swearing, he seized the Outcast Blade, shattered the Sacred Helm, and burned the Codex in the Vigil's Holy Flame.  He strode from Vigil Keep, forever solitary, following his private code to the last strict rune. Still a knight, yes...but a Rogue Knight. He answers only to himself.",
    role_levels: [2, 0, 1, 2, 0, 2, 0, 0, 2],
    abilites: [
      {
        locilized_name: 'sven_storm_bolt',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'sven_great_cleave',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'sven_warcry',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'sven_gods_strength',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'sven_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'sven_storm_bolt',
      },
      {
        locilized_name: 'sven_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'sven_storm_bolt',
      },
    ],
  },
  {
    id: 19,
    name: 'npc_dota_hero_tiny',
    npe_desc_loc: 'Grows in size and strength as battle ensues',
    description:
      "Growing to <b>tremendous size and strength</b> as the battle progresses, Tiny's power can quickly become terrifying. He <b>tosses heroes and creeps</b> at his enemies, or <b>stuns</b> them beneath an avalanche. Should he gather his full strength, he can demolish the enemy's base with ease.",
    bio: "Coming to life as a chunk of stone, Tiny's origins are a mystery on which he continually speculates.  He is a Stone Giant now, but what did he used to be?  A splinter broken from a Golem's heel?  A shard swept from a gargoyle-sculptor's workshop?  A fragment of the Oracular Visage of Garthos?  A deep curiosity drives him, and he travels the world tirelessly seeking his origins, his parentage, his people.  As he roams, he gathers weight and size; the forces that weather lesser rocks, instead cause Tiny to grow and ever grow.",
    role_levels: [3, 0, 2, 1, 0, 2, 0, 2, 2],
    abilites: [
      {
        locilized_name: 'tiny_avalanche',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'tiny_toss',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'tiny_tree_grab',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'tiny_grow',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'tiny_toss_tree',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'tiny_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'tiny_tree_grab',
      },
      {
        locilized_name: 'tiny_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'tiny_tree_channel',
      },
    ],
  },
  {
    id: 20,
    name: 'npc_dota_hero_vengefulspirit',
    npe_desc_loc: 'Can swap herself with any nearby hero',
    description:
      "Vengeful Spirit's presence is felt at all times, whether she is alive or dead. Able to <b>swap positions</b> with any nearby hero, <b>stun enemies</b>, and reduce her killer's effectiveness if she falls, she constantly brings confusion and chaos to her foes.",
    bio: "Even the most contented Skywrath is an ill-tempered creature, naturally inclined to seek revenge for the slightest insult. But Vengeful Spirit is the essence of vengeance. Once a proud and savage Skywrath scion, Shendelzare was first in succession for the Ghastly Eyrie until a sister's treachery robbed her of her birthright. Snared in an assassin's net, Shendelzare tore free only at the cost of her wings, limping away in the ultimate humiliation: On foot. With her wings broken, she knew the Skywrath would never accept her as ruler; and in the highest roost of the Eyrie, inaccessible except by winged flight, her sister was untouchable. Unwilling to live as a flightless cripple, and desiring revenge far more than earthly power, the fallen princess drove a bargain with the goddess Scree'auk: She surrendered her broken body for an imperishable form of spirit energy, driven by vengeance, capable of doing great damage in the material plane. She may spend eternity flightless, but she will have her revenge.",
    role_levels: [0, 3, 1, 2, 0, 0, 1, 0, 2],
    abilites: [
      {
        locilized_name: 'vengefulspirit_magic_missile',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'vengefulspirit_wave_of_terror',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'vengefulspirit_command_aura',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'vengefulspirit_nether_swap',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'vengefulspirit_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'vengefulspirit_wave_of_terror',
      },
      {
        locilized_name: 'vengefulspirit_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'vengefulspirit_command_aura',
      },
    ],
  },
  {
    id: 21,
    name: 'npc_dota_hero_windrunner',
    npe_desc_loc: 'Fires swift flurry of arrows at a single target',
    description:
      "<b>Evasive and swift</b>, the nimble Windranger is always seeking the right angle to attack. Whether she's clearing the way with a draw of her <b>deadly powershot</b>, or <b>shackling enemies together</b> to pepper them with arrows, she's always on the move.",
    bio: "The western forests guard their secrets well. One of these is Lyralei, master archer of the wood, and favored godchild of the wind.  Known now as Windranger, Lyralei's family was killed in a storm on the night of her birth--their house blown down by the gale, contents scattered to the winds. Only the newborn survived among the debris field of death and destruction.  In the quiet after the storm, the wind itself took notice of the lucky infant crying in the grass. The wind pitied the child and so lifted her into the sky and deposited her on a doorstep in a neighboring village.  In the years that followed, the wind returned occasionally to the child's life, watching from a distance while she honed her skills.  Now, after many years of training, Windranger fires her arrows true to their targets.  She moves with blinding speed, as if hastened by a wind ever at her back.  With a flurry of arrows, she slaughters her enemies, having become, nearly, a force of nature herself.",
    role_levels: [1, 1, 1, 1, 0, 0, 1, 0, 0],
    abilites: [
      {
        locilized_name: 'windrunner_shackleshot',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'windrunner_powershot',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'windrunner_windrun',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'windrunner_focusfire',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'windrunner_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'windrunner_gale_force',
      },
      {
        locilized_name: 'windrunner_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'windrunner_windrun',
      },
    ],
  },
  {
    id: 22,
    name: 'npc_dota_hero_zuus',
    npe_desc_loc: 'Strikes enemies near and far with lightning',
    description:
      "None can hide from Zeus, whether he's calling down a bolt to <b>reveal the surroundings</b>, sending an arc coursing through his nearest enemies, or summoning a <b>terrifying volley of lightning</b> upon all enemies. Wherever his foes are, Zeus will find them.",
    bio: "Lord of Heaven, father of gods, Zeus treats all the Heroes as if they are his rambunctious, rebellious children. After being caught unnumbered times in the midst of trysts with countless mortal women, his divine wife finally gave him an ultimatum: 'If you love mortals so much, go and become one. If you can prove yourself faithful, then return to me as my immortal husband. Otherwise, go and die among your creatures.' Zeus found her logic (and her magic) irrefutable, and agreed to her plan. He has been on his best behavior ever since, being somewhat fonder of immortality than he is of mortals. But to prove himself worthy of his eternal spouse, he must continue to pursue victory on the field of battle.",
    role_levels: [1, 0, 3, 0, 0, 0, 0, 0, 0],
    abilites: [
      {
        locilized_name: 'zuus_arc_lightning',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'zuus_lightning_bolt',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'zuus_static_field',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'zuus_thundergods_wrath',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'zeuus_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'zuus_static_field',
      },
      {
        locilized_name: 'zeuus_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'zuus_cloud',
      },
    ],
  },
  {
    id: 23,
    name: 'npc_dota_hero_kunkka',
    npe_desc_loc: 'Disrupts enemy positioning and disables them',
    description:
      'Kunkka is always predicting where his enemies will go next. Able to attack a location with a <b>geyser of water</b> or a <b>ghostly shipwreck</b>, should his aim prove true, he and his allies will have no trouble cleaning up whatever is left.',
    bio: "As The Admiral of the mighty Claddish Navy, Kunkka was charged with protecting the isles of his homeland when the demons of the Cataract made a concerted grab at the lands of men. After years of small sorties, and increasingly bold and devastating attacks, the demon fleet flung all its carnivorous ships at the Trembling Isle. Desperate, the Suicide-Mages of Cladd committed their ultimate rite, summoning a host of ancestral spirits to protect the fleet. Against the demons, this was just barely enough to turn the tide.    <br><br>As Kunkka watched the demons take his ships down one by one, he had the satisfaction of wearing away their fleet with his ancestral magic. But at the battle's peak, something in the clash of demons, men and atavistic spirits must have stirred a fourth power that had been slumbering in the depths. The waves rose up in towering spouts around the few remaining ships, and Maelrawn the Tentacular appeared amid the fray. His tendrils wove among the ships, drawing demon and human craft together, churning the water and wind into a raging chaos.    <br><br>What happened in the crucible of that storm, none may truly say. The Cataract roars off into the void, deserted by its former denizens. Kunkka is now The Admiral of but one ship, a ghostly rig which endlessly replays the final seconds of its destruction. Whether he died in that crash is anyone's guess. Not even Tidehunter, who summoned Maelrawn, knows for sure.",
    role_levels: [2, 1, 1, 2, 0, 1, 0, 0, 2],
    abilites: [
      {
        locilized_name: 'kunkka_torrent',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'kunkka_tidebringer',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'kunkka_x_marks_the_spot',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'kunkka_ghostship',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'kunkka_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'kunkka_tidal_wave',
      },
      {
        locilized_name: 'kunkka_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'kunkka_torrent_storm',
      },
    ],
  },
  {
    id: 25,
    name: 'npc_dota_hero_lina',
    npe_desc_loc: 'Increases attack and speed with every spell',
    description:
      'As deadly as she is fragile, Lina effortlessly strikes down any foe foolish enough to be caught alone. Gaining <b>attack speed</b> with each spell she casts, she scours enemies with <b>flame and heat lightning</b>, ensuring few can survive her assaults.',
    bio: "The sibling rivalries between Lina the Slayer, and her younger sister Rylai, the Crystal Maiden, were the stuff of legend in the temperate region where they spent their quarrelsome childhoods together. Lina always had the advantage, however, for while Crystal was guileless and naive, Lina's fiery ardor was tempered by cleverness and conniving. The exasperated parents of these incompatible offspring went through half a dozen homesteads, losing one to fire, the next to ice, before they realized life would be simpler if the children were separated. As the oldest, Lina was sent far south to live with a patient aunt in the blazing Desert of Misrule, a climate that proved more than comfortable for the fiery Slayer. Her arrival made quite an impression on the somnolent locals, and more than one would-be suitor scorched his fingers or went away with singed eyebrows, his advances spurned. Lina is proud and confident, and nothing can dampen her flame.",
    role_levels: [1, 1, 3, 1, 0, 0, 0, 0, 0],
    abilites: [
      {
        locilized_name: 'lina_dragon_slave',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'lina_light_strike_array',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'lina_fiery_soul',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'lina_laguna_blade',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'lina_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'lina_laguna_blade',
      },
      {
        locilized_name: 'lina_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'lina_laguna_blade',
      },
    ],
  },
  {
    id: 26,
    name: 'npc_dota_hero_lion',
    npe_desc_loc: 'Steals enemy mana to fuel his own abilities',
    description:
      "Lion gives enemies little chance to retaliate. <b>Stunning targets</b> with a damaging row of spikes, or temporarily <b>transforming them into a harmless critter</b>, even if his powerful spells aren't enough, he and his allies should still have all the time they need to slay their foes.",
    bio: "Once a Grandmaster of the Demon Witch tradition of sorcery, Lion earned fame among his brethren for fighting on the side of light and righteousness. But adulation corrupts. With powers surpassed only by his ambition, the mage was seduced by a demon and turned to evil, trading his soul for prestige. After committing horrible crimes that marred his soul, he was abandoned. The demon betrayed him, striking better deals with his enemies. Such was Lion's rage that he followed the demon back to hell and slew it, ripping it limb from limb, taking its demonic hand for his own. However, such demonoplasty comes at a cost. Lion was transfigured by the process, his body transformed into something unrecognizable. He rose from hell, rage incarnate, slaying even those who had once called him master, and laying waste to the lands where he had once been so adored. He survives now as the sole practitioner of the Demon Witch tradition, and those who present themselves as acolytes or students are soon relieved of their mana and carried off by the faintest gust of wind.",
    role_levels: [0, 2, 3, 3, 0, 0, 0, 0, 2],
    abilites: [
      {
        locilized_name: 'lion_impale',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'lion_voodoo',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'lion_mana_drain',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'lion_finger_of_death',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'lion_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'lion_mana_drain',
      },
      {
        locilized_name: 'lion_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'lion_finger_of_death',
      },
    ],
  },
  {
    id: 27,
    name: 'npc_dota_hero_shadow_shaman',
    npe_desc_loc: 'Summons powerful serpent wards to deal damage',
    description:
      "Shadow Shaman quickly clears the way for his team's forces to march on the enemy base. Blasting enemies with <b>shocking spells</b> and <b>interrupting attackers</b> with hexes, his powerful <b>serpent wards</b> destroy enemy defenses with ease.",
    bio: "Born in the Bleeding Hills, Rhasta was just a starving youngling when picked up by a travelling con-man.  For two pins of copper, the old con-man would tell your fortune. For three, he'd castrate your pig, for five, he'd circumcise your sons. For a good meal, he'd don his shaman garb, read from his ancient books, and lay a curse upon your enemies. His strange new youngling, part hill troll, part...something else, worked as assistant and lent an air of the exotic to the con-man's trade.     <br><br>Always one step ahead of cheated customers, one town ahead of a pursuing patronage, the two trekked across the blighted lands until one day the con-man realized that the little youngling could actually do what he only pretended at. His ward had a gift--a gift that customers valued. And so the youngling Rhasta was thrust before the crowds, and the trade-name Shadow Shaman was born. The two continued from town to town, conjuring for money as Shadow Shaman's reputation grew. Eventually, the pair's duplicitous past caught up with them, and they were ambushed by a mob of swindled ex-clients. The con-man was slain, and for the first time, Rhasta used his powers for darkness, massacring the attackers. He buried his beloved master, and now uses his powers to destroy any who would seek to do him harm.",
    role_levels: [0, 2, 2, 3, 0, 0, 0, 3, 1],
    abilites: [
      {
        locilized_name: 'shadow_shaman_ether_shock',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'shadow_shaman_voodoo',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'shadow_shaman_shackles',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'shadow_shaman_mass_serpent_ward',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'shadow_shaman_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'shadow_shaman_shackles',
      },
      {
        locilized_name: 'shadow_shaman_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'shadow_shaman_mass_serpent_ward',
      },
    ],
  },
  {
    id: 28,
    name: 'npc_dota_hero_slardar',
    npe_desc_loc: 'Chases down his enemies to weaken and bash them',
    description:
      "Ready to find and demolish his foes, Slardar quickly slithers into battle. After <b>exposing an enemy's position</b> and shattering their defenses, he closes the distance to lock them in place with crushing blows and powerful bashes from his trident.",
    bio: 'Slardar is a Slithereen, one of the Deep Ones, guardian of a vast network of sunken cities and the ancient riches buried within them. In the lightless gulf of the deepest ocean abysses, the Slithereen Guard patrols secret treasure rooms, ever vigilant against the subaqueous thieves sent into the deeps by covetous dryland sorcerers. He is utterly loyal, and his taciturn nature hides deep knowledge of the most secret places of the sea. He rises to the shallows in spite of the pain caused him by brightness, to commit reconnaissance, to make sure no one is conspiring against the depths, and sometimes in relentless pursuit of the rare few who manage to steal off with an item from the Sunken Treasury. Because he has spent his whole life at great pressure, under tremendous weight of the sea, Slardar the Slithereen Guard is a creature of immense power.',
    role_levels: [2, 0, 0, 1, 0, 2, 1, 0, 2],
    abilites: [
      {
        locilized_name: 'slardar_sprint',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'slardar_slithereen_crush',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'slardar_bash',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'slardar_amplify_damage',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'slardar_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'slardar_slithereen_crush',
      },
      {
        locilized_name: 'slardar_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'slardar_sprint',
      },
    ],
  },
  {
    id: 29,
    name: 'npc_dota_hero_tidehunter',
    npe_desc_loc: 'Durable hero who shrugs off enemy damage',
    description:
      'Stalking ahead of his team, Tidehunter is always on the lookout for the <b>right time to strike</b>. When the moment comes, he unleashes his massive and devastating ultimate, paving the way for his allies to slay their <b>stunned enemies.</b>',
    bio: "The Tidehunter known as Leviathan was once the champion of the Sunken Isles, but his motives are as mysterious as those of his people. We all know the importance of the Drylanders' shipping lanes, how empires may rise and fall according to who controls the open water. Far less is known of the submarine lanes, and how the warring tribes of the Meranthic Diaspora have carved out habitations through endless undersea skirmishes. In the fragile treaties between the Mer and Men, we can glimpse the extent of the drowned empires, but their politics appear complex and opaque. It would seem that Leviathan tired of such petty strife, and set off on his own, loyal only to his abyssal god, Maelrawn the Tentacular. He stalks the shallows now in search of men or meranths who stray into his path, and with a particular loathing for Admiral Kunkka, who has long been his nemesis for reasons lost in the deepest trenches of the sea.",
    role_levels: [1, 0, 1, 2, 0, 3, 0, 0, 3],
    abilites: [
      {
        locilized_name: 'tidehunter_gush',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'tidehunter_kraken_shell',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'tidehunter_anchor_smash',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'tidehunter_ravage',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'tidehunter_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'tidehunter_gush',
      },
      {
        locilized_name: 'tidehunter_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'tidehunter_anchor_smash',
      },
    ],
  },
  {
    id: 30,
    name: 'npc_dota_hero_witch_doctor',
    npe_desc_loc: 'Channels a high damage death ward',
    description:
      "Witch Doctor is <b>whatever his team needs him to be</b>. Whether aiding his team with <b>gradual healing</b>, <b>stunning and cursing foes</b> to ensure a kill, or destroying enemies himself with a dance by his mighty ultimate, few can match Witch Doctor's <b>versatility.</b>",
    bio: 'A wiry silhouette hitches forward--uneven of feature and limb, bizarre of gait, relentlessly criss-crossing the battlefield in search of that vital weak point where his talents can do most good, and most harm. Whether broken or mismade it is not clear, but still, none can doubt the power carried in his twisted physique. A long staff thumps the earth as Zharvakko the Witch Doctor advances, deploying a terrifying arsenal of fetishes, hexes and spells.  It is a body of magical knowledge learned and perfected over several lifetimes in the island highlands of Arktura, now wielded with precision accuracy against his enemies. Zharvakko can be your best friend or your worst enemy--healing allies and laying waste to all who oppose him.',
    role_levels: [0, 3, 2, 1, 0, 0, 0, 0, 0],
    abilites: [
      {
        locilized_name: 'witch_doctor_paralyzing_cask',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'witch_doctor_voodoo_restoration',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'witch_doctor_maledict',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'witch_doctor_death_ward',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'witch_doctor_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'witch_doctor_voodoo_switcheroo',
      },
      {
        locilized_name: 'witch_doctor_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'witch_doctor_death_ward',
      },
    ],
  },
  {
    id: 31,
    name: 'npc_dota_hero_lich',
    npe_desc_loc: 'Unleashes a powerful attack that bounces between enemies',
    description:
      'Drifting from battle to battle and <b>sacrificing creeps</b> to fuel his assaults, Lich is always ready to help his fellow heroes destroy their enemies with <b>slowing frost</b>. Should his foes be foolish enough to gather, his <b>bouncing ultimate</b> will ensure their demise.',
    bio: "In life, the frost-mage Ethreain (not yet a Lich) had used the threat of destructive ice to enslave entire kingdoms. His subjects, aided by a few desperate magicians, eventually grew bold enough to ambush him. Armed with enough charmed rope to bind him forever, they tied the frost mage to adamant weights and dropped him in a pool known chiefly for being bottomless. It wasn't.    <br><br>He only fell for a year or so before an outcrop snagged him. There he rested, dead but undecaying, until the geomancer Anhil thought to verify the legend of the supposedly bottomless Black Pool. Anhil's plumbline snarled with the ropes that bound the drowned magician, and up he hauled an unexpected prize. Thinking that by rendering the dead undead, he could question the Lich about the properties of the pool, he removed the bindings and commenced a simple rite of resurrection. Even the descendants of Ethreain's enemies were long forgotten by time, so there were none to warn Anhil against imprudence. But he learned the error of his judgment almost immediately, as Lich threw off the shackles and consumed him.",
    role_levels: [0, 3, 2, 0, 0, 0, 0, 0, 0],
    abilites: [
      {
        locilized_name: 'lich_frost_nova',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'lich_frost_shield',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'lich_sinister_gaze',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'lich_chain_frost',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'lich_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'lich_ice_spire',
      },
      {
        locilized_name: 'lich_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'lich_sinister_gaze',
      },
    ],
  },
  {
    id: 32,
    name: 'npc_dota_hero_riki',
    npe_desc_loc: 'Remains permanently invisible until the moment to strike',
    description:
      "Riki stalks the battlefield, <b>unseen</b> by the enemy. He chooses his moment carefully and bursts forth in a puff of <b>silencing smoke</b>, stabbing at his foes before they even know he's there.",
    bio: 'Riki was born middle child to the great dynasty of Tahlin. With an older brother groomed for the throne, and a younger brother coddled and kept, Riki, the small middle son, seemed born for the art of invisibility.  It was an art he cultivated, and one which ultimately saved his life on the night that his people were betrayed and his family slaughtered. Of all the royal line, he alone escaped, small and agile, unassuming, using smoke as cover. He cut his way out of the royal grounds, using the advantage of surprise, quietly slitting the throats of one enemy warrior after another. Now free of his royal responsibilities, Riki uses his talents in service to a new trade: Stealth Assassin. He silences his enemies, sharpening his skills, hoping to one day take revenge on those who killed his family and robbed him of his birthright.',
    role_levels: [2, 0, 0, 1, 0, 0, 2, 0, 0],
    abilites: [
      {
        locilized_name: 'riki_smoke_screen',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'riki_blink_strike',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'riki_tricks_of_the_trade',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'riki_backstab',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'riki_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'riki_poison_dart',
      },
      {
        locilized_name: 'riki_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'riki_tricks_of_the_trade',
      },
    ],
  },
  {
    id: 33,
    name: 'npc_dota_hero_enigma',
    npe_desc_loc: 'Traps and damages enemies in a black hole',
    description:
      'Widely feared for his ultimate ability, Enigma can <b>summon a black hole</b> capable of entrapping enemy forces, so that allies can then destroy them. An ever-present contingent of <b>eidolons at his side</b>, he pummels foes with ranged attacks.',
    bio: "Nothing is known of Enigma's background. There are only stories and legends, most of them apocryphal, passed down through the ages. In truth, Enigma is a mystery for whom the only true biography is description: he is a universal force, a consumer of worlds. He is a being of the void, at times corporeal, other times ethereal. A beast between the planes.    <br><br>There are stories that say he was once a great alchemist who tried to unlock the secrets of the universe and was cursed for his arrogance. Other legends tell that he is an ancient being of strange gravity, the abyss personified--a twisted voice from out the original darkness, before the first light in the universe. And there are older legends that say he is the first collapsed star, a black hole grown complicated and sentient--his motivations unknowable, his power inexorable, a force of destruction unleashed upon existence itself.",
    role_levels: [0, 0, 0, 2, 3, 0, 0, 2, 2],
    abilites: [
      {
        locilized_name: 'enigma_malefice',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'enigma_demonic_conversion',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'enigma_midnight_pulse',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'enigma_black_hole',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'enigma_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'enigma_black_hole',
      },
      {
        locilized_name: 'enigma_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'enigma_black_hole',
      },
    ],
  },
  {
    id: 34,
    name: 'npc_dota_hero_tinker',
    npe_desc_loc: 'Demolishes his enemies with swarms of machines',
    description:
      'Tinker demolishes foes with <b>swarms of machines</b> and a host of <b>deadly gadgets</b>. If he can gather the resources he needs, the power that instantly <b>refreshes his abilities</b> enables him to lead his team from every front.',
    bio: "Boush the Tinker's diminutive race is known for its intelligence, its cunning, and its prickly relationship with magic. As a matter of pride, they survive by their wits, and use only those powers of nature that may be unlocked through rational methodologies. Even this forbearance has led to a great deal of trouble, as Boush can attest. Once a key investigator of natural law, Boush the Tinker led a vast intellectual investigation into the workings of nature, founding a subterranean laboratory in the rumored, mist-wreathed wastes of the Violet Plateau. While scorning mages for the dangers they visit upon the world, Boush and his Tinker associates haughtily wrenched open a portal to some realm beyond comprehension and ushered in some nightmares of their own. A black mist rose from the cavernous interior of the Violet Plateau, shrouding it in permanent darkness from which sounds of horror perpetually emanate. Boush escaped with only his wits and the contraptions he carried, the sole Tinker to survive the Violet Plateau Incident.",
    role_levels: [1, 0, 3, 0, 0, 0, 0, 2, 0],
    abilites: [
      {
        locilized_name: 'tinker_laser',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'tinker_heat_seeking_missile',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'tinker_defense_matrix',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'tinker_keen_teleport',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'tinker_rearm',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'tinker_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'tinker_march_of_the_machines',
      },
      {
        locilized_name: 'tinker_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'tinker_laser',
      },
    ],
  },
  {
    id: 35,
    name: 'npc_dota_hero_sniper',
    npe_desc_loc: 'Picks off his enemies from afar',
    description:
      "<b>Death from a distance</b> is Sniper's specialty. He keeps his enemies on their toes with a steady barrage of firepower, and then, when the time is right, picks them off with a <b>kill shot.</b>",
    bio: "Kardel Sharpeye was born deep in the mountains of Knollen where, since time immemorial, Keen Folk have survived by hunting the strange, cliff-dwelling steepstalkers above their village, shooting them from a distance and collecting the carcasses where they fell. Sharpeye was among the best of these strange mountain keens for whom projectile weapons are but another appendage, and to shoot is as natural as to touch. <br><br>On his day of summoning, when he was to gain full standing in his village, Sharpeye took the ancient test: a single shot from the valley floor to strike a beast down from the cliffs. To miss was to be dishonored. With his entire village standing vigil, Sharpeye took his shot. A steepstalker fell; the crowd cheered.  But when the carcass was collected, the village grew silent, for the elders found that the bullet had pierced its glittering central eye then fallen to be clenched in the steepstalker's mandibles. This ominous sign was the literal opening of a dark prophecy, foretelling both greatness and exile for the gunman who made such a shot. Sharpeye the Sniper was thus, by his own skill, condemned to make his way apart from his people--and unwelcome back among them until he has fulfilled the remainder of the prophecy by attaining legendary stature on a field of battle.",
    role_levels: [3, 0, 1, 0, 0, 0, 0, 0, 0],
    abilites: [
      {
        locilized_name: 'sniper_shrapnel',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'sniper_headshot',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'sniper_take_aim',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'sniper_assassinate',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'sniper_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'sniper_concussive_grenade',
      },
      {
        locilized_name: 'sniper_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'sniper_assassinate',
      },
    ],
  },
  {
    id: 36,
    name: 'npc_dota_hero_necrolyte',
    npe_desc_loc: 'Damages enemies and heals allies simultaneously',
    description:
      'Wherever Necrophos goes, enemies wither as allies thrive. <b>Restoring health</b> to his friends and harming enemies with each <b>death pulse</b>, once his very presence has eaten away at an enemy, he <b>summons the reaper</b> to lengthen their stay in the afterlife.',
    bio: "In a time of great plague, an obscure monk of dark inclinations, one Rotund'jere, found himself promoted to the rank of Cardinal by the swift death of all his superiors. While others of the order went out to succor the ill, the newly ordained cardinal secluded himself within the Cathedral of Rumusque, busily scheming to acquire the property of dying nobles, promising them spiritual rewards if they signed over their terrestrial domains. As the plague receded to a few stubborn pockets, his behavior came to the attention of the greater order, which found him guilty of heresy and sentenced him to serve in the plague ward, ensorcelled with spells that would ensure him a slow and lingering illness. But they had not counted on his natural immunity. Rotund'jere caught the pox, but instead of dying, found it feeding his power, transforming him into a veritable plague-mage, a Pope of Pestilence. Proclaiming himself Necrophos, he travels the world, spreading plague wherever he goes, and growing in terrible power with every village his pestilential presence obliterates.",
    role_levels: [1, 0, 2, 1, 0, 1, 0, 0, 0],
    abilites: [
      {
        locilized_name: 'necrolyte_death_pulse',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'necrolyte_sadist',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'necrolyte_heartstopper_aura',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'necrolyte_reapers_scythe',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'necrolyte_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'necrolyte_death_seeker',
      },
      {
        locilized_name: 'necrolyte_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'necrolyte_sadist',
      },
    ],
  },
  {
    id: 37,
    name: 'npc_dota_hero_warlock',
    npe_desc_loc: 'Summons powerful demons to fight at his side',
    description:
      'Summoning forth his <b>demonic golem</b>, Warlock brings ruin to enemies and destroys their defenses. Yet even without his golem, his <b>dark spells</b> can still wreak havoc, whether <b>healing allies</b> and <b>harming enemies</b> with a word, or binding foes together to share their agony.',
    bio: 'As Chief Curator and Head of Acquisitions for the Arcane Archives of the Ultimyr Academy, Demnok Lannik was tireless in his pursuit of lost, rare and forbidden tomes. No cursed temple was so foreboding, no cavern path so treacherous, that any concern for his own survival could dissuade him from entering if rumors hinted that some pamphlet of primordial lore might still survive in its depths. However, so often did his investigations trigger the wrath of protector entities, that he finally found it necessary to master the arts of magic. He bent himself to learning sorcery with the same thorough obsessiveness that marked his quest for incunabula, becoming the most powerful Warlock of the Academy in less time than most practitioners required to complete a course of undergraduate work. Almost as an afterthought, he carved a staff of Dreadwood and summoned into it a captive spirit from the Outer Hells. And anticipating the day when he will have recovered every last lost spellbook, he has commenced writing his own Black Grimoire. It will undoubtedly be instructive.',
    role_levels: [0, 1, 0, 1, 0, 0, 0, 0, 2],
    abilites: [
      {
        locilized_name: 'warlock_fatal_bonds',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'warlock_shadow_word',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'warlock_upheaval',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'warlock_rain_of_chaos',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'warlock_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'warlock_shadow_word',
      },
      {
        locilized_name: 'warlock_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'warlock_rain_of_chaos',
      },
    ],
  },
  {
    id: 38,
    name: 'npc_dota_hero_beastmaster',
    npe_desc_loc: 'Summons beasts to aid his hunt',
    description:
      'Summoning a <b>poison-spitting boar</b> and a <b>scouting hawk</b> to aid his hunt, Beastmaster never stalks the battlefield unprepared. Chopping through the forest with his axes, his <b>stunning roar</b> opens the way for his allies to devastate enemies.',
    bio: "Karroch was born a child of the stocks. His mother died in childbirth; his father, a farrier for the Last King of Slom, was trampled to death when he was five. Afterward Karroch was indentured to the king's menagerie, where he grew up among all the beasts of the royal court: lions, apes, fell-deer, and things less known, things barely believed in. When the lad was seven, an explorer brought in a beast like none before seen. Dragged before the King in chains, the beast spoke, though its mouth moved not. Its words: a plea for freedom. The King only laughed and ordered the beast perform for his amusement; and when it refused, struck it with the Mad Scepter and ordered it dragged to the stocks.     <br><br>Over the coming months, the boy Karroch sneaked food and medicinal draughts to the wounded creature, but only managed to slow its deterioration. Wordlessly, the beast spoke to the boy, and over time their bond strengthened until the boy found he could hold up his end of a conversation.  He could, in fact, speak now to all the creatures of the King's menagerie. On the night the beast died, a rage came over the boy.  He incited the animals of the court to rebel and threw open their cages to set them amok on the palace grounds.  The Last King was mauled in the mayhem. In the chaos, one regal stag bowed to the boy who had freed him; and with Beastmaster astride him, leapt the high walls of the estate, and escaped. Now a man, Karroch the Beastmaster has not lost his ability to converse with wild creatures. He has grown into a warrior at one with nature's savagery.",
    role_levels: [0, 0, 1, 2, 0, 2, 0, 0, 2],
    abilites: [
      {
        locilized_name: 'beastmaster_wild_axes',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'beastmaster_call_of_the_wild_boar',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'beastmaster_call_of_the_wild_hawk',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'beastmaster_inner_beast',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'beastmaster_primal_roar',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'beastmaster_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'beastmaster_call_of_the_wild_hawk',
      },
      {
        locilized_name: 'beastmaster_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'beastmaster_wild_axes',
      },
    ],
  },
  {
    id: 39,
    name: 'npc_dota_hero_queenofpain',
    npe_desc_loc: 'Blinks in to deal massive magical damage',
    description:
      'Queen of Pain strikes without warning, destroying gathered foes with <b>deafening screams</b>. Should an enemy survive her onslaught, she <b>slows</b> their escape with a <b>throw of her dagger</b> before finishing them off.',
    bio: "The Ecclesiast-King of Elze nursed a desire for pain--forbidden pain. In a less prominent political figure, such desires might be considered unwise, but in a monarch of his stature, to satisfy such thirsts would have threatened the virtue of the Divine Throne itself. Therefore he turned to his dungeon full of demonologists, promising freedom to whoever could summon a personal succubus of torment and bind it entirely to his service. The creature who arrived, Akasha by name, visited upon him such exquisite torments that he named her his Secret Queen, and he began to spend all his spare moments submitting to her clever torments--eventually abdicating all his responsibilities in his pursuit of the painful pleasures that only she could bring. Queen of Pain could bring him to the brink of death, but she was rune-bound to keep him alive. At last the King's neglect of state brought on an uprising. He was dragged from his chamber and hurled from the Tower of Invocations, and at the moment of death, Queen of Pain was let loose into the world, freed from servitude--freed to visit her sufferings on anyone she deigned to notice.",
    role_levels: [1, 0, 3, 0, 0, 0, 3, 0, 0],
    abilites: [
      {
        locilized_name: 'queenofpain_shadow_strike',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'queenofpain_blink',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'queenofpain_scream_of_pain',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'queenofpain_sonic_wave',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'queenofpain_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'queenofpain_blink',
      },
      {
        locilized_name: 'queenofpain_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'queenofpain_sonic_wave',
      },
    ],
  },
  {
    id: 40,
    name: 'npc_dota_hero_venomancer',
    npe_desc_loc: 'Deals damage over time with venomous attacks',
    description:
      'Venomancer brings slow death to his enemies. Sprouting an <b>endless army of toxin-spitting watchers</b> to defend his territory, should foes draw near he can release a massive <b>cloud of lingering poison</b> to weaken enemies.',
    bio: "In the Acid Jungles of Jidi Isle, poison runs in the veins and bubbles in the guts of every creature that scuttles, climbs or swoops between fluorescent vines dripping with caustic sap. Yet even in this toxic menagerie, Venomancer is acknowledged as the most venomous. Ages ago, an Herbalist named Lesale crossed the Bay of Fradj by coracle, searching for potent essences that might be extracted from bark and root, and found instead a nightmare transformation. Two leagues into Jidi's jungle, Lesale encountered a reptile camouflaged as an epiphyte, which stung him as he mistakenly plucked it. In desperation, he used his partial knowledge of the jungle's herbal bounty, mixing the venom of the (swiftly throttled) reptile with the nectar of an armored orchid, to compound an antidote. In the moments before a black paralysis claimed him completely, he injected himself by orchid-thorn, and instantly fell into a coma.<br><br>Seventeen years later, something stirred in the spot where he had fallen, throwing off the years' accumulation of humus: Venomancer. Lesale the Herbalist no longer--but Lesale the Deathbringer. His mind was all but erased, and his flesh had been consumed and replaced by a new type of matter--one fusing the venom of the reptile with the poisonous integument of the orchid. Jidi's Acid Jungles knew a new master, one before whom even the most vicious predators soon learned to bow or burrow for their lives. The lurid isle proved too confining, and some human hunger deep in the heart of the Venomancer drove Lesale out in search of new poisons--and new deaths to bring.",
    role_levels: [0, 2, 1, 1, 0, 0, 0, 1, 1],
    abilites: [
      {
        locilized_name: 'venomancer_venomous_gale',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'venomancer_poison_sting',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'venomancer_plague_ward',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'venomancer_poison_nova',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'venomancer_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'venomancer_poison_sting',
      },
      {
        locilized_name: 'venomancer_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'venomancer_poison_nova',
      },
    ],
  },
  {
    id: 41,
    name: 'npc_dota_hero_faceless_void',
    npe_desc_loc: 'Can freeze his enemies in time',
    description:
      'Time is everything to Faceless Void. He speeds time to <b>dash between locations</b>, manipulates it to <b>dodge attacks</b>, stops it in a large area to devastate his foes, and given enough of it to gather resources, he can make himself unbelievably powerful.',
    bio: 'Darkterror the Faceless Void is a visitor from Claszureme, a realm outside of time. It remains a mystery why this being from another dimension believes the struggle for the Nemesis Stones is worth entering our physical plane, but apparently an upset in the balance of power in this world has repercussions in adjacent dimensions. Time means nothing to Darkterror, except as a way to thwart his foes and aid his allies. His long-view of the cosmos has given him a remote, disconnected quality, although in battle he is quite capable of making it personal.',
    role_levels: [2, 0, 0, 2, 0, 1, 1, 0, 3],
    abilites: [
      {
        locilized_name: 'faceless_void_time_walk',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'faceless_void_time_dilation',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'faceless_void_time_lock',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'faceless_void_chronosphere',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'faceless_void_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'faceless_void_time_walk_reverse',
      },
      {
        locilized_name: 'faceless_void_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'faceless_void_time_walk',
      },
    ],
  },
  {
    id: 42,
    name: 'npc_dota_hero_skeleton_king',
    npe_desc_loc: 'Can reincarnate instantly upon death',
    description:
      "Striding fearlessly toward his enemies, Wraith King <b>stuns his foes</b> and slashes them into submission. Should his enemies gain the upper hand, his <b>self-resurrecting ultimate</b> ensures he'll have another chance to swing his sword.",
    bio: "For untold years, King Ostarion built a kingdom from the remains of his enemies. It was an obsessive's errand, done to pass the long eternities of a monarchy that seemed fated never to end. He believed that as long as he built up the towers of his palace, he could not die. But eventually he learned that he had been deluded... that bone itself could perish. Deeply mistrustful of flesh, he sought a more permanent way of extending his reign, and at last settled on pursuit of wraith energy, a form of pure spirit given off by certain dark souls at death. Should he infuse himself with Wraith Essence, he thought he might create a body as luminous and eternal as his ego. On the millennial solstice known as Wraith-Night, he submitted to a rite of transformation, compelling his subjects to harvest enough souls to fuel his ambition for immortality. No one knows how many of his champions died, for the only survivor who mattered was the Wraith King who rose with the sun on the following morn. Now he rarely spends a moment on his glowing throne--but strides out with sword drawn, demanding a fealty that extends far beyond death. ",
    role_levels: [2, 1, 0, 2, 0, 3, 0, 0, 1],
    abilites: [
      {
        locilized_name: 'skeleton_king_hellfire_blast',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'skeleton_king_vampiric_aura',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'skeleton_king_mortal_strike',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'skeleton_king_reincarnation',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'skeleton_king_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'skeleton_king_reincarnation',
      },
      {
        locilized_name: 'skeleton_king_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'skeleton_king_reincarnation',
      },
    ],
  },
  {
    id: 43,
    name: 'npc_dota_hero_death_prophet',
    npe_desc_loc: 'Summons an army of ghosts to attack',
    description:
      "When she unleashes her <b>army of ghosts</b>, Death Prophet excels at <b>demolishing enemies</b> and their defenses alike. Leading her team's forces toward the enemy base with wave after damaging wave from her <b>swarm</b>, her onslaught can seem unstoppable.",
    bio: "Krobelus was a Death Prophet--which is one way of saying she told fortunes for the wealthiest of those who wished to look beyond the veil. But after years of inquiring on behalf of others, she began to seek clues on her own fate. When death refused to yield its secrets, she tried to buy them with her life. But the ultimate price proved insufficient.    <br><br>Death disgorged her again and again, always holding back its deepest mysteries. Her jealousy grew. Others could die for eternity--why not she? Why must she alone be cast back on the shores of life with such tiresome regularity? Why was she not worthy of the one thing all other living creatures took for granted? Still, she would not be discouraged.    <br><br>Each time she returned from the grave, she brought a bit of death back with her. Wraiths followed her like fragments of her shattered soul; her blood grew thin and ectoplasmic; the feasting creatures of twilight took her for their kin.. She gave a little of her life with every demise, and it began to seem as if her end was in sight. With her dedication to death redoubled, and no client other than herself, Krobelus threw herself ever more fervently into death's abyss, intent on fulfilling the one prophecy that eluded her: That someday the Death Prophet would return from death no more.",
    role_levels: [1, 0, 1, 1, 0, 0, 0, 3, 0],
    abilites: [
      {
        locilized_name: 'death_prophet_carrion_swarm',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'death_prophet_silence',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'death_prophet_spirit_siphon',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'death_prophet_exorcism',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'death_prophet_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'death_prophet_spirit_siphon',
      },
      {
        locilized_name: 'death_prophet_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'death_prophet_exorcism',
      },
    ],
  },
  {
    id: 44,
    name: 'npc_dota_hero_phantom_assassin',
    npe_desc_loc: 'Blinks onto her foes with critical strikes',
    description:
      'The moment she finds her prey, Phantom Assassin strikes. Instantly closing in on a target, she effortlessly <b>dodges attacks</b> as she relentlessly cuts away at her foe. Without warning, any one of her attacks could prove suddenly and <b>brutally fatal.</b>',
    bio: 'Through a process of divination, children are selected for upbringing by the Sisters of the Veil, an order that considers assassination a sacred part of the natural order.  The Veiled Sisters identify targets through meditation and oracular utterances.  They accept no contracts, and never seem to pursue targets for political or mercenary reasons. Their killings bear no relation to any recognizable agenda, and can seem to be completely random:  A figure of great power is no more likely to be eliminated than a peasant or a well digger. Whatever pattern the killings may contain, it is known only to them. They treat their victims as sacrifices, and death at their hand is considered an honor. Raised with no identity except that of their order, any Phantom Assassin can take the place of any other; their number is not known. Perhaps there are many, perhaps there are few. Nothing is known of what lies under the Phantom Veil. Except that this one, from time to time, when none are near enough to hear, is known to stir her veils with the forbidden whisper of her own name: Mortred.',
    role_levels: [3, 0, 0, 0, 0, 0, 1, 0, 0],
    abilites: [
      {
        locilized_name: 'phantom_assassin_stifling_dagger',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'phantom_assassin_phantom_strike',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'phantom_assassin_blur',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'phantom_assassin_coup_de_grace',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'phantom_assassin_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'phantom_assassin_fan_of_knives',
      },
      {
        locilized_name: 'phantom_assassin_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'phantom_assassin_blur',
      },
    ],
  },
  {
    id: 45,
    name: 'npc_dota_hero_pugna',
    npe_desc_loc: 'Drains enemy life to heal himself',
    description:
      "A crafty trickster, Pugna turns the enemy's power against itself as he blasts their defenses. While his <b>nether ward</b> strikes nearby foes that dare to cast a spell, he <b>drains life</b> from enemies to ensure he will be ready for the next assault.",
    bio: "In the realm of Pugna's birth, near the vents of the Nether Reaches, there stood a lamasery devoted to the Arts of Oblivion, which drew its power from the nether energies. The Grandmaster of the temple compound had himself passed into Oblivion several years prior, leaving his academy without a leader. From the moment of their master's death, the regents of the temple began rites of divination to identify their master's reincarnation, and eventually all signs converged on the immediate neighborhood. Several villages squatted in the shadow of the temple, their alleys and plazas full of the laughter of squalling children.    <br><br>Pugna, a mere thirteen months of age, was but one candidate among the local brats, and on the appointed day he was presented at the temple alongside two other promising tots. The lamas offered a jumble of worn relics to the children, treasured possessions of their former grandmaster. One boy reached for a porphyry wand that had belonged to the lama...and put it in his nostril. An impish girl pulled out an amulet that had also been the lama's, and immediately swallowed it. Pugna regarded the other two coolly, gave a merry laugh, and blasted them with gouts of emerald flame, reducing them to ashes in an instant. He then snatched up the wand and amulet, saying 'Mine!' The regents hoisted the beaming Pugna on their shoulders, wrapped him in their grandmaster's vestments, and rushed him to the throne before his mood could change. Within five years, the temple itself was another pile of ash, which pleased Pugna to no end.",
    role_levels: [0, 0, 2, 0, 0, 0, 0, 2, 0],
    abilites: [
      {
        locilized_name: 'pugna_nether_blast',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'pugna_decrepify',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'pugna_nether_ward',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'pugna_life_drain',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'pugna_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'pugna_life_drain',
      },
      {
        locilized_name: 'pugna_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'pugna_life_drain',
      },
    ],
  },
  {
    id: 46,
    name: 'npc_dota_hero_templar_assassin',
    npe_desc_loc: 'Slows down enemies with traps',
    description:
      'Peppering the battlefield with <b>slowing traps</b>, Templar Assassin <b>hides invisibly</b>, ready to ambush her prey. Once she springs her attack, she shreds enemies with piercing psionic blades, and <b>deflects counterattacks</b> with her refracting shield.',
    bio: "Lanaya, the Templar Assassin, came to her calling by a path of curious inquiry. Possessed of a scientific bent, she spent her early years engaged in meticulous study of nature's laws--peering into grimoires of magic and alchemy, recreating experiments from charred fragments of the Violet Archives, and memorizing observations of the Keen recordkeepers. Already quiet and secretive by nature, the difficulty of acquiring these objects further reinforced her skills of stealth. Had she been less retiring, she might have become notorious among the guilds as a thief-scholar. Instead her investigations led her into far more obscure corners.<br><br>As she devoted her furtive talents to unlocking the secrets of the universe, she instead unlocked a secret door that exists in nature itself: the entryway to the most Hidden Temple. The intelligences that waited beyond that portal, proved to be expecting her, and whatever mysteries they revealed in the moment of their discovery was nothing compared to the answers they held out to Lanaya should she continue in their service. She swore to protect the mysteries, but more to the point, in service to the Hidden Temple she satisfies her endless craving for understanding. In the eyes of each foe she expunges, a bit more of the mystery is revealed.",
    role_levels: [2, 0, 0, 0, 0, 0, 1, 0, 0],
    abilites: [
      {
        locilized_name: 'templar_assassin_refraction',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'templar_assassin_meld',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'templar_assassin_psi_blades',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'templar_assassin_psionic_trap',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'templar_assassin_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'templar_assassin_psionic_trap',
      },
      {
        locilized_name: 'templar_assassin_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'templar_assassin_trap_teleport',
      },
    ],
  },
  {
    id: 47,
    name: 'npc_dota_hero_viper',
    npe_desc_loc: 'Poisonous toxins chip away armor and slow enemies',
    description:
      "Launching <b>deadly poison from a distance</b>, Viper poses a grave threat to whomever he targets. As his various toxins <b>eat away at an enemy's health</b> and <b>slow their movement</b>, Viper simply does what he does best: he keeps adding more poison.",
    bio: "The malevolent familiar of a sadistic wizard who captured and hoped to tame him, Viper was curiously glad to have been sprung from the sealed and unchanging subterranean Nether Reaches where his race had lived for millions of years, after tectonic slippage had sealed off the Netherdrakes in luminous caverns. Viper spent some time appearing to submit to the wizard's enchainments, hoping to learn what he could of the dark magics the mage practiced. But he soon realized that few spells were as deadly as the toxins that were his birthright. Exuding an acid that swiftly ate away the bars of his cage, the Netherdrake slipped free of his confines, spit poison in the old spellcaster's eyes, and soared out to let the world know that it had a new master.",
    role_levels: [1, 0, 0, 1, 0, 2, 0, 0, 1],
    abilites: [
      {
        locilized_name: 'viper_poison_attack',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'viper_nethertoxin',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'viper_corrosive_skin',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'viper_viper_strike',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'viper_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'viper_poison_attack',
      },
      {
        locilized_name: 'viper_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'viper_viper_strike',
      },
    ],
  },
  {
    id: 48,
    name: 'npc_dota_hero_luna',
    npe_desc_loc: 'Tears into her enemies with bouncing attacks',
    description:
      '<b>Riding swiftly</b> into battle, Luna tears into her enemies with attacks able to <b>bounce between targets</b>. When foes threaten, she calls down <b>the power of the moon</b> as a single searing beam or as a <b>lunar barrage</b>, crushing those who stand against her.',
    bio: "How had she been reduced to this?  She was once the Scourge of the Plains, a merciless leader of men and beasts, and able to sow terror wherever she dared.  Now she was far from her homeland, driven half mad from starvation and months of wandering, her army long dead or worse.  As she stood at the edge of an ancient forest, a pair of glowing eyes spied on from an elder branch.  Something beautiful and deadly sought a meal in the wilting dusk.  Without a sound, it turned and left.  Fury overtook her.  Clutching a rust-eaten dagger, she charged after the beast determined to reclaim even a shred of her past glory, but her quarry would not be caught.  Three times she cornered the creature among the rocks and trees, and three times she pounced only to witness its fading shadow darting further into the woods.  Yet the full moon shone brightly, and the creature's trail was easy to follow.    <br><br>Arriving in a clearing atop a high hill, the beast's massive feline form sat in the open, attentive and waiting.  When the woman brandished her dagger, the creature reared and roared and charged.  Death, it seemed, had come for her at long last in this strange place.  She stood, calm and ready.  A flash of movement, and the beast snatched the dagger from her hand before vanishing into the forest.  Stillness.  Hooded figures approached. In reverent tones they revealed that Selemene, Goddess of the Moon, had chosen her, had guided her, had tested her. Unwittingly she had endured the sacred rites of the Dark Moon, warriors of the Nightsilver Woods.    <br><br>She was offered a choice: join the Dark Moon and pledge herself to the service of Selemene, or leave and never return. She did not hesitate. Embracing her absolution, she renounced her bloody past, and took up a new mantle as Luna of the Dark Moon, the dreaded Moon Rider, ruthless and ever-loyal guardian of the Nightsilver Woods.",
    role_levels: [2, 0, 2, 0, 0, 0, 0, 1, 0],
    abilites: [
      {
        locilized_name: 'luna_lucent_beam',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'luna_moon_glaive',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'luna_lunar_blessing',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'luna_eclipse',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'luna_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'luna_lucent_beam',
      },
      {
        locilized_name: 'luna_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'luna_eclipse',
      },
    ],
  },
  {
    id: 49,
    name: 'npc_dota_hero_dragon_knight',
    npe_desc_loc: 'Transforms into a formidable ranged dragon',
    description:
      'When he takes on his terrifying <b>dragon form</b>, Dragon Knight strikes fear into any who face him. <b>Strong and adaptable</b>, he can <b>stun</b> his enemies and <b>burn</b> all in front of him, often providing his allies the momentum they need to carry them to victory.',
    bio: "After years on the trail of a legendary Eldwurm, the Knight Davion found himself facing a disappointing foe: the dreaded Slyrak had grown ancient and frail, its wings tattered, its few remaining scales stricken with scale-rot, its fangs ground to nubs, and its fire-gouts no more threatening than a pack of wet matchsticks.    <br><br>Seeing no honor to be gained in dragon-murder, Knight Davion prepared to turn away and leave his old foe to die in peace. But a voice crept into his thoughts, and Slyrak gave a whispered plea that Davion might honor him with death in combat. Davion agreed, and found himself rewarded beyond expectation for his act of mercy: As he sank his blade in Slyrak's breast, the dragon pierced Davion's throat with a talon. As their blood mingled, Slyrak sent his power out along the Blood Route, sending all its strength and centuries of wisdom to the knight.  The dragon's death sealed their bond and Dragon Knight was born. The ancient power slumbers in the Dragon Knight Davion, waking when he calls it. Or perhaps it is the Dragon that calls the Knight...",
    role_levels: [2, 0, 1, 2, 0, 2, 0, 3, 1],
    abilites: [
      {
        locilized_name: 'dragon_knight_breathe_fire',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'dragon_knight_dragon_tail',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'dragon_knight_dragon_blood',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'dragon_knight_elder_dragon_form',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'dragon_knight_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'dragon_knight_fireball',
      },
      {
        locilized_name: 'dragon_knight_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'dragon_knight_elder_dragon_form',
      },
    ],
  },
  {
    id: 50,
    name: 'npc_dota_hero_dazzle',
    npe_desc_loc: 'Powerful healer who can briefly prevent death',
    description:
      'Born to support his cohorts in battle, Dazzle <b>keeps wounded allies alive</b> so they might later rain death upon the enemy. His <b>strange magic</b> weaves its way into <b>nearby armor</b>, weakening enemies and strengthening friends.',
    bio: "Each young acolyte to the Dezun order must complete a series of rites before becoming a shadow priest. The final rite, the rite of shades, is a harrowing spiritual journey through the Nothl Realm, an unpredictable domain from which not all visitants return.  Of those who do, some return mad. Others return with strange aptitudes. But all who go there are changed by their experiences.    <br><br>Driven by the need for enlightenment, Dazzle was the youngest of his tribe ever to request the sacred ritual. At first the order refused him, saying he was too young. But Dazzle was not to be dissuaded. Sensing something special in the headstrong young acolyte, the elders relented. Dazzle drank down the sacred potion and sat by the fire while the rest of his tribe danced through the night.    <br><br>In this ethereal dimension of the Nothl Realm, the properties of light and dark are inverted. Thus his brilliant healing light, beautiful to our eye, is actually a sinister kind of evil; and the darkest deeds are done in a dazzling glow. The elders' intuition was prophetic: Dazzle returned to his people as a Shadow Priest like none seen before, with the power to heal as well as to destroy. Now he uses his gift to cut down his enemies and mend his friends.",
    role_levels: [0, 3, 1, 1, 0, 0, 0, 0, 0],
    abilites: [
      {
        locilized_name: 'dazzle_poison_touch',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'dazzle_shallow_grave',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'dazzle_shadow_wave',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'dazzle_bad_juju',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'dazzel_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'dazzle_poison_touch',
      },
      {
        locilized_name: 'dazzel_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'dazzle_shadow_wave',
      },
    ],
  },
  {
    id: 51,
    name: 'npc_dota_hero_rattletrap',
    npe_desc_loc: 'Launches himself into enemies with his hookshot',
    description:
      'Launching himself into enemies with his <b>grappling hookshot</b>, Clockwerk isolates targets and blasts them apart with <b>disorienting shrapnel</b>. As he scouts the battlefield with his <b>handy flares</b>, he never has trouble finding targets to send himself toward.',
    bio: "Rattletrap descends from the same far-flung kindred as Sniper and Tinker, and like many of the Keen Folk, has offset his diminutive stature through the application of gadgetry and wit.  The son of the son of a clockmaker, Rattletrap was many years apprenticed to that trade before war rode down from the mountains and swept the plains villages free of such innocent vocations.  'Your new trade is battle,' his dying father told him as the village of their ancestors lay in charred and smoking ruins.     <br><br>It is a poor tradesman who blames his tools, and Rattletrap was never one to make excuses.  After burying his father among the ruins of their village, he set about to transform himself into the greatest tool of warfare that any world had ever seen. He vowed to never again be caught unprepared, instead using his talents to assemble a suit of powered Clockwerk armor to make the knights of other lands look like tin cans by comparison.  Now Rattletrap is alive with devices, a small but deadly warrior whose skills at ambush and destruction have risen to near-automated levels of efficiency.  An artisan of death, his mechanizations make short work of the unwary, heralding a new dawn in this age of warfare.  What time is it? It's Clockwerk time!",
    role_levels: [0, 0, 1, 2, 0, 1, 0, 0, 3],
    abilites: [
      {
        locilized_name: 'rattletrap_battery_assault',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'rattletrap_power_cogs',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'rattletrap_rocket_flare',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'rattletrap_hookshot',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'rattletrap_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'rattletrap_jetpack',
      },
      {
        locilized_name: 'rattletrap_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'rattletrap_overclocking',
      },
    ],
  },
  {
    id: 52,
    name: 'npc_dota_hero_leshrac',
    npe_desc_loc: 'Can deal heavy damage in an aura around himself',
    description:
      "Leshrac's powerful spells lay waste to enemies and their defenses alike. Pushing deep into enemy territory with his <b>devastating edict</b>, careful timing of his ability to split the earth will <b>stun foes</b>, allowing his merciless allies to finish them off.",
    bio: 'Leshrac, Tormented Soul, is an entity torn from the heart of nature, a liminal being that exists half in one plane of existence, half in another. His penetrating intelligence is such that he can never ignore for a moment the agonizing horror at the heart of all creation. Once a great philosopher who sought the meaning of existence, he plumbed the depths of nature with the haunted Chronoptic Crystals, and was forever altered by the hideous mysteries thereby revealed to him. Now the darkest depths of his enlightenment are illumined only by the fitful glare of his arrogance. Like other elemental characters, he is completely at one with nature, but in his case it is a nature lurid and vile. He alone sees the evil truth of reality, and has no use for those who believe the cosmos reserves a special reward for those who practice benevolence.',
    role_levels: [1, 1, 3, 1, 0, 0, 0, 3, 0],
    abilites: [
      {
        locilized_name: 'leshrac_split_earth',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'leshrac_diabolic_edict',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'leshrac_lightning_storm',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'leshrac_pulse_nova',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'leshrac_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'leshrac_split_earth',
      },
      {
        locilized_name: 'leshrac_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'leshrac_greater_lightning_storm',
      },
    ],
  },
  {
    id: 53,
    name: 'npc_dota_hero_furion',
    npe_desc_loc: 'Able to teleport to any location on the map at will',
    description:
      "Whether in the thick of battle or gathering resources for his next assault, Nature's Prophet seems to be everywhere. <b>Teleporting</b> at will to any location and instantly creating an <b>army of violent trees</b> to fight for him, he attacks where enemies least expect.",
    bio: "When Verodicia, Goddess of the Woods, had finished filling in the green places, having planted the coiled-up spirit in the seed, having lured the twining waters from deep within the rock, having sworn the sun its full attention to the growing things, she realized that her own time had reached its end, and like one of the leaves whose fate she had imprinted in the seed, she would fall without seeing the fruiting of her dream. It pained her to leave the world bereft, for the sprouts had not yet broken through the soil--and they would be tender and vulnerable to every sort of harm. She found in her seed pouch one last seed that she had missed in the sowing. She spoke a single word into the seed and swallowed it as she fell. Her vast body decomposed throughout the long winter, becoming the humus that would feed the seedlings in the spring. And on the morning of the vernal equinox, before the rest of the forest had begun to wake, that last seed ripened and burst in an instant. From it stepped Nature's Prophet, in full leaf, strong and wise, possessing Verodicia's power to foresee where he would be needed most in defense of the green places--and any who might be fortunate enough to call him an ally.",
    role_levels: [1, 0, 1, 0, 3, 0, 1, 3, 0],
    abilites: [
      {
        locilized_name: 'furion_sprout',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'furion_teleportation',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'furion_force_of_nature',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'furion_wrath_of_nature',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'furion_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'furion_sprout',
      },
      {
        locilized_name: 'furion_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'furion_wrath_of_nature',
      },
    ],
  },
  {
    id: 54,
    name: 'npc_dota_hero_life_stealer',
    npe_desc_loc: 'Infests other units for mobility and strength',
    description:
      'Should Lifestealer get close to his prey, there is little that can save them. Travelling within a creep or an allied hero, once he nears a foe he explodes from his host body, <b>surprising enemies</b> and tearing into them with his <b>claws.</b>',
    bio: "In the dungeons of Devarque, a vengeful wizard lay in shackles, plotting his escape. He shared his cell with a gibbering creature known as N'aix, a thief cursed by the Vile Council with longevity, so that its life-sentence for theft and cozening might be as punishing as possible. Over the years, its chains had corroded, along with its sanity; N'aix retained no memory of its former life and no longer dreamt of escape.    <br><br>Seeing a perfect vessel for his plans, the wizard wove a spell of Infestation and cast his life-force into N'aix's body, intending to compel N'aix to sacrifice itself in a frenzy of violence while the mage returned to his body and crept away unnoticed. Instead, the wizard found his mind caught in a vortex of madness so powerful that it swept away his plans and shattered his will. Jarred to consciousness by the sudden infusion of fresh life, N'aix woke from its nightmare of madness and obeyed the disembodied voice that filled its skull, which had only the one thought: To escape.    <br><br>In that moment Lifestealer was born. The creature cast its mind into dungeon guards and soldiers, compelling them to open locks and cut down their companions, opening an unobstructed path to freedom while feeding on their lives. Lifestealer still wears the broken shackles as a warning that none may hold him, but on the inside remains a prisoner. Two minds inhabit the single form--a nameless creature of malevolent cunning, and the Master whose voice he pretends to obey.",
    role_levels: [2, 0, 0, 1, 1, 2, 1, 0, 0],
    abilites: [
      {
        locilized_name: 'life_stealer_rage',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'life_stealer_feast',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'life_stealer_ghoul_frenzy',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'life_stealer_infest',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'life_stealer_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'life_stealer_open_wounds',
      },
      {
        locilized_name: 'life_stealer_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'life_stealer_infest',
      },
    ],
  },
  {
    id: 55,
    name: 'npc_dota_hero_dark_seer',
    npe_desc_loc: "Pulls and manipulates his enemies' positions",
    description:
      'Versatile and strategic, Dark Seer excels at <b>manipulating the positions</b> of his enemies. <b>Vacuuming foes</b> into the attacks of his allies, he can turn enemy strength against itself by pulling foes through his <b>replicating wall.</b>',
    bio: "Fast when he needs to be, and a cunning strategist, Ish'Kafel the Dark Seer requires no edged weapons to vanquish his enemies, relying instead on the strength of his powerful mind. His talent lies in his ability to maneuver the fight to his advantage. Hailing from a place he calls 'The Land behind the wall,' Dark Seer remains an outsider here--a warrior from a realm beyond the veil of this reality.     <br><br>Once a great general among his people, and a valiant defender of the god-king Damathryx, Dark Seer's army was wiped out by a much larger force in the final days of the Great Boundaries War. Facing certain defeat, he made one last desperate act: he led the enemy forces into the maze between the walls. At the last moment, just before capture, he crossed over--then sealed the walls forever in an explosive release of dark energy. When the dust settled, he saw that he had saved his people but found himself blinking at the sun of a different world, with no way to return.  Now he is committed to proving his worth as a military strategist, and vows to show that he's the greatest tactician this strange new world has ever seen.",
    role_levels: [0, 0, 0, 1, 1, 0, 1, 0, 1],
    abilites: [
      {
        locilized_name: 'dark_seer_vacuum',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'dark_seer_ion_shell',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'dark_seer_surge',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'dark_seer_wall_of_replica',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'dark_seer_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'dark_seer_normal_punch',
      },
      {
        locilized_name: 'dark_seer_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'dark_seer_ion_shell',
      },
    ],
  },
  {
    id: 56,
    name: 'npc_dota_hero_clinkz',
    npe_desc_loc: 'Stalks invisibly to ambush lone enemies',
    description:
      'When Clinkz stalks <b>invisibly</b> through the battlefield, none are safe from ambush. <b>Swift of foot and arrow</b>, he rains fiery death upon his foes, calling upon an army of blazing compatriots to <b>bolster his assault.</b>',
    bio: "At the base of the Bleeding Hills stretches a thousand-league wood, a place called The Hoven, where black pools gather the tarry blood of the uplands, and the king-mage Sutherex sits in benevolent rule. Once a sworn protector of the Hoven lands, Clinkz earned a reputation for his skill with a bow. In the three-hundredth year of the king-mage, the demon Maraxiform rose from sixth hell to lay claim to the forest. In response, the king-mage decreed an unbreakable spell: to any who slew the demon would be granted Life Without End.    <br><br>Unaware of the spell, Clinkz waded into battle, defending his lands against the demon's fiery onslaught. Clinkz drove Maraxiform back to the gates of sixth-hell itself, where on that fiery threshold the two locked in a mortal conflict. Grievously wounded, the demon let out a blast of hellfire as Clinkz loosed his final arrow. The arrow struck the demon true as hellfire poured out across the land, lighting the black pools and burning Clinkz alive at the instant of the demon's death. Thus, the mage's spell took effect at the very moment of the archer's conflagration, preserving him in this unholy state, leaving him a being of bones and rage, caught in the very act of dying, carrying hell's breath with him on his journey into eternity.",
    role_levels: [2, 0, 0, 0, 0, 0, 3, 1, 0],
    abilites: [
      {
        locilized_name: 'clinkz_strafe',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'clinkz_searing_arrows',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'clinkz_wind_walk',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'clinkz_death_pact',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'clinkz_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'clinkz_wind_walk',
      },
      {
        locilized_name: 'clinkz_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'clinkz_burning_army',
      },
    ],
  },
  {
    id: 57,
    name: 'npc_dota_hero_omniknight',
    npe_desc_loc: 'Tanky frontliner who protects and heals his allies',
    description:
      'A guardian at the <b>front lines</b> of battle, Omniknight is always eager to join his team in battle. Whether <b>healing an ally</b> with a spell that also harms nearby foes, or battering an enemy with his <b>mighty hammer</b>, he protects his allies from harm. ',
    bio: "Purist Thunderwrath was a hard-fighting, road-worn, deeply committed knight, sworn to the order in which he had grown up as squire to elder knights of great reputation. He had spent his entire life in the service of the Omniscience, the All Seeing One. Theirs was a holy struggle, and so embedded was he in his duty that he never questioned it so long as he had the strength to fight and the impetuous valor that comes with youth. But over the long years of the crusade, as his elders passed away and were buried in sorry graves at the side of muddy tracks, as his bond-brothers fell in battle to uncouth creatures that refused to bow to the Omniscience, as his own squires were chewed away by ambush and plague and bad water, he began to question the meaning of his vows--the meaning of the whole crusade.    <br><br>After deep meditation, he parted ways with his army and commenced a long trek back to the cave-riddled cliffs of Emauracus, and there he set a challenge to the priests of the Omniscience. No knight had ever questioned them before, and they tried to throw him into the pit of sacrifice, but Purist would not be moved. For as he faced them down, he began to glow with a holy light, and they saw that the Omniscience had chosen to reveal Itself to him. The Elder Hierophant led him on a journey of weeks down into the deepest chamber, the holy of holies, where waited not some abstract concept of wisdom and insight, not some carved relic requiring an injection of imagination to believe in, but the old one itself. It had not merely dwelt in those rocks for billions of aeons; no, It had created them.    <br><br>The Omniscience had formed the immense mineral shell of the planet around itself, as a defense against the numerous terrors of space. Thus the All Seeing One claimed to have created the world, and given the other truths revealed to Purist on that day, the knight had no reason to refute the story. Perhaps the Omniscience is a liar, deep in its prison of stone, and not the world's creator at all, but Omniknight never again questioned his faith. His campaign had meaning at last. And there can be no question that the glorious powers that imbue him, and give his companions such strength in battle, are real beyond any doubt.",
    role_levels: [0, 2, 1, 0, 0, 1, 0, 0, 0],
    abilites: [
      {
        locilized_name: 'omniknight_purification',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'omniknight_repel',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'omniknight_degen_aura',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'omniknight_guardian_angel',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'omniknight_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'omniknight_hammer_of_purity',
      },
      {
        locilized_name: 'omniknight_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'omniknight_guardian_angel',
      },
    ],
  },
  {
    id: 58,
    name: 'npc_dota_hero_enchantress',
    npe_desc_loc: 'Enchants neutral creeps to do her bidding',
    description:
      'Harmful up close and lethal at a distance, Enchantress <b>skewers foes</b> with attacks imbued to become more damaging the further they fly. Whether inflicting <b>powerful slows</b> on her enemies or <b>charming forest creatures</b> to fight her battles, she is never short of tools to win a fight.',
    bio: 'Aiushtha appears to be an innocent, carefree creature of the woods, and while this is certainly true, it is hardly the sum of her story. She well understands the suffering of the natural world. She has wandered far, and fared through forests bright and drear, in every clime and every season, gathering friends, sharing news, bringing laughter and healing wherever she goes. For in worlds wracked by war, forests are leveled for the building of ships and siege engines; and even in places of peace, the woods are stripped for the building of homes, and as fuel for countless hearths.    <br><br>Aiushtha hears the pleas of the small creatures, the furtive folk who need green shade and a leafy canopy to thrive. She lends her ears to those who have no other listeners. She carries their stories from the wood to the world, believing that her own good cheer is a kind of Enchantment, that can itself fulfill the promise of a verdant future.',
    role_levels: [0, 2, 0, 1, 3, 1, 0, 2, 0],
    abilites: [
      {
        locilized_name: 'enchantress_impetus',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'enchantress_enchant',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'enchantress_natures_attendants',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'enchantress_untouchable',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'enchantress_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'enchantress_natures_attendants',
      },
      {
        locilized_name: 'enchantress_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'enchantress_bunny_hop',
      },
    ],
  },
  {
    id: 59,
    name: 'npc_dota_hero_huskar',
    npe_desc_loc: 'Sacrifices his health to deal more damage',
    description:
      "As his health lowers, Huskar's ability to slay enemies grows considerably. Able to <b>instantly remove a portion of both his and an enemy's health</b> with his ultimate, when near death he is able to throw his burning spears with <b>devastating speed</b>.",
    bio: "Emerging from the throes of the sacred Nothl Realm, Huskar opened his eyes to see the prodigal shadow priest Dazzle working a deep incantation over him. Against the ancient rites of the Dezun Order, Huskar's spirit had been saved from eternity, but like all who encounter the Nothl he found himself irrevocably changed. No longer at the mercy of a mortal body, his very lifeblood became a source of incredible power; every drop spilled was returned tenfold with a fierce, burning energy. However this newfound gift infuriated Huskar, for in his rescue from the Nothl, Dazzle had denied him a place among the gods. He had been denied his own holy sacrifice.    <br><br>In time the elders of the order sought to expand their influence and Huskar, they agreed, would be a formidable tool in their campaign. Yet becoming a mere weapon for the order that denied him his birthright only upset him further. As the first embers of war appeared on the horizon, he fled his ancestral home to find new allies, all the while seeking a cause worthy of unleashing the power his total sacrifice could bring.",
    role_levels: [2, 0, 0, 0, 0, 2, 0, 0, 1],
    abilites: [
      {
        locilized_name: 'huskar_inner_fire',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'huskar_burning_spear',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'huskar_berserkers_blood',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'huskar_life_break',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'husker_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'huskar_inner_fire',
      },
      {
        locilized_name: 'husker_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'huskar_life_break',
      },
    ],
  },
  {
    id: 60,
    name: 'npc_dota_hero_night_stalker',
    npe_desc_loc: 'Enpowered by the shadows of nightfall',
    description:
      "Once the sun goes down, Night Stalker's hunt begins. Charging through the shadowy forests, he snares prey in a <b>slowing void</b> as he tears them to shreds. Should sunrise threaten to end his terror, he can <b>darken the skies</b> to extend his onslaught.",
    bio: "Of the Night Stalker, there is no history, only stories. There are ancient tales woven into the lore of every race and every culture, of an impossible time before sunlight and daytime, when night reigned alone and the world was covered with the creatures of darkness--creatures like Balanar the Night Stalker.     <br><br>It is said that on the dawn of the First Day, all the night creatures perished. All, that is, save one. Evil's embodiment, Night Stalker delights in his malevolence. He created the primal role of the Night Terror, the Boogeyman, and as long as there have been younglings, his is the specter summoned to terrify them. This is a role he relishes; nor are these empty theatrics. He does indeed stalk the unwary, the defenseless, those who have strayed beyond the lighted paths or denied the warnings of their communities. Night Stalker serves as living proof that every child's worst nightmare....is true.",
    role_levels: [1, 0, 1, 2, 0, 2, 0, 0, 2],
    abilites: [
      {
        locilized_name: 'night_stalker_void',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'night_stalker_crippling_fear',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'night_stalker_hunter_in_the_night',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'night_stalker_darkness',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'night_stalker_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'night_stalker_hunter_in_the_night',
      },
      {
        locilized_name: 'night_stalker_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'night_stalker_void',
      },
    ],
  },
  {
    id: 61,
    name: 'npc_dota_hero_broodmother',
    npe_desc_loc: 'Hunts with her army of spiderlings',
    description:
      "Gliding along her webs, Broodmother births an <b>army of spiders</b> to lead her team's forces toward the enemy base. As prey wanders near, she joins her children and attacks, <b>slowing foes</b> with incapacitating bites as she indulges her insatiable hunger.",
    bio: "For centuries, Black Arachnia the Broodmother lurked in the dark lava tubes beneath the smoldering caldera of Mount Pyrotheos, raising millions of spiderlings in safety before sending them to find prey in the wide world above. In a later age, the Vizier of Greed, Ptholopthales, erected his lodestone ziggurat on the slopes of the dead volcano, knowing that any looters who sought his magnetic wealth must survive the spider-haunted passages.    <br><br>After millennia of maternal peace, Black Arachnia found herself beset by a steady trickle of furfeet and cutpurses, bold knights and noble youths--all of them delicious, certainly, and yet tending to create a less than nurturing environment for her innocent offspring. Tiring of the intrusions, she paid a visit to Ptholopthales; and when he proved unwilling to discuss a compromise, she wrapped the Vizier in silk and set him aside to be the centerpiece of a special birthday feast.    <br><br>Unfortunately, the absence of the Magnetic Ziggurat's master merely emboldened a new generation of intruders. When one of her newborns was trodden underfoot by a clumsy adventurer, she reached the end of her silken rope. Broodmother headed for the surface, declaring her intent to rid the world of each and every possible invader, down to the last Hero if necessary, until she could ensure her nursery might once more be a safe and wholesome environment for her precious spiderspawn.",
    role_levels: [1, 0, 1, 0, 0, 0, 3, 3, 0],
    abilites: [
      {
        locilized_name: 'broodmother_insatiable_hunger',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'broodmother_spin_web',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'broodmother_silken_bola',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'broodmother_spawn_spiderlings',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'broodmother_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'broodmother_silken_bola',
      },
      {
        locilized_name: 'broodmother_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'broodmother_sticky_snare',
      },
    ],
  },
  {
    id: 62,
    name: 'npc_dota_hero_bounty_hunter',
    npe_desc_loc: 'Loots and collects bounties off of his enemies',
    description:
      'Sneaking <b>invisibly</b> at the heels of his enemies, Bounty Hunter is always keeping track of his foes. Whenever one of his targets falls in battle, he and his allies stand to <b>make quite a profit</b>.',
    bio: "When the hunted tell tales of Gondar the Bounty Hunter, none are sure of which are true. In whispered tones they say he was abandoned as a kit, learning his skill in tracking as a matter of simple survival. Others hear he was an orphan of war, taken in by the great Soruq the Hunter to learn the master's skill with a blade as they plumbed the dark forests for big game. Still others believe he was a lowly street urchin raised among a guild of cutpurses and thieves, trained in the arts of stealth and misdirection. Around campfires in the wild countryside his quarry speaks the rumors of Gondar's work, growing ever more fearful: they say it was he who tracked down the tyrant King Goff years after the mad regent went into hiding, delivering his head and scepter as proof. That it was he who infiltrated the rebel camps at Highseat, finally bringing the legendary thief White Cape to be judged for his crimes. And that it was he who ended the career of Soruq the Hunter, condemned as a criminal for killing the Prince's prized hellkite. The tales of Gondar's incredible skill stretch on, with each daring feat more unbelievable than the last, each target more elusive. For the right price, the hunted know, anyone can be found. For the right price, even the mightiest may find fear in the shadows.",
    role_levels: [0, 0, 1, 0, 0, 0, 2, 0, 0],
    abilites: [
      {
        locilized_name: 'bounty_hunter_shuriken_toss',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'bounty_hunter_jinada',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'bounty_hunter_wind_walk',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'bounty_hunter_track',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'bounty_hunter_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'bounty_hunter_wind_walk',
      },
      {
        locilized_name: 'bounty_hunter_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'bounty_hunter_shuriken_toss',
      },
    ],
  },
  {
    id: 63,
    name: 'npc_dota_hero_weaver',
    npe_desc_loc: 'Rewinds time to reverse damage and position',
    description:
      'Weaver has no trouble <b>evading enemies</b> to position himself for another strike. Slipping in and out of sight, he avoids death by <b>rewinding himself to an earlier position and health state</b>. His arsenal of elusive skills ensures he is always a critical nuisance to his foes.',
    bio: "The fabric of creation needs constant care, lest it grow tattered; for when it unravels, whole worlds come undone. It is the work of the Weavers to keep the fabric tight, to repair worn spots in the mesh of reality. They also defend from the things that gnaw and lay their eggs in frayed regions, whose young can quickly devour an entire universe if the Weavers let their attention lapse. Skitskurr was a master Weaver, charged with keeping one small patch of creation tightly woven and unfaded. But the job was not enough to satisfy. It nagged him that the original work of creation all lay in the past; the Loom had done its work and travelled on. He wanted to create rather than merely maintain--to weave worlds of his own devising.  He began making small changes to his domain, but the thrill of creation proved addictive, and his strokes became bolder, pulling against the pattern that the Loom had woven.   <br><br>The guardians came, with their scissors, and Weaver's world was pared off, snipped from the cosmic tapestry, which they rewove without him in it. Skitskurr found himself alone, apart from his kind, a state that would have been torment for any other Weaver. But Skitskurr rejoiced, for now he was free. Free to create for himself, to begin anew. The raw materials he needed to weave a new reality were all around him. All he had to do was tear apart this old world at the seams.",
    role_levels: [2, 0, 0, 0, 0, 0, 3, 0, 0],
    abilites: [
      {
        locilized_name: 'weaver_the_swarm',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'weaver_shukuchi',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'weaver_geminate_attack',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'weaver_time_lapse',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'weaver_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'weaver_the_swarm',
      },
      {
        locilized_name: 'weaver_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'weaver_time_lapse',
      },
    ],
  },
  {
    id: 64,
    name: 'npc_dota_hero_jakiro',
    npe_desc_loc: 'Freezes and burns enemies with magic',
    description:
      'Jakiro is their own best friend. Not content to merely punish enemies with <b>fire</b>, the twins <b>freeze them in place</b> to force them to stand there and burn. With foes aflame, they turn to <b>inflicting massive damage</b> on enemy structures with their liquid fire.',
    bio: 'Even among magical beasts, a twin-headed dragon is a freak. Equal parts ice and fire, cunning and rage, the creature known as Jakiro glides over charred and ice-bound battlefields, laying waste to any who would bear arms against it. Pyrexae dragon clutches always contain two fledglings. Famous for their viciousness even from the first moments of life, newly hatched dragons of this species will try to kill their sibling while still in the nest. Only the strongest survive. In this way is the strength of the Pyrexae line ensured. By some accident of nature, the freak Jakiro hatched from a single egg, combining in a single individual the full range of abilities found within the diverse Pyrexae species. Trapped within the armature of its monstrous body, the powers of ice and fire combine, and now no enemy is safe.',
    role_levels: [0, 1, 2, 1, 0, 0, 0, 2, 0],
    abilites: [
      {
        locilized_name: 'jakiro_dual_breath',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'jakiro_ice_path',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'jakiro_liquid_fire',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'jakiro_macropyre',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'jakiro_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'jakiro_liquid_fire',
      },
      {
        locilized_name: 'jakiro_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'jakiro_macropyre',
      },
    ],
  },
  {
    id: 65,
    name: 'npc_dota_hero_batrider',
    npe_desc_loc: 'Can lasso an enemy away from his team',
    description:
      'Once he takes to the skies, Batrider can strike from any direction. Snatching a foe with his <b>lasso</b>, he soars above the treetops, pulling his prey through a <b>trail of flame</b> as he drags them before his merciless allies.',
    bio: "There is no such thing as harmony among the creatures of the Yama Raskav Jungle. By bite, or claw, or pincer, or hoof, even the slightest sign of weakness means a swift death. They say the Rider was just a lad cutting chaff in his family's field when he was taken, swept up by a massive morde-bat looking for take-out. But this boy had a better idea, and wriggled his way from his captor's grip, onto the beast's back, and hacked it down with his tools. Emerging from the bloody wreckage and intoxicated by the thrill of flight, the boy realized he'd found his calling.    <br><br>The boy grew, and every summer he'd return to his family's field, often setting out into the bush seeking to reclaim that first thrill of facing death in the form of jaws or a fatal fall. The years went on, but his fire only grew stronger. He studied the overgrowth, plunging deeper with each expedition, until finally he found his way to the caves at the heart of hostility. They say the Rider, on the eve of a scorching summer night, had nothing but a rope, a bottle of liquid courage and a burning determination to feel the skies once more, when he plunged inside...",
    role_levels: [0, 0, 0, 2, 2, 0, 1, 0, 3],
    abilites: [
      {
        locilized_name: 'batrider_sticky_napalm',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'batrider_flamebreak',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'batrider_firefly',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'batrider_flaming_lasso',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'batrider_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'batrider_flamebreak',
      },
      {
        locilized_name: 'batrider_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'batrider_flaming_lasso',
      },
    ],
  },
  {
    id: 66,
    name: 'npc_dota_hero_chen',
    npe_desc_loc: 'Converts creeps to his cause, building an army',
    description:
      'Converting the creatures of the forest to his cause, Chen leads his <b>makeshift armies</b> to aid his team in battle. He assaults enemies with beasts while sending friends to safety. Then, when things seem darkest, he <b>heals his allies</b> wherever they may be.',
    bio: "Born in the godless Hazhadal Barrens, Chen came of age among the outlaw tribes who eked out an existence in the shimmering heat of the desert.  Using an ancient form of animal enthrallment, Chen's people husbanded the hardy desert locuthi, a stunted species of burrowing dragon that melted desert sands into tubes of glass where twice-a-year rains collected.  Always on the edge of starvation and thirst, fighting amongst their neighbors and each other, Chen's clan made the mistake, one fateful day, of ambushing the wrong caravan.    <br><br>In the vicious battle that followed, Chen's clan was outmatched.  The armored Knights of the Fold made short work of the enthralled locuthi, who attacked and died in waves.  With their dragons dead, the tribesmen followed. Chen struggled, and slashed, and clawed, and perished--or would have. Defeated, on his knees, he faced his execution with humility, offering his neck to the blade. Moved by Chen's obvious courage, the executioner halted his sword. Instead of the blade, Chen was given a choice: death or conversion. Chen took to the faith with a ferocity. He joined the Fold and earned his armor one bloody conversion at a time. Now, with the fanaticism of a convert, and with his powers of animal enthrallment at their peak, he seeks out unbelievers and introduces them to their final reward.",
    role_levels: [0, 2, 0, 0, 3, 0, 0, 2, 0],
    abilites: [
      {
        locilized_name: 'chen_penitence',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'chen_holy_persuasion',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'chen_divine_favor',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'chen_hand_of_god',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'chen_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'chen_holy_persuasion',
      },
      {
        locilized_name: 'chen_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'chen_hand_of_god',
      },
    ],
  },
  {
    id: 67,
    name: 'npc_dota_hero_spectre',
    npe_desc_loc: 'Haunts her enemies and teleports to her target',
    description:
      'Spectre haunts her enemies wherever they may be. Able to <b>destroy lone prey</b> with ease, she spreads her presence throughout the battlefield to choose her target. Once she has gathered her strength, none can escape her terrible wrath.',
    bio: 'Just as higher states of energy seek a lower level, the Spectre known as Mercurial is a being of intense and violent energy who finds herself irresistibly drawn to scenes of strife as they unfold in the physical world. While her normal spectral state transcends sensory limitations, each time she takes on a physical manifestation, she is stricken by a loss of self--though not of purpose. In the clash of combat, her identity shatters and reconfigures, and she begins to regain awareness. She grasps that she is Mercurial the Spectre--and that all of her Haunts are but shadows of the one true Spectre. Focus comes in the struggle for survival; her true mind reasserts itself; until in the final moments of victory or defeat, she transcends matter and is restored once more to her eternal form.',
    role_levels: [3, 0, 0, 0, 0, 1, 1, 0, 0],
    abilites: [
      {
        locilized_name: 'spectre_spectral_dagger',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'spectre_desolate',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'spectre_dispersion',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'spectre_haunt',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'spectre_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'spectre_dispersion',
      },
      {
        locilized_name: 'spectre_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'spectre_haunt_single',
      },
    ],
  },
  {
    id: 68,
    name: 'npc_dota_hero_ancient_apparition',
    npe_desc_loc: 'Launches a powerful icy blast from anywhere on the map',
    description:
      "Able to launch a powerful blast of <b>damaging ice</b> across the battlefield, Ancient Apparition threatens to shatter weakened enemies wherever they are. Slowing enemies as he enhances his allies' effectiveness in battle, he is a constant threat to his foes.",
    bio: "Kaldr, the Ancient Apparition, is an image projected from outside time. He springs from the cold, infinite void that both predates the universe and awaits its end. Kaldr is, Kaldr was, Kaldr shall be...and what we perceive, powerful as it appears to us, is but the faintest faded echo of the true, eternal Kaldr. Some believe that as the cosmos ages and approaches its final moments, the brightness and power of Kaldr will also intensify--that the Ancient Apparition will grow younger and stronger as eternity's end draws nigh. His grip of ice will bring all matter to a stop, his image will cast a light too terrible to behold. An Apparition no longer!",
    abilites: [
      {
        locilized_name: 'ancient_apparition_cold_feet',
        isAgs: false,
        isAgsShard: false,
        cooldown: '12.0 / 11.0 / 10.0 / 9.0',
        mana_cost: '125',
        name: 'COLD FEET',
        description:
          "Places a frozen hex on an enemy unit that deals damage over time, but can be dispelled by moving away from the initial cast point.  If the enemy unit doesn't move outside of the given range, it will be stunned and frozen in place after 4 seconds.",
        trivia_description:
          "Kaldr's presence draws those around him into a frozen void, threatening to lock them in an icy prison for eternity.",
        ability_info: [
          {
            name: 'ABILITY',
            value: 'Unit Target',
          },
          {
            name: 'PIERCES SPELL IMMUNITY',
            value: 'No',
          },
          {
            name: 'AFFECTS',
            value: 'Enemy Units',
          },
          {
            name: 'DISPELLABLE',
            value: 'Yes',
          },
          {
            name: 'DAMAGE TYPE',
            value: 'Magical',
          },
        ],
        ability_stats: [
          {
            value: '30.0 / 50.0 / 70.0 / 90.0',
            name: 'DAMAGE PER TICK',
          },
          {
            value: '715',
            name: 'BREAK DISTANCE',
          },
          {
            value: '2.0 / 2.5 / 3.0 / 3.5',
            name: 'STUN DURATION',
          },
          {
            value: '700 / 800 / 900 / 1000',
            name: 'CAST RANGE',
          },
        ],
      },
      {
        locilized_name: 'ancient_apparition_ice_vortex',
        isAgs: false,
        isAgsShard: false,
        cooldown: '7.0 / 6.0 / 5.0 / 4.0',
        mana_cost: '40 / 50 / 60 / 70',
        name: 'ICE VORTEX',
        description:
          'Creates a vortex of icy energy that slows and increases magic damage done to enemies in its range.',
        trivia_description:
          'Frozen, caustic winds are at the whim of Kaldr, chilling the field of battle.',
        ability_info: [
          {
            name: 'ABILITY',
            value: 'Point Target',
          },
          {
            name: 'PIERCES SPELL IMMUNITY',
            value: 'No',
          },
          {
            name: 'DISPELLABLE',
            value: 'No',
          },
        ],
        ability_stats: [
          {
            name: 'RADIUS',
            value: '275',
          },
          {
            name: 'SLOW',
            value: '15% / -20% / -25% / -30%',
          },
          {
            name: 'INCREASED MAGIC DAMAGE',
            value: '-12% / -16% / -20% / -24%',
          },
          {
            name: 'DURATION',
            value: '16',
          },
        ],
      },
      {
        locilized_name: 'ancient_apparition_chilling_touch',
        isAgs: false,
        isAgsShard: false,
        cooldown: '15.0 / 11.0 / 7.0 / 3.0',
        mana_cost: '30 / 45 / 60 / 75',
        name: 'CHILLING TOUCH',
        description:
          "Enhances Ancient Apparition's attack with increased range, heavy magic damage, and movement slow..",
        trivia_description:
          "The Ancient Apparition's eternal knowledge brings a frigid enchantment to his attacks.",
        ability_info: [
          {
            name: 'ABILITY',
            value: 'Enemy Unit',
          },
          {
            name: 'PIERCES SPELL IMMUNITY',
            value: 'No',
          },
          {
            name: 'AFFECTS',
            value: 'Enemy Unit',
          },
          {
            name: 'DISPELLABLE',
            value: 'Yes',
          },
        ],
        ability_stats: [
          {
            name: 'DAMAGE',
            value: '50 / 90 / 130 / 170',
          },
          {
            name: 'MOVEMENT SLOW',
            value: '100%',
          },
          {
            name: 'SLOW DURATION',
            value: '0.5',
          },
          {
            name: 'ATTACK RANGE BONUS',
            value: '60 / 120 / 180 / 240',
          },
        ],
      },
      {
        locilized_name: 'ancient_apparition_ice_blast',
        isAgs: false,
        isAgsShard: false,
        cooldown: '60.0 / 50.0 / 40.0',
        mana_cost: '175',
        name: 'ICE BLAST',
        description:
          "Launches a tracer toward any location on the battlefield, which must be triggered again to mark the area to be blasted by a damaging explosion of hail. The further the tracer travels, the larger the explosion will be. Enemies caught in the explosion, or who touch the icy ball of hail as it travels, are Frostbitten, taking damage and prevented from regenerating or healing. If a Frostbitten unit's health drops below a certain percentage, they will instantly shatter.",
        trivia_description:
          "Ice storms from ages past flow through Kaldr's frosty limbs, crashing into the world and turning its inhabitants into monuments to his eternal power.",
        ability_info: [
          {
            name: 'ABILITY',
            value: 'Point Target',
          },
          {
            name: 'DISPELLABLE',
            value: 'Yes',
          },
          {
            name: 'DAMAGE TYPE',
            value: 'Magical',
          },
          {
            name: 'DISPELLABLE',
            value: 'No',
          },
        ],
        ability_stats: [
          {
            name: 'DAMAGE',
            value: '250 / 325 / 400',
          },
          {
            name: 'FROSTBITTEN DURATION',
            value: '10.0 / 11.0 / 12.0',
          },
          {
            name: 'FROSTBITTEN DAMAGE PER SECOND',
            value: '12.5 / 20.0 / 32.0',
          },
          {
            name: 'SHATTER HEALTH THRESHOLD',
            value: '12.0% / 13.0% / 14.0%',
          },
        ],
      },
      {
        locilized_name: 'ancient_apparition_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'ancient_apparition_ice_vortex',
        cooldown: null,
        mana_cost: null,
        name: 'ICE VORTEX',
        description: 'Causes Ice Vortex to deal 40 DPS and reduces attack speed by 20.',
        trivia_description: null,
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'ancient_apparition_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'ancient_apparition_chilling_touch',
        cooldown: '15.0 / 11.0 / 7.0 / 3.0',
        mana_cost: '30 / 45 / 60 / 75',
        name: 'CHILLING TOUCH',
        description: 'Removes cooldown and reduces manacost by half.',
        trivia_description:
          "The Ancient Apparition's eternal knowledge brings a frigid enchantment to his attacks.",
        ability_info: null,
        ability_stats: null,
      },
    ],
  },
  {
    id: 69,
    name: 'npc_dota_hero_doom_bringer',
    npe_desc_loc: 'Can prevent a single enemy from using abilties and items',
    description:
      "One way or another, Doom <b>shuts down his enemies</b>. Devouring creeps to claim the various skills they had in life, he can place a <b>lingering silence</b> upon a foe's spells and items with his ultimate as he <b>torches his foes</b>.",
    bio: 'He that burns and is not consumed, devours and is never sated, kills and is beyond all judgment--Lucifer brings doom to all who would stand against him. Bearing away souls on the tip of a fiery sword, he is the Fallen One, a once-favored general from the realm behind the light, cast out for the sin of defiance: he would not kneel.    <br><br>Six times his name was tolled from the great bell of Vashundol. Six and sixty times his wings were branded, until only smoking stumps remained. Without wings, he slipped loose from the tethers that bound him within the light and he fell screaming to earth. A crater in the desert, Paradise lost.  Now he attacks without mercy, without motive, the only living being able to move freely between the seven dark dominions. Lashed by inescapable needs, twisted by unimaginable talents, Doom carries his own hell with him wherever he goes. Defiant to the last. Eventually, the world will belong to Doom.',
    role_levels: [1, 0, 1, 2, 0, 2, 0, 0, 2],
    abilites: [
      {
        locilized_name: 'doom_bringer_devour',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'doom_bringer_scorched_earth',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'doom_bringer_infernal_blade',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'doom_bringer_doom',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'doom_bringer_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'doom_bringer_infernal_blade',
      },
      {
        locilized_name: 'doom_bringer_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'doom_bringer_doom',
      },
    ],
  },
  {
    id: 70,
    name: 'npc_dota_hero_ursa',
    npe_desc_loc: 'Deals more damage with every hit to the same foe',
    description:
      "<b>With each swipe of his claws</b>, Ursa increases his target's vulnerability to his next attack. Capable of briefly increasing how <b>swiftly</b> he can strike, and able to <b>slow down</b> nearby prey, he quickly tears apart his enemies.",
    bio: 'Ulfsaar the Warrior is the fiercest member of an ursine tribe, protective of his land and his people. During the long winters, while the mothers sleep and nurse their cubs, the males patrol the lands above as tireless, vigilant defenders of their ancient ways. Hearing dim but growing rumors of a spreading evil, Ulfsaar headed out beyond the boundaries of his wild wooded homeland, intending to track down and destroy the threat at its source, before it could endanger his people. He is a proud creature with a bright strong spirit, utterly trustworthy, a staunch ally and defender.',
    role_levels: [2, 0, 0, 1, 1, 1, 0, 0, 0],
    abilites: [
      {
        locilized_name: 'ursa_earthshock',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'ursa_overpower',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'ursa_fury_swipes',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'ursa_enrage',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'ursa_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'ursa_earthshock',
      },
      {
        locilized_name: 'ursa_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'ursa_enrage',
      },
    ],
  },
  {
    id: 71,
    name: 'npc_dota_hero_spirit_breaker',
    npe_desc_loc: 'Charges down enemies from anywhere on the map',
    description:
      '<b>Highly mobile</b> and <b>always aggressive</b>, Spirit Breaker charges across the map to bring the fight to his enemies. With each bash of his heavy lantern, he knocks his foes senseless. His enemies may run, but with the help of a few wards, they cannot hide.',
    bio: 'Barathrum the Spirit Breaker is a lordly and powerful being, a fierce and elemental intelligence which chose to plane-shift into the world of matter to take part in events with repercussions in the elemental realm that is his home. To that end, he assembled a form that would serve him well, both in our world and out of it. His physical form borrows from the strengths of this world, blending features both bovine and simian--horns, hooves and hands--as outward emblems of his inner qualities of strength, speed and cunning. He wears a ring in his nose, as a reminder that he serves a hidden master, and that this world in which he works is but a shadow of the real one.',
    role_levels: [1, 0, 0, 2, 0, 2, 1, 0, 2],
    abilites: [
      {
        locilized_name: 'spirit_breaker_charge_of_darkness',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'spirit_breaker_bulldoze',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'spirit_breaker_greater_bash',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'spirit_breaker_nether_strike',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'spirit_breaker_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'spirit_breaker_nether_strike',
      },
      {
        locilized_name: 'spirit_breaker_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'spirit_breaker_charge_of_darkness',
      },
    ],
  },
  {
    id: 72,
    name: 'npc_dota_hero_gyrocopter',
    npe_desc_loc: 'Barrages with his cannon and homing missiles',
    description:
      'With his arsenal of firepower at the ready, Gyrocopter soars into battle. Blasting all nearby enemies with shots from his <b>cannon</b> or hammering them with a <b>barrage of rockets</b>, if he is able to gather his full strength, he <b>demolishes foes with ease.</b>',
    bio: "After serving through a lifetime of wars, upheaval, riots, and revolutions, the brass figured Aurel had seen enough. But in addition to a few trinkets and his considerable pension, the erstwhile engineer left with something far more interesting: a long-forgotten, incomplete schematic for a Gyrocopter, the world's first manned, non-magical flying device. Retiring to the tropical obscurity of the Ash Archipelago with little else but time and money, he set to work building the device.    <br><br>As the years wore on and the remains of failed prototypes began to pile up, he began to wonder if mechanical flight was even possible. A decade and a day after his retirement, on a sunny afternoon with a southerly breeze, Aurel sat in his latest attempt bristling with indignation and expectant failure. With a grunt of effort he pulled the ignition cord and covered his head, waiting for the inevitable explosion. However to his great surprise he began to lift and, following a few panicked adjustments, stabilize. Within an hour, he was ducking and weaving with the breeze, level with the gulls, and Aurel found himself filled with the breathless wonder of flight.    <br><br>As dusk settled in he set a course back to his workshop, but no sooner had he turned his craft when a cannonball tore through his tailfin. Disentangling himself from the wreckage, he swam toward the nearest piece of land in sight, and cursed to see the ship responsible for the cannonball collecting the debris. Days later, when Aurel returned to his workshop, he set to work on yet another gyrocopter, this one capable of carrying a much heavier, more dangerous payload.",
    role_levels: [3, 0, 1, 1, 0, 0, 0, 0, 0],
    abilites: [
      {
        locilized_name: 'gyrocopter_rocket_barrage',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'gyrocopter_homing_missile',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'gyrocopter_flak_cannon',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'gyrocopter_call_down',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'gyrocopter_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'gyrocopter_homing_missile',
      },
      {
        locilized_name: 'gyrocopter_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'gyrocopter_flak_cannon',
      },
    ],
  },
  {
    id: 73,
    name: 'npc_dota_hero_alchemist',
    npe_desc_loc: 'Earns extra gold from unit kills and bounty runes',
    description:
      'Synthesizing <b>extra resources</b> from each and every kill, Alchemist has no trouble gathering the tools needed to destroy his foes. Ambushing enemies with <b>corrosive acid</b> and a host of <b>unstable chemicals</b>, he battles to ensure his greedy escapades can remain uninterrupted.',
    bio: "The sacred science of Chymistry was a Darkbrew family tradition, but no Darkbrew had ever shown the kind of creativity, ambition, and recklessness of young Razzil. However, when adulthood came calling he pushed aside the family trade to try his hand at manufacturing gold through Alchemy.\r\n\t\t\t\t<br><br>In an act of audacity befitting his reputation, Razzil announced he would transmute an entire mountain into gold. Following two decades of research and spending and preparation, he failed spectacularly, quickly finding himself imprisoned for the widespread destruction his experiment wrought. Yet Razzil was never one to take a setback lightly, and sought escape to continue his research.\r\n\t\t\t\t<br><br>When his new cellmate turned out to be a fierce ogre, he found just the opportunity he needed. After convincing the ogre not to eat him, Razzil set about carefully concocting a tincture for it to drink, made from the moulds and mosses growing in the prison stone work. In a week's time, it seemed ready. When the ogre drank the potion, it flew into an unstoppable berserker rage, destroying the cell bars and exploding through walls and guards alike.\r\n\t\t\t\t<br><br>They soon found themselves lost somewhere in the forest surrounding the city with a trail of wreckage in their wake and no signs of pursuit.  In the tonic's afterglow, the ogre seemed serene, happy, and even eager. Resolving to work together, the pair set off to collect the materials needed to attempt Razzil's Alchemic transmutation once more.",
    abilites: [
      {
        locilized_name: 'alchemist_acid_spray',
        isAgs: false,
        isAgsShard: false,
        cooldown: '22.0',
        mana_cost: '130 / 140 / 150 / 160',
        name: 'ACID SPRAY',
        description:
          'Sprays high-pressure acid across a target area. Enemy units who step across the contaminated terrain take damage per second and have their armor reduced.',
        trivia_description:
          'Using traditional Alchemy from the Darkbrew family, Razzil concocts an acid that dissolves even the toughest metals.',
        ability_info: [
          {
            name: 'ABILITY',
            value: 'Point Target',
          },
          {
            name: 'PIERCES SPELL IMMUNITY',
            value: 'No',
          },
          {
            name: 'DAMAGE TYPE',
            value: 'Physical',
          },
        ],
        ability_stats: [
          {
            name: 'RADIUS',
            value: '475 / 525 / 575 / 625',
          },
          {
            name: 'DURATION',
            value: '16.0',
          },
          {
            name: 'DAMAGE PER SECOND',
            value: '0 / 25 / 30 / 35',
          },
          {
            name: 'ARMOR REDUCTION',
            value: '4 / 5 / 6 / 7',
          },
        ],
      },
      {
        locilized_name: 'alchemist_unstable_concoction',
        isAgs: false,
        isAgsShard: false,
        cooldown: '5.5',
        mana_cost: '50',
        name: 'UNSTABLE CONCOCTION',
        description:
          'Alchemist brews up an unstable concoction that he can throw at an enemy hero, to stun and deal damage in an area around the explosion. The longer the concoction brews, the more damage it deals and the longer the stun. After 5.0 seconds, the brew reaches its maximum damage and stun time. However, after 5.5 seconds, the concoction will explode on Alchemist himself if not thrown.',
        trivia_description:
          'A silver lining to the failure of turning a mountain into gold, this volatile solution has destructive potential.',
        ability_info: [
          {
            name: 'ABILITY',
            value: 'No Target',
          },
          {
            name: 'PIERCES SPELL IMMUNITY',
            value: 'No',
          },
          {
            name: 'DAMAGE TYPE',
            value: 'Magical',
          },
          {
            name: 'DISPELLABLE',
            value: 'Only Strong Dispels',
          },
        ],
        ability_stats: [
          {
            name: 'MAX STUN',
            value: '1.8 / 2.5 / 3.3 / 4.0',
          },
          {
            name: 'MAX DAMAGE',
            value: '150 / 220 / 290 / 360',
          },
          {
            name: 'EXPLOSION RADIUS',
            value: '250',
          },
        ],
      },
      {
        locilized_name: 'alchemist_goblins_greed',
        isAgs: false,
        isAgsShard: false,
        cooldown: null,
        mana_cost: null,
        name: "GREEVIL'S GREED",
        description:
          'Alchemist synthesizes additional gold from his enemies and bounty runes. With each kill, Alchemist earns base bonus gold and extra bonus gold. If Alchemist kills another unit which yields gold within the next 36 seconds, an additional instance of Extra Bonus Gold is added to the total. Additionally, causes bounty runes to yield more gold.',
        trivia_description:
          'While it is not a mountain, Razzil has mastered the conversion of smaller compounds to line his pockets.',
        ability_info: [
          {
            name: 'ABILITY',
            value: 'Passive',
          },
          {
            name: 'AFFECTS',
            value: 'Allied Heroes',
          },
        ],
        ability_stats: [
          {
            name: 'RECENT KILL WINDOW',
            value: '36',
          },
          {
            name: 'BASE BONUS GOLD',
            value: '3',
          },
          {
            name: 'EXTRA BONUS GOLD',
            value: '3',
          },
          {
            name: 'MAX BONUS GOLD PER KILL',
            value: '15 / 18 / 21 / 24',
          },
          {
            name: 'BOUNTY RUNE MULTIPLIER:',
            value: '1.5 / 2.0 / 2.5 / 3.0',
          },
        ],
      },
      {
        locilized_name: 'alchemist_chemical_rage',
        isAgs: false,
        isAgsShard: false,
        cooldown: '55.0',
        mana_cost: '50 / 75 / 100',
        name: 'CHEMICAL RAGE',
        description:
          'Alchemist causes his Ogre to enter a chemically induced rage, reducing base attack cooldown and increasing movement speed and health regeneration.<br />DISPEL TYPE: Basic Dispel',
        trivia_description:
          'The brew Razzil gave to the Ogre during their prison bust has become a useful potion in the midst of combat.',
        ability_info: [
          {
            name: 'ABILITY',
            value: 'No Target',
          },
          {
            name: 'DISPELLABLE',
            value: 'No',
          },
        ],
        ability_stats: [
          {
            name: 'DURATION',
            value: '25.0',
          },
          {
            name: 'BASE ATTACK TIME',
            value: '1.2 / 1.1 / 1.0',
          },
          {
            name: 'BONUS HEALTH REGEN',
            value: '50 / 75 / 100',
          },
          {
            name: 'BONUS MOVE SPEED',
            value: '40 / 50 / 60',
          },
          {
            name: 'SCEPTER BONUS DAMAG',
            value: '20',
          },
          {
            name: 'SCEPTER SPELL AMP',
            value: '5%',
          },
        ],
      },
      {
        locilized_name: 'alchemist_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'alchemist_berserk_potion',
        cooldown: '35.0',
        mana_cost: '125',
        name: 'CURSE OF AVERNUS',
        description:
          'Alchemist throws a potion at an ally, applying a basic dispel and giving them 50 Attack Speed, 30 Movement Speed and 40 HP regen.<br />Lasts 10.0 seconds.',
        trivia_description: null,
        ability_info: [
          {
            name: 'ABILITY',
            value: 'Unit Target',
          },
          {
            name: 'PIERCES SPELL IMMUNITY',
            value: 'Yes',
          },
          {
            name: 'DAMAGE TYPE',
            value: 'Magical',
          },
          {
            name: 'DISPELLABLE',
            value: 'Yes',
          },
        ],
        ability_stats: [
          {
            name: 'DURATION',
            value: '10.0',
          },
          {
            name: 'ATTACK SPEED',
            value: '50',
          },
          {
            name: 'HEALTH REGEN',
            value: '40',
          },
        ],
      },
      {
        locilized_name: 'alchemist_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'alchemist_chemical_rage',
        cooldown: '55.0',
        mana_cost: '50 / 75 / 100',
        name: 'BORROWED TIME',
        description:
          "Alchemist melts down Aghanim's Scepter to grant an allied hero all Aghanim's Scepter upgrades. When you have a Scepter of your own, you will gain bonus damage and spell amplification for each gifted Scepter.",
        trivia_description:
          'The brew Razzil gave to the Ogre during their prison bust has become a useful potion in the midst of combat.',
        ability_info: null,
        ability_stats: null,
      },
    ],
  },
  {
    id: 74,
    name: 'npc_dota_hero_invoker',
    npe_desc_loc: 'Weaves magic with an array of spell combos',
    description:
      "With an intricate arsenal of <b>spells</b> at his disposal, Invoker can adapt to any battle situation. Each configuration of his <b>three spell components</b> yields of one of ten spells, meaning he's never without a way to destroy or escape his enemies.",
    bio: "In its earliest, and some would say most potent form, magic was primarily the art of memory. It required no technology, no wands or appurtenances other than the mind of the magician. All the trappings of ritual were merely mnemonic devices, meant to allow the practitioner to recall in rich detail the specific mental formulae that unlocked a spell's power.    <br><br>The greatest mages in those days were the ones blessed with the greatest memories, and yet so complex were the invocations that all wizards were forced to specialize. The most devoted might hope in a lifetime to have adequate recollection of three spells--four at most. Ordinary wizards were content to know two, and it was not uncommon for a village mage to know only one--with even that requiring him to consult grimoires as an aid against forgetfulness on the rare occasions when he might be called to use it.    <br><br>But among these early practitioners there was one exception, a genius of vast intellect and prodigious memory who came to be known as the Invoker. In his youth, the precocious wizard mastered not four, not five, not even seven incantations: He could command no fewer than ten spells, and cast them instantly. Many more he learned but found useless, and would practice once then purge from his mind forever, to make room for more practical invocations. One such spell was the Sempiternal Cantrap--a longevity spell of such power that those who cast it in the world's first days are among us still (unless they have been crushed to atoms).    <br><br>Most of these quasi-immortals live quietly, afraid to admit their secret: But Invoker is not one to keep his gifts hidden. He is ancient, learned beyond all others, and his mind somehow still has space to contain an immense sense of his own worth...as well as the Invocations with which he amuses himself through the long slow twilight of the world's dying days.",
    role_levels: [1, 0, 3, 2, 0, 0, 1, 1, 0],
    abilites: [
      {
        locilized_name: 'invoker_quas',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'invoker_wex',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'invoker_exort',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'invoker_invoke',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'invoker_ghost_walk ',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'invoker_tornado',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'invoker_emp',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'invoker_alacrity',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'invoker_chaos_meteor',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'invoker_sun_strike',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'invoker_forge_spirit',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'invoker_ice_wall',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'invoker_deafening_blast',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'invoker_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'invoker_chaos_meteor',
      },
      {
        locilized_name: 'invoker_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'invoker_sun_strike',
      },
    ],
  },
  {
    id: 75,
    name: 'npc_dota_hero_silencer',
    npe_desc_loc: 'Can silence all enemies on the map',
    description:
      "Silencer changes the dynamic of every battle when he <b>shuts down the enemy's ability to cast their spells</b>. As he cuts his foes to ribbons with his glaive, he <b>steals their intelligence</b> to add to his own, ensuring his foes are always at a disadvantage.",
    bio: "Part of the seventh and final generation of a carefully designed pedigree, Nortrom was bred by the ancient order of the Aeol Drias to be the greatest magic user the world had ever seen. He was the prophesied one, the culmination of two-hundred years of careful pairings, a war-mage who would bring glory to the order, and destruction to their sworn enemies, The Knights of the Fold.    <br><br>Raised with other young mages in a hidden cantonment among the hills of the Hazhadal barrens, the order's preceptors waited for Nortrom's abilities to manifest. While the other students honed their talents with fire, or ice, or incantatory spells, Nortrom sat silent and talentless, unable to cast so much as a hex. As the day of final testing approached, he still hadn't found his magic. In disgust, the preceptors berated him, while the children laughed. 'You are no mage,' the head of the order declared. Still, Nortrom did not slink away. He entered the day of testing and faced down the young mages who had mocked him. And then his preceptors learned a valuable lesson: a lack of magic can be the greatest magic of all. Nortrom silenced the young mages one by one and defeated them in single combat, until he alone stood as champion of the Aeol Drias, in fulfillment of the prophecy.",
    role_levels: [1, 1, 1, 2, 0, 0, 0, 0, 2],
    abilites: [
      {
        locilized_name: 'silencer_curse_of_the_silent',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'silencer_glaives_of_wisdom',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'silencer_last_word',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'silencer_global_silence',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'silencer_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'silencer_glaives_of_wisdom',
      },
      {
        locilized_name: 'silencer_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'silencer_last_word',
      },
    ],
  },
  {
    id: 76,
    name: 'npc_dota_hero_obsidian_destroyer',
    npe_desc_loc: 'Can imprison a hero, making them invulnerable',
    description:
      'Stealing from the minds of those he imprisons, Outworld Destroyer turns raw intelligence into destructive power. <b>Weakening enemies</b> with a barrage of arcane energy, he shatters their sanity with his ultimate blast, often <b>erasing mana</b> from those that survive.',
    bio: "One of a lordly and magisterial race, Harbinger prowls the edge of the Void, sole surviving sentry of an outpost on the world at the rim of the abyss. From this jagged crystalline Outworld, forever on guard, he has gazed for eternities into the heavens, alert for any stirring in the bottomless night beyond the stars. Imprinted deep in the shining lattices of his intellect lies a resonant pattern akin to prophecy, a dark music implying that eventually some evil will wake out there, beyond the edges of creation, and turn its attention to our world. With his whole being focused on his vigil, Outworld Destroyer paid little attention to events closer in to the sun. But at last the clamor of the Ancients, and a sense of growing threat from within as well as without, sent him winging sunward to visit the plains of war. Harbinger's place in our own prophecies is unambiguous: he must be considered an omen of worse things to come. But his arrival in itself is bad enough. ",
    role_levels: [2, 0, 2, 1, 0, 0, 0, 0, 0],
    abilites: [
      {
        locilized_name: 'obsidian_destroyer_arcane_orb',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'obsidian_destroyer_astral_imprisonment',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'obsidian_destroyer_equilibrium',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'obsidian_destroyer_sanity_eclipse',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'obsidian_destroyer_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'obsidian_destroyer_astral_imprisonment',
      },
      {
        locilized_name: 'obsidian_destroyer_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'obsidian_destroyer_astral_imprisonment',
      },
    ],
  },
  {
    id: 77,
    name: 'npc_dota_hero_lycan',
    npe_desc_loc: 'Shapeshifts into a ferocious beast',
    description:
      'As a man or as a wolf, Lycan devastates enemies with sharp claws and deadly jaws. <b>Summoning stealthy wolves</b> to scout ahead or assault a foe, his wolf transformation grants him the <b>speed and strength</b> to run down his enemies, or escape an ambush.',
    bio: "Banehallow was noble-born to the house of Ambry, the greatest of the landed castes in the old kingdom of Slom. Before the Fall, as the King's wants grew strange, and his court grew crowded with sorcerers and charlatans, the house of Ambry was the first to rise against the avarice of the throne. No longer willing to pay homage and fealty, they instead sent six-thousand swords into the capital, where they were wiped out in the Massacre of the Apostates. And then came the teeth behind the old truth: When you strike a king's neck, you had better take his head.    <br><br>Enraged by the betrayal, the king exterminated the vast Ambry bloodline, sparing only the lord of the house and his youngest son, Banehallow. Before all the royal court, with the disgraced lord chained to the ornate marble floor, the King bade his magicians transform the boy into a wolf so that he might tear out his own father's throat. 'Do this,' the king said, 'so that Lord Ambry will understand the bite of betrayal.' Powerful magic was invoked, and the child was transformed. But though his body was changed, his spirit remained intact, and instead of biting the exposed neck of his father, he attacked his handlers, tearing them to pieces. A dozen of the King's knights perished under the wolf's teeth before they managed to drive it off into the night. Lord Ambry laughed from his chains even as the King ran him through with a sword. Now the heir to the lost house of Ambry, Banehallow wanders the trail as the Lycan, part warrior, part wolf, in search of justice for all that he lost.",
    role_levels: [2, 0, 0, 0, 1, 1, 1, 3, 0],
    abilites: [
      {
        locilized_name: 'lycan_summon_wolves',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'lycan_howl',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'lycan_feral_impulse',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'lycan_shapeshift',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'lycan_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'lycan_summon_wolves',
      },
      {
        locilized_name: 'lycan_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'lycan_wolf_bite',
      },
    ],
  },
  {
    id: 78,
    name: 'npc_dota_hero_brewmaster',
    npe_desc_loc: 'Splits into three elemental spirits with unique abilities',
    description:
      'A fearsome fighter in any situation, Brewmaster can turn the tide of battle by splitting into <b>three elemental spirits</b>, each with their own unique abilities. When not divided, he brings drunken chaos to his foes with <b>slowing claps</b> and powerful swings of his staff.',
    bio: "Deep in the Wailing Mountains, in a valley beneath the Ruined City, the ancient Order of the Oyo has for centuries practiced its rites of holy reverie, communing with the spirit realm in grand festivals of drink.  Born to a mother's flesh by a Celestial father, the youth known as Mangix was the first to grow up with the talents of both lineages.  He trained with the greatest aesthetes of the Order, eventually earning, through diligent drunkenness, the right to challenge for the title of Brewmaster, that appellation most honored among the contemplative malt-brewing sect.    <br><br>As much drinking competition as mortal combat, Mangix for nine days drank and fought the elder master.  For nine nights they stumbled and whirled, chugged and struck, until at last the elder warrior collapsed into a drunken stupor, and a new Brewmaster was named.  Now the new, young Brewmaster calls upon the strength of his Oyo forebears to speed his staff.  When using magic, it is to his spirit ancestors that he turns.  Like all Brewmasters before him, he was sent out from his people with a single mission.  He wanders the land, striving toward enlightenment through drink, searching for the answer to the ancient spiritual schism.  Hoping to think the single thought that will unite the spirit and physical planes again.",
    role_levels: [1, 0, 1, 2, 0, 2, 0, 0, 3],
    abilites: [
      {
        locilized_name: 'brewmaster_thunder_clap',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'brewmaster_cinder_brew',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'brewmaster_drunken_brawler',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'brewmaster_primal_split',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'brewmaster_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'brewmaster_primal_split',
      },
      {
        locilized_name: 'brewmaster_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'brewmaster_primal_split',
      },
    ],
  },
  {
    id: 79,
    name: 'npc_dota_hero_shadow_demon',
    npe_desc_loc: 'Stacks exponential poison damage against his foes',
    description:
      'Spewing <b>clouds of demonic poison</b> to damage enemies or scout the battlefield, few dare to approach Shadow Demon. <b>Banishing</b> an enemy as his allies gather for the kill, he can inflict demonic curses as he summons <b>traitorous illusions</b> to turn enemy strength against itself.',
    bio: "Among the sovereign Demons with explicit access to this world, Doom scarcely bothers with the affairs of Noninfernals and Lesser Spectral Consorts, while Shadow Fiend passes through almost exclusively on collecting expeditions. The Shadow Demon, however, has always taken a deep and abiding interest in the material plane, as if sensing that mastery of this gritty dimensional nexus might be the key to total domination of all realities.    <br><br>Summoned first by minor wizards, the Shadow Demon granted every wish and put on increasingly impressive displays of power until he had the full attention of the greatest demonologists, and through them the various lords, tyrants, autarchs and heirophants who depended on sorcery to buttress their mundane power. So great was his deception that all his summoners considered themselves the master and Shadow Demon the servant; meanwhile, he eroded their identities and made their minds his own. In the end, most members of the cult were hollow puppets, extensions of his evil will.    <br><br>What Shadow Demon's next step would have been remains open to speculation, for around this time, Nevermore the Shadow Fiend bit into a particularly nasty-tasting soul and discovered that it held nothing but a foul nougat of Shadow Demon's essence. Alerted that a coup was underway, and that the ancient equilibrium of the Umbral Pact was about to be destabilized, Doom and Shadow Fiend briefly joined forces to destroy the burgeoning cult. Combining spells of incredible force, they undid Shadow Demon's centuries of patient work, reducing his cult to smithereens--and all its members to a bloody splatter. Nothing remained except a tiny speck of demon shadow. Immortal and irreducible, this mote of evil was enough to seed the Shadow Demon's next scheme, and in fits and starts, over further centuries, he began to regroup.    <br><br>Whatever that speck of shadow touched, it tainted, and its influence gradually grew. A chaos of damaged parts pulled together, reknit, and combined to give Shadow Demon a form even stronger than his former. He is all but complete now, and his plan for infinite dominion lacks all of its former weaknesses. It would seem that such a being of pure malice and malevolence, a threat to all creation, would be forever out of place in our world...yet Shadow Demon does not lack for followers. ",
    role_levels: [0, 2, 1, 2, 0, 0, 0, 0, 1],
    abilites: [
      {
        locilized_name: 'shadow_demon_disruption',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'shadow_demon_soul_catcher',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'shadow_demon_shadow_poison',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'shadow_demon_demonic_purge',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'shadow_demon_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'shadow_demon_demonic_purge',
      },
      {
        locilized_name: 'shadow_demon_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'shadow_demon_demonic_purge',
      },
    ],
  },
  {
    id: 80,
    name: 'npc_dota_hero_lone_druid',
    npe_desc_loc: 'Commands a powerful spirit bear in battle',
    description:
      'Battling alongside his <b>powerful spirit bear</b>, Lone Druid demolishes enemy forces and structures. Switching as needed between <b>ranged and melee attacks</b> with his transformation, should he have enough time to arm and strengthen both himself and his companion, there is little that can stop them.',
    bio: "Long before the first words of the first histories there rose the druidic Bear Clan. Wise and just they were, and focused in their ways to seek an understanding of the natural order. The arch forces of nature saw this, and so sought the most learned among them. Wise old Sylla, clan justiciar and seer, stepped forward for his kin, and to him was given the Seed with these words: 'When all of the world has dimmed, when civilization has left these lands, when the world is slain and wracked by the endless deserts at the end of ages, plant the Seed.'    <br><br>As he grasped his trust, Sylla felt his years recede and his vitality returned. Vast knowledge burst into his mind. He found himself able to project his very will into reality and, with some concentration, alter his own physical form as well. Yet subtle whispers and cruel ears brought word of the Seed and its power to other peoples, and a terrible war crashed upon the Bear Clan. As his ancestral home burned, Sylla took his burden and fled to the wild places.    <br><br>Ages passed, and time and myth forgot the Bear Clan, forgot Sylla and the Seed, forgot wondrous civilizations that rose and fell in Bear Clan's wake. For millenia Sylla has waited, waited for word from his deities, waited for peace to come to the ever warring realms, waited in exile and in secret for the end of all things and for the conclusion of his sacred commitment, preparing himself always to face and destroy whatever would dare threaten his purpose.",
    role_levels: [2, 0, 0, 0, 1, 1, 0, 3, 0],
    abilites: [
      {
        locilized_name: 'lone_druid_spirit_bear',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'lone_druid_spirit_link',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'lone_druid_savage_roar',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'lone_druid_true_form',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'lone_druid_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'lone_druid_savage_roar',
      },
      {
        locilized_name: 'lone_druid_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'lone_druid_spirit_bear',
      },
    ],
  },
  {
    id: 81,
    name: 'npc_dota_hero_chaos_knight',
    npe_desc_loc: 'Has strong but random damage output',
    description:
      'Chaos Knight is an army unto himself. Able to <b>summon a cavalry of clones</b> to demolish enemy defenses, should an enemy present itself, he can rift reality to <b>pull</b> him and his phantasms close enough to rain brutal cudgel blows upon their head.',
    bio: "The veteran of countless battles on a thousand worlds, Chaos Knight hails from a far upstream plane where the fundamental laws of the universe have found sentient expression.  Of all the ancient Fundamentals, he is the oldest and most tireless, endlessly searching out a being he knows only as 'The Light.'  Long ago the Light ventured out from the progenitor realm, in defiance of the first covenant.  Now Chaos Knight shifts from plane to plane, always on the hunt to extinguish the Light wherever he finds it.  A thousand times he has snuffed out the source, and always he slides into another plane to continue his search anew.    <br><br>Upon his steed Armageddon he rides, wading into battle with maniacal frenzy, drawing strength from the disorder of the universe.  A physical manifestation of chaos itself, in times of need he calls upon other versions of himself from other planes, and together these dark horsemen ride into battle, as unstoppable as any force of nature.  Only when the last Light of the world is scoured from existence will the search be ended.  Where rides the Chaos Knight, death soon follows.",
    role_levels: [3, 0, 0, 2, 0, 2, 0, 2, 1],
    abilites: [
      {
        locilized_name: 'chaos_knight_chaos_bolt',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'chaos_knight_reality_rift',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'chaos_knight_chaos_strike',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'chaos_knight_phantasm',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'chaos_knight_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'chaos_knight_chaos_bolt',
      },
      {
        locilized_name: 'chaos_knight_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'chaos_knight_phantasm',
      },
    ],
  },
  {
    id: 82,
    name: 'npc_dota_hero_meepo',
    npe_desc_loc: 'Five are stronger than one',
    description:
      'By summoning up to five permanent copies of himself, Meepo can fight from every front at once. Spreading his clones throughout the battlefield, when an enemy is found, he binds his foe, gathers his selves with an <b>explosive teleport</b>, then buries what remains.',
    bio: "If you ask me, life is all about who you know and what you can find. When you live up in the Riftshadow Ruins, just finding food can be tough. So you need to cut corners, you need to scrounge, you need to know your strengths. Some of the beasts up there can kill you, so you need a way to trap the weak and duck the strong. On the upside, the ruins have history, and history is worth a lot to some people. There used to be a palace there, where they had all these dark rituals. Bad stuff. If you survived the ceremony, they would shatter a crystal and split your soul into pieces. They made great art though! Sculptures and such. Let me tell you: sometimes you stumble onto some of those old carvings. Take a pack full of those to town and sell them, then get yourself food for a few weeks. If luck is really on your side, you might find a Riftshadow crystal. Get it appraised and start asking around. Someone always knows some crazy fool looking for this kind of thing. If all else fails, sell it to a Magus the next time one's in town. They love that stuff. Still, whatever you do, be careful handling those crystals. You do not want one to go off on you. It really hurts.'",
    role_levels: [2, 0, 2, 1, 0, 0, 2, 1, 1],
    abilites: [
      {
        locilized_name: 'meepo_earthbind',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'meepo_poof',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'meepo_ransack',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'meepo_divided_we_stand',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'meepo_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'meepo_divided_we_stand',
      },
      {
        locilized_name: 'meepo_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'meepo_petrify',
      },
    ],
  },
  {
    id: 83,
    name: 'npc_dota_hero_treant',
    npe_desc_loc: 'Calls upon the forest to root his foes',
    description:
      'Treant Protector is ever the benevolent ally, sprouting <b>regenerating armor</b> for his cohorts and their fortifications alike. Emerging unseen from among the trees, he <b>binds foes</b> with overgrowth as he <b>leeches health</b> from enemies and into nearby allies.',
    bio: 'Far to the west, in the mountains beyond the Vale of Augury, lie the remains of an ancient power, a fount of eldritch energy nestled deep in the high woods. It is said that the things that grow here, grow strangely. To the forces of nature this is a sacred place, made to stay hidden and unknown. Many are the traps and dangers of this land.  There are all-consuming grasses, crossbred fauna and poisonous flowers, but none are so fierce as the mighty Treant Protectors. <br><br>These ageless, titanic beings, charged with keeping the peace in this dangerous land, ensure that none within encroach without reason, and none without poach their secrets. For time untold they tended to their holy ground, uninterrupted, only dimly aware of the changing world beyond. Yet inevitably the wider world grew aware of this untamed land, and with each passing winter the outsiders grew bolder. Soon they arrived with tools to cut and with flames to burn, and often the Treants would ponder: who are these fragile, industrious creatures? What now had become of the wild, green world? There came and went an age of questions and of doubts, a thousand summers of long traditions set to scrutiny, while more and more the outsiders died and fed their earth. <br><br>When all that bloomed had finally finished their say, curiosity had overcome caution. It was decided: a lone Protector would be sent into the wider world, and instructed to wander until the glaciers arose once more, to observe the changing land and its creatures, and to discover what unknown dangers could threaten their sacred ground.',
    role_levels: [0, 3, 0, 1, 0, 1, 1, 0, 2],
    abilites: [
      {
        locilized_name: 'treant_natures_grasp',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'treant_leech_seed',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'treant_living_armor',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'treant_natures_guise',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'treant_overgrowth',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'treant_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'treant_natures_guise',
      },
      {
        locilized_name: 'treant_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'treant_eyes_in_the_forest',
      },
    ],
  },
  {
    id: 84,
    name: 'npc_dota_hero_ogre_magi',
    npe_desc_loc: 'Uses a touch of luck to amplify his skills',
    description:
      'With a chance to <b>multiply the outcome</b> of each spell they cast, a bit of <b>luck</b> is all Ogre Magi needs to burn enemies to cinder, or <b>boost the power of his allies</b>. Of course, luck can be difficult to rely upon...',
    bio: "The ordinary ogre is the creature for whom the phrase 'As dumb as a bag of rock hammers' was coined. In his natural state, an ogre is supremely incapable of doing or deciding anything. Clothed in dirt, he sometimes finds himself accidentally draped in animal skins after eating lanekill. Not an especially social creature, he is most often found affectionately consorting with the boulders or tree-stumps he has mistaken for kin (a factor that may explain the ogre's low rate of reproduction).  However, once every generation or so, the ogre race is blessed with the birth of a two-headed Ogre Magi, who is immediately given the traditional name of Aggron Stonebreak, the name of the first and perhaps only wise ogre in their line's history.    <br><br>With two heads, Ogre Magi finds it possible to function at a level most other creatures manage with one. And while the Ogre Magi will win no debates (even with itself), it is graced with a divine quality known as Dumb Luck--a propensity for serendipitous strokes of fortune which have allowed the ogre race to flourish in spite of enemies, harsh weather, and an inability to feed itself.  It's as if the Goddess of Luck, filled with pity for the sadly inept species, has taken Ogre Magi under her wing. And who could blame her? Poor things.",
    role_levels: [0, 2, 2, 2, 0, 1, 0, 0, 1],
    abilites: [
      {
        locilized_name: 'ogre_magi_fireblast',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'ogre_magi_ignite',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'ogre_magi_bloodlust',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'ogre_magi_multicast',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'ogre_magi_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'ogre_magi_smash',
      },
      {
        locilized_name: 'ogre_magi_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'ogre_magi_unrefined_fireblast',
      },
    ],
  },
  {
    id: 85,
    name: 'npc_dota_hero_undying',
    npe_desc_loc: 'Summons hordes of zombies to attack his foes',
    description:
      'Shambling into battle, Undying forces enemies to decide whether to flee his wrath or be torn apart by it. He <b>drains strength</b> from his foes, and <b>summons a horde of clawing undead</b>. When he finally becomes a <b>hulking flesh golem</b>, his enemies may already be overwhelmed.',
    bio: "How long has it been since he lost his name? The torn ruin of his mind no longer knows.<br><br>Dimly he recalls armor and banners and grim-faced kin riding at his side. He remembers a battle: pain and fear as pale hands ripped him from his saddle. He remembers terror as they threw him into the yawning pit of the Dead God alongside his brothers, to hear the Dirge and be consumed into nothingness. In the darkness below, time left them. Thought left them. Sanity left them. Hunger, however, did not. They turned on each other with split fingernails and shattered teeth. Then it came: distant at first, a fragile note at the edge of perception, joined by another, then another, inescapable and unending. The chorus grew into a living wall of sound pulsing in his mind until no other thought survived. With the Dirge consuming him, he opened his arms to the Dead God and welcomed his obliteration. Yet destruction was not what he'd been chosen for. The Dead God demanded war. In the belly of the great nothing, he was granted a new purpose: to spread the Dirge across the land, to rally the sleepless dead against the living. He was to become the Undying, the herald of the Dead God, to rise and fall and rise again whenever his body failed him. To trudge on through death unending, that the Dirge might never end.",
    role_levels: [0, 2, 1, 1, 0, 2, 0, 0, 0],
    abilites: [
      {
        locilized_name: 'undying_decay',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'undying_soul_rip',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'undying_tombstone',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'undying_flesh_golem',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'undying_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'undying_flesh_golem',
      },
      {
        locilized_name: 'undying_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'undying_decay',
      },
    ],
  },
  {
    id: 86,
    name: 'npc_dota_hero_rubick',
    npe_desc_loc: 'Steals the spells of his enemies to use against them',
    description:
      "Always seeking a new <b>spell to steal</b>, Rubick is ever eager to turn an enemy's most unique advantage against them. <b>Snatching his enemies</b> into the air to fling them where he will, he has no trouble sowing chaos among careless foes.",
    bio: "Any mage can cast a spell or two, and a few may even study long enough to become a wizard, but only the most talented are allowed to be recognized as a Magus. Yet as with any sorcerer's circle, a sense of community has never guaranteed competitive courtesy.    <br><br>Already a renowned duelist and scholar of the grander world of sorcery, it had never occurred to Rubick that he might perhaps be Magus material until he was in the midst of his seventh assassination attempt. As he casually tossed the twelfth of a string of would-be killers from a high balcony, it dawned on him how utterly unimaginative the attempts on his life had become. Where once the interruption of a fingersnap or firehand might have put a cheerful spring in his step, it had all become so very predictable. He craved greater competition. Therefore, donning his combat mask, he did what any wizard seeking to ascend the ranks would do: he announced his intention to kill a Magus.    <br><br>Rubick quickly discovered that to threaten one Magus is to threaten them all, and they fell upon him in force. Each antagonist's spell was an unstoppable torrent of energy, and every attack a calculated killing blow. But very soon something occurred that Rubick's foes found unexpected: their arts appeared to turn against them. Inside the magic maelstrom, Rubick chuckled, subtly reading and replicating the powers of one in order to cast it against another, sowing chaos among those who had allied against him. Accusations of betrayal began to fly, and soon the sorcerers turned one upon another without suspecting who was behind their undoing.    <br><br>When the battle finally drew to a close, all were singed and frozen, soaked and cut and pierced. More than one lay dead by an ally's craft. Rubick stood apart, sore but delighted in the week's festivities. None had the strength to argue when he presented his petition of assumption to the Hidden Council, and the Insubstantial Eleven agreed as one to grant him the title of Grand Magus.",
    role_levels: [0, 2, 1, 1, 0, 0, 0, 0, 0],
    abilites: [
      {
        locilized_name: 'rubick_telekinesis',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'rubick_fade_bolt',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'rubick_arcane_supremacy',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'rubick_spell_steal',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'rubick_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'rubick_telekinesis',
      },
      {
        locilized_name: 'rubick_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'rubick_spell_steal',
      },
    ],
  },
  {
    id: 87,
    name: 'npc_dota_hero_disruptor',
    npe_desc_loc: 'Traps and silences foes in his static storm',
    description:
      'Disruptor excels at shattering the plans of his enemies. <b>Summoning impassable fences</b> to trap targets as he calls down a <b>silencing storm</b>, should a foe attempt something unexpected he simply <b>teleports them back</b> to their earlier location.',
    bio: 'High on the wind-ravaged steppes of Druud, a gifted young stormcrafter called Disruptor was the first to unlock the secrets of the summer squalls.  Constantly under assault from both seasonal storms and encroachment from civilized kingdoms to the South, the upland Oglodi have for centuries struggled to subsist atop the endless tablelands.  They are the fractured remnant of a once-great civilization, a fallen tribe, their stormcraft strange and inscrutable, cobbled together from scraps of lost knowledge which even they no longer fully understand.  For those on the high plain, weather has become a kind of religion, worshiped as both the giver and taker of life.  But the electrical storms that bring life-sustaining rains arrive at a cost, and many are the charred and smoking corpses left in their wake.      <br><br>Although small for his kind, Disruptor is fearless, and driven by an insatiable curiosity.  As a youth, while still unblooded and without a stryder, he explored the ruins of the ancestral cities, searching through collapsed and long-moldering libraries, rummaging through rusting manufactories.  He took what he needed and returned to his tribe.  Adapting a coil of ancient design, he harnessed the power of electrical differential and now calls down the thunder whenever he wishes.  Part magic, part craftsmanship, his coils hold in their glowing plates the power of life and death--a power wielded with precision against the landed castes to the South, and any interlopers who cross into ancient Oglodi lands.',
    role_levels: [0, 2, 1, 2, 0, 0, 0, 0, 1],
    abilites: [
      {
        locilized_name: 'disruptor_thunder_strike',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'disruptor_glimpse',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'disruptor_kinetic_field',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'disruptor_static_storm',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'disruptor_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'disruptor_thunder_strike',
      },
      {
        locilized_name: 'disruptor_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'disruptor_static_storm',
      },
    ],
  },
  {
    id: 88,
    name: 'npc_dota_hero_nyx_assassin',
    npe_desc_loc: 'Reflects enemy damage and stuns',
    description:
      'Nyx Assassin is always hunting for fragile targets. Sneaking <b>invisibly</b> through the forest, when he spots his prey, he swipes them with his deadly claws and impales them on <b>stunning spikes</b>, then reverses any counterattack with his <b>reflecting carapace.</b>',
    bio: "Deep in the Archive of Ultimyr, shelved between scholarly treatises on dragon cladistics and books of untranslatable spells, there is an ancient tome of entomological curiosities.  Compiled by scholars, the book describes the telepathic talents of the zealot scarab, a strange species of social insect with abilities unique to all the seven planes.   <br><br>Unlike most grubs of his colony, Nyx Assassin did not arise from metamorphosis with the plodding thoughts and blunted appendages common to the worker caste of his kind. For his was a special transformation, guided by the grace of Nyx.  He was the chosen one, selected from the many and anointed with an extract of the queen goddess herself.  Not all survive the dark blessing of the queen's chamber, but he emerged with a penetrating mind, and dagger-like claws--his razor sharp mandibles raking the air while his thoughts projected directly into the minds of those around him.  Of all zealot scarabs, he alone was selected for the highest calling.  After his metamorphosis, he was reborn, by grace of Nyx, with abilities which shaped him for one thing and one thing only: to kill in the name of his goddess.",
    role_levels: [0, 0, 2, 2, 0, 0, 1, 0, 2],
    abilites: [
      {
        locilized_name: 'nyx_assassin_impale',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'nyx_assassin_mana_burn',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'nyx_assassin_spiked_carapace',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'nyx_assassin_vendetta',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'nyx_assassin_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'nyx_assassin_vendetta',
      },
      {
        locilized_name: 'nyx_assassin_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'nyx_assassin_burrow',
      },
    ],
  },
  {
    id: 89,
    name: 'npc_dota_hero_naga_siren',
    npe_desc_loc: 'Able to capitivate and disable enemies with her song',
    description:
      'Sending squads of <b>mirrored clones</b> against her foes, Naga Siren ensnares and slays enemies as she leads her forces to victory. With the sound of her voice, she <b>disables nearby foes</b> to spring an ambush or crafting a hasty escape.',
    bio: 'Among the high-sworn of the Slithereen Guard there is a solemn vow oft repeated before battle: No Slithereen may fail.  In truth, these words are equal parts oath and enforceable covenant, for those who fall short of their duty are banished from the order.  To fail is to be other than Slithereen.    <br><br>Once most highly esteemed of her race, Slithice for many years commanded a battalion of her fellows, using her formidable voice as her greatest weapon.  Powerful, sinuous, serpentine, she led her deadly Guard in defense of the Deep Ones, and the great wealth of the sunken cities.  But in the final battle of Crey, her forces were driven back by a marauding army of levianths intent on finding tribute for their god Maelrawn.  After the long and bloody onslaught, as the bodies were cleared from the sunken halls, a single jeweled chalice was found missing from the trove.  Of her hundred Guard, only a handful survived, but their bravery and sacrifice were of little consequence.  What mattered was that treasure was taken.  Honor destroyed.  And so Naga Siren was cast out.  Banished to search for the stolen chalice.  Though she might add a hundred times her weight to the golden trove, she is doomed to live apart until that day she returns that which was taken.  For no amount of gold is equal in honor to the honor she lost.',
    role_levels: [3, 1, 0, 2, 0, 0, 1, 2, 1],
    abilites: [
      {
        locilized_name: 'naga_siren_mirror_image',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'naga_siren_ensnare',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'naga_siren_rip_tide',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'naga_siren_song_of_the_siren',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'naga_siren_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'naga_siren_song_of_the_siren',
      },
      {
        locilized_name: 'naga_siren_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'naga_siren_ensnare',
      },
    ],
  },
  {
    id: 90,
    name: 'npc_dota_hero_keeper_of_the_light',
    npe_desc_loc: 'Provides instant mana to allies',
    description:
      'Keeper of the Light is a helpful addition to any team. <b>Manipulating the mana</b> of both his allies and enemies, he effortlessly destroys lesser foes with <b>waves of illumination</b>, then enters his spirit form to gather his team to press the assault.',
    bio: 'Upon a pale horse he rides, this spark of endless suns, this Keeper of the Light.  Ezalor long ago escaped the Fundamental plane, separating from the other ancient forces to which he was bound within the great Primordial harmony.  He is a power grown sentient in the dawn of the universe, and now rides forth in all planes at once, one step ahead of pursuing chaos, bearing his gift with him at the end of a radiant staff.  His majestic truth lies hidden beneath the outward appearance of a slightly doddering old man who barely stays in the saddle.  However, when faced with the challenge of chaos, or the forces of darkness, his primordial light bursts forth, and his full power is revealed, transforming him once again into a force to be reckoned with.',
    role_levels: [0, 3, 2, 1, 1, 0, 0, 0, 0],
    abilites: [
      {
        locilized_name: 'keeper_of_the_light_illuminate',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'keeper_of_the_light_radiant_bind',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'keeper_of_the_light_chakra_magic',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'keeper_of_the_light_blinding_light',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'keeper_of_the_light_spirit_form',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'keeper_of_the_light_spirit_form_illuminate',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'keeper_of_the_light_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'keeper_of_the_light_recall',
      },
      {
        locilized_name: 'keeper_of_the_light_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'keeper_of_the_light_will_o_wisp',
      },
    ],
  },
  {
    id: 91,
    name: 'npc_dota_hero_wisp',
    npe_desc_loc: 'Links to its allies to buff them',
    description:
      "Io has a talent for <b>making allies more effective</b>. A powerful companion, the wisp's tether <b>speeds allies and stops enemies</b>. Capable of linking to and <b>teleporting</b> across the battlefield with an ally, Io can make a dangerous ally even deadlier.",
    bio: "Io is everywhere, and in all things.  Denounced by enemies as the great unmaker, worshiped by scholars as the twinkling of a divine eye, this strange Wisp of life-force occupies all planes at once, the merest fraction of its being crossing into physical existence at any one moment.      <br><br>Like the great twin riders Dark and Light, and yet another ancient traveler whose true history is lost to the ages, Io the Wisp is a Fundamental of the universe, a force older than time, a wanderer from realms far beyond mortal understanding. Io is nothing less than the sum of all attractive and repulsive forces within the material field, a sentient manifestation of the charge that bind existence together. It is only in the controlled warping of these electrical waylines that Io's presence can be experienced on the physical plane. A benevolent, cooperative force, Io bonds its strange magnetism to others so that the power of allies might be enhanced.  Its motives inscrutable, its strength unimaginable, Io moves through the physical plane, the perfect expression of the mysteries of the universe.",
    role_levels: [0, 3, 1, 0, 0, 0, 2, 0, 0],
    abilites: [
      {
        locilized_name: 'wisp_tether',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'wisp_spirits',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'wisp_overcharge',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'wisp_spirits_in',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'wisp_spirits_out',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'wisp_relocate',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'wisp_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'wisp_tether',
      },
      {
        locilized_name: 'wisp_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'wisp_spirits',
      },
    ],
  },
  {
    id: 92,
    name: 'npc_dota_hero_visage',
    npe_desc_loc: 'Scouts and attacks with his familiars',
    description:
      'As his <b>deadly familiars</b> scout the field, Visage <b>cloaks himself in armor</b> and seeks the next battle. Once near a skirmish, he <b>gathers soul energy</b> from damage inflicted upon nearby fighters before releasing it in a devastating attack.',
    bio: "Perched atop the entrance to the Narrow Maze sit the looming shapes of sneering gargoyles, the paths into the hereafter forever in their gaze.  Beasts and birds, men and monsters, all creatures that die and choose to travel beyond must someday pass beneath their sight.  For an untethered spirit, the decision to journey through the veil of death is irrevocable.  When chance comes, and by craft or cunning some restless soul escapes their hells and heavens, it is the dreaded gargoyle Visage, the bound form of the eternal spirit Necro'lic, who is dispatched to reclaim them.  Ruthless and efficient, unhindered by the principles of death and fatigue, Visage stalks its prey without mercy or end, willingly destroying all which may give shelter to the fugitive essence.  That which flaunts the laws of the afterlife may never rest, for while it is true that the dead may be revived, it is only a matter of time before Visage finds and returns them to their proper place.",
    role_levels: [0, 1, 2, 1, 0, 1, 0, 1, 0],
    abilites: [
      {
        locilized_name: 'visage_grave_chill',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'visage_soul_assumption',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'visage_gravekeepers_cloak',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'visage_summon_familiars',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'visage_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'visage_gravekeepers_cloak',
      },
      {
        locilized_name: 'visage_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'visage_silent_as_the_grave',
      },
    ],
  },
  {
    id: 93,
    name: 'npc_dota_hero_slark',
    npe_desc_loc: 'Slips in and out of skirmishes',
    description:
      'Pouncing into danger then slipping back out is what Slark does best. He rushes at the chance to <b>pin or corner a lone foe</b>, steals their essence with each cut from his dagger, and is always ready to vanish should the tables turn.',
    bio: 'Little known to the inhabitants of the dry world, Dark Reef is a sunken prison where the worst of the sea-bred are sent for crimes against their fellows. It is a razor barbed warren full of murderous slithereen, treacherous Deep Ones, sociopathic meranths. In this dim labyrinth, patrolled by eels and guarded by enormous anemones, only the vicious survive. Pitched into Dark Reef for crimes unknown, Slark spent half a lifetime without kin or kindness, trusting no one, surviving through a combination of stealth and ruthlessness, keeping his thoughts and his plans to himself. When the infamous Dark Reef Dozen plotted their ill-fated breakout, they kept their plans a perfect secret, murdering anyone who could have put the pieces together--but somehow Slark discovered their scheme and made a place for himself in it. Ten of the Dozen died in the escape attempt, and two were captured, hauled back to Dark Reef, then executed for the entertainment of their fellow inmates. But Slark, the unsung thirteenth, used the commotion as cover and slipped away, never to be caught. Now a furtive resident of the carnivorous mangrove scrub that grips the southern reach of Shadeshore, Slark remains the only successful escapee from Dark Reef.',
    role_levels: [2, 0, 1, 1, 0, 0, 3, 0, 0],
    abilites: [
      {
        locilized_name: 'slark_dark_pact',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'slark_pounce',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'slark_essence_shift',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'slark_shadow_dance',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'slark_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'slark_depth_shroud',
      },
      {
        locilized_name: 'slark_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'slark_pounce',
      },
    ],
  },
  {
    id: 94,
    name: 'npc_dota_hero_medusa',
    npe_desc_loc: 'Immobilizes her enemies with her stone gaze',
    description:
      "Constant attack is the key to Medusa's success. Using her <b>mana shield</b> to stave off assault, she employs <b>split shots</b> to mow down waves of enemies. Once she gathers her full strength, she becomes a force powerful enough to stop anyone in their tracks.",
    bio: "Beauty is power. This thought comforted Medusa--the youngest and loveliest of three beautiful Gorgon sisters, born to a sea goddess--because she alone of the sisters was mortal. It comforted her, that is, until the day masked assailants invaded the Gorgon realm and tore the two immortal sisters from their home, unmoved by their beauty or by their tears. One of the invaders seized Medusa as well, but then cast her aside with a disgusted look: 'This one has the mortal stink upon her. We have no use for that which dies.' Humiliated, enraged, Medusa fled to the temple of her mother and cast herself before the goddess, crying, 'You denied me eternal life--therefore I beg you, give me power! Power, so I can dedicate what life I have to rescuing my sisters and avenging this injustice!' After long thought, the goddess granted her daughter's request, allowing Medusa to trade her legendary beauty for a face and form of terrifying strength. Never for a moment has Medusa regretted her choice. She understands that power is the only beauty worth possessing--for only power can change the world.",
    role_levels: [3, 0, 0, 1, 0, 1, 0, 0, 0],
    abilites: [
      {
        locilized_name: 'medusa_split_shot',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'medusa_mystic_snake',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'medusa_mana_shield',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'medusa_stone_gaze',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'medusa_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'medusa_cold_blooded',
      },
      {
        locilized_name: 'medusa_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'medusa_mystic_snake',
      },
    ],
  },
  {
    id: 95,
    name: 'npc_dota_hero_troll_warlord',
    npe_desc_loc: 'Swaps between ranged and melee attacks at will',
    description:
      "Instantly able to swap between <b>ranged and melee attacks</b>, Troll Warlord is a formidable force at any distance. Axes in hand, he can strike in a storm of <b>spinning blades</b>. He takes down enemies with increasingly swift attacks, and can <b>speed his allies'</b> assaults wherever they are.",
    bio: "It's an easy thing to offend a troll. A prickly and contentious race, trolls thrive on argument and strife, missing no excuse to raise their voices in dispute. Males grow to maturity in subterranean chambers beneath their matriarch's domicile, feeding and amusing themselves while contributing nothing. Often they stay for years beyond the age of maturity, while the matriarch provides them with sustenance. When young trolls are finally pushed from their sub-chamber, they gather with others of their kind, forming roving gangs of malcontents who complain loudly about all manner of vexation.<br><br>As much as trolls love to argue, imagine how rare it is for a troll to be driven from his own kind for being too difficult to get along with. Such was Jah'rakal's fate, a monger troll from deep in the Hoven. So deluded was he, so bitter and abrasive, that even other trolls found his company intolerable. After one particularly vitriolic outburst in which he claimed the lion's share of loot from their latest raid, his cohorts finally snapped. They turned on him, beat him with clubs, and drove him from the encampment. Enraged at his banishment, he returned the next day, armed with steel, and slew them all, one by one. He then swore a blood oath: he would ever after be a fighting force unto himself. Now he roams the world as the Troll Warlord, bitter and angry, the Imperial high commander of an army of one.",
    role_levels: [3, 0, 0, 1, 0, 1, 0, 2, 0],
    abilites: [
      {
        locilized_name: 'troll_warlord_berserkers_rage',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'troll_warlord_whirling_axes_ranged',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'troll_warlord_whirling_axes_melee',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'troll_warlord_fervor',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'troll_warlord_battle_trance',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'troll_warlord_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'troll_warlord_battle_trance',
      },
      {
        locilized_name: 'troll_warlord_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'troll_warlord_whirling_axes_ranged',
      },
    ],
  },
  {
    id: 96,
    name: 'npc_dota_hero_centaur',
    npe_desc_loc: 'Reflects damage back to his attackers',
    description:
      'Centaur Warrunner is a master of both <b>inflicting and absorbing damage</b>. Leading the charge into battle, he stomps to <b>stun his enemies</b>, and instantly <b>counters</b> their every attack. His stampede <b>speeds his allies</b> in both fight and flight, quickening the pace of the carnage.',
    bio: "It's said that a centaur's road is paved with the corpses of the fallen.  For the one called Warrunner, it has been a long road indeed.  To outsiders, the four-legged clans of Druud are often mistaken for simple, brutish creatures.  Their language has no written form; their culture lacks pictographic traditions, structured music, formalized religion.  For centaurs, combat is the perfect articulation of thought, the highest expression of self.  If killing is an art among centaurs, then Bradwarden the Warrunner is their greatest artist.  He rose to dominance on the proving grounds of Omexe, an ancient arena where centaur clans have for millennia gathered to perform their gladiatorial rites.  As his fame spread, spectators came from far and wide to see the great centaur in action.  Always the first to step into the arena, and the last to leave, he composes a masterpiece in each guttering spray, each thrust of blood-slickened blade-length.  It is the poetry of blood on steel, flung in complex patterns across the pale sands of the killing floor.    <br><br>Warrunner defeated warrior after warrior, until the arena boomed with the cheering of his name, and he found himself alone, the uncontested champion of his kind.  The great belt of Omexe was bestowed, wrapped around his broad torso, but in his victory, the death-artist found only emptiness.  For what is a warrior without a challenge?  The great centaur galloped out of Omexe that day with a new goal.  To his people, Warrunner is the greatest warrior to ever step into the arena.  Now he has set out to prove he is the greatest fighter who has ever lived.",
    role_levels: [0, 0, 1, 1, 0, 3, 1, 0, 3],
    abilites: [
      {
        locilized_name: 'centaur_hoof_stomp',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'centaur_double_edge',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'centaur_return',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'centaur_stampede',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'centaur_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'centaur_double_edge',
      },
      {
        locilized_name: 'centaur_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'centaur_stampede',
      },
    ],
  },
  {
    id: 97,
    name: 'npc_dota_hero_magnataur',
    npe_desc_loc: 'Charges in to reposition his enemies',
    description:
      'Enemies who are foolish enough to gather learn to fear the horn of Magnus. Able to <b>pull nearby foes together</b>, he can batter them with <b>empowered attacks</b> or skewer them with his horn to bring them before his merciless allies.',
    bio: 'The master-smiths of Mt. Joerlak agree on only a single point: that the horn of a magnoceros is more precious than any alloy. And of all such horns, the largest and sharpest belongs to the beast they call Magnus. For half a generation, Magnus took easy sport goring hunters come to claim the treasures of his kin. Each time he would return to his cave with hooves and horns stained red, until his Matriarch urged him and all their kin to seek refuge to the north beyond the shadow of the mountain. But Magnus scoffed, having never failed to defend his people. The magnoceroi would stay, he decided, for a magnoceros does not believe in chance... nor does it ever change its mind.    <br><br>But when Mt. Joerlak erupted without warning, and half his kin perished in the fire and ash, Magnus changed his mind after all. The survivors pushed north, until they reached a blockade watched over by a hundred hunters armed with bow and steel. Magnus expected no less. He led his fiercest brothers and sisters in a charge against their enemies, and fought with a ferocity matched only by the fire-spewing mountain at his back. Meanwhile the magnoceros elders, mothers, and calves vanished into the drifts. The master-smiths are divided about what happened next.    <br><br>Some say Magnus reunited with his kin, while others claim he suffered mortal injuries and expired alongside the body of his Matriarch. Neither theory is correct. Magnus did vow to rejoin his kin...but only after seeking out those responsible for the eruption of Mt. Joerlak and watching them die upon his horn, for a magnoceros does not believe in chance.',
    role_levels: [0, 0, 1, 2, 0, 0, 1, 0, 3],
    abilites: [
      {
        locilized_name: 'magnataur_shockwave',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'magnataur_empower',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'magnataur_skewer',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'magnataur_reverse_polarity',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'magnataur_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'magnataur_horn_toss',
      },
      {
        locilized_name: 'magnataur_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'magnataur_shockwave',
      },
    ],
  },
  {
    id: 98,
    name: 'npc_dota_hero_shredder',
    npe_desc_loc: 'Chops through the forest to face his foes',
    description:
      'Elusive and unpredictable, Timbersaw <b>chops through the forest</b> to face his foes. Unleashing an arsenal of <b>saw blades</b> to cut enemies to pieces, he rides his chain into nearby trees and batters foes along the way.',
    bio: "Rizzrack could still hear the screams in his mind.  He worked, frantically turning wrenches, twisting screws, building and carving and forging.  Sleep eluded him; he only built.  Months had passed since he had shut himself in his uncle's workshop, and his deliverance was nearly complete.  He rubbed his back as his eyes drifted shut, and saw a blanket of flowers floating on the placid waves of Augury Bay before exploding into a cloud of pollen that silenced lives as it seized the lungs.  He woke with a choking start.  For hours the rhythmic sound of a whetstone filled the shop as he sharpened a set of massive blades, his mind filled with images of strangling vines garroting neighbors, enwrapping homes.  The flooding of Augury Bay had been nothing compared to the violent horrors the waters left to take root beyond the city walls.<br><br>But the saw-suit would make him strong and safe he thought, allowing himself this sliver of hope before the full might of his fear crashed into his fading mind.  Branches and bark and blood.  When the city fell, Rizzrack fled trees that walked, and fought, and killed.  Trees had shattered the gates and swarmed into the city.  Trees had crushed and thrashed and stomped the last that Augury Bay could muster in defense, and stalked the few fleeing refugees.  In addled silence Rizzrack unspooled the thick chain from the suit's arm, his hands quaking as he inspected each link and ran a trembling finger along the claw attached at its end.  The saw-suit was ready.  <br><br>With his hand trembling he sparked the bladed machine to life.  Terror drove him, terror of what awaited him and of what he would have to face to have any hope of calming his mind.  As the saw-suit shuddered to life he knew he must face this fear, and he knew he wouldn't like it one bit.",
    role_levels: [0, 0, 3, 0, 0, 2, 2, 0, 0],
    abilites: [
      {
        locilized_name: 'shredder_whirling_death',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'shredder_timber_chain',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'shredder_reactive_armor',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'shredder_chakram',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'shredder_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'shredder_flamethrower',
      },
      {
        locilized_name: 'shredder_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'shredder_chakram',
      },
    ],
  },
  {
    id: 99,
    name: 'npc_dota_hero_bristleback',
    npe_desc_loc: 'Takes reduced damage when facing away from enemies',
    description:
      'When it comes to a fight, Bristleback really puts his back into it. <b>Reducing all damage</b> arriving from the rear or from the sides, he wades into battle with barely a care, spraying enemies with <b>damaging quills</b> and <b>slowing snot.</b>',
    bio: "Never one to turn his back on a fight, Rigwarl was known for battling the biggest, meanest scrappers he could get his hands on. Christened Bristleback by the drunken crowds, he waded into backroom brawls in every road tavern between Slom and Elze, until his exploits finally caught the eye of a barkeep in need of an enforcer. For a bit of brew, Bristleback was hired to collect tabs, keep the peace, and break the occasional leg or two (or five, in the case of one unfortunate web-hund).    <br><br>After indulging in a night of merriment during which bodily harm was meted out in equal parts upon both delinquent patrons and his own liver, Bristleback finally met his match. 'Your tusks offend me, sir,' he was heard to drunkenly slur to one particularly large fellow from the northern wastes whose bill had come due. What followed was a fight for the ages. A dozen fighters jumped in. No stool was left unbroken, and in the end, the impossible happened: the tab went unpaid. Over the weeks that followed, Bristleback's wounds healed, and his quills grew back; but an enforcer's honor can be a prickly thing. He paid the tab from his own coin, vowing to track down this northerner and extract redemption. And then he did something he'd never done before: he actually trained, and in so doing made a startling discovery about himself. A smile peeled back from his teeth as he flexed his quills. Turning his back to a fight might be just the thing.",
    role_levels: [2, 0, 1, 0, 0, 3, 0, 0, 1],
    abilites: [
      {
        locilized_name: 'bristleback_viscous_nasal_goo',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'bristleback_quill_spray',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'bristleback_bristleback',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'bristleback_warpath',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'bristleback_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'bristleback_hairball',
      },
      {
        locilized_name: 'bristleback_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'bristleback_viscous_nasal_goo',
      },
    ],
  },
  {
    id: 100,
    name: 'npc_dota_hero_tusk',
    npe_desc_loc: 'Snowballs into his enemies to stun',
    description:
      'Tusk is always eager to start a fight. Able to instantly corner an enemy with a <b>wall of ice shards</b>, he gathers with his allies and rolls into enemies inside of a <b>massive snowball</b>, bringing him in range to land his signature <b>knockout punch.</b>',
    bio: "It had been a brawl to remember. There stood Ymir, the Tusk, the Terror from the Barrier, the Snowball from Cobalt, the only fighter to have bested the Bristled Bruiser in a fair fight, and now the last man standing in Wolfsden Tavern. What started as a simple bar bet of supremacy ended with four regulars, a blacksmith, and six of the Frost Brigade's best soldiers writhing against the shards and splinters of almost every bottle, mug, and chair in the building. The Tusk boasted and toasted his victory as he emptied his brew.<br><br>No sooner had the defeated regained consciousness than the cries for double-or-nothing rang out. The Tusk was pleased at the prospect, but none could think of a bet bigger than the one he just conquered. Horrified at the damage to his tavern and desperate to avoid another brawl, the barkeep had an idea. As skilled as he was, Ymir had never taken part in a real battle, never tested himself against the indiscriminate death and chaos of war. He proposed a wager to the fighter: seek out the biggest battle he could find, survive, and win it for whichever side he chose. The stakes? The next round of drinks.",
    role_levels: [0, 0, 1, 2, 0, 0, 0, 0, 2],
    abilites: [
      {
        locilized_name: 'tusk_ice_shards',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'tusk_snowball',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'tusk_tag_team',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'tusk_frozen_sigil',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'tusk_walrus_punch',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'tusk_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'tusk_ice_shards',
      },
      {
        locilized_name: 'tusk_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'tusk_walrus_kick',
      },
    ],
  },
  {
    id: 101,
    name: 'npc_dota_hero_skywrath_mage',
    npe_desc_loc: 'Casts high damage magical spells on a single target',
    description:
      'Deadly and fragile in equal measure, Skywrath Mage quickly destroys his enemies with a barrage of <b>powerful magic</b>. He <b>silences foes</b> while increasing their <b>vulnerability</b> to spells, meaning he has no trouble vaporizing any who stand against him.',
    bio: "A highly placed mage in the court of the Ghastly Eyrie, Dragonus lives a troubled existence. Sworn by birth to protect whoever sits within the Nest of Thorns, he hates the current Skywrath queen with all his soul. As a youth, high-born, he was a friend and companion to the eldest Skywrath princess, Shendelzare, first in line for the Nest. He had loved her warmly and unshakably, but as his studies took hold, his mind turned to arcane learning and the mastery of Skywrath sorcery.    <br><br>Obsessed with matters aetherial, he missed the mundane signs of courtly treachery that hinted at a plot against Shendelzare, and lost his chance to foil it. When the court was shaken by a swift and violent coup, he emerged from his studies to discover his oldest and dearest friend had been lost to him. The Nest of Thorns now belonged to Shendelzare's ruthless younger sister, and Dragonus could do nothing. The magic of the Skywrath Mage serves only the sworn protector of the Skywrath scion, so to act against the Nest would render him helpless. He clings to his post, believing it to be the best hope of one day restoring his true love to her rightful place. Meanwhile, his secret is known only to the goddess Scree'auk, whose magic it was transformed Shendelzare from a crippled physical creature into an embodiment of pure vengeful energy.    <br><br>While he dreams of restoring his beloved queen to the Ghastly Eyrie, he dreams even more desperately of restoring Shendelzare herself to a fully healed physical form. The duplicity of his role at court tortures him, for he is a noble and good-hearted creature; but the worst torture of all is imagining the hatred that Vengeful Spirit must hold in her heart for him.",
    role_levels: [0, 2, 3, 1, 0, 0, 0, 0, 0],
    abilites: [
      {
        locilized_name: 'skywrath_mage_arcane_bolt',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'skywrath_mage_concussive_shot',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'skywrath_mage_ancient_seal',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'skywrath_mage_mystic_flare',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'skywrath_mage_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'skywrath_mage_mystic_flare',
      },
      {
        locilized_name: 'skywrath_mage_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'skywrath_mage_arcane_bolt',
      },
    ],
  },
  {
    id: 102,
    name: 'npc_dota_hero_abaddon',
    npe_desc_loc: 'Shields his allies or himself from attacks',
    description:
      'Able to transform enemy attacks into <b>self-healing</b>, Abaddon can survive almost any assault. <b>Shielding allies</b> and launching his <b>double-edged coil</b> at a friend or foe, he is always ready to ride into the thick of battle.',
    bio: "The Font of Avernus is the source of a family's strength, a crack in primal stones from which vapors of prophetic power have issued for generations. Each newborn of the cavernous House Avernus is bathed in the black mist, and by this baptism they are given an innate connection to the mystic energies of the land. They grow up believing themselves fierce protectors of their lineal traditions, the customs of the realm--but what they really are protecting is the Font itself. And the motives of the mist are unclear.\r\n\t\t\t\t<br><br>When the infant Abaddon was bathed in the Font, they say something went awry. In the child's eyes there flared a light of comprehension that startled all present and set the sacerdotes to whispering. He was raised with every expectation of following the path all scions of Avernus took--to train in war, that in times of need he might lead the family's army in defense of the ancestral lands. But Abaddon was always one apart. Where others trained with weapons, he bent himself to meditation in the presence of the mist. He drank deep from the vapors that welled from the Font, learning to blend his spirit with the potency that flowed from far beneath the House; he became a creature of the black mist.\r\n\t\t\t\t<br><br>There was bitterness within the House Avernus--elders and young alike accusing him of neglecting his responsibilities. But all such accusations stopped when Abaddon rode into battle, and they saw how the powers of the mist had given him mastery over life and death beyond those of any lord the House had ever known.",
    role_levels: [1, 2, 0, 0, 0, 2, 0, 0, 0],
    turn_rate: 0.6000000238418579,
    sight_range_day: 1800,
    sight_range_night: 800,
    abilites: [
      {
        locilized_name: 'abaddon_death_coil',
        isAgs: false,
        isAgsShard: false,
        cooldown: '5.5',
        mana_cost: '50',
        name: 'MIST COIL',
        description:
          "Abaddon releases a coil of deathly mist that can damage an enemy unit or heal a friendly unit at the cost of some of Abaddon's health",
        trivia_description:
          'A mysterious vapor from the Font of Avernus now infuses the breath of Abaddon, who releases it at will.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'abaddon_aphotic_shield',
        isAgs: false,
        isAgsShard: false,
        cooldown: '5.5',
        mana_cost: '50',
        name: 'APHOTIC SHIELD',
        description:
          'Summons dark energies around an ally unit, creating a shield that absorbs a set amount of damage before expiring. When the shield is destroyed it will burst and deal damage equal to the amount it could absorb to an area around it. Removes certain types of negative buffs and stuns on cast.<br />DISPEL TYPE: Strong Dispel',
        trivia_description:
          'The powers of the black mist rise to absorb attacks like the black mist absorbs light.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'abaddon_frostmourne',
        isAgs: false,
        isAgsShard: false,
        cooldown: null,
        mana_cost: null,
        name: 'CURSE OF AVERNUS',
        description:
          "Abaddon strikes an enemy, slowing the target's movement speed. If the target gets hit 4 times, they become affected by a chilling curse causing them to be silenced and slowed, and all attacks against them gain an attack speed boost.",
        trivia_description:
          'While the baptized draw strength from the Font, the gifts of Avernus are debilitating to the uninitiated.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'abaddon_borrowed_time',
        isAgs: false,
        isAgsShard: false,
        cooldown: '60.0 / 50.0 / 40.0',
        mana_cost: '0 / 0 / 0',
        name: 'BORROWED TIME',
        description:
          'When activated, all damage dealt to you will heal instead of harm. Most negative buffs will also be removed. If the ability is not on cooldown, it will automatically activate if your health falls below 400.<br />DISPEL TYPE: Strong Dispel',
        trivia_description:
          'The most unnatural of all the gifts of the Font of Avernus, this power defies mortal understanding. What should hurt, instead heals; and what should kill gives strength anew.',
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'abaddon_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'abaddon_frostmourne',
        cooldown: '60.0 / 50.0 / 40.0',
        mana_cost: '0 / 0 / 0',
        name: 'CURSE OF AVERNUS',
        description:
          'Causes Mist Coil and Aphotic Shield to apply a Curse of Avernus stack on enemies. Increase base slow by 10%. Lowers Cooldown for Mist Coil and Aphotic Shield by 1 second.',
        trivia_description: null,
        ability_info: null,
        ability_stats: null,
      },
      {
        locilized_name: 'abaddon_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'abaddon_borrowed_time',
        cooldown: '60.0 / 50.0 / 40.0',
        mana_cost: '0 / 0 / 0',
        name: 'BORROWED TIME',
        description:
          'Increases duration. While Borrowed Time is active, anytime an ally takes more than 525 damage while within 1600 range of Abaddon, an individual Mist Coil will automatically fire towards that ally.',
        trivia_description:
          'The most unnatural of all the gifts of the Font of Avernus, this power defies mortal understanding. What should hurt, instead heals; and what should kill gives strength anew.',
        ability_info: null,
        ability_stats: null,
      },
    ],
  },
  {
    id: 103,
    name: 'npc_dota_hero_elder_titan',
    npe_desc_loc: 'Damages and disables with his astral spirit',
    description:
      'Scouting the way with his <b>astral spirit</b>, Elder Titan can strike from any direction. <b>Halting foes</b> with a stomp of his hoof while his presence <b>eats away at their defenses</b>, he splits the earth itself to bring his enemies low.',
    bio: "Well may you ask, 'How did this world take its form?' Why of all the worlds in creation, has this one its strange properties, its diverse and motley collection of creatures, cultures and lore? 'The answer,' One whispers, 'lies with the Titans.'    <br><br>These original progenitors were there near the Beginning--if not actual witnesses to the creation, then born with it still echoing in their ears. Stamped with the earliest energies of the universe, they wished nothing more than to continue as creators themselves. Thus they bent to the task of shaping matter to their will: hammering and heating, bending and blasting. And when matter proved less challenging than they liked, they turned their tools upon themselves, reshaping their minds and reforging their spirits until they had become beings of great endurance. Reality itself became the ultimate object of their smithing. Yet, along the way, they sometimes erred. In cases of great ambition, mistakes are unavoidable.    <br><br>The one we know as the Elder Titan was a great innovator, one who studied at the forge of creation. In honing his skills, he shattered something that could never be repaired, only thrown aside. He fell into his own broken world, a shattered soul himself. There he dwelt among the jagged shards and fissured planes, along with other lost fragments that had sifted down through the cracks in the early universe. And this is why the world we know resembles an isle of castaways, survivors of a wreck now long forgotten. Forgotten, that is, by all but the One who blames himself. He spends his time forever seeking a way to accomplish the repairs, that he might rejoin the parts of his broken soul, that we and the world alike might all be mended. This is the One we know as Elder Titan.",
    role_levels: [0, 0, 1, 1, 0, 1, 0, 0, 2],
    abilites: [
      {
        locilized_name: 'elder_titan_echo_stomp',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'elder_titan_ancestral_spirit',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'v',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'elder_titan_earth_splitter',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'elder_titan_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'elder_titan_echo_stomp',
      },
      {
        locilized_name: 'elder_titan_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'elder_titan_ancestral_spirit',
      },
    ],
  },
  {
    id: 104,
    name: 'npc_dota_hero_legion_commander',
    npe_desc_loc: 'Increases power with each duel victory',
    description:
      'Marching across the battlefield, Legion Commander <b>challenges lone enemies in single combat</b>. Each duel she wins increases the power of her attacks, until at last she can become a relentless one-woman army.',
    bio: "They came without warning. Within the city walls of Stonehall there came a rumble and a terrible sound, and from blackness unknown came a force of beasts numbering beyond count, wielding flame and foul sorcery, slaying and snatching mothers and sons to dark purpose. Of once-mighty Stonehall's military strength only the Bronze Legion, led by the indomitable Commander Tresdin, was near enough to answer the call of battle. They rode into their city, fighting through bloodstained alleyways and burning markets, cutting their way through the monstrous throng to the source of the sudden invasion: an ethereal rift within the city square, and at its precipice thundered their dreaded champion.    <br><br>Enwrapped in a corrosive shimmer, the leader of the abyssal horde swung its massive blade, cleaving a legionnaire in two as his flesh began to spoil. Tresdin lifted her blood-stained sword and settled her sights on the beast. It turned, smiling at her through a maze of teeth. Heedless of the battle raging around them, they charged one another.    <br><br>Deflecting blow after blow, the pair danced their deadly duel as the Bronze Legion met its end around them. Tresdin leapt forward as her foe swung its sword to meet her. The odds turned. The attack smashed into Tresdin suddenly, a brutal thrust from the side, but even as her balance slipped she rallied her strength for another stroke. Blade scraped on blade, beyond the hilt to the gnarled paw below, carving it in two in a fearsome spray of sparks and blood. The vile audience looked on in astonishment as she pressed the attack, driving her blade through her foe's flesh into the stampeding heart within. With a scream that split the clouds above, the beast erupted in a torrent of gore and anguish. The stygian portal wavered, the power sustaining the chasm beyond vanishing as suddenly as it had appeared. The remaining invaders fell quickly to Stonehall steel.    <br><br>Though victorious, the survivors saw little to celebrate: the city lay in ruins, and survivors were few. Fires continued to spread. Unfurling her banners of war, Tresdin gathered what allies she could. Her anger smoldered as she pledged brutal vengeance upon the forces of the abyss, and damned be any who would dare stand in her way.",
    role_levels: [1, 0, 1, 2, 0, 1, 0, 0, 1],
    abilites: [
      {
        locilized_name: 'legion_commander_overwhelming_odds',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'legion_commander_press_the_attack',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'legion_commander_moment_of_courage',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'legion_commander_duel',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'legion_commander_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'legion_commander_press_the_attack',
      },
      {
        locilized_name: 'legion_commander_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'legion_commander_duel',
      },
    ],
  },
  {
    id: 105,
    name: 'npc_dota_hero_techies',
    npe_desc_loc: 'Surprises enemies with invisible landmines and traps',
    description:
      'For the Techies, battle is a matter of mischief. Giggling while they <b>lay their traps</b> throughout the battlefield, their <b>explosive mines, traps, and remote-activated bombs</b> are often more than enough to surprise careless foes or shatter an enemy offensive.',
    bio: "In the storied saga of Dredger's Bight, no business has ever been more reviled than Techies Demolitions. Then again, Dredger's Bight no longer exists. Nor does Toterin. Or even Trapper Town. In fact, if one were to track the history of Techies Demolitions they might notice that shortly after Techies appear, towns tend to disappear.<br><br>Like every inevitable disaster surrounding Techies, the obliteration of Dredger's Bight began with an invention. Tasked with designing a safer way of detonating explosives in the mines beneath the city, pyrotechnic prodigies Squee, Spleen, and Spoon developed their most outlandish creation yet: a button which, when pressed, would trigger a distant device to spark a fuse.<br><br>Overeager to test their invention, the trio stuffed barrel after barrel with flamesalt explosives, piling every corner of their tiny workshop high with the newly developed remote bombs. From this stockpile they plucked a single payload, burying it in a far away field. As they cowered in a ditch, Spleen pressed the detonator button. Yet after a moment, nothing happened. Confused, he stood up, pressing his button again and again until, finally, an explosion tore a hole in the field. Elated, Squee and Spleen turned toward home just as a massive wave of sound and force arrived to knock them over.<br><br>Bewildered, their ears ringing from the unexpected blast, they gathered in the dingy miasma to see a smoking ruin where their workshop once stood. Chunks of wood and stone continued to fall as the yawning crater before them slowly deepened into an expanding pit. The whole of Dredger's Bight shuddered, and then gradually started to slide into the mines below as its panicked residents fled. <br><br>Sitting at the edge of their sinking home they grinned and giggled, as giddy at the possibilities as they were oblivious to the scorn of their former neighbors. They wondered only one thing: how could they trigger an even bigger blast?",
    role_levels: [0, 0, 3, 1, 0, 0, 0, 0, 0],
    abilites: [
      {
        locilized_name: 'techies_land_mines',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'techies_stasis_trap',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'techies_suicide',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'techies_focused_detonate',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'techies_minefield_sign',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'techies_remote_mines',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'techies_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'techies_suicide',
      },
      {
        locilized_name: 'techies_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'techies_land_mines',
      },
    ],
  },
  {
    id: 106,
    name: 'npc_dota_hero_ember_spirit',
    npe_desc_loc: 'Rapidly strikes and chains his foes',
    description:
      '<b>Swift and elusive</b>, Ember Spirit strikes all nearby enemies in <b>rapid succession</b>, and ties them up with <b>burning chains</b>. Quickly rushing across the battlefield to arrive at one of his <b>exploding remnants</b>, few can avoid, or capture, his flame.',
    bio: "Lost within the Wailing Mountains, the Fortress of Flares lay abandoned, its training halls empty, its courtyard covered in leaves and dust. Upon a dais in its sealed temple rests a topaz cauldron filled with ancient ash, remnants of a pyre for the warrior-poet Xin. For three generations, Xin taught his acolytes the Bonds of the Guardian Flame, a series of mantras to train the mind and body for the harsh realities beyond the fortress walls.    <br><br>However, in teaching a warrior's way he earned a warrior's rivals, and in his autumn Xin was bested and slain. His followers spread to the wind. Yet as years turned to centuries and followers to descendants, his teachings endured by subtle whisper and deed. Touched by the teacher's lasting legacy, the Burning Celestial, inquisitive aspect of fire, cast himself to the Fortress of Flares and reignited the pyre ash. From these glowing embers emerged an image of Xin, wreathed in flame, his thoughtful countenance prepared to train and to teach, and to spread the fires of knowledge to all who seek guidance.",
    role_levels: [2, 0, 1, 1, 0, 0, 3, 0, 1],
    abilites: [
      {
        locilized_name: 'ember_spirit_searing_chains',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'ember_spirit_sleight_of_fist',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'ember_spirit_flame_guard',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'ember_spirit_activate_fire_remnant',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'ember_spirit_fire_remnant',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'ember_spirit_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'ember_spirit_fire_remnant',
      },
      {
        locilized_name: 'ember_spirit_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'ember_spirit_fire_remnant',
      },
    ],
  },
  {
    id: 107,
    name: 'npc_dota_hero_earth_spirit',
    npe_desc_loc: 'Disables and repositions his enemies',
    description:
      'Earth Spirit keeps the enemy in chaos and his friends in the fight. <b>Adapting</b> to any battle scenario, he can send his <b>statue remnants</b> back and forth to <b>damage foes</b>, or grips an ally from the jaws of death.',
    bio: "Deep amid the Upland crags and cliffs there runs a seam of sacred jade long foresworn by highland miners. From this rare material, the likeness of the great general Kaolin was carved and buried at the head of a stone funerary army ten thousand strong--a force of soldiers and holy men, jesters and acrobats, carved by crafstmen and entombed for millennia in the dark embrace of the Earth.    <br><br>What the craftsmen had not known was that within the strange seam of jade flowed the spirit of the Earth itself--an elemental force at one with the planet. When the force within the carved jade found itself cut off from the life's blood of the world, it gathered its strength over the course of a thousand years and dug itself free and into the light. Now the great Kaolin Earth Spirit strides the Upland roads, fighting for the spirit of the Earth; and in times of need calls forth remnants of his buried army still locked in the loving embrace of the soil.",
    role_levels: [0, 0, 2, 1, 0, 1, 2, 0, 1],
    abilites: [
      {
        locilized_name: 'earth_spirit_boulder_smash',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'earth_spirit_rolling_boulder',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'earth_spirit_geomagnetic_grip',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'earth_spirit_stone_caller',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'earth_spirit_magnetize',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'earth_spiri_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'earth_spirit_stone_caller',
      },
      {
        locilized_name: 'earth_spiri_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'earth_spirit_petrify',
      },
    ],
  },
  {
    id: 108,
    name: 'npc_dota_hero_abyssal_underlord',
    npe_desc_loc: 'Teleports his team in and out of battle',
    description:
      'Conjure waves of abyssal flame to immolate <b>enemies held paralyzed</b> in your spiteful grip. Feast upon the carnage of battle, <b>gaining strength</b> as foes perish around you, their attacks diminished by your very presence. Tear a rift in reality to <b>teleport</b> yourself and your teammates across the map, delivering bloody retribution to any who would defy the will of Vrogros the Underlord.',
    bio: 'Neither myth nor song exist to tell of their coming. <br><br>Deep below the surface of the world lay unknown wonders and horrors. Down and down again, well beneath the slithering magma fields and simmering roots of dormant volcanoes stands the obsidian city of Aziyog, its incomparable stonework spanning an endless cavern. Within honeycomb walls mortared with the bones of countless slaves lies the domain of the Abyssal Horde, and their brutal underlord Vrogros. <br><br>Armed by the monstrous forgemasters of his kind and well-practiced in the arts of the Dark Rift, Vrogros is able to conjure forth flame and crippling malice through the twist between worlds. He seeks always to expand his holdings, destroying or enslaving all he encounters. Yet the lands offered by the subterranean realm are few, and so his sights have turned upward. By his command the first waves of abyssal invaders have already marched through the rift, a few doomed legions meant merely to test the might of nations above. Now, as his full force readies itself for unending conquest, Vrogros himself steps into a sunlit world to announce his coming reign. Those who face the Underlord will bow and pay tribute, or be crushed where they stand.',
    role_levels: [0, 1, 1, 1, 0, 1, 2, 0, 0],
    abilites: [
      {
        locilized_name: 'abyssal_underlord_firestorm',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'abyssal_underlord_pit_of_malice',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'abyssal_underlord_atrophy_aura',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'abyssal_underlord_dark_rift',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'abyssal_underlord_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'abyssal_underlord',
      },
      {
        locilized_name: 'abyssal_underlord_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'abyssal_underlord_dark_portal',
      },
    ],
  },
  {
    id: 109,
    name: 'npc_dota_hero_terrorblade',
    npe_desc_loc: 'Transforms into a powerful ranged demon',
    description:
      'With Terrorblade, nothing is as it seems. Conjuring <b>powerful illusions</b> to confuse enemies and break their defenses, the demon marauder can <b>exchange health with foes and friends</b> to stave off death or weaken his enemies.',
    bio: 'Terrorblade is the demon marauder--an outlaw hellion whom even other demons fear. A cosmic iconoclast, he stole from the Demon Lords, ignored the codified rites that should have bound his behavior, and broke every law of the seven Infernal Regions. For his crimes, he was taught this lesson: even Hell has a hell. A short, brutal trial ensued, with many dead on all sides, and he was finally incarcerated in Foulfell, a hidden dimension where demonkind imprison their own.<br><br>But Foulfell is no normal prison. In this dark mirror of reality, demons are sentenced to gaze eternally into the twisted reflection of their own souls. But instead of suffering, Terrorblade made himself master of his own reflected worst self--a raging, thieving demon of unimaginable power. With his inner beast under sway, he destroyed the fractal prison walls and burst free to turn his terror loose upon all creation.',
    role_levels: [3, 0, 1, 0, 0, 0, 0, 2, 0],
    abilites: [
      {
        locilized_name: 'terrorblade_reflection',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'terrorblade_conjure_image',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'terrorblade_metamorphosis',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'terrorblade_sunder',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'terrorblade_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'terrorblade_demon_zeal',
      },
      {
        locilized_name: 'terrorblade_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'terrorblade_terror_wave',
      },
    ],
  },
  {
    id: 110,
    name: 'npc_dota_hero_phoenix',
    npe_desc_loc: 'Heals and damages at the sacrifice of its own health',
    description:
      'Diving into battle, Phoenix <b>blasts enemies</b> and <b>heals allies</b> with rays of solar flame. When the time is right, it can become a burning sun to scorch nearby foes before unleashing a <b>stunning detonation</b> that also restores Phoenix to full strength.',
    bio: "Alone across an untouched darkness gleamed the Keeper's first sun, a singular point of conscious light fated to spread warmth into the empty void. Through aeons beyond count, this blinding beacon set to coalescing its incalculable energy before bursting forth the cataclysmic flare of supernova. From this inferno raced new beacons, star progeny identical to its parent, who journeyed an unlit ocean and settled in constellatory array. In time, they too would be made to propagate through supernova flame. So would this dazzling cycle of birth and rebirth repeat until all skies hewn of Titan toil deigned to twinkle and shine.    <br><br>By this ageless crucible the star that mortals would come to call Phoenix collapsed into being, and like its ancestors was thrust into an endless cosmos to find a place among its stellar brethren. Yet curiosity toward that which the dimming elders comfort in the darkness consumed the fledgling, and so over long cycles it inquired and studied. It learned that among worlds both whole and broken would soon stir a nexus of remarkable variety locked in an enduring conflict of cosmic consequence, a plane which would find itself in need of more influence than a dying sun's distant rays could provide. Thus this infant son of suns took terrestrial form, eagerly travelling to shine its warmth upon those who may need it most, and perhaps seize upon its solar destiny.",
    role_levels: [0, 2, 3, 1, 0, 0, 2, 0, 2],
    abilites: [
      {
        locilized_name: 'phoenix_icarus_dive',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'phoenix_fire_spirits',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'phoenix_sun_ray',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'phoenix_supernova',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'phoenix_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'phoenix_sun_ray',
      },
      {
        locilized_name: 'phoenix_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'phoenix_supernova',
      },
    ],
  },
  {
    id: 111,
    name: 'npc_dota_hero_oracle',
    npe_desc_loc: 'Alters the fates of heroes with his buffs and nukes',
    description:
      'By carefully combining his <b>intricate abilities</b>, Oracle controls the destinies of both friend and foe. <b>Shrouding threatened allies</b> with his false promise, he can grant an ally a few precious moments of protection to destroy an enemy, or even <b>reverse a grisly fate.</b>',
    bio: "Ascendants to the Great Seat of Cymurri had for ages imported their Oracles exclusively from the Ivory Incubarium, high in the hollow peaks of the Zealot's Range, with a downpayment made at the time of the embryo's conception and the balance surrendered on delivery of a mature, well-trained prophet to the Gate of the Graven King.   <br><br>Raised by same Pallid Sybils who bred and birthed them, all sanctioned Oracles were anchored by their physical form to the world we most of us share; meanwhile, their souls roamed far afield, barely bound by the airiest astral umbilicus. From such cosmic roamings the prophets would return, speaking words of fire with tongues of flesh. Their mystic utterances were analyzed by the Cymurri Advisors, who found in them visions of the future, diplomatic advice, all the supernatural ammunition the line of Graven Kings needed to secure victory in every campaign, whether in the court or on the battlefield. Thus it went for generations, the Graventome's pages filling with the names of triumphant kings and the new domains they had acquired. So it went, that is, until the particular Oracle named Nerif arrived to serve the very last of the stone-helmed kings.   <br><br>From the first, Nerif's prophecies were unusual. They seemed not merely to portend the future, but to shape it. The weird soothsayer croaked out advice no one had requested, and suddenly the Cymurri found themselves immersed in conflicts with newfound enemies. The Advisors, sensing a threat to their power, were quick to pin these unwelcome developments on the latest Oracle. They demanded his removal, petitioning the Sybils to reclaim their defective prophet and replace him with a worthy substitute. But Nerif described an ominous dream of the Incubarium's destruction, and within hours came news of the ancient school's destruction in a catastrophic avalanche. Fearing the same fate as the Pallid Sybils, the Advisors withdrew to their counsel chambers, suddenly anxious to avoid the Oracle's notice.    <br><br>The Graven King, however, was a creature of great practicality. He doubted the commitment of his overprudent Advisors. An Oracle of such rarity, he reasoned, ought be used as a weapon to enlarge his domain. He therefore demoted his timid counselors and stationed Nerif at his side. With only a blunt understanding of Nerif's talent, he boldly stated the outcomes he desired, and coaxed Nerif into uttering his wishes as prophecy.    <br><br>At first, all was well. The Last Graven King boasted that by adopting Fate's pet, he had made a plaything of Fate itself. He should have taken it as a warning then when, on the eve of his invasion of the Unsated Satrap's realm, he attempted to coerce a prediction of certain victory from his Oracle, only to hear Nerif quietly mutter, 'It could go either way.' No firmer statement could he force from Nerif's lips. Still, the King was confident in his army. The Satrapy was landlocked, poorly armed, and shut off from all possible allies. He took 'It could go either way' to indicate that with tactical might on his side, there was little risk in his plan.   <br><br>Of course, we now know that he should have taken the sayer's words more literally. Even with careful study of the Annotated Annals of If, what happened on the field before the Unsated Satrap's palace is almost impossible to visualize. It appears that in the midst of the carnage, the battle began to bifurcate. At each pivotal moment, reality calved and broke into bits. Soldiers who staggered and fell in battle also stood sure-footed, forging onward to fight. Their minds also split; the warriors found themselves both dead and alive, existent and non-existent. Victory and defeat were partitioned, so that each separate outcome was experienced in simultaneity by both armies. The universe became a hall of mirrors, with all the mirrors endlessly shattering.   <br><br>The immediate effect on both parties was insanity. Unable to comprehend the state of being both triumphant and defeated, the Graven King's mind dispersed into motes of m",
    role_levels: [0, 3, 3, 2, 0, 0, 1, 0, 0],
    abilites: [
      {
        locilized_name: 'oracle_fortunes_end',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'oracle_fates_edict',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'oracle_purifying_flames',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'oracle_false_promise',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'oracle_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'oracle_false_promise',
      },
      {
        locilized_name: 'oracle_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'oracle_fates_edict',
      },
    ],
  },
  {
    id: 112,
    name: 'npc_dota_hero_winter_wyvern',
    npe_desc_loc: 'Able to force her enemies to attack their own ally',
    description:
      'Winter Wyvern stalks the skies, <b>slowing foes</b> with burning cold as she soars over the battlefield. Should the enemy be foolish enough to gather, she <b>curses them</b> to attack one of their own as she blasts the gathering with <b>icy splinters.</b>',
    bio: "Like many great poets, Auroth just wants time to write, but the Winter Wyvern's life is full of interruptions. The epics of the Eldwurms have a long and colorful history, but some fear that the remaining dragon scholars are not as prolific as they once were, with few lines added to the Eldwurm Eddas since the last age of greatness. Auroth laments: 'We forget that there is more to life than triumph and dominion over enemies. We must also live our lives in the pursuit of creative expression.' She embarks on research expeditions, collecting books for inspiration. But all this research can be terribly distracting, and she spends less time writing than she should. Although she knows she should be lurking in her lair, adding to the Eddas, she finds herself engaged in epic battles against powerful enemies. She loots castles, raids ancient libraries ... and if she happens to heap glory on herself in the process, she tells herself that it's merely a side effect of her research. The fact is, while her skill and power on the battlefield are legendary, her scholarly travails have thus far hardly been the stuff of literary acclaim. But she is not content to stand as a protagonist of heroic lore. She wishes also to create it.",
    role_levels: [0, 3, 1, 2, 0, 0, 0, 0, 0],
    abilites: [
      {
        locilized_name: 'winter_wyvern_arctic_burn',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'winter_wyvern_splinter_blast',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'winter_wyvern_cold_embrace',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'winter_wyvern_winters_curse',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'winter_wyvern_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'winter_wyvern_cold_embrace',
      },
      {
        locilized_name: 'winter_wyvern_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'winter_wyvern_arctic_burn',
      },
    ],
  },
  {
    id: 113,
    name: 'npc_dota_hero_arc_warden',
    npe_desc_loc: 'Creates a copy of himself to split push',
    description:
      'A splintered fragment of the same primordial power as the Ancients themselves, Zet the Arc Warden has pledged to see the clash between Radiant and Dire finally end. <b>Assault lone enemies</b> with fluxing energy, or distort space to generate a <b>protective field</b> around allies. <b>Summon a Spark Wraith</b> to patrol an area for enemies to infuse with harmful magic, then <b>create a double</b> of Zet, items and all, to overwhelm your foes.',
    bio: "Before the beginning of all, there existed a presence: a primordial mind, infinite, awesome, and set to inscrutable purpose. As the universe thundered into being, this mind was fragmented and scattered. Two among its greater fragments--who would come to be named Radiant and Dire--found themselves locked in vicious opposition, and began twisting all of creation to serve their conflict.    <br><br>As war and cataclysm threatened the nascent cosmos, the will of a third fragment made itself known. Naming itself Zet, this intellect sought to resolve the disharmony and return all to perfect unity. Appalled by its kin's conflicting nature, Zet gathered the sum of its power. In a sudden flash, it overwhelmed its siblings, and fused the warring aspects into a stellar sphere before hurling them into the darkness to orbit a nondescript world. Harmony was restored, though only the barest fraction of Zet's strength remained. Setting its gaze on the prison, Zet chose to use its weakened power to serve as watchful warden until time's end. For uncounted aeons, this vigil stood.   <br><br>Life flourished upon the world below, oblivious to the dangers imprisoned within the softly glowing moon, or of Zet's struggles to contain them. As the captives' eternal clash reverberated within, the surface of the prison shuddered, over time beginning to crack. Ultimately, Zet's depleted power proved insufficient to contain the breach, and at last the moon was shattered. The prison's ancient inhabitants had escaped to sow their conflict anew.   <br><br>Flung to the farthest reaches by the prison's explosion, Zet was transformed by the dissonant energies of its former captives. No longer of single form and thought, its presence had become split among many--some lesser, some greater--each connected by a fleeting arc of consciousness. Struggling to suppress its own disunity, Zet sped toward the burgeoning conflict of its siblings, bending its fractured wills toward a singular conclusion: the aspects of the primordial mind must be made to reunite, or all must be destroyed lest the conflict spread further..",
    role_levels: [3, 0, 1, 0, 0, 0, 3, 0, 0],
    abilites: [
      {
        locilized_name: 'arc_warden_flux',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'arc_warden_magnetic_field',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'arc_warden_spark_wraith',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'arc_warden_tempest_double',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'arc_warden_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'arc_warden_magnetic_field',
      },
      {
        locilized_name: 'arc_warden_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'arc_warden_spark_wraith',
      },
    ],
  },
  {
    id: 114,
    name: 'npc_dota_hero_monkey_king',
    npe_desc_loc: 'Springs from the cover of the tree tops',
    description:
      'Always in search of a good fight, Monkey King travels atop the trees aiming to spring from leafy cover and surprise his enemies. Calling upon an <b>army of monkey soldiers</b> to overwhelm opponents, this <b>agile trickster</b> revels in the chaos of battle, ready to slam his legendary staff down on any hopes of escape.',
    bio: "For 500 years the mountain pressed down upon him, only his head free from the crushing weight of the stonewrought prison the elder gods had summoned to halt his childish rebellion. Moss grew along the lines of his exposed face, tufts of grass sprouted from his ears; his vision was framed in wildflowers reaching from the soil around his cheeks. Most thought him long dead, tormented by the gods for waging war against the heavens until naught but his legend survived. But, as the stories go, the Monkey King cannot die.<br><br>So he waited. Until the gods came to offer a chance at absolution, he endured. And when they did come to name the price, Sun Wukong accepted their charge: he would accompany a young acolyte on a secret pilgrimage, protect him from demons and dangers of the road, and guide the man home in possession of a coveted relic. Do that, and humbly obey the human's commands in service to their holy mission, and Wukong would prove himself reformed.<br><br>For a change, Sun Wukong fulfilled his oath to the gods with honor, and atoned for the sins of past insurrections. The acolyte, much learned in hardships, was returned to his home temple, relic in hand; and Wukong-finding himself for the first time in proper standing with any gods of consequence-was content for a short while to give up his old thirst for adventure and glory. But the Monkey King was born for mischief...and offending the gods never gets old.",
    role_levels: [2, 0, 0, 1, 0, 0, 2, 0, 1],
    abilites: [
      {
        locilized_name: 'monkey_king_boundless_strike',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'monkey_king_tree_dance',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'monkey_king_jingu_mastery',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'monkey_king_wukongs_command',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'monkey_king_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'monkey_king_wukongs_command',
      },
    ],
  },
  {
    id: 119,
    name: 'npc_dota_hero_dark_willow',
    npe_desc_loc: 'Has an arsenal of disables at her disposal',
    description:
      "A slight flutter from the shadows may be all an enemy sees of Dark Willow, as she <b>eludes pursuit</b> and <b>controls her foe's movements</b> with cunning fae tricks. Calling upon powers far more ancient than any scholarly magic, she <b>binds enemies in place</b> before unleashing the full wrath and terror of the fae realm upon them.",
    bio: 'Children love telling stories about the whimsical adventures of fairies... That’s because children don’t know that most fairies are spiteful jerks. And in the world of spiteful fairies there are few names spoken of with more contempt than Mireska Sunbreeze.<br><br>Born to a fae merchant king, Mireska grew up in Revtel; a cutthroat nation where manipulation and murder were the norm. But while she was quite adept at navigating the etiquette, unspoken laws, and social rituals that permeated every element of her life, she found the whole thing rather boring.<br><br>So, Mireska did what most rebellious children do: burn down her family estate and set off with her pet wisp Jex to live the life of a wandering grifter.',
    role_levels: [0, 2, 2, 1, 0, 0, 2, 0, 0],
    abilites: [
      {
        locilized_name: 'dark_willow_bramble_maze',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'dark_willow_shadow_realm',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'dark_willow_cursed_crown',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'dark_willow_bedlam',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'dark_willow_terrorize',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'dark_willow_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'dark_willow_cursed_crown',
      },
      {
        locilized_name: 'dark_willow_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'dark_willow_shadow_realm',
      },
    ],
  },
  {
    id: 120,
    name: 'npc_dota_hero_pangolier',
    npe_desc_loc: 'Dashes and rolls in to disrupt enemy movements',
    description:
      "Eager to dash into danger at a moment's notice, the Pangolier thrives on <b>disrupting enemy movements</b> and placing himself in the midst of chaos. Artfully guiding his blade between cracks in armor and shrugging off attacks with his <b>protective scales</b>, this graceful swordsman is always ready to roll into battle.",
    bio: 'The men and women that make up the Nivan Gallants live a life of swordplay, chandelier swinging, and tawdry romance. And while all adhere to their creed that “A life of adventure is the only life worth living,” the exploits of Donté Panlin still manage to raise the eyebrows of even the most hedonistic of swordsmen.<br><br>There is no monster he won’t slay. No creature he won’t woo. No tyrant he won’t stand against. And no noble immune to his silver tongue.',
    role_levels: [2, 0, 2, 1, 0, 1, 2, 0, 2],
    abilites: [
      {
        locilized_name: 'pangolier_swashbuckle',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'pangolier_shield_crash',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'pangolier_lucky_shot',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'pangolier_gyroshell',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'pangolier_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'pangolier_rollup',
      },
      {
        locilized_name: 'pangolier_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'pangolier_shield_crash',
      },
    ],
  },
  {
    id: 121,
    name: 'npc_dota_hero_grimstroke',
    npe_desc_loc: 'Disables enemies with a swipe of his brush',
    description:
      'Skilled at manipulating battle from the outskirts, Grimstroke studies every movement and assesses each line, deciding when to emerge from inky darkness to <b>disable his victims</b> and <b>bind them together</b> with a swipe of his brush. He delights in unleashing phantom thralls to <b>vex opponents</b>, as he carefully considers how to dispatch multiple enemies with one fateful stroke.',
    bio: 'Skilled at manipulating battle from the outskirts, Grimstroke studies every movement and assesses each line, deciding when to emerge from inky darkness to <b>disable his victims</b> and <b>bind them together</b> with a swipe of his brush. He delights in unleashing phantom thralls to <b>vex opponents</b>, as he carefully considers how to dispatch multiple enemies with one fateful stroke.',
    role_levels: [0, 2, 2, 2, 0, 0, 1, 0, 0],
    abilites: [
      {
        locilized_name: 'grimstroke_dark_artistry',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'grimstroke_ink_creature',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'grimstroke_spirit_walk',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'grimstroke_soul_chain',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'grimstroke_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'grimstroke_spirit_walk',
      },
      {
        locilized_name: 'grimstroke_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'grimstroke_dark_portrait',
      },
    ],
  },
  {
    id: 123,
    name: 'npc_dota_hero_hoodwink',
    npe_desc_loc: 'Shackles her enemies to trees',
    description:
      "Always at hand when trouble's afoot, Hoodwink lives to tangle with the threats that fill the haunted forest she adopted as her home. Toting a <b>massive crossbow</b> while still able to <b>scurry through the woodland</b> with the greatest of ease, Hoodwink is nearly impossible to keep tabs on in battle. Lose track and she'll pop out behind you -- your stunned carcass already dangling in one of her <b>nets.</b>",
    bio: "Hoodwink's earliest years were spent in the idyllic expanse of green that once filled the edges of Krimwohl. But as that kingdom grew, and the needs of both her citizens and her armies became ravenous, rival ore and timber barons scratched and clawed to outpace each other in devouring the natural beauty of the border forests, gorging themselves to meet the demands of the changing land.<br><br>To those living in the ancient timberlands, the choice came down to following the line of refugees into the pacified zones, falling to Krimwohl's black powder and steel while defending their homes, or fleeing further north to tempt fate in the haunted glens and groves of the misty Wood Tomo'kan.<br><br>So it was in those treacherous northern mistwoods that Hoodwink came of age, dodging the horrific predators of the Tomo'kan, ingratiating herself with some of the local banditry whilst antagonizing others, and finding absolutely every which way to be underfoot whenever some interesting mischief arose--often <i>allegedly</i> the cause of it.<br><br>But when the faintest whiff of Krimwohl's fires eventually drifted into her adopted home, Hoodwink's thoughts turned to any family and friends who might have survived the invasion--now made to eke out lives in the razed lands whose wounds scarred her very soul--and she couldn't help but approach the edges of civilization to get a glimpse of the devils that had destroyed her old life.<br><br>There, she saw that the monsters from her childhood weren't monsters at all. They were just...people. Soldiers, laborers, merchants...and refugees. And the soldiers, even with their black powder and steel, were nothing compared to the dangers of the Tomo'kan--real dangers with tentacles and teeth--dangers she danced around like a twirling maple seed.<br><br>Knowing she can always find safe passage in the tangles of the Tomo'kan, where most warm-blooded folk wisely fear to tread, Hoodwink now strikes out against those who dare try to further pacify the wilds, happily taking what she likes from their belongings, destroying what she has no use for, and helping guide any kindred survivors back to a life in the green once again.",
    role_levels: [0, 2, 2, 1, 0, 0, 2, 0, 0],
    abilites: [
      {
        locilized_name: 'hoodwink_acorn_shot',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'hoodwink_bushwhack',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'hoodwink_scurry',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'hoodwink_sharpshooter',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'hoodwink_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'hoodwink_decoy',
      },
      {
        locilized_name: 'hoodwink_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'hoodwink_hunters_boomerang',
      },
    ],
  },
  {
    id: 126,
    name: 'npc_dota_hero_void_spirit',
    npe_desc_loc: 'Steps in and out of the mortal plane to strike his foes',
    description:
      'Privy to secrets that would shatter a mortal mind, the Void Spirit emerges from his Hidden Temple to stand guard over <b>multiple areas of the battlefield</b> at once. Able to step into and out of the mortal plane at will, he easily <b>outmaneuvers opponents</b> to strike from wherever he desires, calling upon the powers of the aether to <b>shield him</b> in times of need.',
    bio: 'Not even the other spirits claim to understand the mind and machinations of the eldest amongst them, Inai the Void Spirit. Privy to secrets that would shatter a mortal mind, the Void Spirit observes the workings of the universe from an unknowable vantage, choosing to let carefully groomed servants do his bidding -- only emerging from his Hidden Temple into the material plane when he deems that he alone can steer the course of reality along its proper path.<br><br>With an expansive perspective on existence, Inai is focused intently on a point in time beyond which he cannot see, when the fabrics of multiple realities are fated to collide. Now he steps from the aether to personally resolve the battle of the Ancients and prepare his allies for what he views as a greater conflict to come.',
    role_levels: [2, 0, 2, 1, 0, 0, 3, 0, 0],
    abilites: [
      {
        locilized_name: 'void_spirit_aether_remnant',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'void_spirit_dissimilate',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'void_spirit_resonant_pulse',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'void_spirit_astral_step',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'void_spirit_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'void_spirit_dissimilate',
      },
      {
        locilized_name: 'void_spirit_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'void_spirit_resonant_pulse',
      },
    ],
  },
  {
    id: 128,
    name: 'npc_dota_hero_snapfire',
    npe_desc_loc: 'Mows down her enemies with heavy artillery and trusty lizard',
    description:
      "Just as happy to blow your legs off with her <b>trusty scattergun</b> as to fill your belly up with a <b>deliciously-dangerous cookie</b>, Beatrix Snapfire delights in riding into battle with her dragon toad Mortimer, always ready to mow down their enemies with her homemade heavy artillery or finish them off with a steady barrage of <b>Mortimer's firespit globs.</b>",
    bio: "Beatrix Snapfire and her dragon toad Mortimer are a welcome sight to the ragged folk who scratch out lives along the desert routes and oases scattered throughout Nanarak, the rain-forsaken gateway to the Outlands.<br><br>As well known for her unrivaled skills as a weaponsmith as for dispensing wisdom, mirth, and the meanest firesnap cookies the world has ever seen, Beadie's survived to a ripe old age in a young keen's trade by being quick with her wits and even quicker with her guns.<br><br>Indeed, the Outlands are littered with the bones of bandits and ne'er-do-wells who thought to take advantage of her small stature and propensity for kindness.",
    role_levels: [0, 1, 3, 1, 0, 0, 1, 0, 0],
    abilites: [
      {
        locilized_name: 'snapfire_scatterblast',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'snapfire_firesnap_cookie',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'snapfire_lil_shredder',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'snapfire_mortimer_kisses',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'snapfire_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'snapfire_scatterblast',
      },
      {
        locilized_name: 'snapfire_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'snapfire_gobble_up',
      },
    ],
  },
  {
    id: 129,
    name: 'npc_dota_hero_mars',
    npe_desc_loc: 'Traps his foes in an inescapable arena',
    description:
      "The warrior deity Mars thrives in the heart of strife, guarded by the bulk of a <b>deadly shield</b> as he skewers enemies with his <b>legendary spear</b>. He revels in facing opponents in an arena ringed with loyal spearmen—who guarantee that no one escapes and that whatever odds he's facing, the god of war can <b>dictate the terms of battle</b> knowing the crowd is forever on his side.",
    bio: 'Mars, first son of heaven, spent a long existence waging endless war, and saw countless more crusades waged beneath the banner of his old name. Wars of conquest and of vengeance. Just and unjust... Always cruel. So much like his father, Mars indulged his basest impulses--with inclinations much more monstrous than those of Zeus--and he inflicted suffering untold.<br><br>But as the epochs vanished behind him, the selfish ways of his father--the ways of many amongst his godly kin, they who judged <i>him</i> despicable--eventually began to ring hollow. War for its own sake was no longer enough to satisfy his desires. For the first time in his ageless days, the god of war began to question to what ends he swung his glorious spear.<br><br>As the Fates would have it, his solution came easily: he must wage war for a larger purpose, and inspire more than mere savagery and sorrow at the sight of his crest. He must at last lay claim to the mantle of leadership that is his birthright, for the time has come to burn down the pantheon of the old age and build a just new empire atop the ashes of his kin. Only then might he find satisfaction, and make the glory of Mars evident to all.',
    role_levels: [1, 0, 0, 2, 0, 3, 0, 0, 2],
    abilites: [
      {
        locilized_name: 'mars_spear',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'mars_gods_rebuke',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'mars_bulwark',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'mars_arena_of_blood',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'mars_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'mars_spear',
      },
      {
        locilized_name: 'mars_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'mars_bulwark',
      },
    ],
  },
  {
    id: 135,
    name: 'npc_dota_hero_dawnbreaker',
    npe_desc_loc: 'Leaps to aid her allies, wherever they are on the map',
    description:
      'Dawnbreaker shines in the heart of battle, happily <b>crushing enemies with her celestial hammer</b> and <b>healing nearby allies</b>. She revels in hurling her hammer through multiple foes and then converging with it in a blazing wake, always waiting to tap her true cosmic power to <b>fly to the aid of her teammates</b> — eager to rout her enemies on the battlefield no matter where they are.',
    bio: "In the aeons after the Keeper's exodus birthed the age of light, some amongst the first sun's lineage began to align against the chaos their ancestor's maker left chasing in his wake. Calling themselves the Children of Light, they saw no one else as worthy of taking up the Keeper's abandoned mantle, and they yearned to beat back the onslaught of darkness, creating glorious armies built to purge the cosmos of all creatures of primordial night.<br><br>Valora, the Dawnbreaker, most prized warrior amongst the Children's ancient creations, is the shining herald of the majesty of order and light. Molded from the heart of a young metallic star, and charged by golden breath with new life, Valora was called to spread the glow of the Children's wisdom to the darkest reaches of the universe — setting fire to the heavens with each swing of her celestial hammer amidst an endless battle to keep chaos at bay.<br><br>In time, the Children also revealed another purpose for the Dawnbreaker. They had discovered a means of permeating the entirety of the cosmos with their inner light — to obliterate all aspects of darkness forever — and they sent Valora to seize a source of great power, the final piece of their ultimate plan. But for the first time, Valora and her hammer met with failure, and the price she and her masters paid was vast. The Children of Light's spark was utterly extinguished, and the Dawnbreaker was left adrift in a black expanse, lost for untold millennia before crashing on an unfamiliar world.<br><br>There she rested, dormant, until the presence of a wandering young star gave fuel to an ancient energy forge — a relic of the Children's that, like her, lay buried for countless ages beneath a blowing red waste. Now, with a small measure of her former powers restored by the forge, Valora wakes to a land beset by war and the unrelenting forces of chaos. She knows her gods may be gone, but the heft of the Dawnbreaker's hammer remains — matched only by her will to wield it justly in the name of goodness and light.",
    role_levels: [1, 0, 0, 0, 0, 2, 0, 0, 0],
    abilites: [
      {
        locilized_name: 'dawnbreaker_fire_wreath',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'dawnbreaker_celestial_hammer',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'dawnbreaker_luminosity',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'dawnbreaker_solar_guardian',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'dawnbreaker_aghanims_shard',
        isAgs: false,
        isAgsShard: true,
        imgUrl: 'dawnbreaker_fire_wreath',
      },
      {
        locilized_name: 'dawnbreaker_aghanims_scepter',
        isAgs: true,
        isAgsShard: false,
        imgUrl: 'dawnbreaker_solar_guardian',
      },
    ],
  },
  {
    id: 136,
    name: 'npc_dota_hero_marci',
    npe_desc_loc: 'Dashes around pummeling enemies with rapid attacks.',
    description:
      'Proving that undying loyalty yields unrivaled power, Marci always marches into battle <b>ready to raise fists</b> in defense of her companions. Effortlessly <b>flinging friends and foes</b> around the battlefield, she happily <b>bounds into any brawl</b>, able to <b>grant allies a deadly edge</b> and <b>unleash a hidden power</b> strong enough to make even gods reconsider the wisdom of a hostile path.',
    bio: "Admired by many, Marci's origins are known to nameless few. She travels mostly in the company of the Princess Mirana, but the roots of their friendship are entwined in secrets neither would ever needlessly reveal. To allies, she serves as fierce and honest companion. To enemies, she acts as dauntless deterrence against harming any she deems friend. Though unwise opponents may consider her size unremarkable, Marci possesses an inner power that imbues her strikes with incredible might. She'll decimate those who think to test her, but those who earn her favor will have an unflappable confidant for life.",
    role_levels: [1, 1, 0, 1, 0, 0, 1, 0, 2],
    abilites: [
      {
        locilized_name: 'marci_grapple',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'marci_companion_run',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'marci_guardian',
        isAgs: false,
        isAgsShard: false,
      },
      {
        locilized_name: 'marci_unleash',
        isAgs: false,
        isAgsShard: false,
      },
    ],
  },
];

const GetSingleHeroData = props => {
  const { heroName } = props;
  return heroData.find(hero => hero.name === heroName);
};

export default GetSingleHeroData;
