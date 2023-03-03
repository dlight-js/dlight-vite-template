import { styled } from "@dlightjs/emotion";


export const Div = {
    Preview: styled.div`
        width: calc(100vw - 600px);
        height: calc(100vh - 30px);
    `,
    Output: styled.div`
        height: 90vh;
        display: ${({displayed}: any) => displayed ? "block" : "none"};
    `
}

export const Button = {
    Header: styled.button`
        border-width: 0;
        background-color: ${({selected}: any) => selected ? "rgb(11, 41, 64)" : "rgb(30, 30, 30)"};
        color: ${({selected}: any) => selected ? "#F88070" : "#8AA4DA"};
        font-size: 17px;
        width: 50%;
        height: 30px;
    `
}

export const Iframe = {
    Playground: styled.iframe`
        width: 100%;
        height: 100%;
        border-width: 0;
        background-color: ${({backgroundColor}: any) => backgroundColor};
        display: ${({displayed}: any) => displayed ? "block" : "none"};
    `
}