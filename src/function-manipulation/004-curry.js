const curry =
    (func) => {
        const arrity = func.arrity ? func.arrity : func.length;

        if(arrity === 0){ 
            return func();
        }

        const result = p => {
            const binded = func.bind(this, p);
            binded.arrity = arrity - 1;
            return curry(binded);
        }
        result.arrity = arrity - 1;
        return result;
    }

export default curry;