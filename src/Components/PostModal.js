import React from 'react';
import styled from 'styled-components';
const PostModal = (props) => {

    const reset=(e)=>{

        props.handleClick(e);
    }
    return (
        <>
        {props.showmodal==='open' &&
          <Container onClick={(e)=>{reset(e)}}>
              <Content>
                  <Header>
                      <h2>
                          Create a Post
                      </h2>
                      <button onClick={(e)=>{reset(e)}}>
                          <img onClick={(e)=>{reset(e)}} src="/images/close.png"/>
                      </button>
                  </Header>
                  <ShareContent>
                     
                      <img src="/images/user.svg"alt=""/>
                      
                  </ShareContent>

              </Content>
          </Container>
}
          </>
    );;
}

const Container = styled.div`
position: fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:9999;
color:black;
background-color:rgba(0,0,0,0.8);
animation:fadeIn 0.3s;

`;


const Content = styled.div`
width:100%;
max-width:552px;
background-color:white;
overflow:initial;
display:flex;
flex-direction:column;
top:32px;
margin:0 auto;
max-height:90%;
border-radius:5px;
position: relative;
`;

const Header= styled.div`

display:block;
padding:16px 20px;
border-bottom:1px solid rgba(0,0,0,0.15);
font-size:16px;
line-height:1.5;
font-weight:400;
display:flex;
justify-content:space-between;
align-items:center;
button{
    min-width:auto;
    color: rgba(0,0,0,0.15);
    img{
        width:20px;
    }
}
`;

const ShareContent = styled.div`
display:flex;
flex-direction:column;
flex-grow:1;
overflow-y:auto;
vertical-align:baseline;
background:transparent;
padding:8px 12px;

`;

export default PostModal;