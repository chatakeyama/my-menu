import * as React from "react"
import Alert from "@mui/material/Alert"
import Stack from "@mui/material/Stack"

export default function ErrorAlert({ marginTop }) {
  return (
    <Stack sx={{ width: "100%", marginTop }} spacing={2}>
      <Alert severity="error">
        Erro de comunicação com o servidor. Tente novamente mais tarde.
      </Alert>
    </Stack>
  )
}
