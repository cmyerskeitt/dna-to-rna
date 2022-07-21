function DNAtoRNA(dna) {
    console.log(dna)
    let RNA = []
    for ( let i = 0; i < dna.length; i++){
     let molecule = dna[i].replace("T", "U")
     RNA.push(molecule)
    }
    return RNA.join("")
}