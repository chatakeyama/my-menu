import { rest } from "msw"

export const handlers = [
  rest.get("http://localhost:3000/menuItems", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          title: "Porção de batatas fritas",
          description: "Porção de batatas fritas.",
          price: 18.0,
          categoryName: "Entradas",
          categoryId: 1,
          image: "batata_frita.PNG",
        },
        {
          id: 2,
          title: "Salada primavera",
          description:
            "Agrião, rúcula, cebola, tomate cereja e molho de vinagre balsâmico.",
          price: 24.0,
          categoryName: "Saladas",
          categoryId: 2,
          image: "salada_primavera.jpeg",
        },
      ])
    )
  }),

  rest.get("http://localhost:3000/categories", (req, res, ctz) => {
    return res(
      ctz.json([
        {
          id: 1,
          name: "Entradas",
        },
        {
          id: 2,
          name: "Saladas",
        },
        {
          id: 3,
          name: "Carnes",
        },
      ])
    )
  }),
]
