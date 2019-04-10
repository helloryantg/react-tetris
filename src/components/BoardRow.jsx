import React from 'react'
import styled from 'styled-components'
import Box from '../components/Box'

const Container = styled.div`
    border: 1px solid white;
    height: 8%;
    widht: 100%;
    display: flex;
`

const BoardRow = (props) => {
    return <Container>
        {props.row.map((val, index) => 
            <Box value={val} key={index}/>   
        )}
    </Container>
}

export default BoardRow