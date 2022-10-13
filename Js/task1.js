
const stringLength = (str)=>{
    let strLen = str.split('').length;
    try {
        if(strLen<1 ) throw "empty";
        if(strLen>10) throw "too long";
        else {
            return strLen;
        }
      }
      catch(err) {
        console.log("Input is " + err);
      }
}
//console.log(stringLength('sas'));

module.exports=stringLength;