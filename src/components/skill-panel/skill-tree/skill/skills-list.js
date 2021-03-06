const ShieldIcon =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icon.png";
const Slave =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/slave.png";
const Mushroom =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/mushroom.png";
const Leaves =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/tree-branch.png";
const Whip =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/whip.png";
const Hide =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/animal-hide.png";
const Steak =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/steak.png";
const BunnyEars =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/bunny-ears.png";
const Raccoon =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/raccoon.png";
const DoubleDog =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/double-dog.png";
const Porcupine =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/porcupine.png";
const AnimalNeedle =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/animal-needle.png";
const Sharpening =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/sharpening.png";
const Pickaxe =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/pickaxe.png";
const Rope =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/rope-coil.png";
const MetalBar =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/metal-bar.png";
const Pipe =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/pipe.png";
const Pikyu =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/pikyu.png";
const Egg =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/big-egg.png";
const Pill =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/pill.png";
const Pine =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/pine-tree.png";
const Salmon =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/salmon.png";
const Butterfly =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/butterfly.png";
const Flask =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/round-bottom-flask.png";
const Cubes =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/cubeforce.png";
const EnergyShield =
  "https://raw.githubusercontent.com/stevezease/ShieldHero/master/src/images/shield-icons/energy-shield.png";

export default [
  {
    name: "Small Shield",
    id: "SMALL_SHIELD",
    jpName: "スモルシールド",
    x: 0,
    y: 0,
    imageSRC: ShieldIcon,
    dependancies: [],
    children: ["MUSH_SHIELD"],
    stats: {
      ARMOR: 3,
    },
  },
  {
    name: "Orange Small Shield",
    id: "ORANGE_SMALL_SHIELD",
    jpName: "オレンジシールド",
    x: -300,
    y: 200,
    dependancies: ["SMALL_SHIELD"],
    children: [""],
    imageTextObj: {
      text: "O",
      size: "48px",
    },
    stats: {
      ARMOR: 2,
    },
  },
  {
    name: "Yellow Small Shield",
    id: "YELLOW_SMALL_SHIELD",
    jpName: "エールスモルシールド",
    x: -625,
    y: 250,
    dependancies: ["ORANGE_SMALL_SHIELD"],
    children: [""],
    imageTextObj: {
      text: "Y",
      size: "48px",
    },
    stats: {
      ARMOR: 2,
    },
  },
  {
    name: "Egg Shield",
    id: "EGG_SHIELD",
    jpName: "エグシールド",
    x: -675,
    y: -50,
    dependancies: ["YELLOW_SMALL_SHIELD"],
    children: [""],
    imageSRC: Egg,
    imageSizeMultiplier: 1.25,
    stats: {
      ability: "料理 1",
    },
  },
  {
    name: "Usa Leather Shield",
    id: "USA_LEATHER_SHIELD",
    jpName: "ウサレータシールド",
    x: -825,
    y: 525,
    dependancies: ["YELLOW_SMALL_SHIELD"],
    children: ["USA_NODULE"],
    imageSRC: Hide,
    stats: {
      SPEED: 3,
    },
  },
  {
    name: "Raccoon Shield",
    id: "RACCOON_SHIELD",
    jpName: "ラクーンシールド",
    x: -900,
    y: 875,
    dependancies: ["USA_LEATHER_SHIELD"],
    children: [""],
    imageSRC: Raccoon,
    imageSizeMultiplier: 1.5,
  },
  {
    name: "Usa Meat Shield",
    id: "USA_MEAT_SHIELD",
    jpName: "ウサレータシールド",
    x: -930,
    y: 240,
    dependancies: ["YELLOW_SMALL_SHIELD"],
    children: ["USA_NODULE", "USA_MEAT_SKY_EGG_NODULE"],
    imageSRC: Steak,
  },
  {
    name: "nodule",
    id: "USA_NODULE",
    x: -975,
    y: 425,
    dependancies: ["USA_MEAT_SHIELD", "USA_LEATHER_SHIELD"],
  },
  {
    name: "nodule",
    id: "USA_MEAT_SKY_EGG_NODULE",
    x: -1140,
    y: 125,
    dependancies: ["USA_MEAT_SHIELD", "SKY_EGG_SHIELD"],
  },
  {
    name: "Sky Egg Shield",
    id: "SKY_EGG_SHIELD",
    jpName: "スカイエグシールド",
    x: -1050,
    y: -100,
    dependancies: ["EGG_SHIELD"],
    children: ["USA_MEAT_SKY_EGG_NODULE"],
    imageSRC: Egg,
    imageTextObj: {
      text: "S",
      size: "20px",
      y: "55%",
      color: "rgba(0, 0, 0, 0.8)",
    },
    imageSizeMultiplier: 1.25,
  },
  {
    name: "Blue Egg Shield",
    id: "BLUE_EGG_SHIELD",
    jpName: "ブルーエグシールド",
    x: -900,
    y: -350,
    dependancies: ["EGG_SHIELD"],
    children: [""],
    imageSRC: Egg,
    imageTextObj: {
      text: "B",
      size: "20px",
      y: "55%",
      color: "rgba(0, 0, 0, 0.8)",
    },
    imageSizeMultiplier: 1.25,
    stats: {
      ability: "目利き１",
    },
  },
  {
    name: "Pikyu Pikyu Shield",
    id: "PIKYU_PIKYU_SHIELD",
    jpName: "ピキューピキューグシールド",
    x: -1150,
    y: -450,
    dependancies: ["BLUE_EGG_SHIELD"],
    children: [""],
    imageSRC: Pikyu,
    imageSizeMultiplier: 1.25,
    skill: {
      ability: "簡易武器修理 1",
    },
  },
  {
    name: "Sharpening Shield",
    id: "SHARPENING_SHIELD",
    jpName: "シャーペニングシールド",
    x: -1300,
    y: 200,
    dependancies: ["USA_MEAT_SKY_EGG_NODULE"],
    children: [""],
    imageSRC: Sharpening,
    imageSizeMultiplier: 1.25,
  },
  {
    name: "Rope Shield",
    id: "ROPE_SHIELD",
    jpName: "ロープシールド",
    x: -1450,
    y: -100,
    dependancies: ["SHARPENING_SHIELD"],
    children: [""],
    imageSRC: Rope,
    imageSizeMultiplier: 1.25,
    stats: {
      ability: "ロープ",
      skill: "エアストシールド",
    },
  },
  {
    name: "Pipe Shield",
    id: "PIPE_SHIELD",
    jpName: "パイプシールド",
    x: -1475,
    y: -400,
    dependancies: ["ROPE_SHIELD"],
    children: [""],
    imageSRC: Pipe,
    imageSizeMultiplier: 1.25,
    stats: {
      ability: "シールドプリズン",
    },
  },
  {
    name: "Pickax Shield",
    id: "PICKAX_SHIELD",
    jpName: "ピキャックスシールド",
    x: -1550,
    y: 450,
    dependancies: ["SHARPENING_SHIELD"],
    children: [""],
    imageSRC: Pickaxe,
    imageSizeMultiplier: 1.25,
  },
  {
    name: "Light Metal Shield",
    id: "LIGHT_METAL_SHIELD",
    jpName: "ライトメタルシールド",
    x: -1700,
    y: 100,
    dependancies: ["PICKAX_SHIELD"],
    children: [""],
    imageSRC: MetalBar,
    imageSizeMultiplier: 1.25,
  },
  {
    name: "Usapiru Shield",
    id: "USA_PIRU_SHIELD",
    jpName: "ウサピルシールド",
    x: -1150,
    y: 524,
    dependancies: ["USA_NODULE"],
    children: [""],
    imageSRC: BunnyEars,
  },
  {
    name: "Two Headed Black Dog Shield",
    id: "TWO_HEADED_DOG_SHIELD",
    jpName: "ツーヘデドブラックドッグシールド",
    x: -1225,
    y: 875,
    dependancies: ["USA_PIRU_SHIELD"],
    children: [""],
    imageSRC: DoubleDog,
    imageSizeMultiplier: 1.25,
    stats: {
      ability: "アラートシールド",
      skill: "ドッグバイト",
    },
  },
  {
    name: "Porcupine Shield",
    id: "PORCUPINE_SHIELD",
    jpName: "ポーキュパインシールド",
    x: -1220,
    y: 1200,
    dependancies: ["TWO_HEADED_DOG_SHIELD"],
    children: [""],
    imageSRC: Porcupine,
    imageSizeMultiplier: 1.25,
  },
  {
    name: "Animal Needle Shield",
    id: "ANIMAL_NEEDLE_SHIELD",
    jpName: "アニマルニーダルシールド",
    x: -1215,
    y: 1525,
    dependancies: ["PORCUPINE_SHIELD"],
    children: [""],
    imageSRC: AnimalNeedle,
    imageSizeMultiplier: 1.25,
    stats: {
      ATTACK: 1,
      skill: "ニーダルシールド",
    },
  },
  {
    name: "Red Small Shield",
    id: "RED_SMALL_SHIELD",
    jpName: "レッドスモルシールド",
    x: -500,
    y: 500,
    dependancies: ["YELLOW_SMALL_SHIELD"],
    children: [""],
    imageTextObj: {
      text: "R",
      size: "48px",
    },
    stats: {
      ARMOR: 4,
    },
  },
  {
    name: "Potato Shield",
    id: "POTATO_SHIELD",
    jpName: "ポテトシールド",
    x: 0,
    y: -400,
    alwaysLocked: true,
    imageSRC: Mushroom,
    dependancies: ["SMALL_SHIELD"],
    children: ["GREEN_MUSH_SHIELD"],
  },
  {
    name: "Slave Trainer Shield",
    id: "SLAVE_TRAINER_SHIELD",
    jpName: "スレブシールド",
    x: 300,
    y: -200,
    imageSizeMultiplier: 1.25,
    imageSRC: Slave,
    dependancies: ["SMALL_SHIELD"],
    children: ["GREEN_MUSH_SHIELD"],
    imageTextObj: {
      text: "I",
      size: "9px",
      fontFamily: "Times",
      y: "32%",
      color: "rgba(255, 255, 255, 0.8)",
    },
  },
  {
    name: "Slave Trainer Shield",
    id: "SLAVE_TRAINER_SHIELD2",
    jpName: "スレブシールド",
    x: -300,
    y: -200,
    imageSRC: Whip,
    dependancies: ["SMALL_SHIELD"],
    children: ["GREEN_MUSH_SHIELD"],
  },
  {
    name: "Leaf Shield",
    id: "LEAF_SHIELD",
    jpName: "リーフシールド",
    x: 300,
    y: 200,
    imageSRC: Leaves,
    dependancies: ["SMALL_SHIELD"],
    children: ["PETITE_NODULE"],
    stats: {
      ability: "採取技能 １",
    },
  },
  {
    name: "Petite Poison Shield",
    id: "PETITE_POISON_SHIELD",
    jpName: "プチポイズンシールド",
    x: 475,
    y: 500,
    imageSRC: Flask,
    dependancies: ["PETITE_NODULE"],
    imageTextObj: {
      text: "P",
      size: "8px",
      fontFamily: "Arial",
      y: "45%",
      x: "40%",
      color: "rgba(255, 255, 255, 0.9)",
      fontWeight: "bold",
    },
    children: ["ENERGY_NODULE_1", "ENERGY_NODULE_2"],
    stats: {
      ability: "耐毒性上昇",
    },
  },
  {
    name: "Petite Medicine Shield",
    id: "PETITE_MEDICINE_SHIELD",
    jpName: "プチメディセンシールド",
    x: 700,
    y: 300,
    imageSRC: Pill,
    dependancies: ["PETITE_NODULE"],
    imageTextObj: {
      text: "P",
      size: "8px",
      fontFamily: "Arial",
      y: "45%",
      x: "40%",
      color: "rgba(255, 255, 255, 0.9)",
      fontWeight: "bold",
    },
    children: ["ENERGY_NODULE_1", "ENERGY_NODULE_2"],
    stats: {
      ability: "薬効果上昇",
    },
  },
  {
    name: "nodule",
    id: "PETITE_NODULE",
    x: 455,
    y: 305,
    dependancies: ["LEAF_SHIELD"],
  },
  {
    name: "nodule",
    id: "ENERGY_NODULE_1",
    x: 750,
    y: 625,
    dependancies: ["PETITE_MEDICINE_SHIELD", "PETITE_POISON_SHIELD"],
  },
  {
    name: "nodule",
    id: "ENERGY_NODULE_2",
    x: 950,
    y: 622,
    dependancies: ["ENERGY_NODULE_1"],
  },
  {
    name: "Calorie Shield",
    id: "CALORIE_SHIELD",
    jpName: "キャロリーシールド",
    x: 1100,
    y: 800,
    imageSRC: Cubes,
    dependancies: ["ENERGY_NODULE_2"],
    children: [],
  },
  {
    name: "Energy Shield",
    id: "ENERGY_SHIELD",
    jpName: "エナジーシールド",
    x: 1300,
    y: 620,
    imageSRC: EnergyShield,
    dependancies: ["ENERGY_NODULE_2"],
    children: [],
  },
  {
    name: "Potential Energy Shield",
    id: "POTENTIAL_ENERGY_SHIELD",
    jpName: "ポテンシャルシールド",
    x: 1075,
    y: 400,
    imageSRC: EnergyShield,
    dependancies: ["ENERGY_NODULE_2"],
    imageTextObj: {
      text: "P",
      size: "8px",
      fontFamily: "Arial",
      y: "40%",
      x: "35%",
      color: "rgba(255, 255, 255, 0.9)",
      fontWeight: "bold",
    },
    children: [],
  },
  {
    name: "Wood Shield",
    id: "WOOD_SHIELD",
    jpName: "ウッドシールド",
    x: 550,
    y: -100,
    imageSRC: Pine,
    dependancies: ["LEAF_SHIELD"],
    children: [],
    stats: {
      ability: "収集スキル 1",
    },
  },
  {
    name: "Mush Shield",
    id: "MUSH_SHIELD",
    jpName: "マッシユシールド",
    x: 0,
    y: 350,
    imageSRC: Mushroom,
    dependancies: ["SMALL_SHIELD"],
    children: ["GREEN_MUSH_SHIELD"],
    stats: {
      ability: "植物鑑定 １",
    },
  },
  {
    name: "Green Mush Shield",
    id: "GREEN_MUSH_SHIELD",
    jpName: "グリーンマッシユシールド",
    x: -200,
    y: 600,
    imageSRC: Mushroom,
    dependancies: ["MUSH_SHIELD"],
    children: ["MUSH_NODULE"],
    imageTextObj: {
      text: "G",
      size: "14px",
      y: "45%",
      color: "rgba(0, 0, 0, 0.8)",
    },
    stats: {
      ability: "見習い調合",
    },
  },
  {
    name: "Blue Mush Shield",
    id: "BlUE_MUSH_SHIELD",
    jpName: "ブルーマッシユシールド",
    x: 200,
    y: 600,
    imageSRC: Mushroom,
    dependancies: ["MUSH_SHIELD"],
    children: ["MUSH_NODULE"],
    imageTextObj: {
      text: "B",
      size: "14px",
      y: "45%",
      color: "rgba(0, 0, 0, 0.8)",
    },
    stats: {
      ARMOR: 4,
      MAGIC_DEFENCE: 6,
      ability: "簡易混合レシピ 1",
    },
  },
  {
    name: "nodule",
    id: "MUSH_NODULE",
    x: 50,
    y: 775,
    dependancies: ["BlUE_MUSH_SHIELD", "GREEN_MUSH_SHIELD"],
  },
  {
    name: "Butterfly Shield",
    id: "BUTTERFLY_SHIELD",
    jpName: "バタフライシールド",
    x: 100,
    y: 900,
    imageSRC: Butterfly,
    dependancies: ["MUSH_NODULE"],
    children: [],
    stats: {
      ability: "まひ抵抗 1",
    },
  },
  {
    name: "Fish Shield",
    id: "FISH_SHIELD",
    jpName: "フィッシュシールド",
    x: 425,
    y: 750,
    imageSRC: Salmon,
    dependancies: ["BlUE_MUSH_SHIELD"],
    children: [],
    stats: {
      ability: "釣り 1",
    },
  },
];
