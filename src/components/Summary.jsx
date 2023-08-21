import React from 'react'
import data from '../data.json'

function Summary() {
  return (
    <>
      <section className='w-[100%] flex flex-col gap-5'>
        <h2>Summary</h2>
        <ul className='flex flex-col gap-8 m-4'>
          {data.map((data) => (
            <li className='flex w-[100%] justify-between p-4' key={data.index}>
              <div className='flex gap-3'>
                <img src={data.icon} />
                <h3>{data.category}</h3>
              </div>
              <p>{data.score}/100</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Summary
