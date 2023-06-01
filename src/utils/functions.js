import Swal from "sweetalert2";


export const formatPrice = (price) => new Intl.NumberFormat('ar-AR', { style: 'currency', currency: 'ARS' }).format(price);

export const confirmBuyBtn = async () => {
    let confirm = false;
    await Swal.fire({
        title: '¿Finalizar compra?',
        icon: 'question',
        iconColor: '#ffffff',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Gracias por la compra :D',
            icon: 'success',
            iconColor: '#ffffff',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar',
          }
          )

          confirm = true
        }
      })
      .catch((error) => console.log(error))

      return confirm;
}

export const emptyCartAlert = () => {
    Swal.fire({
        title: 'El carrito esta vacío',
        icon: 'warning',
        iconColor: '#ffffff',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
    }
      )
}