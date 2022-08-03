import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import MainLayout from '../components/layouts/MainLayout'

export default function AboutPage() {
  return (
    <>

     



        <h1>About Page</h1>


        <h1 className={'title'}>
          {/*SOY ABOUT <a href='/'> ir a HOME</a>*/}
          Ir a <Link href="/" >Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.js</code>
        </p>

      


    </>
  )
}


AboutPage.getLayout = function (page: JSX.Element){

  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )

}