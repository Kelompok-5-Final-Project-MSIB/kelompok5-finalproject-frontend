import Swal from 'sweetalert2';

const ModalAlert = (action, icon, title = '!') => {
  return Swal.fire({
    title: `${action}!`,
    text: `${icon === 'success' ? 'Berhasil' : 'Gagal'} ${action} ${title}`,
    icon: `${icon}`,
  });
};

export default ModalAlert;
