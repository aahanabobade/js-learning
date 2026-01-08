var sellingprice =799;
var costprice = 199;

var discount = ((sellingprice-costprice)/sellingprice)*100
floordiscount = Math.round(discount)
console.log("dicsount percentage is" ,floordiscount+ "% off")