function PromiseAny(taskList) {
    let noOfError = 0;
    return new Promise((resolve,reject)=>{
        taskList.forEach((task,index)=>{
            //If promise passes
            task.then((result)=>{
                resolve(result);
            }).catch((error)=>{ //If promise fail
                noOfError++;
                if(noOfError==taskList.length){
                    reject(error);
                }
            })
        })
    })
}

function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if(time < 4000){
        reject("Rejected");
      }else{
        resolve(time);
      }
    }, time);
  });
}

//Test Case One for Reject-All the promise get reject so finally they got rejected

const taskList = [task(1000), task(2000), task(3000)];

//run promise.all
PromiseAny(taskList)
  .then(results => {
    console.log("got results", results)
  })
  .catch(console.error);


//Test Case One for Resolve- -One the promise get resolve so finally they got resolve
const taskList2 = [task(1000), task(2000), task(5000)];

//run promise.all
PromiseAny(taskList2)
  .then(results => {
    console.log("This Promise is resolved beacuse atleast one promise gets resolved", results)
  })
  .catch(console.error);
