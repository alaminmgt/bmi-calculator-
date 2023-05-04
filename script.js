function showResult() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    height = height * 12;
    height = height * .025 ; // now height in meter
    height = Math.pow(height,2);

    var bmivalue = weight/height ;
    bmivalue = Math.round(bmivalue);
    document.getElementById("result").value = bmivalue;

}