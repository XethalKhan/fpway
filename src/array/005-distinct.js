export default function distinct(sequence){
    return sequence.reduce((result, element) => {
        const processing = result.slice(0);
        if(!processing.includes(element)){
            processing.push(element);
        }
        return processing;
    }, []);
}