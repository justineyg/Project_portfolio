import Link from "next/link"
import Image from "next/image"

export default function PortfolioCard({ portfolio}){
    const {title, slug, paragraphe, duration, langages, thumbnail } = portfolio.fields
    return (
        <div className="card">
           <div className="featured">
           <Image 
                    src={'https:' + thumbnail.fields?.file?.url}
                    width={thumbnail.fields?.file?.details.image.width}
                    height={thumbnail.fields?.file?.details.image.height}
                />
           </div>
           <div className="content">
                <div className="info">
                    <h4>{title}</h4>
                    <p>La durée : {duration} mois</p>
                    <p>Langages : {langages}</p>
                </div>
                <div className="actions">
                    <Link href={'/projets/' + slug}><a>Voir plus</a></Link>
                </div>
           </div>
        </div>
    )
}