 const URL="http://localhost:3000/Brands"
// fetch(URL)
// .then (Response=> Response.json())
//   .then(data => console.data("data"))


let options = {
    "method": "POST",
    "headers": {
       "content-Type": "application/json"
    },
    "body": JSON.stringify({
        id:"6",
        name:"samsung"
    })
}

 fetch (URL,options)
.then(response => {
    if (response.ok){
        console.log("data inserted" , response.status , response.statusText)
    }
    else{
        console.log("error")
    }
})