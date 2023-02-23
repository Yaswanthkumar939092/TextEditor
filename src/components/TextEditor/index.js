import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {AiOutlineUnderline} from 'react-icons/ai'
import {GoItalic} from 'react-icons/go'
import {
  BgContainer,
  Card,
  Line,
  ListItem,
  RightContainer,
  ButtonCont,
  TextArea,
  LeftContainer,
  Image,
  Button,
  Heading,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  changeBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  changeItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  changeUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state

    return (
      <BgContainer>
        <Card>
          <RightContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </RightContainer>
          <LeftContainer>
            <ButtonCont>
              <ListItem>
                <Button
                  data-testid="bold"
                  onClick={this.changeBold}
                  isActive={isBold}
                >
                  <VscBold size={25} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  data-testid="italic"
                  onClick={this.changeItalic}
                  isActive={isItalic}
                >
                  <GoItalic size={25} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  data-testid="underline"
                  onClick={this.changeUnderline}
                  isActive={isUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ListItem>
            </ButtonCont>
            <Line />
            <TextArea
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
            />
          </LeftContainer>
        </Card>
      </BgContainer>
    )
  }
}

export default TextEditor
