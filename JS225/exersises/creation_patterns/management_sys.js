import { validName, validCat, validQuan, getCode } from "./itemHelpers.js";

class Item {
  constructor(name, category, quantity) {
    this.name = validName(name);
    this.category = validCat(category);
    this.quantity = validQuan(quantity);

    if (this.name && this.category && this.quantity !== false) {
      this.code = getCode(this.name, this.category);
    }
  }
}

class ItemManager {
  static items = [];

  static create(name, category, quantity) {
    let item = new Item(name, category, quantity);

    if (!item.name || !item.category || item.quantity === false) {
      return false;
    }

    const plainItem = {
      skuCode: item.code,
      itemName: item.name,
      category: item.category,
      quantity: item.quantity,
    };

    ItemManager.items.push(plainItem);
  }

  static update(code, attrs) {
    let item = ItemManager.items.find(item => item.skuCode === code);

    if (!item) return;

    for (const key in attrs) {
      if (attrs.hasOwnProperty(key) && key in item) {
        item[key] = attrs[key];
      }
    }

    return item;
  }

  static delete(code) {
    ItemManager.items = ItemManager.items.filter(item => item.skuCode !== code);
  }

  static inStock() {
    return ItemManager.items.filter(item => item.quantity > 0);
  }

  static itemsInCategory(category) {
    return ItemManager.items.filter(item => item.category === category);
  }
}

class ReportManager {
  static itemsManager;

  static init(manager) {
    ReportManager.itemsManager = manager;
  }

  static createReporter(code) {
    let item = ReportManager.itemsManager.items.find(item => item.skuCode === code);
    return {
      itemInfo() {
        Object.keys(item).forEach(k => {
          console.log(`${k}: ${item[k]}`);
        });
      }
    };
  }

  static reportInStock() {
    const names = this.itemsManager.inStock().map(i => i.itemName);
    console.log(names.join(', '));
  }
}



ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

ItemManager.items;
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
// // returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// // logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// // returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
ItemManager.items;

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();