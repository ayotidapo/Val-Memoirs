import React from 'react'
import { Helmet } from 'react-helmet'

export const Helmets = props => (
  <div>
    <Helmet>
      <title>{props.name}</title>
      <meta name="description" content={props.cont} />
    </Helmet>
  </div>
)

export const Helhome = props => (
  <Helmets
    name="Outwork | The number one task outsourcing platform in Nigeria"
    cont="Outwork  reinvents the way work is done by connecting business with great talents to work seamlessly"
  />
)

export const Helall = props => (
  <Helmets
    name="Outwork Nigeria | Engage. Execute. Get Paid"
    cont="Outwork  reinvents the way work is done by connecting business with great talents to work seamlessly"
  />
)


export const HelChats = props => (
  <div>
    <Helmet>
      <title>Outwork Nigeria | Engage. Execute. Get Paid</title>
      <meta name="description" content="Outwork reinvents the way work is done by connecting business with great talents to work seamlessly"/>
        <script type="text/javascript">
        
      </script>
    </Helmet>
  </div>
)