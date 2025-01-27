function debounce(fn,delay){
    let timeoutId;

    return function(...args){
        if(timeoutId){
            clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(()=>{
            fn.apply(this,args);
        },delay)
    }
}

const debouncedFunction = debounce(() => {
  console.log('Debounced function called');
}, 2000);

debouncedFunction();
debouncedFunction();
debouncedFunction();
