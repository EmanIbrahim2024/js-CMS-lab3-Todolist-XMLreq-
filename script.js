let cont=document.getElementById('inputContainer')

// cont.style.display = 'flex';
// cont.style.flexDirectionn = 'column';
// cont.style.justifyContent = 'center'; // Center content horizontally within the div
//cont.style.textAlign = 'center';  


let mainIn=document.getElementById("mainInput");
mainIn.style.borderRadius='20px'
mainIn.style.height='30px'
mainIn.style.width='300px'
mainIn.style.paddingInline='11px'
mainIn.style.outline='1px #5b4e4e solid'
mainIn.style.paddingInline='11px'

let addbtn=document.getElementById('mainIpBt')
addbtn.style.borderRadius='20px'
addbtn.style.height='30px'
addbtn.style.width='80px'

addbtn.addEventListener('click',function(){

if(mainIn.value){

let contTask= document.createElement("div");

contTask.style.borderRadius = '20px';
contTask.style.width = '520px';
contTask.style.height = '40px';
contTask.style.marginBlock='10px'
contTask.style.display = 'flex';
contTask.style.justifyContent = 'center'; 
contTask.style.alignItems = 'center';   
cont.appendChild(contTask);


const newTask = document.createElement("div");
newTask.style.display = 'flex';
newTask.style.justifyContent = 'justify-around'; 
newTask.style.alignItems = 'center';    


contTask.appendChild(newTask)

let taskname=document.createElement("p");
taskname.style.borderRadius='20px'
taskname.style.width='300px'
taskname.style.height='30px'
taskname.style.display='inline-block'
taskname.style.outline='1px #5b4e4e solid'
taskname.style.paddingInline='11px'




let doneBtn=document.createElement("button");
doneBtn.style.borderRadius='20px'
doneBtn.style.height='30px'
doneBtn.style.width='60px'
doneBtn.innerText='Done'
doneBtn.style.margin='10px'

let deleteBtn=document.createElement("button");
deleteBtn.style.borderRadius='40px'
deleteBtn.style.height='30px'
deleteBtn.style.width='80px'
deleteBtn.innerText='Delete'
deleteBtn.style.margin='10px'

taskname.innerText=`${mainIn.value}`
newTask.appendChild(taskname);
newTask.appendChild(doneBtn);
newTask.appendChild(deleteBtn);

doneBtn.addEventListener('click',function(event){ 
contTask.style.background = '#8bce8b';
taskname.style.color='red'


mainIn.value=null
mainIn.setAttribute('placeholder', 'Add your Task here');

})

deleteBtn.addEventListener('click',function(){ 
    contTask.remove()
})
    }



})

////////////////////////// Task2 ////////////////////////////////////////


let tableElem=document.getElementById("table");
tableElem.style.border='1px solid black'
tableElem.style.borderCollapse = "collapse"
tableElem.style.margin="10px"

let filterBut=document.getElementById("filterbyID");
filterBut.style.borderRadius='20px'
filterBut.style.height='30px'


let filterInput=document.getElementById('filterInput');
filterInput.style.borderRadius='20px'
filterInput.style.height='30px'
filterInput.style.width='300px'
filterInput.style.paddingInline='11px'
filterInput.style.outline='1px #5b4e4e solid'

let removefilteration=document.getElementById('removeFilteration')
removefilteration.style.borderRadius='20px'
removefilteration.style.height='30px'



let xhr=new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/posts');
xhr.send("");
xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status===200){
        let res=JSON.parse(xhr.response);
        let headerRow = document.createElement("tr");
        if (res.length > 0) {
            for (let prop in res[0]) {
                let th = document.createElement("th");
                th.innerText = prop; // Use the property name as the header
                th.style.border = "1px solid black";
                th.style.padding = "8px";
                th.style.background='#8bce8b'
                headerRow.appendChild(th);
            }
            tableElem.appendChild(headerRow);
        }

        for(let i=0;i<res.length;i++){
            let rowTable=document.createElement("tr");
            tableElem.appendChild(rowTable);

            for (prop in res[i])
            {
                rowTable.innerHTML += `<td>${res[i][prop]}</td>`;
            }

            tableElem.appendChild(rowTable);
            
}}}

let displayData=document.getElementById("displayData")
displayData.appendChild(tableElem)

/////////////////filteration////////////////////


filterBut.addEventListener('click',function(){

    if(filterInput.value){
    let inp = filterInput.value;
    let tablefilter=document.createElement("table");
    tableElem.remove()
    tablefilter.remove();
    if(!document.getElementById('myClass')){
    
    tablefilter.setAttribute('id', 'myClass'); 
    tablefilter.style.border='1px solid black'
    tablefilter.style.borderCollapse = "collapse"
    tablefilter.style.margin="10px"

            
    let xhr=new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/posts/"+ inp);
    xhr.send("");
    xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status===200){
        let res=JSON.parse(xhr.response);
        console.log(res)
        

        
        let headerRow = document.createElement("tr");
            for (let prop in res) {
                let th = document.createElement("th");
                th.innerText = prop;  // Set property name as the header text
                th.style.border = "1px solid black";
                th.style.padding = "8px";
                th.style.background = '#8bce8b';
                headerRow.appendChild(th);
            }
            tablefilter.appendChild(headerRow);

        let rowTable = document.createElement("tr");
        for (let prop in res) {
            let td = document.createElement("td");
            td.innerText = res[prop];  // Set the value of each property in a table cell
            td.style.border = "1px solid black";
            td.style.padding = "8px";
            rowTable.appendChild(td);
        }
        tablefilter.appendChild(rowTable);
    
    }

    
    displayData.appendChild(tablefilter)
    removefilteration.addEventListener('click',function(){
        tablefilter.remove();
        displayData.appendChild(tableElem)
    })
    
}}
}})




