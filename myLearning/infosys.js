var jsonData = {
    "name": "roshan",
    "id": 23432,
    "contact": [{"contType":"moibile","contactNo":34543},{"contType":"landline","contactNo":2234324}],
    "address":{
        "city":"wefdf",
        "state":"dsf",
        "pincode":2342,
        "country":"sdfsf"
    },
    "status":"provasion"
};  //existing

jsonDataNew = {
    "id": 23432,
    "contact": [{"contType":"moibile","contactNo":11111},{"contType":"wewer","contactNo":4354}],
    "address":{
        "city":"pune",
    },
    "status":"confirmed"
};


var targetObj= JSON.parse(JSON.stringify(jsonData));

var sourceObj = JSON.parse(JSON.stringify(jsonDataNew));

function deepMergeObj(target,source){
    for(prop in target){
        console.log("prop>>>", prop)
        console.log("target[prop]>>>", target[prop])
        console.log("source[prop]>>>", source[prop])
        if(isObject(target[prop]) && source[prop]){
            deepMergeObj(target[prop],source[prop])
        }
        else if(source[prop] && isArray(source[prop])){
            source[prop].forEach(objInArrSource => {
                let found = false;
                contTypeSource = objInArrSource.contType;
                target[prop].forEach(objInArrTar => {
                    if(contTypeSource === objInArrTar.contType){
                        shallowMergeObj(objInArrTar,objInArrSource)
                        found = true;
                    }
                })
                if(!found) target[prop].push(objInArrSource)
            });
        }
        else if(source[prop]) {
            target[prop] = source[prop];
        }
        console.log("----------------------")
    }
}

function shallowMergeObj(target,source){
    Object.assign(target,source)
}

function isObject(val){
    return typeof val === "object" &&
                val !== null && 
                !Array.isArray(val);
}

function isArray(val){
    return Array.isArray(val);
}


console.log("targetObj old >>", JSON.parse(JSON.stringify(jsonData)))
console.log("sourceObj >>", sourceObj)
mergeObj(targetObj,sourceObj)
console.log("targetObj New >>", targetObj)