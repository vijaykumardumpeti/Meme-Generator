import {Component} from 'react'

import {
  MainContainer,
  Heading,
  InputContainer,
  InputElement,
  Select,
  MemeContainer,
  Headings,
  Button,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
console.log(fontSizesOptionsList)
// Write your code here

export default class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
    detailsObject: '',
  }

  onChangeImage = event => {
    this.setState({
      imageUrl: event.target.value,
    })
  }

  onChangeTopText = event => {
    this.setState({
      topText: event.target.value,
    })
  }

  onChangeBottomText = event => {
    this.setState({
      bottomText: event.target.value,
    })
  }

  onChangeFontSize = event => {
    this.setState({
      fontSize: event.target.value,
    })
  }

  onSubmitFunc = event => {
    event.preventDefault()
    const {imageUrl, topText, bottomText, fontSize} = this.state

    const object = {
      imageUrl,
      topText,
      bottomText,
      fontSize,
    }
    this.setState({
      detailsObject: object,
    })
  }

  render() {
    const {detailsObject} = this.state
    const {imageUrl, topText, bottomText, fontSize} = detailsObject
    console.log(fontSize)

    return (
      <MainContainer className="main-container">
        <div className="container-1">
          <Heading>Meme Generator</Heading>
          <form onSubmit={this.onSubmitFunc} className="form-container">
            <InputContainer className="input-container">
              <label htmlFor="text">Image URL</label>
              <InputElement
                onChange={this.onChangeImage}
                placeholder="Enter the image URL"
                id="text"
                type="text"
              />
            </InputContainer>
            <InputContainer className="input-container">
              <label htmlFor="top-text">Top Text</label>
              <InputElement
                onChange={this.onChangeTopText}
                placeholder="Enter the Top Text"
                id="top-text"
                type="text"
              />
            </InputContainer>
            <InputContainer className="input-container">
              <label htmlFor="button-text">Bottom Text</label>
              <InputElement
                onChange={this.onChangeBottomText}
                placeholder="Enter the Button Text"
                id="button-text"
                type="text"
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="font-size">Font Size</label>
              <Select onChange={this.onChangeFontSize} id="font-size">
                {fontSizesOptionsList.map(object => (
                  <option value={object.optionId} id={object.optionId}>
                    {object.displayText}
                  </option>
                ))}
              </Select>
            </InputContainer>
            <Button type="submit">Generate</Button>
          </form>
        </div>
        <MemeContainer
          data-testid="meme"
          imageUrl={imageUrl}
          className="container-2"
        >
          <Headings fontSize={fontSize}>{topText}</Headings>
          <Headings fontSize={fontSize}>{bottomText}</Headings>
        </MemeContainer>
      </MainContainer>
    )
  }
}
