function promiseAll(taskList){
    //for storing all the results of the promisses
    let results = [];
    let totalTaskResolved = 0;
    
    return new Promise((resolve,reject)=>{
        
        taskList.forEach((promise,index)=>{
            //If promise passes
            promise.then((value)=>{
                results[index]=value;
                totalTaskResolved++;

                if(totalTaskResolved==taskList.length){
                    resolve(results);
                }
            }).catch((error)=>{ // If Promiss Fails
                reject(error);
            })
        })
    })
}

//////Test case one for Resolve
function taskOne(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

const taskList = [taskOne(1000), taskOne(5000), taskOne(3000)];

//run promise.all
promiseAll(taskList)
  .then(results => {
    console.log("All Promises are passed, results", results)
  })
  .catch(console.error);


/////Tast case two for Reject
function taskTwo(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if(time < 3000){
        reject("Rejected");
      }else{
        resolve(time);
      }
    }, time);
  });
}

const taskList2 = [taskTwo(1000), taskTwo(5000), taskTwo(3000)];

//run promise.all
promiseAll(taskList2)
  .then(results => {
    console.log("got results", results)
  })
  .catch(console.error);

