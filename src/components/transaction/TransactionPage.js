import React from "react";
import {graphql, QueryRenderer} from 'react-relay';
import environment from "../../environment";
import Transaction from "./Transaction";
import  TransactionItem from "../transactionitem/TransactionItem";

const TransactionPageQuery = graphql`
query TransactionPageQuery($username: String){   
    getTransaction(username: $username){
        ...TransactionItem_item
    }
}
`
class TransactionPage extends React.Component{
    render(){
        const variables = {
            username: localStorage.getItem("Username")
        }
        return (
            <QueryRenderer
                environment={environment}
                query={TransactionPageQuery}
                variables={variables}
                render={({error, props}) => {
                    if (error) {
                      return <div>{error.message}</div>
                    } else if (props) {
                        if(props.getTransaction !== null && props.getTransaction.length !== 0){
                        return props.getTransaction.map((T) => <div><TransactionItem item={T} /><hr /></div>)
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

export default TransactionPage;