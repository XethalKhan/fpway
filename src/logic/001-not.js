export default function not(func){
    const result = (...args) => !func(args);
    result.arrity = func.arrity ? func.arrity : func.length;
    return result;
}