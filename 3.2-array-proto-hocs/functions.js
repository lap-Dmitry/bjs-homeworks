//Task 1
console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
return weapons.map(weapon => weapon.name);
}

function getCountReliableWeapons(initDurability) {
  return weapons.filter(weapon => weapon.initDurability > initDurability).length;
}

function hasReliableWeapons(initDurability) {
  return weapons.some(weapon => weapon.initDurability > initDurability);
}

function getReliableWeaponsNames(initDurability) {
  return weapons
  .filter(weapon => weapon.initDurability > initDurability)
  .map(weapon => weapon.name);
}

function getTotalDamage() {
  return weapons.reduce((sum, weapon) => sum + weapon.attack, 0)
}

//Task 2
function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  sleep(100);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
return (arr1.every((arr, i) => arr === arr2[i]) && arr1.length === arr2.length);
}

function memorize(fn, limit) {
  const memory = [];
  return function(...args) {
    const foundObject = memory.find(mem => compareArrays(mem.args, args));
    if (foundObject) {
      return foundObject.result;
    }
    const result = fn(...args);
    memory.push({args, result});
    if (memory.length > limit) {
      memory.shift();
    }
    return result;
  }
}
