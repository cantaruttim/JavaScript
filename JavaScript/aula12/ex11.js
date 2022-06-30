var idade = 70

// testando ifs aninhados para votação

if (idade < 16) {
    console.log('não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto Obrigatório')
}