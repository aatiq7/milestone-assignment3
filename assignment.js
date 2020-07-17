// Feet to Mile------------------------------------------

function feetToMile( feet ) {
    
    if ( feet < 0 ) {
        return 'Length cannot be negative.';
    }
    else {
        var mile = feet / 5280;   // 1 mile = 5280 feet
        var mileFixed = mile.toFixed(5);   // fixed the value of mile
        return mileFixed;
    }
}



// Wood calculator---------------------------------------

function woodCalculator( chair, table, bed ) {
    var woodPerChair = 1;
    var woodPerTable = 3;
    var woodPerBed = 5;

    if ( (chair < 0) || (table < 0) || (bed < 0) ) {
        return 'Sorry, input is invalid.';   // chair, table and bed numbers cannot be negative
    }
    else {
        var totalWood = ( chair * woodPerChair ) + ( table * woodPerTable ) + ( bed * woodPerBed );   // calculating total wood
        return totalWood;
    }
}



// Brick Calculator---------------------------------------

function brickCalculator ( floor ) {
    var bricksPerFeet = 1000;
    var firstTenFloor = 10;
    var firstTenFloorHeight = 15;
    var tenToTwentyFloorHeight = 12;
    var moreThenTwentyFloorHeight =10;

    if ( floor <= 0 ) {
        return 'Floor number must be greater then 0.';   // floor cannot be 0 or less then 0
    }
    else {
        if ( floor <=10 ) {
            var firstTenFloor = floor;
            return firstTenFloor * firstTenFloorHeight * bricksPerFeet;   // calculate total bricks
        }
        else if ( floor > 10 && floor <=20 ) {
            tenToTwentyFloor = floor - 10;
            return ( firstTenFloor * firstTenFloorHeight * bricksPerFeet ) + ( tenToTwentyFloor * tenToTwentyFloorHeight * bricksPerFeet );   // calculate total bricks
        }
        else {
            tenToTwentyFloor = 10;
            moreThenTwentyFloor = floor - 20;
            return ( firstTenFloor * firstTenFloorHeight * bricksPerFeet ) + ( tenToTwentyFloor * tenToTwentyFloorHeight * bricksPerFeet ) + ( moreThenTwentyFloor * moreThenTwentyFloorHeight * bricksPerFeet );   // calculate total bricks
        }
    }
}



// Tiny Friend-----------------------------------------

function tinyFriend( friends ) {
    var tiny = friends[0];   // imagine friends[0] is the value of tiny

    if ( friends.length == 0 ) {
        return 'Array is empty.';   // if array is empty
    }

    for ( var i = 0; i < friends.length; i++ ) {
        var length = friends[i].length;   // finding the others friends[i] length in array
        
        if( length < tiny.length ) {
            tiny = friends[i];   // if frineds[i] length smaller then tiny length then friend[i] will be tiny
        }
    }
    return tiny;
}
