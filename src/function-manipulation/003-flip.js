export default function flip(func){
    const result = (...args) => func.apply(null, args.reverse());
    result.arrity = func.arrity ? func.arrity : func.length;
    return result;
}

