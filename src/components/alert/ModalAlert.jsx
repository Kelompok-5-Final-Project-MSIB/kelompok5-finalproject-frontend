import Swal from 'sweetalert2';

const ModalAlert = (action, icon) => {
  return Swal.fire({
    title: `${action}!`,
    text: `${icon === 'success' ? 'Berhasil' : 'Gagal'} ${action}`,
    icon: `${icon}`,
  });
};

export default ModalAlert;
