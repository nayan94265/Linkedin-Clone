import styled from "styled-components";
import PostModal from "./PostModal";
import { useState } from "react";

const Main = (props) => {
  const[showmodal,setshowmodal]=useState("close");

  const handleClick=(e)=>{
    e.preventDefault();
    if(e.target !== e.currentTarget){
      return;
    }
    switch (showmodal) {
      case "open":
        setshowmodal("close");
        break;
        case "close":
          setshowmodal("open");
          break;
      default:
        setshowmodal("close");

        break;
    }

  }



  return <Container>
    <Sharebox>
      <div>
        <img src="/images/user.svg" alt=""/>
        <button onClick={handleClick}>Start A Post</button>
      </div>
      <div>
        <button>
          <img src="/images/photo-icon.png" alt=""/>
          <span>Photo</span>
        </button> 
        <button>
          <img src="/images/youtube.png" alt=""/>
          <span>Video</span>
        </button>
        <button>
          <img src="/images/calendar.png" alt=""/>
          <span>Event</span>
        </button>
        <button>
          <img src="/images/article.png" alt=""/>
          <span>Write Article</span>
        </button>
      </div>
    
    </Sharebox>
    <div>
      <Article>
        <Sharedhero>
          <a>
          <img src="/images/user.svg" alt=""/>
          <div>
          <span>Title</span>
          <span>Info</span>
          <span>Date</span>
          </div>
          </a>
          <button>
            <img src="/images/ellipsis.png" alt=""/>
          </button>
        </Sharedhero>
        <Description>Description </Description>
          <Sharedimg>
            <a>
              <img src="/images/bagii3.png" alt=""/>
            </a>
          </Sharedimg>
       <SocailCount>
         <li>
           <button>
         <img src="" alt=""/>
         </button>
         </li>
       </SocailCount>

      </Article>
    </div>
    <PostModal showmodal={showmodal} handleClick={handleClick}/>
    </Container>;
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;

background-color:#fff;
border-radius:5px;
position: relative;
border:none;

`;


const Sharebox = styled(CommonCard)`
display:flex;
flex-direction:column;
color:#958b7b;
margin:0 0 8px;
background:white;
border-radius:8px;
div{
  margin-top:8px;
  button{
    font-size:14px;
    line-height:1.5;
    outline:none;
    border:none;
    cursor: pointer;
    min-height:48px;
    color:rgba(0,0,0,0.6);
    background:transparent;
    display:flex;
    align-items:center;
    font-weight:600;}
    img{
      width:30px;
       }
       &:first-child{
         display:flex;
         align-items:center;
         padding:8px 16px 0px 16px;
         img{
           width:48px;
           border-radius:50%;
           margin-right:8px;
         }
         button{
           margin:4px 0;
           border-radius:35px;
           flex-grow:1;
           padding-left:16px;
           border:1px solid rgba(0,0,0,0.15);
           background-color:white;
           text-align:left;
         }


       }
       &:nth-child(2){
         display:flex;
         flex-wrap:wrap;
         justify-content:space-around;
         padding-bottom:4px;
         
         button{
           img{
             margin:0 4px 0 -2px;
             cursor: pointer;
           }
           span{
             color:#70b5f9;
             cursor: pointer;
           }
         }
       }
   
}
`;


const Article =styled(CommonCard)`
padding:0;
margin:0 0 8px;
overflow:visible;


`;

const Sharedhero = styled.div`
flex-wrap:nowrap;
padding-right:40px;
padding:12px 16px 0;
margin-bottom:8px;
align-items:center;
display:flex;
a{
  margin-right:12px;
  flex-grow:1;
  overflow:hidden;
  display:flex;
  text-decoration:none;
  img{
    width:48px;
    height:48px;
    margin-bottom:5px;
  }
  & > div{
    display:flex;
    flex-direction:column;
    flex-grow:1;
    flex-basis:0;
    overflow:hidden;
    span{
      text-align:left;
      &:first-child{
        font-size:14px;
        font-weight:700;

      }
      &:nth-child(n+1){
        font-size:12px;
        color:gray;

      }
    }
  }

}
button{
  position:absolute;
  right:0;
  top:0;
  background:transparent;
  border:none;
  outline:none;
  img{
    width:30px;
    
  }
}
`;

const Sharedimg = styled.div`
width:100%;
display:block;
margin-top:8px;
position: relative;
background-color:#f9fafb;
img{
  width:100%;
  object-fit:contain;
  height:50%;
}

`;

const Description = styled.div`
padding: 0 16px;
overflow:hidden;
color:rgba(0,0,0,0.9);
text-align:left;
font-size:14px;


`;

const SocailCount = styled.div``;
export default Main;