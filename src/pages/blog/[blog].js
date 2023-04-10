import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Blog = ({ data }) => {
    const router = useRouter()
    console.log(data)
    return (
        <>
            <Head>
                <title>Page title is</title>
                <link rel="shortcut icon" href="../favicon.ico" />
            </Head>
            <div>{data?.id}</div>
            <div>{data?.name}</div>
            <div>{data?.email}</div>
            <div>{data?.website}</div>
        </>
    )
}

export default Blog

export async function getServerSideProps({ params }) {
    const blogId = parseInt(params.blog); // convert string to integer
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${blogId}`
    );
    return {
        props: {
            data,
        },
    };
}
