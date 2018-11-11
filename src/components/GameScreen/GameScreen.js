import React, { Component, Fragment } from 'react';
import Header from '../Header/Header'
import StoryBox from '../StoryBox/StoryBox'
import OptionBox from '../OptionBox/OptionBox'

let currentLocation = 0;

const STORY = [{
  location: 0,
  title: 'Chapter One',
  text: 'The sky flew so very high that day.' + 
        'And the bird chirped. All was swell. Until...',
  options: ['a cat came!', 'an owl hooted!', 'a pig snorted!'],
  optionDestination: [1,2,3]
},
{
  location: 1,
  title: 'Bird in the Sky',
  text: 'The bird took flight! ',
  options: ['a cat came!', 'an owl hooted!', 'a pig snorted!'],
  optionDestination: [2,2,2]
},
{
  location: 2,
  title: 'Bird on the Ground',
  text: 'The bird sat! ',
  options: ['a cat came!', 'an owl hooted!', 'a pig snorted!'],
  optionDestination: [2,2,2]
}]


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: 'Bill',
      age: 20,
      gameLocation: 0,
      inventory: [],
      title: STORY[currentLocation].title,
      text: STORY[currentLocation].text,
      options: [STORY[currentLocation].options[0], STORY[currentLocation].options[1], STORY[currentLocation].options[2]],
      optionDestination: [STORY[currentLocation].optionDestination[0], STORY[currentLocation].optionDestination[1], STORY[currentLocation].optionDestination[2]]
    }

    this.onOptionPress = this.onOptionPress.bind(this);
  }

  componentDidMount(){
      console.log('Good Luck Traveller')
  }

  onOptionPress = (optionValue) => {
    this.setState({
      location: STORY[currentLocation].optionDestination[optionValue]
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <StoryBox name={this.state.user} title={this.state.title} text={this.state.text}/>
        <OptionBox options={this.state.options}/>
      </Fragment>
      );
  }
}

export default App;