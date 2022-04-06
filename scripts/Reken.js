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

        function tafels(){
        let num1 = document.getElementById("tinputTwo").value;
        let num2 = document.getElementById("tinputOne").value;   
        let inputOne = parseFloat(num1);
        let inputTwo = parseFloat(num2);
        document.getElementById("tuitkomst").innerHTML = "";
        let counter = 1;
        while(counter <= inputOne){
            document.getElementById('tuitkomst').innerHTML += counter * inputTwo + "<br>";
            counter++;
        }
        }
        document.getElementById("tBtn").addEventListener("click", tafels);
    

    function macht(){
    let num1 = document.getElementById("minputOne").value;
    let num2 = document.getElementById("minputTwo").value;   
    let inputOne = parseFloat(num1);
    let inputTwo = parseFloat(num2);
    document.getElementById("muitkomst").innerHTML = "";
    let counter = 0;
    while(counter <= inputTwo){
        document.getElementById('muitkomst').innerHTML += inputOne ** counter + "<br>";
        counter++;
    }
    }
    document.getElementById("mBtn").addEventListener("click", macht);
    
    function breuken(){
        let num = document.getElementById("binput").value;  
        let input = parseFloat(num);
        document.getElementById("buitkomst").innerHTML = "";
        let counter = 2;
        while(counter <= input){
            document.getElementById('buitkomst').innerHTML += "1/" + counter + "=" + 1 / counter + "<br>";
            counter++;
        }
        }
        document.getElementById("bBtn").addEventListener("click", breuken);
        
        function Kwadraten(){
            let num = document.getElementById("kinput").value;  
            let input = parseFloat(num);
            document.getElementById("kuitkomst").innerHTML = "";
            let counter = 1;
            while(counter <= input){
                document.getElementById('kuitkomst').innerHTML +=  counter * counter + "<br>";
                counter++;
            }
            }
            document.getElementById("kBtn").addEventListener("click", Kwadraten);



            

    console.log()