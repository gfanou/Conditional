
let counter = 0;
$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML

    $("#clickCounter").submit(countClick);
    $("#ageValidator").submit(checkAge);
    $("#salesTax").submit(calcSalesTax);
    $("#catFood").submit(recommendFood);
    $("#randomCard").submit(drawCard());



    function countClick(event) {
        event.preventDefault();
        // Increment a variable that tracks the
        // number of button clicks
        counter++;

        // Print the current number of clicks to the
        // <p> with ID "clickCountOutput"
        $("p#clickCountOutput").text(counter);

        // When the count gets to 10, reset it to 0

        if(counter === 10)
        {
            counter = 0;
        }

    }


    function checkAge(event) {
        event.preventDefault();
        // Get the user's birth year from the text
        // box with ID of "birthYear"
        let year = $("input#birthYear").val();
        let age = 2021 - year;

        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"

        if(age <18)
        {
            // The true path
            $("p#birthYearOutput").text("Child");

        }
        else
        {
            //The false part
            $("p#birthYearOutput").text("Adult");
        }

        // If they are 18 or over, print "Adult" instead

    }

    function calcSalesTax(event) {
        event.preventDefault();

        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"
        let amount = parseFloat( $("input#purchaseAmount").val());

        // Get the state from the text box with ID "state"
        let stateAbbrev = $("input#state").val();

        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%

        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"

        if(stateAbbrev === "WI")
        {
            //True path
            $("p#salesTaxOutput").text(amount*0.05);
        }
        else if(stateAbbrev === "IL")
        {
            // True path for IL
            $("p#salesTaxOutput").text(amount*0.08);

        }
        else if(stateAbbrev === "MN")
        {
            // True path for MN
            $("p#salesTaxOutput").text(amount*0.075);

        }
        else if(stateAbbrev === "MI")
        {
            // True path for MI
            $("p#salesTaxOutput").text(amount*0.055);

        }
            // If the user enters a state not listed above,
        // print "Error" instead

        else
        {
            $("p#salesTaxOutput").text("Error!");
        }

    }


    function recommendFood(event) {
        event.preventDefault()
        // Get the cat's age from the text box with
        // ID of "catAge"

        let age = parseInt( $("input#catAge").val());

        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"
        if(age < 2)
        {
            $("p#catAgeOutput").text("kitten chow");
        }

        else if (age < 11)
        {
            $("p#catAgeOutput").text("Adult chow");
        }
        else
        {
            $("p#catAgeOutput").text("Senior chow");
        }
        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"


    }

    function drawCard(event) {
        event.preventDefault();
        // Generate a random card face value (1 - 13)
        let faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        let suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        var description;

        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"

        if(faceValue < 11)
        {
            $("p#drawCardOutput").text(faceValue)
        }

        else if(faceValue === 1)
        {
            $("p#drawCardOutput").text("Ace")
        }
        else if (faceValue === 11)
        {
            $("p#drawCardOutput").text("Jack")
        }
        else if (faceValue === 12)
        {
            $("p#drawCardOutput").text("Queen")
        }
        else if (faceValue === 1)
        {
            $("p#drawCardOutput").text("King")
        }






        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"

        // Print the card's description to the <p> with
        // ID of "drawCardOutput"


    }

});