const countChar = (userStringInput, userCharInput) => {
    let count = 0;

    for(let i = 0; i < userStringInput.length; i++){
        if(userStringInput[i] === userCharInput){
            count++;
        }
    }

    return count;
}

const beanCounter = (userStringInput) => {
    return countChar(userStringInput, 'B');
}



console.log(beanCounter('BBC'));
console.log(countChar('kakkerlak','k'));