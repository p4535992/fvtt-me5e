import Actor5e from "/systems/dnd5e/module/actor/entity.js";
import { DND5E } from '/systems/dnd5e/module/config.js';
import ActorSheet5eCharacter from "/systems/dnd5e/module/actor/sheets/character.js";

//Changing out deprecated 5e skills to their replacements
DND5E.skills["arc"] = "Electronics";
DND5E.skills["nat"] = "Engineering";
DND5E.skills["rel"] = "Science";
DND5E.skills["veh"] = "Vehicle Handling";

//Adding equipment types
DND5E.equipmentTypes["prog"] = "Program";
DND5E.equipmentTypes["armMod"] = "Armor Mod";
DND5E.equipmentTypes["wepMod"] = "Weapon Mod";
//Adding consumable types
DND5E.consumableTypes["wand"] = "Single-Use Program";
DND5E.consumableTypes["rod"] = "Grenade";
DND5E.consumableTypes["narc"] = "Narcotic";

//Add vehicle handling to the character sheet as a skill if, and only if, the actor entities being created are of type
//character or npc. If the type is vehicle, it makes no changes.
const prep = Actor5e.prototype.prepareBaseData;	
function extendActorData() {
	if(this.data.type === "npc" || this.data.type === "character") {
		const skl = this.data.data.skills;
		skl["veh"] = skl["veh"] || {value: 0, ability: "dex"};
	}
	return prep.call(this);
}
Actor5e.prototype.prepareBaseData = extendActorData;

//Adding "schools" of magic
DND5E.spellSchools["abj"] = "Biotics";
DND5E.spellSchools["con"] = "Tech";
DND5E.spellSchools["div"] = "Combat Powers";

//Adding weapon types
DND5E.weaponTypes["ars"] = "Assault Rifle";
DND5E.weaponTypes["hps"] = "Heavy Pistol";
DND5E.weaponTypes["smg"] = "SMG";
DND5E.weaponTypes["sht"] = "Shotgun";
DND5E.weaponTypes["snp"] = "Sniper Rifle";
DND5E.weaponTypes["hvy"] = "Heavy Weapon";

//Adding weapon properties
DND5E.weaponProperties["arc"] = "Arc";
DND5E.weaponProperties["bst"] = "Burst Fire";
DND5E.weaponProperties["dtp"] = "Double Tap";
DND5E.weaponProperties["het"] = "Heat";
DND5E.weaponProperties["hip"] = "Hip Fire";
DND5E.weaponProperties["snt"] = "Silent";
DND5E.weaponProperties["coi"] = "Recoil";

//Changing currencies, all other currencies appear as 0 with no labels
DND5E.currencies = {
	"pp": "Credits"
  };
  //Currency conversion option now does nothing to avoid accidental user error
  //(also to avoid mishaps with player curiosity for 'what does this button do?')
  //The answer is nothing. The button does nothing now
  DND5E.currencyConversion = {
  };

//Changing and adding some tool proficiencies
DND5E.toolProficiencies["herb"]="Chemist's Supplies";
DND5E.toolProficiencies["navg"]="Starship System (Navigation)";
DND5E.toolProficiencies["pois"]="Brewer's Supplies"
DND5E.toolProficiencies["aswb"]="Armorsmith's Workbench";
DND5E.toolProficiencies["cook"]="Cook's Utensils";
DND5E.toolProficiencies["h4ck"]="Hacking Tools";
DND5E.toolProficiencies["mdcn"]="Medical Kit";
DND5E.toolProficiencies["pntr"]="Painter's Supplies";
DND5E.toolProficiencies["ssdr"]="Starship Systems (Drive)";
DND5E.toolProficiencies["sshe"]="Starship Systems (Helm)";
DND5E.toolProficiencies["sssc"]="Starship Systems (SSC)";
DND5E.toolProficiencies["ssew"]="Starship Systems (EWS)";
DND5E.toolProficiencies["sswp"]="Starship Systems (Weapons)";
DND5E.toolProficiencies["tail"]="Tailor's Tools";
DND5E.toolProficiencies["tink"]="Tinker's Tools";
DND5E.toolProficiencies["wswb"]="Weaponsmith's Workbench";

//Character sheets
class ME5eCharacterSheet extends ActorSheet5eCharacter {
	static get defaultOptions() {
	  console.log("~~~~~~~~~~~ME5E CHARACTER SHEET ACTIVE~~~~~~~~~~~");
	  const options = super.defaultOptions;
	  options.classes.push('me5e');
	  return options;
	}
  }

  class ME5eParagonCharacterSheet extends ActorSheet5eCharacter {
	static get defaultOptions() {
	  console.log("~~~~~~~~~~~PARAGON CHARACTER SHEET ACTIVE~~~~~~~~~~~");
	  const options = super.defaultOptions;
	  options.classes.push('paragon');
	  return options;
	}
  }

  class ME5eRenegadeCharacterSheet extends ActorSheet5eCharacter {
	static get defaultOptions() {
	  console.log("~~~~~~~~~~~RENEGADE CHARACTER SHEET ACTIVE~~~~~~~~~~~");
	  const options = super.defaultOptions;
	  options.classes.push('renegade');
	  return options;
	}
  }

//Registering ME5e character sheet theme options
	console.log(`Initializing character sheets for ME5e Module`);

	Actors.registerSheet("dnd5e", ME5eCharacterSheet, { 
		types: ["character"],
		makeDefault: false 
	});

	Actors.registerSheet("dnd5e", ME5eParagonCharacterSheet, { 
		types: ["character"],
		makeDefault: false 
	});

	Actors.registerSheet("dnd5e", ME5eRenegadeCharacterSheet, { 
		types: ["character"],
		makeDefault: false 
	});