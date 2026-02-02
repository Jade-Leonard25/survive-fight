export const GAME_CONFIG = {
  DROP_RATES: {
    immortal: 0.1,
    mythic: 0.9,
    legendary: 4,
    rare: 15,
    uncommon: 30,
    common: 50
  },
  
  DIFFICULTY: {
    easy: {
      mobCount: 5,
      mobHealth: 1.0,
      mobDamage: 1.0,
      mobSpeed: 1.0,
      bossSpawnTime: 180,
      expMultiplier: 1.0,
      dropBonus: 0,
      waveInterval: 15
    },
    medium: {
      mobCount: 10,
      mobHealth: 1.5,
      mobDamage: 1.3,
      mobSpeed: 1.2,
      bossSpawnTime: 120,
      expMultiplier: 1.5,
      dropBonus: 5,
      waveInterval: 12
    },
    hard: {
      mobCount: 20,
      mobHealth: 2.5,
      mobDamage: 2.0,
      mobSpeed: 1.5,
      bossSpawnTime: 60,
      expMultiplier: 2.5,
      dropBonus: 15,
      waveInterval: 10
    }
  },

  CHARACTER_DESCRIPTION: {
    object: {
      characterId: '001',
      characterName: '',
      characterLevel: 0,
      inventory: [], // items equipped and stored
      skills: [], // unlocked skills
      buffs: [], // active buffs/debuffs
      friends: [], // friend list
      messages: [], // inbox messages
      requests: [], // pending requests
      quests: [], // active/completed quests
      attack: 0,
      defense: 0,
      crit: 0,
      crit_chance: 0,
      hit_chance: 0,
      regen: 0,
      magic_damage: 0,
      magic_defense: 0,
      physical_defense: 0,
      hit_points: 0,
      max_hit_points: 0,
      mana: 0,
      max_mana: 0,
      achievements: [],
      experience: 0,
      experienceToLevel: 100,
      gold: 0,
      gems: 0,
      createdAt: null,
      lastLogin: null
    }
  },

  PLAYER_BASE: {
    hp: 100,
    maxHp: 100,
    mana: 50,
    maxMana: 50,
    attackSpeed: 1.0,
    damage: 10,
    speed: 150,
    firingPattern: 'hexagon',
    defense: 5,
    crit: 1.5,
    crit_chance: 0.1,
    hit_chance: 0.85,
    regen: 1, // HP per second
    magic_damage: 0,
    magic_defense: 0,
    physical_defense: 5
  },

  FIRING_PATTERNS: {
    circular: { projectiles: 1, spread: 360, name: 'Circular' },
    hexagon: { projectiles: 6, spread: 60, name: 'Hexagon' },
    star: { projectiles: 8, spread: 45, name: 'Star' },
    targeted: { projectiles: 3, tracking: true, name: 'Targeted' }
  },

  AUTO_SKILLS: {
    enabled: true,
    cooldownReduction: 0,
    smartCasting: true
  },

  MOB_BASE: {
    hp: 50,
    damage: 10,
    speed: 50,
    size: 20,
    contactDamageInterval: 1.0
  },

  BOSS_BASE: {
    hp: 500,
    damage: 30,
    speed: 30,
    size: 50
  },

  PROJECTILE: {
    speed: 300,
    size: 5,
    lifetime: 3
  },

  LOOT: {
    collectRadius: 30,
    rarityColors: {
      immortal: '#ff00ff',
      mythic: '#ff6600',
      legendary: '#ffd700',
      rare: '#0099ff',
      uncommon: '#00ff00',
      common: '#ffffff'
    }
  },

  WAVE: {
    mobScaling: 0.1,
    spawnDelay: 0.5
  },

  LEVEL_SCALING: {
    hpPerLevel: 10,
    manaPerLevel: 5,
    attackPerLevel: 2,
    defensePerLevel: 1,
    expMultiplier: 1.5
  }
};