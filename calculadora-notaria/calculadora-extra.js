function calculaEscritura(valorNegocio)
{
    let totalEscritura = valorNegocio < 1268 
    ? 298.50 
    : valorNegocio< 4794
    ? 446.07
    : valorNegocio< 7991
    ? 696.51
    : valorNegocio< 15985
    ? 995.02
    : valorNegocio< 31970
    ? 1344.97
    : valorNegocio< 63940
    ? 1595.47
    : valorNegocio< 95910
    ? 1893.99
    : valorNegocio< 127880
    ? 2243.93
    : valorNegocio< 159850
    ? 2542.51
    : valorNegocio< 191820
    ? 2844.43
    : valorNegocio< 223790
    ? 3190.97
    : valorNegocio< 255760
    ? 3492.94
    : valorNegocio< 274721
    ? 3842.89
    : "fora da faixa";

    console.log(`Total Escritura: R$ ${totalEscritura.toLocaleString('pt-BR')}`);
}

calculaEscritura(150000);