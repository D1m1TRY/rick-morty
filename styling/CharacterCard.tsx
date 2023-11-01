import styled from 'styled-components'

export const Card = styled.div`
    width: 170px;
    padding: 0 0 5px;
    margin: 20px;
    border-radius: 10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: white;
    background-color: rgb(60, 62, 68);
`
export const CharacterImage = styled.img`
    width: 170px;
    height: 140px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export const CharacterDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
    padding: 10px;
`

export const CharacterInfoWrapper = styled.div`
    & > a {
        color: rgb(255, 152, 0);
    }
    & > p {
            margin: 0;
        }
`

export const ActionBtn = styled.div`
    padding: 5px;
    margin: 5px;
    border-radius: 10px;
    text-align: center;
    background-color: rgb(158, 158, 158);
    cursor: pointer;
    &:hover {
        color: white;
        background: rgb(255, 152, 0);
        transition: all .2s ease-in-out;
    }
`