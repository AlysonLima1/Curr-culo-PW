document.addEventListener("DOMContentLoaded", () => {
    const senhaSecreta = gerarSenha();
    const listaTentativas = document.getElementById("lista-tentativas");
    const inputTentativa = document.getElementById("input-tentativa");
  
    document.getElementById("btn-tentar").addEventListener("click", () => {
      const tentativa = inputTentativa.value;
      if (tentativa.length !== 4 || isNaN(tentativa)) {
        alert("Por favor, insira um número de 4 dígitos.");
        return;
      }
      const resultado = verificarTentativa(senhaSecreta, tentativa);
      const item = document.createElement("li");
      item.textContent = `Tentativa: ${tentativa} - Resultado: ${resultado}`;
      listaTentativas.insertBefore(item, listaTentativas.firstChild);
      inputTentativa.value = "";
    });
  
    document.getElementById("btn-revelar").addEventListener("click", () => {
      alert(`Senha secreta: ${senhaSecreta}`);
    });
  
    function gerarSenha() {
      return String(Math.floor(1000 + Math.random() * 9000));
    }
  
    function verificarTentativa(senha, tentativa) {
      let bulls = 0;
      let cows = 0;
  
      for (let i = 0; i < senha.length; i++) {
        if (senha[i] === tentativa[i]) {
          bulls++;
        } else if (senha.includes(tentativa[i])) {
          cows++;
        }
      }
      return `${bulls} Bulls e ${cows} Cows`;
    }
  });
  