// template_4ad3dqc
// service_wpgxell
// l0CFSszmDxoIJdYWA

function contact(event) {
    event.preventDefault();
    // emailjs
    //     .sendForm(
    //         'service_wpgxell',
    //         'template_4ad3dqc',
    //         event.target,
    //         'l0CFSszmDxoIJdYWA'
    //     ).then(() => {
    //         console.log('this worked1')
    //     })
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
    setTimeout(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible"
        console.log('it worked 1')
    }, 1000);
}