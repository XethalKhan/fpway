export default function reverse(sequence){
    return sequence.reduce((result, element) => {
        const processing = result.slice(0);
        processing.unshift(element);
        return processing;
    }, []);
}