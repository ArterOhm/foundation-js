const foods = ["กระเพรา", "ข้าวมันไก่", "ข้าวขาหมู", "ส้มตำ"];

const myfood = foods[2];
console.log(myfood);

foods.push("มะม่วง", "ทุเรียน", "เค้ก");
//foods.push("มะม่วง");
//foods.push("ทุเรียน");
//foods.push("เค้ก");
console.log(foods);

console.log(foods.includes(myfood));
