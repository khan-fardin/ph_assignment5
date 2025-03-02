
function test(){
        alert("Board Updated Successfully")
        // document.getElementById("buttony").style.display='block'
        // document.getElementById("historyList").append("bhosdika")
        // document.getElementById("historyList").append()
        const taskNumStr = document.getElementById("taskNum").innerText;
        const taskNum = parseInt(taskNumStr);
        const newTaskNum = taskNum - 1;
        document.getElementById("taskNum").innerText=newTaskNum;

        const taskMainNumStr = document.getElementById("taskMainNum").innerText;
        const taskMainNum = parseInt(taskMainNumStr);
        const sum = taskMainNum + 1;
        document.getElementById("taskMainNum").innerText=sum;

        if (taskNum===1){
            alert("Congo! You've done all tasks!!!")
        }        
}
