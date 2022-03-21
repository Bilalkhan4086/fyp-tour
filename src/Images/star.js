import React from 'react'

const star = (props) => {
  return (
    <div style={props.style}>
        <svg viewBox="0 0 1536 1436" xmlns="http://www.w3.org/2000/svg">
<path d="M663.5 568.5L808.5 99L965 568.5H1440L1022 861L1219 1345L808.5 1032.5L366.5 1346L472 1113.5L609.5 854L366.5 723L109 568.5H663.5Z" fill={props.fill ? '#D99F0C' : 'none'} stroke="#D99F0C" strokeWidth="60"/>
</svg>
    </div>
  )
}

export default star