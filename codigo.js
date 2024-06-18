//virificacao do usuario

import { hex_sha256 } from './sha256-min.mjs'

const password = "03c682ee3daa2dd9e2b1db73a28986fc3bb40a5a4134b040c556aedcb06868aa"
const complement = "CHAVE"

sessionStorage.setItem('logado', 'false')


document.getElementById("button_login").onclick =
    ()=>{
        const password_inputed = document.getElementById("input_login").value
        const password_hashed = hex_sha256(password_inputed + complement)
        if(password_hashed == password){
            window.location.href = "jogadores.html"
            sessionStorage.setItem('logado', 'true')
            
        }
        else{
            alert("Senha Incorreta")
            }
    }




