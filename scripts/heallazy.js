Hooks.on('renderChatMessage',(event)=>{
  if (event.data.flavor === "Rolling Medicine..." && game.user.targets.first()) {
    var target = game.user.targets.first().actor;
    var toHeal = event.roll.ffg.triumph + event.roll.ffg.success;
    var finalWound = target.data.data.stats.wounds.value -= toHeal;
    if(finalWound < 0){
      finalWound = 0;
    }
    var finalStrain = target.data.data.stats.strain.value -= event.roll.ffg.advantage - event.roll.ffg.threat;
    if(finalStrain < 0){
      finalStrain = 0;
    }
    if (event.roll.ffg.advantage < event.roll.ffg.threat) {
      var strainTakenHuh = "took "
    } else {
      var strainTakenHuh = ""
    }
    var message = target.data.name + " has been healed for " + toHeal + " wounds and " + strainTakenHuh + event.roll.ffg.advantage + " strain by " + event.data.speaker.alias;
    updateTarget(target, finalWound, finalStrain);
    ChatMessage.create({
      content: message
  })
  }
  })
  
  function updateTarget(target, healing, strainHealed) { 
    target.update({ "data.stats.wounds.value": healing });
    target.update({ "data.stats.strain.value": strainHealed });
   }

