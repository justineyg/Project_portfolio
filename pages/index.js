import Image from "next/image"
import { createClient } from "contentful"
import styled from "styled-components"
import PortfolioCard from "../components/PortfolioCard"


const HomeStyle = styled.header `
    padding: 0;
    margin: 0;

`

export async function getStaticProps(){
  //Récupérer les données contentful pour les afficher côté client

  const client = createClient({
    //connexion au compte contentful
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'portfolio'})
  //relier au projet contentful 

  return{
    props: {
      portfolios: res.items
    }
  }
}
export default function Home({portfolios}) {
  console.log(portfolios)
    return (
      <HomeStyle>
        <>
          <h1>Portfolio de Justine</h1>
          <Image 
          src="/img/justine.JPG"
          width={300} height={200}
          />
        <div id="cards">
          {portfolios.map(portfolio => (
            <PortfolioCard key={portfolio.sys.id} portfolio={portfolio}/>
          ))}
        </div>
        </>
        </HomeStyle>
    )
}