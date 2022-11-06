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
    return totalEscritura;
}

function calculaRegistro(valorNegocio)
{
    let totalRegistro = valorNegocio < 1919 
    ? 217.92 
    : valorNegocio< 4794
    ? 349.68
    : valorNegocio< 7991
    ? 627.32
    : valorNegocio< 15985
    ? 930.78
    : valorNegocio< 31970
    ? 1131.61
    : valorNegocio< 95910
    ? 1261.98
    : valorNegocio< 159850
    ? 1610.74
    : valorNegocio< 191820
    ? 1958.79
    : valorNegocio< 223790
    ? 2132.45
    : valorNegocio< 255760
    ? 2307.13
    : valorNegocio< 287730
    ? 2432.16
    : valorNegocio< 319700
    ? 2495.59
    : valorNegocio< 639400
    ? 2782.58
    : "fora da faixa";

    console.log(`Total Registro: R$ ${totalRegistro.toLocaleString('pt-BR')}`);
    return totalRegistro;
}

function calculaITBI (valorNegocio)
{
    let itbiJundiai = valorNegocio*0.025;
    
    console.log(`O valor de ITBI para Jundiaí é: R$ ${itbiJundiai.toLocaleString('pt-BR')}`);
    return itbiJundiai;

}
const valor = 150000
let totalOrcamento = calculaEscritura(valor)+calculaRegistro(valor)+calculaITBI(valor);
console.log(`Total do orçamento: R$ ${totalOrcamento.toLocaleString('pt-BR')}`);