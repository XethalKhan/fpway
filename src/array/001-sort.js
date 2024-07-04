export default function sort(sequence){
    const result = sequence.reduce((result, element) => {
        let found = false;
        let processing = result.slice(0);
        result.forEach((value, index) => {
            if(!found && element < value){
                processing.splice(index, 0, element);
                found = true;
            }
        });

        if(!found){
            processing.push(element);
        }

        return processing;
    }, []);

    return result;
}