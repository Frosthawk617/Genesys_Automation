# Genesys_Automation

## Current Fuctionallity

### Auto-Apply Damage
When making an attack simply target the token you wish to attack and then make a roll using a weapon on an actors sheet and if the attack is successful you will recieve a prompt asking if you wish to apply the damage. This script takes into account Pierce and Soak.
Additionally if the target has the Adversary talent, the difficulty of your weapon roll will automatically be upgraded. You can make the talents yourself they should be named as so. Adversary, Adversary II, Adversary III, Adversary IIII.

### Auto-Apply Healing
Similar to the damage script this instead applies healing to the target when you make a medicine check as per the GCRB.

### Die Adder
On the top of each actors sheet next to token/sheet buttons there is a new "Adder" button. Clicking this will open a dialog allowing to apply boost,setback,upgrade difficuly, upgrade ability to that actors next check. This is mainly useful for when another character spends advantage or triumphs to effect the characters next roll.
If you have Sequencer and JB2a installed there will be handy animation making it easier to keep track of you has what extra die.

### Boost to Next Slot
I have added a macro that will add a boost die to the next allied slot. To use this you must have the FFG Enhancements module installed. It checks which faction NPC or PC is currently having its turn and then adds a boost die to the next roll when the round changes to another allied slot.

### NPC-Gen
One of largest parts of this module is the Npc Generator. It is still WIP but has some handy functionallity for a gm.
Before using the NPC-Generator you must create a blank actor and head over to the module settings menu and find Genesys Automation in the list there you will find three options two are dropdown lists and the other is a check box. If you have a compendium of talents that you wish to be available for the npc generator select it here then select the blank actor from the next dropdown list. This actor is where the skill is generated for the custom skill package builder which can be activated here and accessed through the macro. Once down you can find the button for the npc generator at the top of an actors sheet.

#### Characteristics
As per the EPG you can select one array of characteristics to apply to your npc.

#### Defense
Here you can select any amount of defenses though the lower options will supersede those above. You can also select if you npc will have the base minion,rival, or nemesis stats from the dropdown list at the top of the dialog.

#### Skills
If you did not activate the custom skill package option then you should see several generic options from the EPG list here. Note that if you are using a minion sheet the value of the skill will not be applied the skill will just be checked as a group skill.

#### Talents
Here you will see a list of each talent in the compendium you selected in the module settings. You can select any number of these and each will be added to the npc's sheet.

#### Equipment
Here you will see a small list of generic equipment sets. For now you can only select one but at the top of the page you can create a custom weapon and armor for the npc that will be unique to that npc but you can export it to the item directory using the export button at the start of the npc generator.
