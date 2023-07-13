import Image from 'next/image'
import Main from './main/Main'
import Header from './Header/Header'
import Content from './Content/Content'
export default function Home() {
  return (
   <>
   <Main>
    <Header/>
    <Content/>
    
   </Main>
   </>
  )
}
