
    document.getElementById('tipoContratacao').addEventListener('change', function() {
        var tipoContratacao = this.value;
        var valor = tipoContratacao === 'temporario' ? 'R$ 20,00 por hora' : 'R$ 30,00 por hora';
        document.getElementById('valor').value = valor;
    });

    function redirecionarParaPagamento() {
        window.location.href = '#pagamento';
    }