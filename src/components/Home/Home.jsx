import React from 'react'
import styled from 'styled-components';
import Section from '../Section';
import Data from '../../Data/carInfo.json'

function Home() {
    return (
        <Container>
            {
                Data.map((item, index) => {
                    return (
                            <Section key={index}
                                title={item.title}
                                description={item.description}
                                leftBtnText={item.leftBtn}
                                rightBtnText={item.rightBtn}
                                backgroundImg={item.image}
                            />
                    )
                })
            }
        </Container>
    )
}

export default Home

const Container = styled.div`
    height:100vh;
    background-color:black;`