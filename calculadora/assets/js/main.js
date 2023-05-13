function createCalculadora(){
    return {
        display: document.querySelector('.display'),

        //Função inicia calculadora.
        init(){
            this.clickButton();
            this.pressEnter();
            this.backspace();
        },

        // Apagar 1 por vez.
        backspace(){
            this.display.addEventListener('keypress', e => {
                if(e.keyCode === 8){
                    this.deleteLastValue();
                }
            });
        },

        // Fazer a soma pelo botaão Enter do teclado
        pressEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.performOperation();
                }
            });
        },

        performOperation(){
            let operation = this.display.value;

            try{
                operation = eval(operation);

                if(!operation){
                    alert('Verifique os valores inseridos!');
                    return;
                }

                this.display.value = String(operation);
            } catch(e){
                alert('Verifique os valores inseridos!');
                return;
            }
        },

        clickButton(){
            document.addEventListener('click', e => {
                const el = e.target;
            
                if(el.classList.contains('btn-num')){
                    this.insertDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.cleanDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.deleteLastValue();
                }
                if(el.classList.contains('btn-eq')){
                    this.performOperation();
                }

                this.display.focus();
            });

        },

        insertDisplay(valor){
            this.display.value += valor;
        },

        cleanDisplay(){
            this.display.value = '';
        },

        deleteLastValue(){
            this.display.value = this.display.value.slice(0, -1);// elimina uma parte da string e trás uma nova sem modificar.
            // Duas maneiras de fazer;    this.display.value.substring(0, this.display.value.length-1);
        }        

    };
}

const calculadora = createCalculadora();
calculadora.init();