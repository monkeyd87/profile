let form  =  document.querySelector('form');
form.addEventListener('submit',event=>{
    event.preventDefault();
    let formData = new FormData(form);

    form.reset();
    console.log(formData.get('name'));
    console.log(formData.get('email'));
    console.log(formData.get('message'));

})

console.log('running')