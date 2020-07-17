// Feet to Mile------------------------------------------

function feetToMile( feet ) {
    
    if ( feet < 0 ) {
        return 'Length cannot be negative.';
    }
    else {
        var mile = feet / 5280;   // 1 mile = 5280 feet
        var mileFixed = mile.toFixed(5);
        return mileFixed;
    }
}



// Wood calculator---------------------------------------

function woodCalculator( chair, table, bed ) {

    if ( (chair < 0) || (table < 0) || (bed < 0) ) {
        return 'Sorry, input is invalid.';
    }
    else {
        var totalWood = ( chair * 1 ) + ( table * 3 ) + ( bed * 5 );
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
        return 'Floor number must be greater then 0.';
    }
    else {
        if ( floor <=10 ) {
            var firstTenFloor = floor;
            return firstTenFloor * firstTenFloorHeight * bricksPerFeet;
        }
        else if ( floor > 10 && floor <=20 ) {
            tenToTwentyFloor = floor - 10;
            return ( firstTenFloor * firstTenFloorHeight * bricksPerFeet ) + ( tenToTwentyFloor * tenToTwentyFloorHeight * bricksPerFeet );
        }
        else {
            tenToTwentyFloor = 10;
            moreThenTwentyFloor = floor - 20;
            return ( firstTenFloor * firstTenFloorHeight * bricksPerFeet ) + ( tenToTwentyFloor * tenToTwentyFloorHeight * bricksPerFeet ) + ( moreThenTwentyFloor * moreThenTwentyFloorHeight * bricksPerFeet );
        }
    }
}



// Tiny Friend-----------------------------------------

function tinyFriend( friends ) {
    var tiny = friends[0];

    if ( friends.length == 0 ) {
        return 'Array is empty.';
    }

    for ( var i = 0; i < friends.length; i++ ) {
        var length = friends[i].length;
        
        if( length < tiny.length ) {
            tiny = friends[i];
        }
    }
    return tiny;
}