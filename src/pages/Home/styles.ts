import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
  }

@font-face {
    font-family: "Raleway";
    src: url("/fonts/Raleway.ttf") format("truetype");
    font-style: normal;
}

body,
html,

a {
    font-family: 'Raleway' 
}

body {
    margin:0;
    padding:0;
    border: 0;
    outline: 0;
    background: #fff;
    overflow-x: hidden;
    height: 100%;


h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Raleway', serif;
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }
    p {
     
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
       

        :hover {
         
        }
    }
    
    *:focus {
        outline: none;
    }
   
    &::before {
        box-sizing: border-box;
        outline: 0;
    }
    &::before {
        box-sizing: border-box;
        outline: 0;
    }
`;
