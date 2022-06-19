import React, { useState } from 'react'


function GetAll() {
    const [name, setName] = useState()
    const [allResults, setAllResults] = useState()

    const handleGetAll = async (e) => {
        // setAllResults([])
        e.preventDefault()
        try {
            const results = await fetch('/api/players')
            const response = await results.json()
            console.log(response)
            const temporaryResults = response.map(element => {
                return {
                    playersName: element.playersName,
                    rating: element.rating,
                    position: element.position,
                    team: element.team
                }
            });
            // console.log(temporaryResults)
            setAllResults(temporaryResults)
        } catch (error) {
            console.log(error)
        }
    }

    const handleGet = async (e) => {
        e.preventDefault()
        try {
            const results = await fetch(`/api/players/${name}`)
            const response = await results.json()
            console.log(response)
            response.forEach(element => {
                console.log(element.playersName)
            });
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <h3>Get all players</h3>
        <button onClick={handleGetAll}>fetch</button>
        {allResults && allResults.map((n) => (
            <p>{n.playersName} - {n.rating} - {n.position} - {n.team}</p>
        ))}
        <h3>Get individually</h3>
        <form onSubmit={handleGet}>
            <input value={name} placeholder='player name' onChange={(e) => setName(e.target.value)} required/>
            <button type='submit'>fetch</button>
        </form>
    </div>
  )
}

export default GetAll