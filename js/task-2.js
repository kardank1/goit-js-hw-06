class Storage{

  #items;

  constructor(items){
    this.#items = items.slice(0);
  }

  getItems(){
    return this.#items;
  }

  addItem(newItem){
    this.#items.push(newItem);
  }

  removeItem(itemToRemove){
    const removeIndex = this.#items.indexOf(itemToRemove);
    if(removeIndex != -1){
      this.#items.splice(removeIndex, 1);
    }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]