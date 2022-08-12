import React, { useState } from "react"
import Button from "@mui/material/Button"
import ReceiptIcon from "@mui/icons-material/Receipt"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import DeleteIcon from "@mui/icons-material/Delete"
import MenuItem from "../../interfaces/MenuItem"
import "./OrderButton.scss"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

type OrderButtonProps = {
  order: MenuItem[]
  setOrder: (order: MenuItem[]) => void
}

export default function OrderButton({ order, setOrder }: OrderButtonProps) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const calculateTotalPriceOrder = (): number => {
    return order.reduce((total, item) => {
      return total + item.price
    }, 0)
  }

  const removeFromOrder = (id: number): void => {
    const oderUpdated = order.filter((item: MenuItem) => {
      return item.id !== id
    })
    setOrder(oderUpdated)
  }

  return (
    order?.length > 0 && (
      <>
        <span className="order">
          <Button
            onClick={handleOpen}
            variant="contained"
            size="medium"
            startIcon={<ReceiptIcon />}
          >
            Ver pedido
          </Button>
        </span>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Seu pedido:
            </Typography>
            {order.map((menuItem: MenuItem) => {
              return (
                <div className="order-item" key={menuItem.id}>
                  <span>
                    <Typography
                      className="order-item__dish"
                      id="modal-modal-description"
                      sx={{ mt: 2 }}
                    >
                      {menuItem.title}
                    </Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => removeFromOrder(menuItem.id)}
                    >
                      <DeleteIcon fontSize="inherit" />
                      Remover
                    </Button>
                  </span>
                  <span>
                    <Typography
                      className="order-item__price"
                      id="modal-modal-description"
                      sx={{ mt: 2 }}
                    >
                      R${" "}
                      {menuItem.price.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </Typography>
                  </span>
                </div>
              )
            })}
            <div className="order-total">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Total:
              </Typography>
              <Typography
                className="order-item__price"
                variant="h6"
                id="modal-modal-description"
              >
                R${" "}
                {calculateTotalPriceOrder().toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Typography>
            </div>
            <div className="btn-close">
              <Button variant="contained" size="medium" onClick={handleClose}>
                Fechar
              </Button>
            </div>
          </Box>
        </Modal>
      </>
    )
  )
}
