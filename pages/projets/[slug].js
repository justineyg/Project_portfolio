import Navbar from "../../components/Navbar";
import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
    //connexion au compte contentful
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

export const getStaticPaths = async() =>{
    const res = await client.getEntries({
        content_type: 'portfolio'
    })
    const paths = res.items.map(item=>{
        return{
            params : {slug: item.fields?.slug}
        }
    })

    return{
        paths: paths, 
        fallback: true //
    }
}

export async function getStaticProps({params}){
    const {items} = await client.getEntries({ 
        content_type: 'portfolio',
        'fields.slug' : params.slug
    
    })

    return {
        props: { portfolio: items[0] },
        revalidate: 1

        }
    }

export default function ProjectDetails({portfolio}) {
    const{ featuredImage, title, duration, paragraphe, langages} = portfolio.fields
        console.log(portfolio)
    return(
        <div>
            <div className="banner">
                <Image 
                    src={'https:' + featuredImage.fields?.file.url}
                    width={featuredImage.fields?.file.details.image.width}
                    height={featuredImage.fields?.file.details.image.height}
                />
                <h2>{title}</h2>
            </div>
            <div className="info">
                <p>La durée : {duration}</p>
                <p>Langages : </p>

                {langages.map(lang => (
                    <span key={lang}>{lang}</span>
                ))}

            </div>

            <div className="description">
                <div>{documentToReactComponents(paragraphe)}</div>
            
            </div>
        </div>
    )
}