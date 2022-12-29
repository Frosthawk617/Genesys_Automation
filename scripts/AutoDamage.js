Hooks.on("getRollBuilderFFGHeaderButtons", (event) => {
  console.log(event);
  if(event.roll.item.hasOwnProperty('data')) {
  var special = event.roll.item.data.special.value;
  const target = game.user.targets.first().actor;
  const adver = checkAdversary(target);
  const soak = target.data.data.stats.soak.value;
  const wounds = target.data.data.stats.wounds.value;
  var pierce = getPierceVal(special);
  for (var i = 0; i < adver; i++){
  if (event.dicePool.difficulty > 0) {
    event.dicePool.difficulty -= 1;
    event.dicePool.challenge += 1;
  } else if (event.dicePool.difficulty === 0) {
    event.dicePool.difficulty += 1;
  } else {
  }
}
  var check = Hooks.on("ffgDiceMessage", () => {
    getRollDetails(target, soak, wounds, pierce);
  });
  Hooks.once("closeRollBuilderFFG", () => {
    Hooks.off("ffgDiceMessage", check);
  });
  }
});

function getPierceVal(special) {
  if (special.includes('Pierce')) { 
  var substr = /Pierce(\<\/\w+\>|) (\d)/g;
  var valReg = /\d/g;
  var pierceString = special.match(substr)[0];
  var pierce = pierceString.match(valReg)[0]; }
   else if (special.includes('Breach')) {
    var substr = /Breach(\<\/\w+\>|) (\d)/g;
    var valReg = /\d/g;
    var pierceString = special.match(substr)[0];
    var pierce = pierceString.match(valReg)[0];
    pierce = pierce * 10;
  } else {
    pierce = 0;
  }
  return pierce;
}

function getRollDetails(target, soak, wounds, pierce) {
  let dmg = Hooks.on("createChatMessage", (event) => {
    console.log(event);
    var success = event.roll.ffg.success;
    if (success > event.roll.ffg.failure) {
    var wepDamage = event.roll.data.data.damage.adjusted;
    if (soak < pierce) {
      var pvS = 0;
    } else {
      var pvS = soak - pierce;
    }
    var toWound = success + wepDamage - pvS;
    var finalWounds = wounds + toWound;
    var message = "Dealt " + toWound + " Wounds to " + target.data.name;


    Dialog.confirm({
      title: "Shoot the right guy ?",
      content: "You aimed at "+target.data.name+"",
      yes: () => {
        ChatMessage.create({
          content: message,
        });
        applyDamage(target, finalWounds);
        Hooks.off("createChatMessage", dmg);
        game.user.updateTokenTargets([]);
      },
      no: () => {ui.notifications.info("Pick the right target next time....")
      game.user.updateTokenTargets([]);
    },
      defaultYes: false
    });

  } else {Hooks.off("createChatMessage", dmg);}
  });
}

function applyDamage(target, finalWounds) {
  target.update({ "data.stats.wounds.value": finalWounds });
}

function checkAdversary(target) {
  console.log(target.data.data.talentList);
 if (target.data.data.talentList.find(e => e.name === 'Adversary')) {
  return 1;
 } else if (target.data.data.talentList.find(e => e.name === 'Adversary II')) {
  return 2;
 } else if (target.data.data.talentList.find(e => e.name === 'Adversary III')) {
  return 3;
 } else if (target.data.data.talentList.find(e => e.name === 'Adversary IIII')) {
  return 4;
 } else { return 0;}
  
}