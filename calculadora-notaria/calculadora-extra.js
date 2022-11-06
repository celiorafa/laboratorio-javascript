function calculaEscritura(valorNegocio)
{
    let totalEscritura = valorNegocio < 500 ? 1000 : 2000;
    console.log(totalEscritura);
}

calculaEscritura(600);