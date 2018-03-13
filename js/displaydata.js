var isDisplayed = false;

function display() {
    if (event.target.id == "qualityAssurance") {
        $("#qualityAssurance-data").show();
    }
    if (event.target.id == "softwareDev") {
        $("#software-data").show();
    }
    if (event.target.id == "onDemand") {
        $("#onDemand-data").show();
    }
}

$(".item-boxes h4").click(function (event) {

    $(".displayGroup").hide();

    if (!isDisplayed) {
        $("#services-data").show();
        isDisplayed = true;
        display();
    }else {
        isDisplayed = false;
        $("#services-data").hide();
    }


});