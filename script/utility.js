
function test(){
        alert("Board Updated Successfully")
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
////////////////// test
function testx(xyz){
    // const now = new Date();
    // const timeString = now.toLocaleTimeString();

    // const testing = document.createElement("p");
    // const testing1 = "You have Complete The Task "
    // let testing2 = document.getElementById("fixMobileH1").innerText;
    // let testing3 = " at "
    // let testing4 = timeString
    // testing.textContent= testing1 + testing2 + testing3 + testing4
    // document.getElementById("historyList").appendChild(testing);
    // testing.style.backgroundColor="#F4F7FF"
    // testing.style.padding = "12px"
    // testing.style.borderRadius = "8px"
}
