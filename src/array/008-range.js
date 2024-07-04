export default function range(start, end, step){
    const size = step ? Math.ceil((end - start) / step) : (end - start);
    return new Array(size).fill(0).map((element, index) => step ? start + index * step : start + index);
}