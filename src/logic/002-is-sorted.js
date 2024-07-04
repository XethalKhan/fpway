export function isAscending(sequence){
    return sequence.reduce((isValid, element, index) => {
        if(isValid && element <= sequence[index + 1]){
            return true;
        }

        if(isValid && index === (sequence.length - 1)){
            return true;
        }

        return false;
    }, true);
}

export function isDescending(sequence){
    return sequence.reduce((isValid, element, index) => {
        if(isValid && element >= sequence[index + 1]){
            return true;
        }

        if(isValid && index === (sequence.length - 1)){
            return true;
        }

        return false;
    }, true);
}
