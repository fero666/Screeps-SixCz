module.exports = {
    // a function to run the logic for this role
    run: function(creep) {
      
        // if creep is supposed to transfer energy to a structure
            // find closest spawn, extension or tower which is not full
       var target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
       var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: (s) => (s.structureType == STRUCTURE_TOWER)                             
            }); 

            // if we found one
            if (target != undefined) {
                // try to transfer energy, if it is not in range
                if (creep.attack(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            }
        
        // if creep is supposed to flag1
        else {
			if (Game.flags.FlagDefend != undefined) {
            creep.moveTo(structure);
            //creep.moveTo(Game.flags.Flag1);
            }
			creep.moveTo(Game.flags.FlagDefend);
        }
    }
};