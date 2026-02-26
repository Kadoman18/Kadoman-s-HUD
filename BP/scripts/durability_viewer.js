import { EquipmentSlot, world, system } from "@minecraft/server";

const itemIdList = {
	"minecraft:leather_helmet": 1010,
	"minecraft:leather_chestplate": 1011,
	"minecraft:leather_leggings": 1012,
	"minecraft:leather_boots": 1013,

	"minecraft:chainmail_helmet": 1020,
	"minecraft:chainmail_chestplate": 1021,
	"minecraft:chainmail_leggings": 1022,
	"minecraft:chainmail_boots": 1023,

	"minecraft:iron_helmet": 1030,
	"minecraft:iron_chestplate": 1031,
	"minecraft:iron_leggings": 1032,
	"minecraft:iron_boots": 1033,

	"minecraft:golden_helmet": 1040,
	"minecraft:golden_chestplate": 1041,
	"minecraft:golden_leggings": 1042,
	"minecraft:golden_boots": 1043,

	"minecraft:diamond_helmet": 1050,
	"minecraft:diamond_chestplate": 1051,
	"minecraft:diamond_leggings": 1052,
	"minecraft:diamond_boots": 1053,

	"minecraft:netherite_helmet": 1060,
	"minecraft:netherite_chestplate": 1061,
	"minecraft:netherite_leggings": 1062,
	"minecraft:netherite_boots": 1063,

	"minecraft:copper_helmet": 1070,
	"minecraft:copper_chestplate": 1071,
	"minecraft:copper_leggings": 1072,
	"minecraft:copper_boots": 1073,

	"minecraft:elytra": 5040,
	"minecraft:turtle_helmet": 5041,
	"minecraft:carved_pumpkin": 5042,
	"minecraft:totem_of_undying": 5043,
	"minecraft:shield": 5044,
	"minecraft:arrow": 5045,
	"minecraft:filled_map": 5046,
	"minecraft:nautilus_shell": 5047,
	"minecraft:firework_rocket": 5048,

	"minecraft:creeper_head": 5050,
	"minecraft:dragon_head": 5051,
	"minecraft:player_head": 5052,
	"minecraft:piglin_head": 5053,
	"minecraft:zombie_head": 5054,
	"minecraft:skeleton_skull": 5055,
	"minecraft:wither_skeleton_skull": 5056,
};

// Biomes
const biomesList = {
	// Overworld
	"minecraft:bamboo_jungle": 6000,
	"minecraft:bamboo_jungle_hills": 6001,
	"minecraft:beach": 6002,
	"minecraft:birch_forest": 6003,
	"minecraft:birch_forest_hills": 6004,
	"minecraft:birch_forest_hills_mutated": 6005,
	"minecraft:birch_forest_mutated": 6006,
	"minecraft:cherry_grove": 6007,
	"minecraft:cold_beach": 6008,
	"minecraft:cold_ocean": 6009,
	"minecraft:cold_taiga": 6010,
	"minecraft:cold_taiga_hills": 6011,
	"minecraft:cold_taiga_mutated": 6012,
	"minecraft:deep_cold_ocean": 6013,
	"minecraft:deep_dark": 6014,
	"minecraft:deep_frozen_ocean": 6015,
	"minecraft:deep_lukewarm_ocean": 6016,
	"minecraft:deep_ocean": 6017,
	"minecraft:deep_warm_ocean": 6018,
	"minecraft:desert": 6019,
	"minecraft:desert_hills": 6020,
	"minecraft:desert_mutated": 6021,
	"minecraft:dripstone_caves": 6022,
	"minecraft:extreme_hills": 6023,
	"minecraft:extreme_hills_edge": 6024,
	"minecraft:extreme_hills_mutated": 6025,
	"minecraft:extreme_hills_plus_trees": 6026,
	"minecraft:extreme_hills_plus_trees_mutated": 6027,
	"minecraft:flower_forest": 6028,
	"minecraft:forest": 6029,
	"minecraft:forest_hills": 6030,
	"minecraft:frozen_ocean": 6031,
	"minecraft:frozen_peaks": 6032,
	"minecraft:frozen_river": 6033,
	"minecraft:grove": 6034,
	"minecraft:ice_mountains": 6035,
	"minecraft:ice_plains": 6036,
	"minecraft:ice_plains_spikes": 6037,
	"minecraft:jagged_peaks": 6038,
	"minecraft:jungle": 6039,
	"minecraft:jungle_edge": 6040,
	"minecraft:jungle_edge_mutated": 6041,
	"minecraft:jungle_hills": 6042,
	"minecraft:jungle_mutated": 6043,
	"minecraft:legacy_frozen_ocean": 6044,
	"minecraft:lukewarm_ocean": 6045,
	"minecraft:lush_caves": 6046,
	"minecraft:mangrove_swamp": 6047,
	"minecraft:meadow": 6048,
	"minecraft:mega_taiga": 6049,
	"minecraft:mega_taiga_hills": 6050,
	"minecraft:mesa": 6051,
	"minecraft:mesa_bryce": 6052,
	"minecraft:mesa_plateau": 6053,
	"minecraft:mesa_plateau_mutated": 6054,
	"minecraft:mesa_plateau_stone": 6055,
	"minecraft:mesa_plateau_stone_mutated": 6056,
	"minecraft:mushroom_island": 6057,
	"minecraft:mushroom_island_shore": 6058,
	"minecraft:ocean": 6059,
	"minecraft:pale_garden": 6060,
	"minecraft:plains": 6061,
	"minecraft:redwood_taiga_hills_mutated": 6062,
	"minecraft:redwood_taiga_mutated": 6063,
	"minecraft:river": 6064,
	"minecraft:roofed_forest": 6065,
	"minecraft:roofed_forest_mutated": 6066,
	"minecraft:savanna": 6067,
	"minecraft:savanna_mutated": 6068,
	"minecraft:savanna_plateau": 6069,
	"minecraft:savanna_plateau_mutated": 6070,
	"minecraft:snowy_slopes": 6071,
	"minecraft:stone_beach": 6072,
	"minecraft:stony_peaks": 6073,
	"minecraft:sunflower_plains": 6074,
	"minecraft:swampland": 6075,
	"minecraft:swampland_mutated": 6076,
	"minecraft:taiga": 6077,
	"minecraft:taiga_hills": 6078,
	"minecraft:taiga_mutated": 6079,
	"minecraft:warm_ocean": 6080,
	// Nether
	"minecraft:basalt_deltas": 6661,
	"minecraft:crimson_forest": 6662,
	"minecraft:hell": 6663,
	"minecraft:soulsand_valley": 6664,
	"minecraft:warped_forest": 6665,
	// End
	"minecraft:the_end": 6900,
};

