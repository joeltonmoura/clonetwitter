import React from 'react'



import {
   Container
  , Banner
  , Avatar
  , ProfileData
  , LocationIcon
  , CakeIcon
  , Followage
  , EditButton
} from './styles'

const ProfilePage: React.FC = () =>{
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Joelton Moura</h1>
        <h2>@joleton_moura</h2>

        <p>
          Develepor at <a href="/">@soudev</a>
        </p>
        <ul>
          <li>
            <LocationIcon />
            Palmas, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 21 de setembro de 1997
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>100</strong>
          </span>
          <span>
            <strong>200 </strong> seguidores 
          </span>
        </Followage>
      </ProfileData>
    </Container>
  )
}


export default ProfilePage