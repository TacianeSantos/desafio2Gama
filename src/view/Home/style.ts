import styled from "styled-components";

export const Container = styled.div `
    width: 80%;
    margin: auto;

    .nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .cart{
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

    section {
        height: 100vh;
        width: 80%;        
        display: flex;

        
        .product-content{
           display: grid;
           text-align: center;
           height: 600px;
           background: #fff;
           border-radius: 12px;
           padding: 12px;

        }

        
    }
    principalForm{    
   

      .form{
          margin: auto;
          width:50%;
           text-align: center;
           height: 400px;
           background: #fff;

      }
    }
    
`;

