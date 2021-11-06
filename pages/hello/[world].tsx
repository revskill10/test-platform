import Button from '../../components/Button'
import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
const Data = (props: any) => {
    const { data, loading, error } = useQuery(gql`
        query {
            articles {
                id
                title
                content
            }
        }
    `);
    if (error) return <div>Error</div>
    if (loading) return <div>Loading</div>
    const nodes = data.articles.map((article) => {
        return (
            <div className="card shadow">
                <div className="card-body">
                    <h2 className="card-title">{article.title}</h2> 
                    <p>{article.content}</p>
                </div>
                </div>
        )
    })
    return nodes
}
const Main = () => {
    return (
            <Data />
    )
}

export default Main