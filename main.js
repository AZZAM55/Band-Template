function myFunction() {
    var x = document.getElementById("myTopNav");
    var z = document.getElementsByClassName('slide');
    if (x.className === "topNav") {
        x.className += " responsive ";
    }else {
        x.className = "topNav"
    }



}