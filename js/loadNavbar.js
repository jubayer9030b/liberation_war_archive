fetch("navbar/navbar.html")
.then(Response=>Response.text())
.then(data=>{
    document.getElementById("navbar").innerHTML = data;
});