import React from 'react'
import '../Feedback/feedback.css'
import Feedbackbox from './Feedbackbox';
import feedbackbox from './Feedbackbox';
function Feedback() {
  return (
    <div className="outer-feedback">
            <div className="Header">Feedback</div>
        <div className="feedbackcontent">
            <Feedbackbox />
            <Feedbackbox />
            <Feedbackbox />
        </div>
    </div>
  )
}

export default Feedback;