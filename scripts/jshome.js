function plus(){ 
    let num1 = document.getElementById("+inputOne").value;
    let num2 = document.getElementById("+inputTwo").value;   
    let inputOne = parseFloat(num1);
    let inputTwo = parseFloat(num2);
    let uitkomst = inputOne + inputTwo;
    document.getElementById("+uitkomst").innerHTML = uitkomst;
    }
    document.getElementById("plusBtn").addEventListener("click", plus);
    
    function min(){ 
    let num1 = document.getElementById("-inputOne").value;
    let num2 = document.getElementById("-inputTwo").value;   
    let inputOne = parseFloat(num1);
    let inputTwo = parseFloat(num2);
    let uitkomst = inputOne - inputTwo;
    document.getElementById("-uitkomst").innerHTML = uitkomst;
    }
    document.getElementById("minBtn").addEventListener("click", min);
    
    function keer(){ 
    let num1 = document.getElementById("*inputOne").value;
    let num2 = document.getElementById("*inputTwo").value;   
    let inputOne = parseFloat(num1);
    let inputTwo = parseFloat(num2);
    let uitkomst = inputOne * inputTwo;
    document.getElementById("*uitkomst").innerHTML = uitkomst;
    }
    document.getElementById("keerBtn").addEventListener("click", keer);
    
    function deel(){ 
    let num1 = document.getElementById("/inputOne").value;
    let num2 = document.getElementById("/inputTwo").value;   
    let inputOne = parseFloat(num1);
    let inputTwo = parseFloat(num2);
    let uitkomst = inputOne / inputTwo;
    document.getElementById("/uitkomst").innerHTML = uitkomst;
    }
    document.getElementById("deelBtn").addEventListener("click", deel);