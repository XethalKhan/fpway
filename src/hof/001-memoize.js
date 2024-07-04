export default function memoize(func){
  let cache = {};
  return (...args) => cache[args.toString()] ? cache[args.toString()] : cache[args.toString()] = func(...args);
}