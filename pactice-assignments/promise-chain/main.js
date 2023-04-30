let form = document.getElementById("form");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let name =  document.getElementById("name").value
    let age =  document.getElementById("age").value

    if(age=="" || name==""){
        alert('inputs cannot be empty')
        return;
    }
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(age >= 18){
                resolve(`Welcome, ${name}. You can vote.`)
            }
            else{
                reject(`Oh sorry ${name}. You aren't old enough.`)
            }
        },4000)
    })
    promise.then((data)=>{
        alert(data);
    }).catch((data)=>{
        alert(data)
    })
})