// formata numeros em padrão BR
function formatNumber(value) {
    return Intl.NumberFormat('pt-BR').format(value);
}

export { formatNumber };