function moveToAppointment_fix(){
        window.location = 'appointment_fix.html';
}

function getDoctorProfile(){
    const urlParams = new URLSearchParams(window.location.search);
    const doctor_id = urlParams.get('doctor_id');
    localStorage.setItem('doctor_id',doctor_id);

    axios.get("http://aqueous-spire-38105.herokuapp.com/d/profile/"+doctor_id)
    .then((response) => {
        console.log(response);
        document.getElementById("name").innerText = response.data.name;
        document.getElementById("work_experience").innerText = response.data.work_experience+' years';
        document.getElementById("highest_qualification").innerText = response.data.highest_qualification;
        document.getElementById("special").innerText = response.data.speciality;
        document.getElementById("appointmentCharge").innerText = response.data.appointmentCharge;
        document.getElementById("rating").innerText = response.data.rating+' ⭐';
        if(response.data.image!=undefined)
            document.getElementById("photo").src=response.data.image;

        //save appointmentCharge so that we can use it in appointment_fix files 
        localStorage.setItem('appointmentCharge',response.data.appointmentCharge);
    })
    .catch((error) => {
        console.log('error is ' + error);
    })
}

getDoctorProfile();