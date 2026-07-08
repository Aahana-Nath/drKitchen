export interface ProductDetail {
  slug: string
  name: string
  hindi: string
  subtitle: string
  tagline: string
  category: string
  tag: string
  image: string
  heroBg?: string
  heroFeatures: Array<{ icon: string; label: string }>
  aboutText: string[]
  aboutImage: string
  whyFeatures: Array<{ icon: string; label: string }>
  sourcedFrom: { location: string; desc: string }
  characteristics: Array<{ name: string; value: number }>
  bestUsedFor: Array<{ name: string; image: string }>
  pairsWith: Array<{ name: string; image: string }>
  process: Array<{ label: string; icon: string }>
  nutritional: Array<{ name: string; icon: string }>
  gallery: string[]
  recipes: Array<{ name: string; image: string }>
  faq: Array<{ q: string; a: string }>
  relatedSlugs: string[]
}

const S3 = 'https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent'
const PX = 'https://images.pexels.com/photos'

const COMMON_PROCESS = [
  { label: 'Farm\nSelection',       icon: 'fas fa-seedling' },
  { label: 'Harvesting',             icon: 'fas fa-leaf' },
  { label: 'Cleaning &\nSorting',    icon: 'fas fa-filter' },
  { label: 'Low Temp\nGrinding',     icon: 'fas fa-circle-notch' },
  { label: 'Quality\nTesting',       icon: 'fas fa-microscope' },
  { label: 'Hygienic\nPacking',      icon: 'fas fa-box' },
  { label: 'From Our Kitchen\nto Yours', icon: 'fas fa-home' },
]

