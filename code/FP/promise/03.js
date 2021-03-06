// //promiose 封装ajax

function ajax(url) {
  const promise = new Promise((resolve, reject) => {
    const XHR = new XMLHttpRequest();
    XHR.open("GET", url);
    XHR.responseType = "json";
    XHR.setRequestHeader("Accept", "application/json");
    XHR.onreadystatechange = function (){
      if (this.readyState !== 4) {
        return
      }
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    XHR.send();
  })
  return promise
}

ajax('../api/01.json').then( res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

export  {
  ajax
}