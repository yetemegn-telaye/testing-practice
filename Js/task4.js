let capitalize =(str)=>{
    if(typeof str==="string"){
        const str2 = str.charAt(0).toUpperCase() + str.slice(1);
        return str2;
    }
    else
        return("Not a string");
}

module.exports= capitalize;