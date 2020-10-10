import React from 'react';
import StickBox from 'react-sticky-box'

import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'

import { 
  Container
  , SearchWrapper
  , SearchInput
  , SearchIcon
  , Body
} from './styles'

const  SideBar: React.FC = () =>{
  return (
   <Container>
     <SearchWrapper>
       <SearchInput placeholder="Buscar no Twitter"/>
       <SearchIcon />
     </SearchWrapper>
     <StickBox>
      <Body>
        <List 
          title= "Talvez Você curta"
          elements ={[
            <FollowSuggestion 
              name="Joelton Moura"
              nickname="@joelon_moura"
            />,
            <FollowSuggestion 
            name="Joelton Moura"
            nickname="@joelon_moura"
          />,
          <FollowSuggestion 
          name="Joelton Moura"
          nickname="@joelon_moura"
          />,
        <FollowSuggestion 
        name="Joelton Moura"
        nickname="@joelon_moura"
        />
          ]}
        />
      <List 
          title= "Talvez Você curta"
          elements ={[
            <News />,
            <News />,
            <News />,
            <News />,
          ]}
        />
              <List 
          title= "Talvez Você curta"
          elements ={[
            <News />,
            <News />,
            <News />,
            <News />,
          ]}
        />
              <List 
          title= "Talvez Você curta"
          elements ={[
            <News />,
            <News />,
            <News />,
            <News />,
          ]}
        />
              <List 
          title= "Talvez Você curta"
          elements ={[
            <News />,
            <News />,
            <News />,
            <News />,
          ]}
        />
              <List 
          title= "Talvez Você curta"
          elements ={[
            <News />,
            <News />,
            <News />,
            <News />,
          ]}
        />
        
     </Body>
     </StickBox>
   </Container> 
  )
}

export default SideBar