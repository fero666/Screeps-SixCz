// SPAWN
Game.spawns['Spawn1'].createCreep( [WORK, CARRY, MOVE], 'Builder1', { role: 'builder' } );
Game.spawns['Spawn1'].createCreep( [WORK, CARRY, MOVE], 'Upgrader1', { role: 'upgrader' } );
Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], 'Harvester1', {role: 'harvester'});
// Set role
Game.creeps['Harvester1'].memory.role = 'harvester';
Game.creeps['Upgrader1'].memory.role = 'upgrader';
Game.creeps['Upgrader1'].memory.role = 'builder';
// claimer
Game.spawns.Spawn1.memory.claimRoom = W52S78