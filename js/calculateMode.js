exports.calculateMode = (lista) => {
    let freq = new Map()
    for (i of lista) {
        freq.set(i,0)
    }
    
    for (x of lista){
        let change = freq.get(x) + 1
        freq.set(x,change)
    }
    
    const maxi = Math.max(...freq.values())
    
    result = []

    for (let [key,value] of freq) {
        if (value === maxi)  {
            result.push(key)
        }
    }
    c
    return result
}
