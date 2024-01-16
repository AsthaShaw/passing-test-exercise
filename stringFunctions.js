function getLonger(string1, string2){
    
    if(string1==null || string2==null){
        throw new Error("This function requires two arguments!")
}
//     if(string1.length==0 || string2.length==0){
//          throw new Error("This function requires two arguments!");
// }
   
    if(typeof string1!=='string' || typeof string2!=='string'){
        throw new Error("Arguments must be strings!")
    }
    
    let value;
    if(string1.length>string2.length){
       value=string1;
    }
    else{
       value=string2;
    }
  
    return value;
    
}

function greet(stringValue){
 let message="Hi!";

 if(stringValue){
   message="Hello, "+stringValue+"!"
 }


 return message;

}


function isSubstring(string1, string2){
    let isIncluded=false;
    if(string1==null || string2==null){
        throw new Error("This function requires two arguments!")
}
    else if(string1.length==0 || string2.length==0){
        throw new Error("Arguments must have a length greater than zero!");
    }
   
   
    else if(typeof string1!=='string' || typeof string2!=='string'){
        throw new Error("Arguments must be strings!")
    }
     
    else{
        
        isIncluded=string1.includes(string2);
       
    }

    return isIncluded;
}


module.exports={
    getLonger, greet, isSubstring
}