const armorSlots = [
	EquipmentSlot.Head,
	EquipmentSlot.Chest,
	EquipmentSlot.Legs,
	EquipmentSlot.Feet,
	EquipmentSlot.Offhand,
];

const playerCache = new Map();

/* --------------------------------------------------------- */
/* STRICT 4-DIGIT PADDER                                     */
/* --------------------------------------------------------- */
function pad4(n) {
	return String(Math.max(0, Math.min(9999, n | 0))).padStart(4, "0");
}

/* --------------------------------------------------------- */
/* HUD ENCODER (FIXED WIDTH OUTPUT)                          */
/* --------------------------------------------------------- */
function buildPlayerHUDString(player, biomeCode) {
	const equipment = player.getComponent("equippable");

	let title = "kado:" + pad4(biomeCode) + "|";
	let offhandStack = 0;

	for (const slot of armorSlots) {
		const item = equipment.getEquipment(slot);

		/* ---------- ITEM CODE ---------- */
		const itemCode = item ? (itemIdList[item.typeId] ?? 0) : 0;
		title += pad4(itemCode) + "|";

		/* ---------- DURABILITY ---------- */
		if (item && item.hasComponent("minecraft:durability")) {
			const durability = item.getComponent("minecraft:durability");
			const percent = Math.floor(
				((durability.maxDurability - durability.damage) / durability.maxDurability) * 1000,
			);
			title += pad4(percent) + "|";
		} else {
			title += "9404|";
		}

		/* ---------- OFFHAND STACK (ONLY ONCE) ---------- */
		if (slot === EquipmentSlot.Offhand) {
			offhandStack = item ? item.amount : 0;
		}
	}

	/* append stack count AFTER loop */
	title += pad4(offhandStack);

	return title;
}

/* --------------------------------------------------------- */

function getPlayerBiomeCode(player) {
	try {
		const biome = player.dimension.getBiome(player.location);
		if (!biome) return 9999;
		return biomesList[biome.id] ?? 9999;
	} catch {
		return 9999;
	}
}

function updatePlayerDisplay(player, title) {
	console.log(`Title: ${title}`);
	player.onScreenDisplay.setTitle(title, {
		stayDuration: 1,
		fadeInDuration: 0,
		fadeOutDuration: 0,
	});
}

system.runInterval(() => {
	for (const player of world.getPlayers()) {
		const biomeCode = getPlayerBiomeCode(player);
		const prev = playerCache.get(player.id);

		const title = buildPlayerHUDString(player, biomeCode);

		if (prev !== title) {
			playerCache.set(player.id, title);
			updatePlayerDisplay(player, title);
		}
	}
}, 10);

world.afterEvents.playerSpawn.subscribe(({ player }) => {
	const biomeCode = getPlayerBiomeCode(player);
	const title = buildPlayerHUDString(player, biomeCode);
	playerCache.set(player.id, title);
	updatePlayerDisplay(player, title);
});
