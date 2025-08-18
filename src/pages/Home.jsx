import React from 'react'
import Nav from '../components/Nav'
import { Header } from '../components/Header'
import { NewsLetter } from '../components/NewsLetter'
import { BlogList } from '../components/BlogList'
import { Footer } from '../components/Footer'


export default function Home() {
  return (
    <>
    <Nav />
    <Header />
    <BlogList/>
    <NewsLetter />
    <Footer />
    </>
  )
}
