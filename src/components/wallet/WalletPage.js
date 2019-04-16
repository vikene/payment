import React from "react";
import {graphql, QueryRenderer} from 'react-relay';
import environment from "../../environment";
import Wallet from "./Wallet";

const WalletQuery = graphql`
    query WalletPageQuery($username: String){
        getWallet(username: $username){
            ...Wallet_wallet
        }
    }
`
export default class WalletPage extends React.Component{
    
    render(){
        const variables = {
            username: localStorage.getItem("Username")
        }
        return (
            <QueryRenderer
            environment={environment}
            query={WalletQuery}
            variables={variables}
            render={({error, props}) => {
                if (error) {
                  return <div>{error.message}</div>
                } else if (props) {
                    if(props.getWallet !== null){
                    return (<Wallet wallet={props.getWallet} />)
                    }
                    else{
                        return <div>No item available</div>
                    }
                  
                }
                return <div>Loading</div>
              }}
            />
        )
    }
}