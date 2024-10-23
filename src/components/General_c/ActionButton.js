import React from 'react'

function ActionButton({actionButtonContent, className}) {
  return (
    <div>
      <div className={className}>{actionButtonContent}</div>
    </div>
  )
}

export default ActionButton