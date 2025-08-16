import React from 'react'
import Nav from '../components/Nav'
import { Header } from '../components/Header'
import { NewsLetter } from '../components/NewsLetter'
import { BlogList } from '../components/BlogList'


export default function Home() {
  return (
    <>
    <Nav />
    <Header />
    <BlogList/>
    <NewsLetter />
    </>
  )
}
