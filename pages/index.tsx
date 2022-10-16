import type { NextPage } from 'next'
import Head from 'next/head'
import MainRedux from './MainRedux'
import MainProps from './MainProps'
import MainAPI from './MainAPI'

const Home: NextPage = () => {
  return (
    <>
    <MainRedux></MainRedux>
    <MainProps></MainProps>
    <MainAPI></MainAPI>
    </>
  )
}

export default Home