const ALL_PRODUCTS: ProductDetail[] = [
  // ─── TURMERIC POWDER ────────────────────────────────────────────────────────
  {
    slug: 'turmeric-powder',
    name: 'Turmeric Powder',
    hindi: 'हल्दी पाउडर',
    subtitle: 'The Golden Root of India',
    tagline: 'Pure. Vibrant. Naturally rich in Curcumin.\nScientifically processed to preserve aroma.',
    category: 'Spice Powders',
    tag: 'Bestseller',
    image: `${S3}/46b4bcb9-0f6b-48fe-8ded-91aed109a631_removalai_preview.png`,
    heroBg: 'https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/4a95c3ce-68b9-4e10-9f2f-3d8e3b49c8fe_bg1acq',
    heroFeatures: [
      { icon: 'fas fa-leaf',         label: 'Pure &\nNatural' },
      { icon: 'fas fa-tint',         label: 'Rich in\nCurcumin' },
      { icon: 'fas fa-ban',          label: 'No Artificial\nColours' },
      { icon: 'fas fa-shield-alt',   label: 'Hygienically\nProcessed' },
    ],
    aboutText: [
      'DrKitchen turmeric is born in the world\'s finest spice growing regions, where the soil is rich and the sun is kind.',
      'DrKitchen turmeric is carefully sourced from select farms and hygienically processed on advanced production lines. They are gently ground to preserve and retain their natural colour, fresh aroma, rich flavour and precious essential oils.',
      'DrKitchen turmeric powder carries nature\'s purity and warmth from farm to kitchen. They are exactly as mother nature intended.',
    ],
    aboutImage: 'https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/Screenshot_2026-07-03_at_21.29.31_qtnkmi',
    whyFeatures: [
      { icon: 'fas fa-tint',          label: 'Naturally Rich\nin Curcumin' },
      { icon: 'fas fa-thermometer-quarter', label: 'Low Temperature\nGround' },
      { icon: 'fas fa-flask',         label: 'Natural Essential\nOils Preserved' },
      { icon: 'fas fa-ban',           label: 'No Artificial\nColours' },
      { icon: 'fas fa-shield-alt',    label: 'Hygienically\nProcessed' },
      { icon: 'fas fa-box',           label: 'Moisture Protected\nPacking' },
    ],
    sourcedFrom: {
      location: 'Erode, Tamil Nadu',
      desc: 'Known as India\'s turmeric capital. The fertile soil and ideal climate produce turmeric naturally rich in curcumin.',
    },
    characteristics: [
      { name: 'Colour',      value: 88 },
      { name: 'Aroma',       value: 75 },
      { name: 'Earthiness',  value: 65 },
      { name: 'Heat',        value: 18 },
      { name: 'Bitterness',  value: 20 },
    ],
    bestUsedFor: [
      { name: 'Dal',          image: 'https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/Dal-Fry-Recipe_uvcwyx' },
      { name: 'Sabzi',        image: `${PX}/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Curries',      image: `${PX}/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Golden Milk',  image: 'https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/Golden-Milk_mwhypv' },
    ],
    pairsWith: [
      { name: 'Black Pepper', image: `${PX}/39347/pexels-photo-39347.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Coriander',    image: `${PX}/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Cumin',        image: `${PX}/2267872/pexels-photo-2267872.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Cardamom',     image: `${PX}/4198936/pexels-photo-4198936.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Garam Masala', image: `${PX}/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=200` },
    ],
    process: COMMON_PROCESS,
    nutritional: [
      { name: 'Curcumin',          icon: 'fas fa-flask' },
      { name: 'Essential Oils',    icon: 'fas fa-tint' },
      { name: 'Dietary Fibre',     icon: 'fas fa-leaf' },
      { name: 'Natural Pigments',  icon: 'fas fa-palette' },
      { name: 'Antioxidants',      icon: 'fas fa-shield-alt' },
    ],
    gallery: [
      `${PX}/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/4198919/pexels-photo-4198919.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/4873572/pexels-photo-4873572.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400`,
    ],
    recipes: [
      { name: 'Turmeric Milk',    image: `${PX}/4873572/pexels-photo-4873572.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Paneer Curry',     image: `${PX}/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Dal Tadka',        image: `${PX}/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Vegetable Curry',  image: `${PX}/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Biryani',          image: `${PX}/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Masala Tea',       image: `${PX}/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=300` },
    ],
    faq: [
      { q: 'Why is DrKitchen turmeric brighter?',  a: 'Our turmeric is sourced from Erode — known for the highest curcumin content — and ground at low temperatures to preserve its natural golden pigment.' },
      { q: 'What is Curcumin?',                     a: 'Curcumin is the active compound in turmeric responsible for its golden colour, earthy aroma, and celebrated health properties.' },
      { q: 'Why low temperature grinding?',         a: 'Heat destroys volatile oils and reduces curcumin potency. Our cold-grinding process keeps every grain as potent as nature intended.' },
      { q: 'How should I store turmeric?',           a: 'Store in a cool, dry place away from direct sunlight. Our moisture-protected pouch already extends shelf life significantly.' },
      { q: 'Why is aroma important?',                a: 'Aroma indicates the presence of natural essential oils. Strong aroma = better flavour and higher biological activity.' },
    ],
    relatedSlugs: ['red-chilli-powder', 'coriander-powder', 'garam-masala', 'kitchen-king', 'cumin-seeds'],
  },

  // ─── RED CHILLI POWDER ───────────────────────────────────────────────────────
  {
    slug: 'red-chilli-powder',
    name: 'Red Chilli Powder',
    hindi: 'लाल मिर्च पाउडर',
    subtitle: 'Fire & Colour in Every Grain',
    tagline: 'Byadagi & Kashmiri blend.\nDeep colour, authentic heat, aromatic finish.',
    category: 'Spice Powders',
    tag: 'Popular',
    image: `${S3}/red_chili.png`,
    heroFeatures: [
      { icon: 'fas fa-fire',         label: 'Bold\nHeat' },
      { icon: 'fas fa-palette',      label: 'Deep\nColour' },
      { icon: 'fas fa-ban',          label: 'No Artificial\nColours' },
      { icon: 'fas fa-shield-alt',   label: 'Hygienically\nProcessed' },
    ],
    aboutText: [
      'DrKitchen red chillies are born in the world\'s finest spice growing regions, where the soil is rich and the sun is kind.',
      'DrKitchen red chillies are carefully sourced from select farms and hygienically processed on advanced production lines. They are gently ground to preserve and retain their natural colour, fresh aroma, rich flavour and precious essential oils.',
      'DrKitchen red chilli powder carries nature\'s purity and warmth from farm to kitchen. They are exactly as mother nature intended.',
    ],
    aboutImage: `${PX}/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=280`,
    whyFeatures: [
      { icon: 'fas fa-fire',              label: 'Perfect Heat\nBalance' },
      { icon: 'fas fa-palette',           label: 'Deep Natural\nColour' },
      { icon: 'fas fa-flask',             label: 'Capsaicin\nPreserved' },
      { icon: 'fas fa-ban',               label: 'No Artificial\nColours' },
      { icon: 'fas fa-shield-alt',        label: 'Hygienically\nProcessed' },
      { icon: 'fas fa-box',               label: 'Airtight\nPacking' },
    ],
    sourcedFrom: { location: 'Byadagi & Kashmir', desc: 'Byadagi, Karnataka gives the iconic deep red colour while Kashmiri chilli adds warm heat — an unbeatable combination.' },
    characteristics: [
      { name: 'Colour',   value: 92 },
      { name: 'Heat',     value: 72 },
      { name: 'Aroma',    value: 68 },
      { name: 'Smoke',    value: 40 },
      { name: 'Tanginess',value: 25 },
    ],
    bestUsedFor: [
      { name: 'Curries',     image: `${PX}/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Tandoor',     image: `${PX}/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Gravies',     image: `${PX}/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Marinades',   image: `${PX}/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Chutneys',    image: `${PX}/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Pickles',     image: `${PX}/4198936/pexels-photo-4198936.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Stir Fry',    image: `${PX}/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=200` },
    ],
    pairsWith: [
      { name: 'Turmeric',    image: `${PX}/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Coriander',   image: `${PX}/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Cumin',       image: `${PX}/2267872/pexels-photo-2267872.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Garlic',      image: `${PX}/4198936/pexels-photo-4198936.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Garam Masala',image: `${PX}/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=200` },
    ],
    process: COMMON_PROCESS,
    nutritional: [
      { name: 'Capsaicin',       icon: 'fas fa-fire' },
      { name: 'Vitamin C',       icon: 'fas fa-lemon' },
      { name: 'Antioxidants',    icon: 'fas fa-shield-alt' },
      { name: 'Natural Pigments',icon: 'fas fa-palette' },
      { name: 'Essential Oils',  icon: 'fas fa-tint' },
    ],
    gallery: [
      `${PX}/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=400`,
    ],
    recipes: [
      { name: 'Butter Chicken',  image: `${PX}/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Chilli Paneer',   image: `${PX}/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Aloo Fry',        image: `${PX}/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Egg Curry',       image: `${PX}/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Masala Fish',     image: `${PX}/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Spicy Biryani',   image: `${PX}/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=300` },
    ],
    faq: [
      { q: 'What makes DrKitchen chilli so vibrant?',   a: 'We blend Byadagi (colour-rich) with Kashmiri (heat) chillies for a perfect balance that delivers both colour and flavour.' },
      { q: 'Is it very spicy?',                          a: 'Medium heat. The Byadagi chilli adds deep colour with mild heat; Kashmiri adds warmth. Together they are balanced and aromatic.' },
      { q: 'Can I use it for tandoor marination?',       a: 'Absolutely. The deep red colour and aromatic oils make it ideal for tikka and tandoor marinades.' },
      { q: 'Does it contain added colours?',             a: 'Never. The vibrant red is entirely from the natural pigment of Byadagi chillies.' },
      { q: 'How long does it stay fresh?',               a: 'Up to 18 months in our moisture-protected pack. Once opened, store in an airtight container away from sunlight.' },
    ],
    relatedSlugs: ['turmeric-powder', 'coriander-powder', 'garam-masala', 'kitchen-king', 'cumin-seeds'],
  },

  // ─── CORIANDER POWDER ────────────────────────────────────────────────────────
  {
    slug: 'coriander-powder',
    name: 'Coriander Powder',
    hindi: 'धनिया पाउडर',
    subtitle: 'The Soul of Indian Gravies',
    tagline: 'Freshly ground from premium Rajasthani seeds.\nEarthy, aromatic, and naturally cooling.',
    category: 'Spice Powders',
    tag: 'New',
    image: `${S3}/coriander.png`,
    heroFeatures: [
      { icon: 'fas fa-leaf',       label: 'Freshly\nGround' },
      { icon: 'fas fa-wind',       label: 'Rich\nAroma' },
      { icon: 'fas fa-ban',        label: 'No Artificial\nAdditives' },
      { icon: 'fas fa-shield-alt', label: 'Hygienically\nProcessed' },
    ],
    aboutText: [
      'DrKitchen coriander is born in the world\'s finest spice growing regions, where the soil is rich and the sun is kind.',
      'DrKitchen coriander is carefully sourced from select farms and hygienically processed on advanced production lines. They are gently ground to preserve and retain their natural colour, fresh aroma, rich flavour and precious essential oils.',
      'DrKitchen coriander powder carries nature\'s purity and warmth from farm to kitchen. They are exactly as mother nature intended.',
    ],
    aboutImage: `${PX}/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=280`,
    whyFeatures: [
      { icon: 'fas fa-leaf',              label: 'Premium\nRajasthani Seeds' },
      { icon: 'fas fa-wind',              label: 'High Essential\nOil Content' },
      { icon: 'fas fa-thermometer-quarter', label: 'Cold-Ground\nProcess' },
      { icon: 'fas fa-ban',               label: 'No Artificial\nAdditives' },
      { icon: 'fas fa-shield-alt',        label: 'Hygienically\nProcessed' },
      { icon: 'fas fa-box',               label: 'Aroma-Locked\nPacking' },
    ],
    sourcedFrom: { location: 'Ramganj Mandi, Rajasthan', desc: 'India\'s largest coriander market. Ramganj Mandi seeds are prized for their extraordinary aroma and essential oil content.' },
    characteristics: [
      { name: 'Aroma',      value: 85 },
      { name: 'Earthiness', value: 70 },
      { name: 'Colour',     value: 55 },
      { name: 'Heat',       value: 10 },
      { name: 'Citrus',     value: 62 },
    ],
    bestUsedFor: [
      { name: 'Gravies',     image: `${PX}/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Dal',         image: `${PX}/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Curries',     image: `${PX}/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Chutneys',    image: `${PX}/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Sabzi',       image: `${PX}/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Soups',       image: `${PX}/4873572/pexels-photo-4873572.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Marinades',   image: `${PX}/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=200` },
    ],
    pairsWith: [
      { name: 'Turmeric',    image: `${PX}/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Cumin',       image: `${PX}/2267872/pexels-photo-2267872.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Red Chilli',  image: `${PX}/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Garlic',      image: `${PX}/4198936/pexels-photo-4198936.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Garam Masala',image: `${PX}/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=200` },
    ],
    process: COMMON_PROCESS,
    nutritional: [
      { name: 'Essential Oils', icon: 'fas fa-tint' },
      { name: 'Linalool',       icon: 'fas fa-flask' },
      { name: 'Dietary Fibre',  icon: 'fas fa-leaf' },
      { name: 'Antioxidants',   icon: 'fas fa-shield-alt' },
      { name: 'Vitamin K',      icon: 'fas fa-star' },
    ],
    gallery: [
      `${PX}/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400`,
    ],
    recipes: [
      { name: 'Paneer Butter Masala', image: `${PX}/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Dal Makhani',          image: `${PX}/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Aloo Sabzi',           image: `${PX}/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Green Chutney',        image: `${PX}/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Rajma',                image: `${PX}/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Pav Bhaji',            image: `${PX}/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=300` },
    ],
    faq: [
      { q: 'What makes Rajasthani coriander special?',  a: 'Ramganj Mandi seeds have a naturally high essential oil content, giving DrKitchen coriander its distinctive citrusy fragrance.' },
      { q: 'How is it different from regular dhania?',   a: 'Regular coriander is often heat-ground, destroying aroma. Ours is cold-ground, preserving every fragrant molecule.' },
      { q: 'Can I use it as a base for curries?',        a: 'Yes! Coriander powder is the foundation of most Indian gravies. Our fine grind ensures smooth, lump-free sauces.' },
      { q: 'Does it lose aroma quickly?',                a: 'Our airtight, moisture-protected pouch locks the aroma in. Once opened, store in a sealed container.' },
      { q: 'Is it suitable for cooling drinks?',         a: 'Coriander is a natural coolant. It\'s traditionally used in chaas and cooling drinks during summer.' },
    ],
    relatedSlugs: ['turmeric-powder', 'red-chilli-powder', 'garam-masala', 'kitchen-king', 'cumin-seeds'],
  },

  // ─── GARAM MASALA ────────────────────────────────────────────────────────────
  {
    slug: 'garam-masala',
    name: 'Garam Masala',
    hindi: 'गरम मसाला',
    subtitle: 'The Crown Jewel of Indian Spices',
    tagline: 'A perfectly balanced blend of 14 whole spices.\nIndia\'s most beloved seasoning.',
    category: 'Masala Blends',
    tag: 'Bestseller',
    image: 'https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/garam_masala_whole_dmf6oq',
    heroFeatures: [
      { icon: 'fas fa-star',       label: '14-Spice\nBlend' },
      { icon: 'fas fa-fire',       label: 'Warm\nAroma' },
      { icon: 'fas fa-ban',        label: 'No Artificial\nFlavours' },
      { icon: 'fas fa-shield-alt', label: 'Hygienically\nBlended' },
    ],
    aboutText: [
      'Garam Masala is the finishing touch to India\'s greatest dishes — a fragrant blend of 14 whole spices carefully roasted and ground together.',
      'Our master spice blenders have refined this recipe over decades, balancing warm spices like cardamom, cinnamon, and cloves with earthy cumin and coriander.',
      'Added at the end of cooking, it releases its full aromatic complexity into every dish.',
    ],
    aboutImage: `${PX}/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=280`,
    whyFeatures: [
      { icon: 'fas fa-star',              label: '14 Premium\nWhole Spices' },
      { icon: 'fas fa-fire',              label: 'Stone-Ground\nAroma' },
      { icon: 'fas fa-balance-scale',     label: 'Perfectly\nBalanced Blend' },
      { icon: 'fas fa-ban',               label: 'No Artificial\nFlavours' },
      { icon: 'fas fa-shield-alt',        label: 'Hygienically\nBlended' },
      { icon: 'fas fa-box',               label: 'Aroma-Sealed\nPack' },
    ],
    sourcedFrom: { location: 'Multiple Regions, India', desc: 'Each spice is sourced from its ideal growing region — cardamom from Kerala, cloves from Tamil Nadu, cinnamon from Kerala, and cumin from Rajasthan.' },
    characteristics: [
      { name: 'Warmth',    value: 82 },
      { name: 'Aroma',     value: 90 },
      { name: 'Heat',      value: 45 },
      { name: 'Sweetness', value: 35 },
      { name: 'Earthiness',value: 60 },
    ],
    bestUsedFor: [
      { name: 'Biryani',     image: `${PX}/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Curries',     image: `${PX}/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Dal',         image: `${PX}/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Kebabs',      image: `${PX}/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Gravies',     image: `${PX}/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Soups',       image: `${PX}/4873572/pexels-photo-4873572.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Pulao',       image: `${PX}/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=200` },
    ],
    pairsWith: [
      { name: 'Cardamom',    image: `${PX}/4198936/pexels-photo-4198936.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Coriander',   image: `${PX}/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Cumin',       image: `${PX}/2267872/pexels-photo-2267872.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Black Pepper',image: `${PX}/39347/pexels-photo-39347.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Turmeric',    image: `${PX}/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=200` },
    ],
    process: COMMON_PROCESS,
    nutritional: [
      { name: 'Essential Oils', icon: 'fas fa-tint' },
      { name: 'Antioxidants',   icon: 'fas fa-shield-alt' },
      { name: 'Iron',           icon: 'fas fa-bolt' },
      { name: 'Manganese',      icon: 'fas fa-atom' },
      { name: 'Calcium',        icon: 'fas fa-bone' },
    ],
    gallery: [
      `${PX}/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=400`,
    ],
    recipes: [
      { name: 'Chicken Biryani',  image: `${PX}/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Paneer Tikka',     image: `${PX}/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Mutton Curry',     image: `${PX}/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Dal Tadka',        image: `${PX}/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Rajma Masala',     image: `${PX}/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Aloo Gobi',        image: `${PX}/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=300` },
    ],
    faq: [
      { q: 'How many spices are in DrKitchen Garam Masala?',  a: '14 whole spices — including cardamom, cloves, cinnamon, black pepper, cumin, coriander, mace, bay leaf, and more.' },
      { q: 'When should I add it to cooking?',               a: 'Add at the very end of cooking or just before serving. This preserves the volatile aromatic oils that make it special.' },
      { q: 'Can I use it for marinades?',                     a: 'Yes. Mix with yoghurt, ginger-garlic paste, and oil for an exceptional tandoor or kebab marinade.' },
      { q: 'Is it too spicy for children?',                   a: 'It is mildly warming rather than hot. The heat comes from black pepper and cloves — very manageable in small quantities.' },
      { q: 'How is it different from other garam masalas?',   a: 'Most brands use pre-ground blends. We grind whole spices in small batches to ensure maximum aroma and potency.' },
    ],
    relatedSlugs: ['turmeric-powder', 'red-chilli-powder', 'coriander-powder', 'kitchen-king', 'cumin-seeds'],
  },

  // ─── KITCHEN KING ────────────────────────────────────────────────────────────
  {
    slug: 'kitchen-king',
    name: 'Kitchen King',
    hindi: 'किचन किंग',
    subtitle: 'The All-Purpose Masala',
    tagline: 'One masala for every dish.\nRich, bold, and deeply aromatic.',
    category: 'Masala Blends',
    tag: 'Premium',
    image: `${S3}/kitchen_king.png`,
    heroFeatures: [
      { icon: 'fas fa-crown',      label: 'All-Purpose\nMasala' },
      { icon: 'fas fa-fire',       label: 'Bold\nFlavour' },
      { icon: 'fas fa-ban',        label: 'No Artificial\nFlavours' },
      { icon: 'fas fa-shield-alt', label: 'Hygienically\nBlended' },
    ],
    aboutText: [
      'Kitchen King is the ultimate convenience spice — a perfectly calibrated blend that works beautifully in vegetables, paneer, lentils, and rice dishes alike.',
      'Developed by DrKitchen\'s master blenders, it combines the warmth of garam masala with the earthiness of coriander-cumin and the brightness of dry mango powder.',
      'One pinch transforms a simple stir-fry into a restaurant-worthy dish.',
    ],
    aboutImage: `${PX}/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=280`,
    whyFeatures: [
      { icon: 'fas fa-crown',             label: 'Multi-Purpose\nBlend' },
      { icon: 'fas fa-fire',              label: 'Restaurant-\nGrade Flavour' },
      { icon: 'fas fa-balance-scale',     label: 'Expert-\nCalibrated Blend' },
      { icon: 'fas fa-ban',               label: 'No MSG or\nArtificial Flavours' },
      { icon: 'fas fa-shield-alt',        label: 'Hygienically\nBlended' },
      { icon: 'fas fa-box',               label: 'Freshness-\nSealed Pack' },
    ],
    sourcedFrom: { location: 'Pan-India Blend', desc: 'Every spice in Kitchen King is individually sourced from its best growing region across India before being blended in our state-of-the-art facility.' },
    characteristics: [
      { name: 'Flavour',   value: 88 },
      { name: 'Aroma',     value: 82 },
      { name: 'Heat',      value: 55 },
      { name: 'Tanginess', value: 42 },
      { name: 'Earthiness',value: 68 },
    ],
    bestUsedFor: [
      { name: 'Paneer',    image: `${PX}/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Sabzi',     image: `${PX}/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Dal',       image: `${PX}/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Biryani',   image: `${PX}/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Fried Rice',image: `${PX}/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Kebabs',    image: `${PX}/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Curries',   image: `${PX}/4873572/pexels-photo-4873572.jpeg?auto=compress&cs=tinysrgb&w=200` },
    ],
    pairsWith: [
      { name: 'Turmeric',  image: `${PX}/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Red Chilli',image: `${PX}/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Coriander', image: `${PX}/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Cumin',     image: `${PX}/2267872/pexels-photo-2267872.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Amchur',    image: `${PX}/4198936/pexels-photo-4198936.jpeg?auto=compress&cs=tinysrgb&w=200` },
    ],
    process: COMMON_PROCESS,
    nutritional: [
      { name: 'Essential Oils', icon: 'fas fa-tint' },
      { name: 'Antioxidants',   icon: 'fas fa-shield-alt' },
      { name: 'Iron',           icon: 'fas fa-bolt' },
      { name: 'Vitamins',       icon: 'fas fa-star' },
      { name: 'Minerals',       icon: 'fas fa-atom' },
    ],
    gallery: [
      `${PX}/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=400`,
    ],
    recipes: [
      { name: 'Paneer Masala',   image: `${PX}/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Mixed Veg',       image: `${PX}/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Chicken Curry',   image: `${PX}/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Dal Fry',         image: `${PX}/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Vegetable Biryani',image: `${PX}/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Aloo Gobi',       image: `${PX}/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=300` },
    ],
    faq: [
      { q: 'Can Kitchen King replace all individual spices?', a: 'For most everyday cooking, yes. It\'s calibrated to provide a complete flavour profile in a single addition.' },
      { q: 'When should I add it?',                          a: 'Add during sautéing or halfway through cooking to build depth. A pinch at the end adds a final aromatic punch.' },
      { q: 'Is it suitable for non-Indian cuisines?',        a: 'It works wonderfully in fusion dishes, roasted vegetables, and even pasta sauces for an Indian-inspired twist.' },
      { q: 'Does it contain salt?',                          a: 'No. DrKitchen Kitchen King is salt-free, giving you complete control over your dish\'s seasoning.' },
      { q: 'How long does it retain its aroma?',             a: '18 months in the sealed pack. Once opened, best used within 6 months and stored in an airtight container.' },
    ],
    relatedSlugs: ['turmeric-powder', 'red-chilli-powder', 'coriander-powder', 'garam-masala', 'cumin-seeds'],
  },

  // ─── CUMIN SEEDS ─────────────────────────────────────────────────────────────
  {
    slug: 'cumin-seeds',
    name: 'Cumin Seeds',
    hindi: 'जीरा साबुत',
    subtitle: 'The Warm Heartbeat of Indian Cuisine',
    tagline: 'Hand-cleaned Rajasthani jeera.\nRich in essential oils, warm and nutty.',
    category: 'Seeds',
    tag: 'Pure',
    image: 'https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/cumin_powder_ps3tqk',
    heroFeatures: [
      { icon: 'fas fa-hands',      label: 'Hand\nCleaned' },
      { icon: 'fas fa-tint',       label: 'Rich in\nEssential Oils' },
      { icon: 'fas fa-ban',        label: 'No\nAdditives' },
      { icon: 'fas fa-shield-alt', label: 'Hygienically\nPacked' },
    ],
    aboutText: [
      'Cumin — jeera — is the first spice that hits the hot oil in almost every Indian kitchen.',
      'Sourced from Jodhpur and Nagaur in Rajasthan, our jeera is hand-cleaned and sun-dried to achieve the highest aromatic oil concentration.',
      'The characteristic warm, nutty flavour comes from the natural compound cuminaldehyde, which is fully preserved through our careful handling.',
    ],
    aboutImage: `${PX}/2267872/pexels-photo-2267872.jpeg?auto=compress&cs=tinysrgb&w=280`,
    whyFeatures: [
      { icon: 'fas fa-hands',             label: 'Hand-Cleaned\nSeeds' },
      { icon: 'fas fa-tint',              label: 'High Essential\nOil Content' },
      { icon: 'fas fa-sun',               label: 'Sun-Dried\nNaturally' },
      { icon: 'fas fa-ban',               label: 'No Additives\nor Coating' },
      { icon: 'fas fa-shield-alt',        label: 'Hygienically\nPacked' },
      { icon: 'fas fa-box',               label: 'Aroma-Locked\nPouch' },
    ],
    sourcedFrom: { location: 'Jodhpur & Nagaur, Rajasthan', desc: 'Rajasthan produces over 70% of India\'s cumin. The arid climate creates ideal conditions for high cuminaldehyde content and intense aroma.' },
    characteristics: [
      { name: 'Aroma',     value: 88 },
      { name: 'Warmth',    value: 72 },
      { name: 'Nuttiness', value: 80 },
      { name: 'Heat',      value: 22 },
      { name: 'Earthiness',value: 65 },
    ],
    bestUsedFor: [
      { name: 'Tadka',     image: `${PX}/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Rice',      image: `${PX}/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Dal',       image: `${PX}/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Raita',     image: `${PX}/4873572/pexels-photo-4873572.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Curries',   image: `${PX}/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Breads',    image: `${PX}/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Chutneys',  image: `${PX}/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=200` },
    ],
    pairsWith: [
      { name: 'Coriander',   image: `${PX}/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Turmeric',    image: `${PX}/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Mustard',     image: `${PX}/4198936/pexels-photo-4198936.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Fennel',      image: `${PX}/2267872/pexels-photo-2267872.jpeg?auto=compress&cs=tinysrgb&w=200` },
      { name: 'Bay Leaf',    image: `${PX}/39347/pexels-photo-39347.jpeg?auto=compress&cs=tinysrgb&w=200` },
    ],
    process: COMMON_PROCESS,
    nutritional: [
      { name: 'Cuminaldehyde',  icon: 'fas fa-flask' },
      { name: 'Iron',           icon: 'fas fa-bolt' },
      { name: 'Essential Oils', icon: 'fas fa-tint' },
      { name: 'Antioxidants',   icon: 'fas fa-shield-alt' },
      { name: 'Dietary Fibre',  icon: 'fas fa-leaf' },
    ],
    gallery: [
      `${PX}/2267872/pexels-photo-2267872.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400`,
      `${PX}/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400`,
    ],
    recipes: [
      { name: 'Jeera Rice',      image: `${PX}/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Dal Tadka',       image: `${PX}/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Cumin Raita',     image: `${PX}/4873572/pexels-photo-4873572.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Jeera Aloo',      image: `${PX}/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Pani Puri Water', image: `${PX}/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=300` },
      { name: 'Cumin Bread',     image: `${PX}/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=300` },
    ],
    faq: [
      { q: 'Why does DrKitchen jeera smell so strong?',   a: 'Our seeds are hand-cleaned and not over-processed. High cuminaldehyde content means intense, lasting aroma straight from the packet.' },
      { q: 'Whole seeds vs powder — which is better?',    a: 'Whole seeds release aroma gradually as they cook, creating layers of flavour. Powder gives an immediate hit. Both have their place.' },
      { q: 'Can cumin seeds be eaten raw?',               a: 'Yes — roasted cumin seeds are a great digestive aid and can be chewed after meals or steeped in warm water.' },
      { q: 'How do I temper (tadka) cumin properly?',     a: 'Heat oil until shimmering, add seeds and wait for them to splutter and turn golden — about 30 seconds. Then add your other ingredients.' },
      { q: 'What is the shelf life?',                     a: 'Whole seeds retain flavour for up to 2 years when stored properly. Our moisture-protected pack ensures freshness from the start.' },
    ],
    relatedSlugs: ['turmeric-powder', 'red-chilli-powder', 'coriander-powder', 'garam-masala', 'kitchen-king'],
  },
]

export const useProducts = () => {
  const getProduct = (slug: string): ProductDetail | undefined =>
    ALL_PRODUCTS.find(p => p.slug === slug)

  const getRelated = (slugs: string[]): ProductDetail[] =>
    slugs.map(s => ALL_PRODUCTS.find(p => p.slug === s)).filter(Boolean) as ProductDetail[]

  const getAllProducts = () => ALL_PRODUCTS

  return { getProduct, getRelated, getAllProducts }
}
