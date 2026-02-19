export const MARKET_ITEMS = {
  marta_merchant: [
    {
      id: 'item_001',
      name: 'Nano-Stim Capsule',
      price: 50,
      description: 'A high-tech capsule that heals minor wounds.',
      effect: { hp: 25 },
      image: require('./nano-stim-cap.png'), // Fixed typo in filename reference
      category: 'healing',
      rarity: 'common'
    },
    {
      id: 'item_010',
      name: 'Military Med-Crate',
      price: 500,
      description: 'Full field repair kit for serious injuries.',
      effect: { hp: 100 },
      image: require('./military-med-kit.png'),
      category: 'healing',
      rarity: 'rare'
    }
  ]
};