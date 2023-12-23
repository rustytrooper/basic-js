const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let output = [];
  if (typeof members == 'number' || typeof members == 'undefined' || members == null) {
    return false;
  }
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string') {
      let name = members[i].trim();
      output.push(name[0].toUpperCase())
    }
  }

  let output1 = output.sort().join('')
  return output1;
}

module.exports = {
  createDreamTeam
};
