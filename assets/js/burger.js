    function myFunction() {
        var x = document.getElementById("myLabels");
        if (x.className === "labels") {
            x.className += " responsive";
        } else {
            x.className = "labels";
        }
    }