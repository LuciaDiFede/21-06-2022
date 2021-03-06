(function () {
  const nomi = ["Luca", "Eleonora", "Roberta", "Claudio", "Marco"];
  const namesToIndex = (name, index, array) => {
    // return (index+1) + ' - ' + item;
    return `Ciao ${index + 1} - ${item}`; //template litteral ``
  };

  const namesToReverseIndex = (_, index, array) => {
    return array.length - 1 - index;
  };

  const itemsToReverse = (_, index, array) => {
    const reversedIndex = array.length - 1 - index;
    return array[reversedIndex];
  };
  console.log(nomi.map(namesToIndex));
  console.log(nomi.map(namesToReverseIndex));
  console.log(nomi.map(itemsToReverse));
})();
