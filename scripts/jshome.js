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


    function dakje(){ 
        let num1 = document.getElementById("^inputOne").value;
        let num2 = document.getElementById("^inputTwo").value;   
        let inputOne = parseFloat(num1);
        let inputTwo = parseFloat(num2);
        let uitkomst = inputOne ** inputTwo;
        document.getElementById("^uitkomst").innerHTML = uitkomst;
        }
        document.getElementById("^Btn").addEventListener("click", dakje);
        
		
        function procent(){ 
        let num1 = document.getElementById("%inputOne").value;
        let num2 = document.getElementById("%inputTwo").value;   
        let inputOne = parseFloat(num1);
        let inputTwo = parseFloat(num2);
        let uitkomst = inputOne / 100 * inputTwo;  
        document.getElementById("procentUitkomst").innerHTML = uitkomst;
        }
        document.getElementById("%Btn").addEventListener("click", procent);
        
		
        function rest(){ 
        let num1 = document.getElementById("RinputOne").value;
        let num2 = document.getElementById("RinputTwo").value;   
        let inputOne = parseFloat(num1);
        let inputTwo = parseFloat(num2);
		let uitkomst = inputOne % inputTwo;
        document.getElementById("Ruitkomst").innerHTML = uitkomst;
        }
        document.getElementById("restBtn").addEventListener("click", rest);
        
		
        function even(){ 
        let num = document.getElementById("einput").value;  
        let input = parseFloat(num);
		if	(input % 2 == 0) {
			let uitkomst = "Het getal is even!";
			document.getElementById("euitkomst").innerHTML = uitkomst;
		} else {
			let uitkomst = "Het getal is oneven!";
			document.getElementById("euitkomst").innerHTML = uitkomst;
		}
		}
		document.getElementById("eBtn").addEventListener("click", even);
console.log()