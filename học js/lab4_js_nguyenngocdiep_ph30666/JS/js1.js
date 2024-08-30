//cách 1
// var inventory = new Array;
// var items = new Object;
// items.items1 = {
//     Name : "ÁO",
//     Model : "2020",
//     Cost : "10000$",
//     Quantity : "2"
// }
// items.items2 = {
//     Name : "QUẦN",
//     Model : "2021",
//     Cost : "20000$",
//     Quantity : "5"
// }
// items.items3 = {
//     Name : "TÚI XÁCH",
//     Model : "2022",
//     Cost : "30000$",
//     Quantity : "3"
// }
// inventory.push(items)
// inventory = items;
// console.log(inventory.items3.Quantity);

//cách 2
var inventory = new Array;
function items(Name,Model,Cost,Quantity){
    this.Name = Name;
    this.Model = Model;
    this.Cost = Cost;
    this.Quantity = Quantity;
}
items[0] = new items("túi xách","2020","1000$","5");
items[1] = new items("quần","2021","2000$","3");
items[2] = new items("áo","2022","3000$","7");
items[2].Quantity;
for(var x in items){
    console.log(items[2].Quantity);
}
inventory.push(items);
console.log(inventory);

