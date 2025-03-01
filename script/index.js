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

// testing
document.getElementById("fixMobileBtn").addEventListener('click', function(){
    alert("Board Updated Successfully")
    document.getElementById("fixMobileBtn").style.display='none'
    document.getElementById("fixMobileBtn1").style.display='block'
    document.getElementById("historyList").append("bhosdika")
})
