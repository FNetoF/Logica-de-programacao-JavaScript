function sayMyName(name) {
    name()
}

sayMyName (
    () => {
        console.log('Estou em uma callback')
    }
)

/*function sayMyName() {
    
    console.log('Antes de executar a funcao callback')

    function name() {
        console.log('Estou em uma callback')
    }
    name()

    console.log('Depois de executar a callback')
}

sayMyName ()*/
