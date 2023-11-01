import styled from 'styled-components'

export const TypeWrapper = styled.div`
    border: 2px solid black;
    border-radius: 10px;
    width: max-content;
`

export const TypeOption = styled.button`
    padding: 10px;
    font-size: 14px;
    border: none;
    border-right: 2px solid black;
    color: ${props => props.isActive ? "white" : "black"};
    background: ${props => props.isActive ? 'rgb(255, 152, 0)' : "white"};;
    cursor: pointer;
    &:hover {
        color: white;
        background: black;
        transition: all .2s ease-in;
    }
    &:first-child {
        border-top-left-radius: 7px;
        border-bottom-left-radius: 7px;  
    }
    &:last-child {
        border: none;
        border-top-right-radius: 7px;
        border-bottom-right-radius: 7px;  
    }
`