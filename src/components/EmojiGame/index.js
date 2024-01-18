/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import './index.css'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  state = {score: 0, initialId: [], topScore: 0}

  clickEmoji = id => {
    const {score, initialId, topScore} = this.state

    if (!initialId.includes(id)) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        initialId: [...prevState.initialId, id],
      }))
    } else if (topScore <= score) {
      this.setState({topScore: score})
      console.log('out')
    }
  }

  render() {
    const {emojisList} = this.props
    const {score} = this.state

    return (
      <div className="bg-con">
        <NavBar score={score} />
        <ul className="emojisCon">
          {emojisList.map(eachList => (
            <EmojiCard
              key={eachList.id}
              emojisFace={eachList}
              clickEmoji={this.clickEmoji}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
