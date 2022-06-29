// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    if (blocks > 42) {
     return blocks - 42
    }
    else {
        return 42 - blocks
    }
}
function distanceFromHqInFeet(number){
    let numberOfBlocks = distanceFromHqInBlocks(number)
    return numberOfBlocks * 264
}
function distanceTravelledInFeet(start,destination){
    let store = distanceFromHqInBlocks(start)
    let steps = distanceFromHqInFeet(destination)
    return distanceFromHqInBlocks * distanceFromHqInFeet
}
