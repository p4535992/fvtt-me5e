import Actor5e from "/systems/dnd5e/module/actor/entity.js";
import { DND5E } from '/systems/dnd5e/module/config.js';
import ActorSheet5eCharacter from "/systems/dnd5e/module/actor/sheets/character.js";

//Changing out deprecated 5e skills to their replacements
DND5E.skills["arc"] = "Electronics";
DND5E.skills["nat"] = "Engineering";
DND5E.skills["rel"] = "Science";
DND5E.skills["veh"] = "Vehicle Handling";

//Add vehicle handling to the character sheet as a skill
const prep = Actor5e.prototype.prepareBaseData;	
function extendActorData() {
	const skl = this.data.data.skills;
	skl["veh"] = skl["veh"] || {value: 0, ability: "dex"};
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