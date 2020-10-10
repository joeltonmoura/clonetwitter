import React from 'react';

import { 
  Container
  , Retweeter
  , RocketSeatIcon 
  , Body
  , Avatar
  , Content
  , Header
  , Dot
  , Description
  , ImagemContet
  , Icons
  , Status
  , CommentIcon
  , RetweetIcon
  , LikeIcon
} from './styles'

const Tweet: React.FC = () =>{
  return (
    <Container>
      <Retweeter>
        <RocketSeatIcon />
        Você retweetou
      </Retweeter>
      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>RocketSeat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>09 jul</time>
          </Header>
          <Description>Foguete não te ré</Description>
          <ImagemContet />
          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              200
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  )
}

export default Tweet;