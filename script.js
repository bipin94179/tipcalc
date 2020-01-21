function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;


    //calculate TIP
    var total = (billAmt * serviceQual) / numOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    //set value in HTML
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

};

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function()
{
    calculateTip();
};