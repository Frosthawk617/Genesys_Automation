
Hooks.on("ready", () => {
    game.socket.on(`module.___Genesys_Automation`, request => {
      if (request.action === "addTurnBoost"){
        NextTurn.boost();
      } else if (request.action === "endTurnBoost"){
        NextTurn.endEffect(request.data.roll);
      }
    })})
class NextTurn {
  static boost(push=false) {
    if (push) {game.socket.emit(`module.___Genesys_Automation`, { action: "addTurnBoost"});}
  const adderId = game.combat.current.tokenId;
  const adderObj = game.combat.data.combatants.contents.find(x => x.data.tokenId === adderId);
  const adderFac = adderObj.data.name;
  var facArray = [];
  for (let i = 0; i < game.combat.data.combatants.contents.length; i++) {
    const element = game.combat.data.combatants.contents[i];
    var factoAdd = element.data;
    if (factoAdd.name === adderFac) {
      facArray.push(factoAdd.tokenId)
    }
  }
  console.log(facArray);
  var combatCheck = Hooks.on("updateCombat",() =>{
    const newId = game.combat.current.tokenId;
  const newObj = game.combat.data.combatants.contents.find(x => x.data.tokenId === newId);
  const newFac = newObj.data.name;
  if (newFac === adderFac) {
    Hooks.off("updateCombat", combatCheck);
    let roller = (event)=>{
        if (facArray.includes(event.roll.data.token._id)) {
            if (push) {
            ChatMessage.create({
                content: "Boost die applied."
              });
            }
          event.dicePool.boost += 1;
        }
    console.log(event);
      }
    Hooks.on("getRollBuilderFFGHeaderButtons",roller);
    var messageH= Hooks.on("createChatMessage", (event) => {
            if (push) {
                game.socket.emit(`module.___Genesys_Automation`, { action: "endTurnBoost",  data:{roller}})
                }
                NextTurn.endEffect(roller);
Hooks.off("createChatMessage", messageH)
        })
    console.log("turned off");
  }
  })
  console.log(adderFac);
    }
    static endEffect(roll) {
        Hooks.off("getRollBuilderFFGHeaderButtons",roll);
    }
}
window.NextTurn = NextTurn;