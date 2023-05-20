    const h3 = document.querySelector('#h3')
    const input_id = document.querySelector('#input_id')
    const resutado = document.querySelector('#resutado')
    const div_sharp = document.querySelector('#div_sharp')
    const div_circle = document.querySelector('#div_circle')


    let value

    input_id.addEventListener('input',(e)=>{
        value = e.target.value
        value = value.replace(/\s/g, '')
                     .replace(/\D/g, '')
                     .replace(/([0-9]{4})/g, '$1 ')
                     .trim();
        
        input_id.value = value
    })

    function capturarValue (){
        // h3.textContent = value || '4563 3434 5768 9753'
        if(value){
            if (value.length < 15) {
                h3.textContent = value.replace(/\d/g, '*')
            }
            return h3.textContent = value.slice(0,14).replace(/\d/g, '*') + " " + value.slice(15)
        }
        else{
            h3.textContent = '4563 3434 5768 9753'
        }
    }
    
    if(input_id.value.length > 16) value = value.slice(0,16)


    function validar(){
        if(input_id.value === ""){
            resutado.style.display = "block"
            resutado.textContent = 'Campo no puede estar vacío'
        }
        let parametro = value
        parametro = parametro.replace(/\s/g, '','')
        let arrayParametro = parametro.split('')
        let sumaTotal = 0
        
        for (let i = 0; i < arrayParametro.length; i++) {
            if(i%2 === 0) {
                sumaParcial = arrayParametro[i]*2
                if(sumaParcial >= 10) {                
                    let array = String(sumaParcial).split('')
                    sumaParcial = Number(array[0])+Number(array[1])
                }
                sumaTotal += sumaParcial
            }

            if(i%2 !== 0){
                sumaTotal += arrayParametro[i]*1
            }
        }

        resutado.style.display='block'

        sumaTotal % 10 === 0 &&  value.length === 19 ?
        (
            resutado.textContent = 'Tarjeta válida',
            div_sharp.style.display = 'block',
            div_circle.style.display = 'none'
        )
            : 
        (
            resutado.textContent = 'Tarjeta inválida',
            div_circle.style.display = 'block',
            div_sharp.style.display = 'none'
        )
    }

    input_id.addEventListener('focus',()=>{
        resutado.style.display='none'
        div_sharp.style.display = 'none'
        div_circle.style.display = 'none'
    })
