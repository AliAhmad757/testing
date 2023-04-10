import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Index = ({ data }) => {
    return (
        <>
            <Head>
                <title>Page title is</title>
                <link rel="shortcut icon" href="../favicon.ico" />
            </Head>

            {data?.map((item, index) => {
                return (
                    <div key={item.id}>
                        <Link href={`/blog/${item.id}`}>
                            {item.name}
                        </Link>
                        <br />
                    </div>
                )
            })}
        </>
    )
}

export default Index

export async function getStaticProps() {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
    return {
        props: {
            data
        }
    }
}