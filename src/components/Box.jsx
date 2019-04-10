import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100%;
    width: 10%;
    border: 1px solid white;
`

const Box = (props) => {
    return (
        <Container>{props.value}</Container>
    )
}

export default Box