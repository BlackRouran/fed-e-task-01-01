//async 
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


async function getJson() {
  try {
    let result_01 = await ajax("../api/01.json")
    console.log(result_01)
    let result_02 = await ajax("../api/02.json")
    console.log(result_02)
    let result_03 = await ajax("../api/03.json")
    console.log(result_03)
  } catch(e){
    console.log(e)
  }
}
getJson().then( res => {
  console.log(res)
})