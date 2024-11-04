function mascara_telefone ()
        {
           //limitador
         var tel = document.getElementById("telefone").value
            console.log(tel)
          tel=tel.slice(0,14) //(pode limitar a quantidade de char na entrada pelo java script)
            console.log(tel)
          document.getElementById("telefone").value=tel
     tel=document.getElementById("telefone").value.slice(0,10)
            console.log(tel)
           
            //máscara
            var tel_formatado = document.getElementById("telefone").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefone").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
        }

        document.getElementById('sendButton').addEventListener('click', function() {
            const messageElement = document.getElementById('message');
            messageElement.style.display = 'block'; // Mostra a mensagem
        });


        


















        document.addEventListener('DOMContentLoaded', function () {
            const form = document.querySelector('form');
        
            form.addEventListener('submit', function (event) {
                const nome = document.getElementById('nome').value.trim();
                const telefone = document.getElementById('TELEFONE').value.trim();
                const mensagem = document.getElementById('mensagem').value.trim();
        
                if (!nome || !email || !mensagem) {
                    event.preventDefault(); // Impede o envio do formulário
                    alert("Por favor, preencha todos os campos."); // Alerta ao usuário
                } else {
                    alert("Mensagem enviada com sucesso!"); // Confirmação de envio
                }
            });
        });
        document.addEventListener('DOMContentLoaded', function () {
            const form = document.querySelector('form');
            const submitButton = document.querySelector('button[type="submit"]');
        
            form.addEventListener('submit', function (event) {
                event.preventDefault(); // Evita o envio padrão do formulário
        
                const nome = document.getElementById('nome').value.trim();
                const email = document.getElementById('TELEFONE').value.trim();
                const mensagem = document.getElementById('mensagem').value.trim();
        
                if (!nome || !TELEFONE || !mensagem) {
                    alert("Por favor, preencha todos os campos.");
                } else {
                    
                    submitButton.disabled = true; 
                    submitButton.textContent = "Enviando..."; 
        
                    setTimeout(() => {
                        alert("Mensagem enviada com sucesso!");
                        form.reset();
                        submitButton.textContent = "Enviar"; 
                        submitButton.disabled = false; 
                    }, 2000); 
                }
            });
        });