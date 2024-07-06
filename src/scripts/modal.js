function openModal(){
    const modal = document.querySelector(".modalContainer");
    const buttonOpen = document.querySelector(".form__register-link");
    buttonOpen.addEventListener("click", () => {
        modal.showModal();

        closeModal();
    })
}

function closeModal(){
    const modal = document.querySelector(".modalContainer");
    const buttonClose = document.querySelector(".form__button1");
    buttonClose.addEventListener("click", () => {
        modal.close();
    })
}

const form = document.querySelector(".form__modal");
form.addEventListener("submit", (event) => {
    alert("Cadastro realizado com Sucesso");
})

openModal()