import styled from 'styled-components'
export const CharacterDetails = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px;
    overflow: hidden;
    max-width: 600px;
`
export const CharacterImage = styled.img`
    height: 220px;
    width: 260px;
    border-radius: 15px;
`
export const CharacterDescription = styled.div`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: white;
    background-color: rgb(60, 62, 68);
    padding: 0 10px;
    border-radius: 15px;
    width: max-content;
`
export const CharacterName = styled.h2`
    font-size: 21px;
`