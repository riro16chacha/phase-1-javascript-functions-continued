// code your solution here
function saturdayFun(fun="roller-skate"){
    if (fun)
    return `This Saturday, I want to ${fun}!`
    else
    return `This Saturday, I want to ${fun}!`
}
function mondayWork(activity="go to the office"){
    if(activity)
    return `This Monday, I will ${activity}.`
    else
    return `This Monday, I will ${activity}.`

}
function wrapAdjective(flair='*') {
    return function(adjective='special'){
    return `You are ${flair}${adjective}${flair}!`
    };
}


