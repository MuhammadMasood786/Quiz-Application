export  function swDev(){
    let swDev = `${process.env.PUBLIC_URL}/sw.js`;
    navigator.serviceWorker.register(swDev).then((result) =>{
  
      console.log('result' , result.scope);
    }).catch ((error) => {
      console.log('error', error)
    })
  }
  
  