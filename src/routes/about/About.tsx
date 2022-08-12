import React from "react"
import Container from "@mui/material/Container"
import "./About.scss"

function About() {
  return (
    <Container>
      <main className="about">
        <h1 className="about__title">Sobre nós</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis
          purus ac diam tincidunt ullamcorper. Vestibulum eget turpis elementum,
          rutrum quam id, porttitor massa.
        </p>
        <p>
          Donec vitae libero tincidunt, suscipit justo quis, elementum nisi.
          Pellentesque at ipsum lacus. Pellentesque aliquam fringilla justo, id
          vulputate elit semper quis. Nulla tempus sit amet purus eu varius.
          Nulla ut mauris sit amet lorem facilisis porttitor in ut est.
        </p>
        <p>
          Pellentesque a gravida massa. Quisque euismod, nisi in vestibulum
          hendrerit, ex nunc dignissim purus, vitae fermentum risus ipsum eu
          mauris. Mauris ultrices quam enim, at fringilla quam tristique a.
          Fusce lobortis turpis in enim iaculis ullamcorper. Cras in euismod
          sapien.
        </p>
      </main>
    </Container>
  )
}

export default About
