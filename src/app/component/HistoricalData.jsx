import React from 'react'

export default function HistoricalData({id, title, category, description, date, author}) {
  return (
    <div>
       {id} {category} {title} {description} {date} {author} 
    </div>
  )
}
