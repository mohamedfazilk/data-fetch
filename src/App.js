import React from 'react'

const response_data =[

  {
    id:1,
    title:"Sample article1",
    content:"Long simple content",
    created_at:'12/12/12 01:20:02',
    updated_at:'12/12/12 01:20:02',
  },

  {
    id:2,
    title:"Sample article2",
    content:"Long simple content2",
    created_at:'12/12/12 01:20:02',
    updated_at:'12/12/12 01:20:02',
  }
]

function App() {
  return <article>
    {response_data.map(({id,title,content,created_at,updated_at}) =>{
      return(
        <article key={id}>

          <h1>{title}</h1>
          <h3>{content}</h3>
          <small>{created_at}</small>
          <small>{updated_at}</small>

        </article>
      )
    } )}
  </article>
}

export default App;
