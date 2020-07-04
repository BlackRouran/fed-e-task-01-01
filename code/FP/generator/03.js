function ajax(url) {
  const promise = new Promise((resolve, reject) => {
    const XHR = new XMLHttpRequest();
    XHR.open("GET", url);
    XHR.responseType = "json";
    XHR.setRequestHeader("Accept", "application/json");
    XHR.onreadystatechange = function () {
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

function* getJson() {
  try {
    let result_01 = yield ajax("../api/01.json")
    console.log(result_01)
    let result_02 = yield ajax("../api/02.json")
    console.log(result_02)
    let result_03 = yield ajax("../api/04.json")
    console.log(result_03)
  } catch(e){
    console.log(e)
  }
}

const g = getJson();

// //  得到生成器对象
// const result = g.next();

// result.value.then((res)=>{
//   if(res.value === true) return
//   //  把得到的结果 回传给生成器
//   let result2 =  g.next(res);
//   result2.value.then(res => {
//     g.next(res)
//   })
// })


function handleResult(result) {
  if (result.done === true) return
  result.value.then(data => {
    handleResult(g.next(data))
  }, error => {
    g.throw(error)
  })
}

handleResult(g.next())