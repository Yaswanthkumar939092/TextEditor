import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
  height: 100vh;
  background-color: #25262c;
`

export const Card = styled.div`
  display: flex;
  background-color: #1b1c22;
  flex-direction: row;
  padding: 20px;
  width: 90vw;
  border-radius: 10px;
`
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vh;
  align-items: center;
`
export const Heading = styled.h1`
  font-size: 30px;
  font-family: 'Roboto';
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
  font-weight: bold;
  color: #ffffff;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 20px;
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  background-color: #25262c;
  align-items: center;
`

export const ButtonCont = styled.ul`
  display: flex;
  flex-direction: 'row';
  list-style: none;
`

export const Button = styled.button`
  background-color: transparent;
  height: 40px;
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
  @media screen and (max-width: 768px) {
    height: 20px;
  }
  border-width: 0px;
`
export const Line = styled.hr`
  color: #cbd5e1;
  align-self: stretch;
  margin: 10px;
`
export const TextArea = styled.textarea`
  padding: 20px;
  color: #ffffff;
  width: 90%;
  height: 90%;
  font-size: 15px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
  background-color: transparent;
`
export const ListItem = styled.li`
  margin: 20px;
  @media screen and (max-width: 768px) {
    margin: 5px;
  }
`
