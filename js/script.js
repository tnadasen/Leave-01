// $('#myModal').modal('show')

// const showModal = () => {
//     // console.log('showModal from the script file')
//     $('#exampleModalScrollable').modal('show')
// }
showModal = () => {
    // console.log('showModal from the script file')
    $('#leaveForm').modal('show')
}
closeModal = () => {
    // console.log('showModal from the script file')
    $('#leaveForm').modal('hide')
}

showModal2 = () => {
    // console.log('showModal from the script file')
    $('#modal2').modal('show')
}
closeModal2 = () => {
    // console.log('showModal from the script file')
    $('#modal2').modal('hide')
}

submitRequest = () => {
    closeModal();
    setTimeout(() => { alert('Your request has been submitted and pending approval') }, 500);

    // alert('your request has been submitted and pending approval')
    // setTimeout(() => { closeModal(); }, 500);
}
