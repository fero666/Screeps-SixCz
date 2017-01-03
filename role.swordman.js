module.exports = {
    // a function to run the logic for this role
    run: function (creep) {
        var targetCreep = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        var targetStructure = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
                if (targetCreep != undefined || targetStructure != undefined) {
                    // try to transfer energy, if it is not in range
                    if (creep.attack(targetCreep) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targetCreep);
                    }
                    
                    if (creep.attack(targetStructure) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targetStructure);
                    }
                }

                
                // if not in home room...
            else {
                // find exit to home room
               // var exit = creep.room.findExitTo(creep.memory.target);
                // and move to exit
               // creep.moveTo(creep.pos.findClosestByRange(exit));
                creep.moveTo(Game.flags.FlagAttack);
            }
        }
           
};