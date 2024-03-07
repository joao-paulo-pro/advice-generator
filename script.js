const advice_text = document.querySelector("#advice_text");
const advice_number = document.querySelector("#advice_number");
const btn = document.querySelector("#btn");
const loadingSpan = document.querySelector("#loading");


const loadingAdd = () => {
    loadingSpan.classList.add("loading")
    advice_text.textContent = "Carregando...";
    advice_number.textContent = "...";
}

const loadingRemove = () => {
    loadingSpan.classList.remove("loading")
}

const apiAdvice = async () => {

    loadingAdd()

    try {
        const apiUrl = fetch("https://api.adviceslip.com/advice")
        .then( (res) => res.json())
        .then( (data) => data.slip )

        const rusult = await apiUrl
        const texto = rusult.advice;
        const id = rusult.id

        loadingRemove()
        
        advice_text.textContent = texto;
        advice_number.textContent = id;
        
    } catch (error) {
        loadingRemove()
        console.log(error);
        advice_text.textContent = "Algo deu Errado :(";
        advice_number.textContent = "...";}

}

apiAdvice();

btn.addEventListener("click", () => {
     apiAdvice();
})