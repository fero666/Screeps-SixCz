// FlagDefend = pozice pro defendry;
// FlagAttack = pozice pro utok;
// Kdyz je 'target' (m�stnost nap�. W51N24) 
// naps�n v memory creepa tak se bude pohybovat v t�to m�stnosti;
// import modules
require('prototype.creep');
require('prototype.tower');
require('prototype.spawn');

global.TARGET = '0'; //moje

module.exports.loop = function() {
    // check for memory entries of died creeps by iterating over Memory.creeps
    for (let name in Memory.creeps) {
        // and checking if the creep is still alive
        if (Game.creeps[name] == undefined) {
            // if not, delete the memory entry
            delete Memory.creeps[name];
        }
    }

    // for each creeps
    for (let name in Game.creeps) {
        // run creep logic
        Game.creeps[name].runRole();
    }

    // find all towers
    var towers = _.filter(Game.structures, s => s.structureType == STRUCTURE_TOWER);
    // for each tower
    for (let tower of towers) {
        // run tower logic
        tower.defend();
    }

    // for each spawn
    for (let spawnName in Game.spawns) {
        // run spawn logic
        Game.spawns[spawnName].spawnCreepsIfNecessary();
    }
};