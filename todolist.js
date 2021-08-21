showtask();

let addtaskinput=document.getElementById('addtaskinput');
let addtaskbtn=document.getElementById('add-task');

addtaskbtn.addEventListener('click',function(){
    addtaskinputval=addtaskinput.value;
    if(addtaskinputval.trim()!=0){
        let webTask=localStorage.getItem('localtask');
        if(webTask == null){
            taskObj =[]
        }
        else{
            taskObj= JSON.parse(webTask);
        }
    
        taskObj.push(addtaskinputval);
        localStorage.setItem('localtask',JSON.stringify(taskObj));
        addtaskinput.value="";
    }
  
    showtask();
})


function showtask(){
    
    let webTask=localStorage.getItem('localtask');
    if(webTask == null){
        taskObj =[]
    }
    else{
        taskObj= JSON.parse(webTask);
    }

    let html='';
    let tasklist=document.getElementById('tasklist');
    taskObj.forEach((item,index) =>{
        html += `<tr>
        <td>${index+1 }</td>
        <td>${item}</td>
       
        <td><button class="delete" onclick="deletetask(${index})">delete</button></td>
    </tr>`;
    });

    tasklist.innerHTML=html;
}



function deletetask(index){
    let webTask=localStorage.getItem('localtask');
    let taskObj = JSON.parse(webTask);
    taskObj.splice(index, 1);
    localStorage.setItem('localtask',JSON.stringify(taskObj));
    showtask();
}

let deleteallbtn=document.getElementById('delete-all');
deleteallbtn.addEventListener('click',function(){
    let webTask=localStorage.getItem('localtask');
    let taskObj = JSON.parse(webTask);
    if(taskObj!=0){
        taskObj=[];
    }
    localStorage.setItem('localtask',JSON.stringify(taskObj));
    showtask();
})