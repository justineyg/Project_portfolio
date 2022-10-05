import Link from "next/link"
import styled from "styled-components"

const NavbarStyle = styled.header`
        background-color: #ccb97d;
        nav ul{
            display: flex;
            justify-content: end;
            gap: 20px;

            li{
                
            }
        }

        
`

export default function Navbar(){
    
    return(
       
        <>
         <NavbarStyle>
                <nav>
                    <ul>
                        <li>
                            <Link href='/about'>À propos</Link>
                        </li>
                        <li>
                            <Link href='#cards'>Projets</Link>
                        </li>
                        <li>
                            <Link href='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
                </NavbarStyle>
        </>
       
    )
}