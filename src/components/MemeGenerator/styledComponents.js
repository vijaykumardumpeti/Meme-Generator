import Styled from 'styled-components'

export const MainContainer = Styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;

padding: 40px;

@media all and (max-width: 767px){
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

`

export const Heading = Styled.h1`
color: #35469c;

`

export const InputContainer = Styled.div`

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
margin-bottom: 10px;
`
export const InputElement = Styled.input`

outline:none;
color: black;
width: 260px;
height: 28px;
margin-top: 10px;
border-radius: 10px
border: 1px solid black
`

export const Select = Styled.select`
outline:none;
color: black;
width: 260px;
height: 28px;
margin-top: 10px;
border-radius: 10px
border: 1px solid black
`

export const MemeContainer = Styled.div`

background-image: url(${props => props.imageUrl});//
background-image:;
height: 300px;
width: 260px;
margin-left: 30px;
margin-top: 50px;

display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

padding: 10px;




@media all and (max-width: 767px){
    order: -1;
}

`

export const Headings = Styled.p`

margin-bottom: 40px;
font-size: ${props => props.fontSize};//
color: white;

`

export const Button = Styled.button`
background-color: #0b69ff;
color: white;
padding: 10px;
border-radius: 8px;
border: 0px none white;

`
