
function Calculate_Average() {

    var subject1 = +document.getElementById('sub1').value;
    var subject2 = +document.getElementById('sub2').value;
    var subject3 = +document.getElementById('sub3').value;
    var subject4 = +document.getElementById('sub4').value;
  
    if(subject1 == "" || subject2 == "" || subject3 == "" || subject4 == ""  ){
        alert("Please Enter Your Grade in Input Feild!")
    }else{
        var render = document.getElementById("render");
        var marks = [];
        marks.push(subject1);
        marks.push(subject2);
        marks.push(subject3);
        marks.push(subject4);
        var sum = 0;
        for (i = 0; i < marks.length; i++) {
            sum += marks[i]
            
        }
        result = sum / marks.length
        if (result >= 50) {
            condition = `Congratulation! Muhammad Haris (BC210400970) You Passed with an average grade of ${Math.floor(result)} `
        } else {
            condition = `Unfortunately! Muhammad Haris (BC210400970) You Failed with an average grade of ${Math.floor(result)} `
        }
        render.innerHTML = condition;
    
    }

}