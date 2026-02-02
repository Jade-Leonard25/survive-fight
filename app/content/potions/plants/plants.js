import HelixVineImg from './HelixVine.png';
import VenomVeinImg from './VenomVein.png';
import FortuneSprigImg from './FortuneSprig.png';
import ShieldMonsteraImg from './ShieldMonstera.png';
import TwilightPetalImg from './TwilightPetal.png';

const botanicalAssets = [
  {
    id: 1,
    name: "HelixVine",
    image: HelixVineImg,
    description: "A spiraling, bioluminescent vine that glows with an internal turquoise light.",
    element: "Arcane",
    rarity: "Rare",
    effect: "Increases Spell Casting speed by 15% for 2 minutes.",
    calculations: {
      type: 'attackSpeed',
      multiplier: 1.15,
      duration: 120, // seconds
      stackable: false
    }
  },
  {
    id: 2,
    name: "VenomVein",
    image: VenomVeinImg,
    description: "A broad leaf with deep purple patterns, often found near poisonous bogs.",
    element: "Poison",
    rarity: "Uncommon",
    effect: "Adds +10 Poison Damage to weapon strikes for 90 seconds; stackable up to 3 times.",
    calculations: {
      type: 'damage',
      bonus: 10,
      duration: 90, // 1.5 minutes
      maxStacks: 3,
      stackable: true,
      damageType: 'poison'
    }
  },
  {
    id: 3,
    name: "FortuneSprig",
    image: FortuneSprigImg,
    description: "A vibrant cluster of four-leaf sprouts believed to guide lost travelers.",
    element: "Nature",
    rarity: "Epic",
    effect: "Boosts Luck stat by +20 for 3 minutes, increasing rare loot drop rates.",
    calculations: {
      type: 'luck',
      bonus: 20,
      duration: 180, // 3 minutes
      stackable: false
    }
  },
  {
    id: 4,
    name: "ShieldMonstera",
    image: ShieldMonsteraImg,
    description: "A thick, durable tropical leaf used as a natural component for light armor.",
    element: "Earth",
    rarity: "Common",
    effect: "Reduces incoming Physical Damage by 5% for 60 seconds when carried in the inventory.",
    calculations: {
      type: 'damageReduction',
      reduction: 0.05, // 5%
      duration: 60, // 1 minute
      stackable: true,
      maxStacks: 5 // Max 25% reduction
    }
  },
  {
    id: 5,
    name: "TwilightPetal",
    image: TwilightPetalImg,
    description: "An elegant purple bloom that only opens under the light of a crescent moon.",
    element: "Shadow",
    rarity: "Legendary",
    effect: "Grants 'Invisibility' for 10 seconds or until the next offensive action.",
    calculations: {
      type: 'invisibility',
      duration: 10, // seconds
      breaksOnAttack: true,
      stackable: false
    }
  }
];

export default botanicalAssets;