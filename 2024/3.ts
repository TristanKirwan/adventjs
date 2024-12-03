type Inventory = Array<
  { name: string, quantity: number, category: string }
>

function organizeInventory(inventory: Inventory): object {
  const organizedInventory = {};
  
  inventory.forEach((item) => {
    const currentCatInOrganizedInv = organizedInventory[item.category];

    if(!currentCatInOrganizedInv) {
      organizedInventory[item.category] = {};
    }
    const currentNameInOrganizedInv = organizedInventory[item.category][item.name];
    if(!currentNameInOrganizedInv){
      organizedInventory[item.category][item.name] = item.quantity
    } else {
      organizedInventory[item.category][item.name] = item.quantity + currentCatInOrganizedInv[item.name]
    }

  })

  return organizedInventory
}

// Score of this question also isn't great.
