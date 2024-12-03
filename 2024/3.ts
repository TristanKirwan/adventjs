type Inventory = Array<
  { name: string, quantity: number, category: string }
>

function organizeInventory(inventory: Inventory): object {
  const organizedInventory = {};
  
  inventory.forEach((item) => {
    if(!organizedInventory[item.category]) {
      organizedInventory[item.category] = {};
    }

    if(!organizedInventory[item.category][item.name]){
      organizedInventory[item.category][item.name] = item.quantity
    } else {
      organizedInventory[item.category][item.name] = item.quantity + organizedInventory[item.category][item.name]
    }

  })

  return organizedInventory
}

// Score of this question also isn't great.
