const advice_text = document.querySelector("#advice_text");
const advice_number = document.querySelector("#advice_number");
const btn = document.querySelector("#btn");
const loadingSpan = document.querySelector("#loading");

const apiUrl = "https://api.adviceslip.com/advice"

async function geradorDeConselho() {
    try {
        const conselho = await fetch(apiUrl);
        const data = await conselho.json();
        
        return data;
        
    } catch (error) {
        console.log(error)
    }
}

function loading() {
    advice_text.textContent = "Carregando..."
    advice_number.textContent = "..."

}

function addSpan () {
    loadingSpan.classList.add("loading")
}

function removeSpan() {
    loadingSpan.classList.remove("loading")
}

document.addEventListener("DOMContentLoaded", async () => {
    loading()
    addSpan()
    try {
        const mensagem = await geradorDeConselho()
        removeSpan()
        advice_text.textContent = `"${mensagem.slip.advice}"`
        advice_number.textContent = mensagem.slip.id;
    } catch (error) {
        advice_text.textContent = "Sem mensagem :(";
    }
} )

btn.addEventListener("click", async (event) => {
    event.preventDefault();
    loading()
    addSpan()
    console.log(event)
    try {
        const mensagem = await geradorDeConselho()
        removeSpan()
        advice_text.textContent = `"${mensagem.slip.advice}"`
        advice_number.textContent = mensagem.slip.id;
    } catch (error) {
        advice_text.textContent = "Sem mensagem :(";
    }
})

