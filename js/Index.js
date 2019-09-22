function jammerform(){
    
    let submit= document.getElementById("subbtn");
    let listT= document.getElementById("listTodo");
    let clear= document.getElementById("clearb");
    let mark= document.getElementById("markb");
    let del= document.getElementById("deleteb");
    var count=1;
    
    submit.addEventListener("click", (event)=> {
        let newTodo= document.getElementById("newT");
        let newTL= newTodo.value;
      
        event.preventDefault();

        let crdiv=document.createElement("div");
        crdiv.className="newtask_listTodo";

        let input_check=document.createElement("input");
        input_check.className="chkbox";
        input_check.type="checkbox";
        crdiv.appendChild(input_check);


        let crdiv2 = document.createElement("div2");
        let s = " ";  
        let text = document.createTextNode(s+ count + s + newTL);

        count= count + 1;    
        crdiv2.appendChild(text);                           
        crdiv.appendChild(crdiv2);                            
        newTodo.value = "";                            
        
        document.getElementById("listTodo").append(crdiv);     
  
    });

    clear.addEventListener("click", (event)=> {
        event.preventDefault();
        let check_task = document.getElementsByClassName("chkbox");
        let i;
        let x=check_task.length;
        for (i =0; i<x; i++) 
        {
            check_task[i].checked = false;

        }
    });

    
    mark.addEventListener("click", (event)=>{
        event.preventDefault();
        let check_task = document.getElementsByClassName("chkbox");
        let i;
        let x=check_task.length;
        for(i = 0; i < x; i++)
        {
            check_task[i].checked = true;
        }
    });


    del.addEventListener("click", (event)=>{
        event.preventDefault();
        let tasks= document.getElementsByClassName("newtask_listTodo");
        let i;
        let x= tasks.length;
        for (i =0; i< x; i++) 
        {
            tasks[0].parentNode.removeChild(tasks[0]);
        }
        count=1;
    });

}
jammerform();

