let reverseString = (str)=>{
    let strChar = str.split('');
    let reverseStr=[];
    for(i=strChar.length;i>=0;i--){
        reverseStr.push(strChar[i]);
    }
    return reverseStr.join("");
}
module.exports=reverseString;