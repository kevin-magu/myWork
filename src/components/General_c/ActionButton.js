import React from 'react'

function ActionButton({actionButtonConetent, className}) {
  return (
    <div>
      <div className={className}>{actionButtonConetent}</div>
    </div>
  )
}

export default ActionButton