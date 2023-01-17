const {UsefulItem, CraftingRequirement, ItemPrerequisite, NameMatchPolicy} = require("./Models");

/**
 *
 * @type {UsefulItem[]}
 */
const usefulItemsList = [
    new UsefulItem('ancient_debris', 100, true, true),

    // 30 pt
    new UsefulItem('magma_cream', 30, true, true, [], [new CraftingRequirement({'slimeball':1, 'blaze_powder':1})]),
    new UsefulItem('gilded_blackstone', 30, true, true),

    // 15 pt
    new UsefulItem('golden_apple', 15, true, true, [], [new CraftingRequirement({'gold_ingot':8, 'apple':1})]),
    new UsefulItem('bell', 15, true, true),
    new UsefulItem('compass', 15, true, true, [], [new CraftingRequirement({'iron_ingot':4,'redstone_dust':1})]),

    // 5 pt
    new UsefulItem('bread', 5, true, true, [], [new CraftingRequirement({'wheat':3})]),
    new UsefulItem('paper', 5, true, true, [], [new CraftingRequirement({'sugar_cane':3})]),

    // 3 pt ... gold_ingot has no points, but helps make golden apple
    new UsefulItem('emerald', 3, true, true),
    new UsefulItem('shroomlight', 3, true, true),
    new UsefulItem('iron_ingot', 3, false, true, [], [new CraftingRequirement({'raw_iron':1}, 'furnace')]),
    new UsefulItem('raw_iron', 3, false, true),
    new UsefulItem('iron_ore', 3, true, false, [], [], [new ItemPrerequisite({'_pickaxe':1}, NameMatchPolicy.PARTIAL)], true),
    new UsefulItem('gold_ingot', 3, false, true, [], [new CraftingRequirement({'raw_gold':1}, 'furnace')]),
    new UsefulItem('raw_gold', 3, false, true),
    new UsefulItem('gold_ore', 3, true, false, [], [], [new ItemPrerequisite({'_pickaxe':1}, NameMatchPolicy.PARTIAL)], true),
    new UsefulItem('rabbit_foot', 3, false, true, ['rabbit']),

    // 1 pt
    new UsefulItem('_wool', 1, false, true, ['sheep'], [], [], true),
    new UsefulItem('leather', 1, false, true, ['cow']),
    new UsefulItem('chicken', 1, false, true, ['chicken']),
    new UsefulItem('porkchop', 1, false, true, ['pig']),
    new UsefulItem('apple', 1, false, true),
    new UsefulItem('rabbit_hide', 1, false, true, ['rabbit']),
    new UsefulItem('poppy', 1, true, true),
    new UsefulItem('coal', 1, false, true),
    new UsefulItem('coal_ore', 1, true, false, [], [] ,[new ItemPrerequisite({'_pickaxe':1}, NameMatchPolicy.PARTIAL)]),

    // weapons and tools don't have points, but we should snag them from the ground/chests when we can.. giving them high point value for evaluation
    // TODO: Many of these are craftable on purpose, so when evaluating crafting values, we don't prioritize these
    new UsefulItem('sword', 7, false, true, [], [], [], true),
    new UsefulItem('trident', 7, false, true, [], [], [], true),
    new UsefulItem('_axe', 7, false, true, [], [], [], true),
    new UsefulItem('_pickaxe', 7, false, true, [], [], [], true),
    new UsefulItem('shovel', 7, false, true, [], [], [], true),
    new UsefulItem('hoe', 7, false, true, [], [], [], true),

    // put some explicit tools in here, so we know how to craft them
    new UsefulItem('stone_axe', 0, false, true, [], [new CraftingRequirement({'cobblestone':3, 'stick':2}, 'crafting_table', NameMatchPolicy.EXACT),new CraftingRequirement({'blackstone':3, 'stick':2}, 'crafting_table', NameMatchPolicy.EXACT), new CraftingRequirement({'cobbled_deepslate':3, 'stick':2}, 'crafting_table', NameMatchPolicy.EXACT)], [], NameMatchPolicy.EXACT),
    new UsefulItem('stone_pickaxe', 0, false, true, [], [new CraftingRequirement({'cobblestone':3, 'stick':2}, 'crafting_table', NameMatchPolicy.EXACT),new CraftingRequirement({'blackstone':3, 'stick':2}, 'crafting_table', NameMatchPolicy.EXACT), new CraftingRequirement({'cobbled_deepslate':3, 'stick':2}, 'crafting_table', NameMatchPolicy.EXACT)], [], NameMatchPolicy.EXACT),
    new UsefulItem('wooden_axe', 0, false, true, [], [new CraftingRequirement({'_planks':3, 'stick':2}, 'crafting_table', NameMatchPolicy.PARTIAL_SAME)], [], NameMatchPolicy.EXACT),
    new UsefulItem('wooden_pickaxe', 0, false, true, [], [new CraftingRequirement({'_planks':3, 'stick':2}, 'crafting_table', NameMatchPolicy.PARTIAL_SAME)], [], NameMatchPolicy.EXACT),

    // crafting stations and other high value keeper items
    // TODO: We're putting in the crafting requirements, but we should only craft 0 pt items if another item needs it as a pre-req
    new UsefulItem('crafting_table', 0, true, true, [], [new CraftingRequirement({'_planks':4}, null, NameMatchPolicy.PARTIAL)]),
    new UsefulItem('furnace', 0, true, true, [], [new CraftingRequirement({'cobble':8}, null, NameMatchPolicy.PARTIAL)]),
    new UsefulItem('stick', 0, false, true, [], [new CraftingRequirement({'bamboo':2}, null, NameMatchPolicy.PARTIAL), new CraftingRequirement({'_planks':2}, null, NameMatchPolicy.PARTIAL)]),
    new UsefulItem('_planks', 0, false, true, [], [new CraftingRequirement({'_log':1}, null, NameMatchPolicy.PARTIAL), new CraftingRequirement({'wood':1}, null, NameMatchPolicy.PARTIAL), new CraftingRequirement({'_stem':1}, null, NameMatchPolicy.PARTIAL), new CraftingRequirement({'_hyphae':1}, null, NameMatchPolicy.PARTIAL)], [],true),
    new UsefulItem('wood', 0, false, true, [], [], [], true),
    new UsefulItem('_log', 0, true, true, [], [], [new ItemPrerequisite({'_axe':1}, NameMatchPolicy.PARTIAL)], true),
]

module.exports = { usefulItemsList }