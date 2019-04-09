import React from 'react'
import styled from 'styled-components'
import BoardRow from '../components/BoardRow'

const Container = styled.div`
    border: 4px solid white;
    width: 80%;
    height: 80%;
    margin: auto;
    border-radius: 10px;
`

const GameBoard = (props) => {

    const renderRows = (rowData) => {
        return rowData.map(row =>{ 
            console.log(row)
            return <BoardRow row={row} />   }
        )
    }


    return (
        <Container>
            {renderRows(props.board)}
        </Container>
    )
}

export default GameBoard