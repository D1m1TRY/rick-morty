import styled from 'styled-components'

export const PaginationWrapper = styled.footer`
    position: fixed;
    right: 0;
    bottom: 0;
    padding: 10px 0 20px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: white;
    width: 100%;
`

export const PageActionsWrapper = styled.div`
    margin-left: 30px;
    display: flex;
    align-items: center;
`
export const PageActionsBtn = styled.button`
    padding: 5px 10px;
    margin: 0 5px;
    border-radius: 15px;
    cursor: pointer;
    background-color: rgb(60, 62, 68);
    color: white;
    &:hover {
        color: white;
        background: rgb(255, 152, 0);
        transition: all .2s ease-in;
    }
    &:disabled {
        color: grey;
        background: white;
        cursor: not-allowed;
    }
`