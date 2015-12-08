//TODO: Please write code in this file.
function printInventory(inputs){

var allItems=loadAllItems();

var Cart_Items=cart_Items(inputs,allItems);
console.log(Cart_Items);
 //console.log(allItems);
}
//
//function cart_Items(inputs,allItems) {
//var cart_Items=[];
//var information=[];
//var b=100;
////商品信息
//for(var i=0;i<inputs.length;i++){
//    for(var j=0;j<allItems.length;j++){
//        if(inputs[i].slice(0,10)==allItems[j].barcode){
//
//            information.push({barcode:allItems[j].barcode,
//                                name:allItems[j].name,
//                                unit:allItems[j].unit,
//                               price:allItems[j].price});
//            if(inputs[i].charAt(10)=='-'){
//              b=inputs[i].slice(11,12);//
//                //  b=i;
//
//            }
//        }
//    }
//}

/*//查找清单
for(var m=0;m<information.length;m++){  //information作为中间结果
var c=0;
    for(var n=0;n<cart_Items.length;n++){



       if(information[m].barcode==cart_Items[n].barcode){
                   cart_Items[n].number++;
                   cart_Items[n].total_price+=cart_Items[n].price;
                   c=1;

                   break;
                   }
     }
       if(c==0){
           if(m!=5){
             cart_Items.push({barcode:information[m].barcode,
                             name:information[m].name,
                             number:1,
                             unit:information[m].unit,
                             price:information[m].price,
                             total_price:information[m].price
                              });
           }
           else {
                 cart_Items.push({barcode:information[m].barcode,
                                  name:information[m].name,
                                  number:b,
                                  unit:information[m].unit,
                                  price:information[m].price,
                                  total_price:information[m].price*b
                                          });
           }
       }


}
*/


//修改版（第一模块：count,barcode）

function cart_Items(inputs,allItems){
var information=[];
var special_inputs=[]

for (var i=0;i<inputs.length;i++){
    var c=0;
    special_inputs.push(inputs[i].split('-'));
    for(var j=0;j<information.length;j++){
        if(inputs[i]==information[j].barcode)
            information.count++;
            c=1;
            break;
            }
//
   if(c==0)
   {
     if(parseInt(special_inputs[i][1])!=NaN){
        information.push({barcode:inputs[i],
                             count:1
                                })
     }
     else{
         information.push({barcode:inputs[i],
                             count:parseInt(special_inputs[i][1])
                                  })
     }


  }
}

return special_inputs;
//return information;
}