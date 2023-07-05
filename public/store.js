const newReservaForm = document.querySelector('#newReservaForm');
const backButton = document.querySelector('#cancelar')

newReservaForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const fullname = document.querySelector('#fullname').value;
    const code = document.querySelector('#code').value;
    const date = document.querySelector('#date').value;
    const flight_date = document.querySelector('#flight_date').value;
    const flight_price = document.querySelector('#flight_price').value;


    const response = await fetch('http://localhost:3000/api/reservas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            fullname,
            code,
            date,
            flight_date,
            flight_price
        }),
    });

    const respToJson = await response.json();

    console.log(respToJson);
    
    if(response.status !== 201 && response.status !== 200) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: respToJson.message,
        });
        return;
    }

    Swal.fire({
        icon: 'success',
        title: 'Reserva creada Correctamente',
        text: respToJson.message,
    });

    newReservaForm.reset();

    setTimeout(() => {
        window.location.href = '/';
    }, 2000);

});
backButton.addEventListener('click', () => {
    history.back();
});