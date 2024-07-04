export default function once(func){
    let value = null;
    const result = (...args) => value === null ? value = func(...args) : value;
    result.arrity = func.arrity ? func.arrity : func.length;
    return result;
}

