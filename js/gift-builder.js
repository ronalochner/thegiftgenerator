window.onload = function(){

    // Define a class like this
    
    //Function = Gift , var = sex, var = age
    function Gift(sex, age){

        // Add object properties like this
        this.sex = sex;
        this.age = age;
    }
    // Add method - All Gift objects will be able to invoke this
    Gift.prototype.order = function(){
        let giftOrderContainer = document.querySelector('#giftResults');
        giftOrderContainer.innerHTML = "Struggling with a gift for a " + this.sex + ', ' + this.age +  ' ' +" year old human? Buy this!";
    };
    

    var orderBtn = document.getElementById('submitOrder');

    orderBtn.addEventListener('click', function(event){ //on click the following will happen

        event.preventDefault(); //stops default HTML link behaviour
        
            let sexChoice = document.getElementById('sexSelector'); // Identify gender choice made by user
            let sexChoiceValue = sexChoice.value; // get the value of the <option> tag as defined in the HTML

            let ageChoice = document.getElementById('ageSelector');
            let ageChoiceValue = ageChoice.value;


        // Instantiate new Gift with 'new'
        var myGiftOptions = new Gift(sexChoiceValue, ageChoiceValue);

        // Invoke the class method on the new object
        myGiftOptions.order();
        
        //define the order results paragraph
        var hiddenOrder = document.getElementById('giftResults');
        
        //remove the hidden CSS class to show the order
        hiddenOrder.classList.remove('hidden');
        
        //this is how I call different images based on variable values

            if (sexChoiceValue == "male" && ageChoiceValue == "20-30") {   
            document.getElementById("1").src = "img/Male/20/1.jpg";
            document.getElementById("2").src = "img/Male/20/2.jpg";
            document.getElementById("3").src = "img/Male/20/3.jpg";

            } else if (sexChoiceValue == "male" && ageChoiceValue == "30-40") {
            document.getElementById("1").src = "img/Male/30/1.jpg";
            document.getElementById("2").src = "img/Male/30/2.jpg";
            document.getElementById("3").src = "img/Male/30/3.jpg";

            } else if (sexChoiceValue == "male" && ageChoiceValue == "40-50") {
            document.getElementById("1").src = "img/Male/40/1.jpg";
            document.getElementById("2").src = "img/Male/40/2.jpg";
            document.getElementById("3").src = "img/Male/40/3.jpg";

            } else if (sexChoiceValue == "male" && ageChoiceValue == "50-60") {
            document.getElementById("1").src = "img/Male/50/1.jpg";
            document.getElementById("2").src = "img/Male/50/2.jpg";
            document.getElementById("3").src = "img/Male/50/3.jpg";

            } else if (sexChoiceValue == "female" && ageChoiceValue == "20-30") {
            document.getElementById("1").src = "img/Female/20/1.jpg";
            document.getElementById("2").src = "img/Female/20/2.jpg";
            document.getElementById("3").src = "img/Female/20/3.jpg";

            } else if (sexChoiceValue == "female" && ageChoiceValue == "30-40") {
            document.getElementById("1").src = "img/Female/30/1.jpg";
            document.getElementById("2").src = "img/Female/30/2.jpg";
            document.getElementById("3").src = "img/Female/30/3.jpg";

            } else if (sexChoiceValue == "female" && ageChoiceValue == "40-50") {
            document.getElementById("1").src = "img/Female/40/1.jpg";
            document.getElementById("2").src = "img/Female/40/2.jpg";
            document.getElementById("3").src = "img/Female/40/3.jpg";

            } else if (sexChoiceValue == "female" && ageChoiceValue == "50-60") {
            document.getElementById("1").src = "img/Female/50/1.jpg";
            document.getElementById("2").src = "img/Female/50/2.jpg";
            document.getElementById("3").src = "img/Female/50/3.jpg";
            } 

    });
    
};
