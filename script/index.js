// color effect
document.getElementById("colorChanger").addEventListener("click", 
    function(event){
        event.preventDefault()
        let col1 = Math.floor(Math.random()*256);
        let col2 = Math.floor(Math.random()*256);
        let col3 = Math.floor(Math.random()*256);

        let rgbCol = `rgb(${col1}, ${col2}, ${col3})`
        document.getElementById("body").style.backgroundColor= rgbCol
        
})

// live time
const now = new Date();
const timeString = now.toLocaleDateString(undefined, {weekday: 'long', month:'long', year:'numeric',day:'2-digit'});
document.getElementById("liveDate").textContent = timeString;
// setInterval(updateClock, 1000)

//clear history section
document.getElementById("clearHistoryBtn").addEventListener('click',function(){
    document.getElementById("historyList").remove()
})

// redirection code
document.getElementById("dicoverBlog").addEventListener("click", function(){
    window.location.href='blog.html'
})

// task lists
document.getElementById("fixMobileBtn").addEventListener('click', function(){
    test(fixMobile)
    document.getElementById("fixMobileBtn").style.display='none'
    document.getElementById("fixMobileBtn1").style.display='block'

    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const hisListAdd = document.createElement("p");
    const hisListAdd1 = "You have Complete The Task "
    let hisListAdd2 = document.getElementById("fixMobileH1").innerText;
    let hisListAdd3 = " at "
    let hisListAdd4 = timeString
    hisListAdd.textContent= hisListAdd1 + hisListAdd2 + hisListAdd3 + hisListAdd4
    document.getElementById("historyList").appendChild(hisListAdd);
    hisListAdd.style.backgroundColor="#F4F7FF"
    hisListAdd.style.padding = "12px"
    hisListAdd.style.borderRadius = "8px"
    hisListAdd.style.marginBottom = "16px"
})
document.getElementById("addDarkBtn").addEventListener('click', function(){
    test(addDark)
    document.getElementById("addDarkBtn").style.display='none'
    document.getElementById("addDarkBtn1").style.display='block'   
    
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const hisListAdd = document.createElement("p");
    const hisListAdd1 = "You have Complete The Task "
    let hisListAdd2 = document.getElementById("addDarkH1").innerText;
    let hisListAdd3 = " at "
    let hisListAdd4 = timeString
    hisListAdd.textContent= hisListAdd1 + hisListAdd2 + hisListAdd3 + hisListAdd4
    document.getElementById("historyList").appendChild(hisListAdd);
    hisListAdd.style.backgroundColor="#F4F7FF"
    hisListAdd.style.padding = "12px"
    hisListAdd.style.borderRadius = "8px"
    hisListAdd.style.marginBottom = "16px"
})
document.getElementById("swiftBtn").addEventListener('click', function(){
    test(swift)
    document.getElementById("swiftBtn").style.display='none'
    document.getElementById("swiftBtn1").style.display='block'

    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const hisListAdd = document.createElement("p");
    const hisListAdd1 = "You have Complete The Task "
    let hisListAdd2 = document.getElementById("optimizaH1").innerText;
    let hisListAdd3 = " at "
    let hisListAdd4 = timeString
    hisListAdd.textContent= hisListAdd1 + hisListAdd2 + hisListAdd3 + hisListAdd4
    document.getElementById("historyList").appendChild(hisListAdd);
    hisListAdd.style.backgroundColor="#F4F7FF"
    hisListAdd.style.padding = "12px"
    hisListAdd.style.borderRadius = "8px"
    hisListAdd.style.marginBottom = "16px"
})
document.getElementById("metaBtn").addEventListener('click', function(){
    test(meta)
    document.getElementById("metaBtn").style.display='none'
    document.getElementById("metabtn1").style.display='block'

    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const hisListAdd = document.createElement("p");
    const hisListAdd1 = "You have Complete The Task "
    let hisListAdd2 = document.getElementById("emojiH1").innerText;
    let hisListAdd3 = " at "
    let hisListAdd4 = timeString
    hisListAdd.textContent= hisListAdd1 + hisListAdd2 + hisListAdd3 + hisListAdd4
    document.getElementById("historyList").appendChild(hisListAdd);
    hisListAdd.style.backgroundColor="#F4F7FF"
    hisListAdd.style.padding = "12px"
    hisListAdd.style.borderRadius = "8px"
    hisListAdd.style.marginBottom = "16px"
})
document.getElementById("googleBtn").addEventListener('click', function(){
    test(google)
    document.getElementById("googleBtn").style.display='none'
    document.getElementById("googleBtn1").style.display='block'

    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const hisListAdd = document.createElement("p");
    const hisListAdd1 = "You have Complete The Task "
    let hisListAdd2 = document.getElementById("apiH1").innerText;
    let hisListAdd3 = " at "
    let hisListAdd4 = timeString
    hisListAdd.textContent= hisListAdd1 + hisListAdd2 + hisListAdd3 + hisListAdd4
    document.getElementById("historyList").appendChild(hisListAdd);
    hisListAdd.style.backgroundColor="#F4F7FF"
    hisListAdd.style.padding = "12px"
    hisListAdd.style.borderRadius = "8px"
    hisListAdd.style.marginBottom = "16px"
})
document.getElementById("glassBtn").addEventListener('click', function(){
    test(glass)
    document.getElementById("glassBtn").style.display='none'
    document.getElementById("glassBtn1").style.display='block'

    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const hisListAdd = document.createElement("p");
    const hisListAdd1 = "You have Complete The Task "
    let hisListAdd2 = document.getElementById("jobH1").innerText;
    let hisListAdd3 = " at "
    let hisListAdd4 = timeString
    hisListAdd.textContent= hisListAdd1 + hisListAdd2 + hisListAdd3 + hisListAdd4
    document.getElementById("historyList").appendChild(hisListAdd);
    hisListAdd.style.backgroundColor="#F4F7FF"
    hisListAdd.style.padding = "12px"
    hisListAdd.style.borderRadius = "8px"
    hisListAdd.style.marginBottom = "16px"
})

// last alert
if (taskNum===1){
    alert("Congo! You've done all tasks!!!")
}
