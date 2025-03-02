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
    // document.getElementById("historyList").style.display='none'
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
})
document.getElementById("addDarkBtn").addEventListener('click', function(){
    test(addDark)
    document.getElementById("addDarkBtn").style.display='none'
    document.getElementById("addDarkBtn1").style.display='block'   
})
document.getElementById("swiftBtn").addEventListener('click', function(){
    test(swift)
    document.getElementById("swiftBtn").style.display='none'
    document.getElementById("swiftBtn1").style.display='block'
})
document.getElementById("metaBtn").addEventListener('click', function(){
    test(meta)
    document.getElementById("metaBtn").style.display='none'
    document.getElementById("metabtn1").style.display='block'
})
document.getElementById("googleBtn").addEventListener('click', function(){
    test(google)
    document.getElementById("googleBtn").style.display='none'
    document.getElementById("googleBtn1").style.display='block'
})
document.getElementById("glassBtn").addEventListener('click', function(){
    test(glass)
    document.getElementById("glassBtn").style.display='none'
    document.getElementById("glassBtn1").style.display='block'
})

// last alert
if (taskNum===1){
    alert("Congo! You've done all tasks!!!")
}
