import React from 'react'
import {connect} from 'react-redux'
import {getAllQuestions, fetchQuestion} from '../store/questionStore'

class LevelTwo extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {

  //   }
  // }

  // componentDidMount() {
  //   this.props.getAllQuestions()
  // }

  render() {
    return (
      <div>
        <div style={{backgroundColor: 'green'}}>
          <div className="level-container">
            <div className="flex-child-left">
              <div id="textbox" />
              <div id="textbox">
                Code Editor Here
                <button type="submit">Submit Query!</button>
              </div>
              <div id="textbox">
                <p>Plot Question Here</p>
              </div>
            </div>
            <div className="flex-child-right">
              <div id="textbox-table">
                <p id="table">Table goes here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    question: state.question.currentQ,
    allQs: state.question.allQs
  }
}

const mapDispatch = dispatch => {
  return {
    fetchQuestion: () => {
      dispatch(fetchQuestion())
    },
    getAllQuestions: () => {
      dispatch(getAllQuestions())
    }
  }
}

export default connect(mapState, mapDispatch)(LevelTwo)
