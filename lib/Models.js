const UsefulItem = class {
    /**
     *
     * @param item_name {string}
     * @param point_value {number}
     * @param diggable {boolean}
     * @param gatherable {boolean}
     * @param dropped_by {[string]}
     * @param crafting_requirements {[CraftingRequirement]}
     * @param prerequisites {[ItemPrerequisite]}
     * @param is_partial_name {boolean=false}
     * @param {Entity|Item|Block} result The result object
     */
    constructor(item_name, point_value, diggable, gatherable , dropped_by = [], crafting_requirements = [], prerequisites = [], is_partial_name= false) {
        this.item_name = item_name
        this.diggable = diggable
        this.gatherable = gatherable
        this.point_value = point_value
        this.dropped_by = dropped_by
        this.crafting_requirements = crafting_requirements
        this.prerequisites = prerequisites
        this.is_partial_name = is_partial_name
    }

    /**
     * @type {string}
     */
    item_name;

    /**
     * @type {number}
     */
    point_value;

    /**
     * @type {boolean}
     */
    is_partial_name;

    /**
     * @type {boolean}
     */
    diggable;

    /**
     * @type {boolean}
     */
    gatherable;

    /**
     * The name of the creature(s) (partial match) that can drop this item.  Can be empty
     * @type {[string]}
     */
    dropped_by;

    /**
     * The possible ways to craft this item.  Any 1 entry should be able to fully craft the item.  Can be empty if not craftable.
     * @type {[CraftingRequirement]}
     */
    crafting_requirements;

    /**
     * This item isn't useful, unless the player/bot has all the listed pre-requisite items in their inventory.
     * This helps limit what is dug if you don't have the right tool.
     * This is a list of the exact names required
     * @type {[ItemPrerequisite]}
     */
    prerequisites;
}

const ItemPrerequisite = class {
    /**
     *
     * @param items {Object.<string,number>}
     * @param name_match_policy {NameMatchPolicy}
     */
    constructor(items, name_match_policy = NameMatchPolicy.EXACT) {
        this.items = items
        this.name_match_policy = name_match_policy
    }

    /**
     * The exact names and quantities required
     * @type {Object.<string,number>}
     */
    items;

    /**
     * The name match policy, exact, partial, or partial but the same root type
     * @type {NameMatchPolicy}
     */
    name_match_policy;
}

const CraftingRequirement = class {
    /**
     *
     * @param items {Object.<string,number>}
     * @param crafting_station {string|null}
     * @param name_match_policy {NameMatchPolicy}
     */
    constructor(items, crafting_station = null, name_match_policy = NameMatchPolicy.EXACT) {
        this.items = items
        this.crafting_station = crafting_station
        this.name_match_policy = name_match_policy
    }

    /**
     * The exact names and quantities required
     * @type {Object.<string,number>}
     */
    items;

    /**
     * The name of the crafting station required. (optional)
     * @type {string | null}
     */
    crafting_station;

    /**
     * The name match policy, exact, partial, or partial but the same root type
     * @type {NameMatchPolicy}
     */
    name_match_policy;
}

const NameMatchPolicy = Object.freeze({
    /**
     * Exact String Match
     */
    EXACT :  "EXACT",
    /**
     * Partial String Match
     */
    PARTIAL:  "PARTIAL",
    /**
     * Partial Match, but all must be the same name.  Thus, if you search for _planks, you would need N quantity of redwood_planks, not a mix of wood types.
     */
    PARTIAL_SAME: "PARTIAL_SAME"
});

const FindResultType = Object.freeze({
    ENTITY :  "ENTITY",
    BLOCK:  "BLOCK",
    ITEM: "ITEM",
    // don't really want these lower types here, but they simplify the code a lot
    CHEST: "CHEST"
});

/**
 * The result of a findEntities, findBlocks, findItemsOnGround operation.
 *
 * @param {FindResult} result The result object
 * @param {FindResultType} type
 */
const FindResultWithType = class {

    constructor(result, type) {
        this.result = result
        this.type = type
    }

    /**
     * @type {FindResult}
     */
    result;

    /**
     * @type {FindResultType}
     */
    type;

}

module.exports = { NameMatchPolicy, CraftingRequirement, ItemPrerequisite, UsefulItem, FindResultType, FindResultWithType }