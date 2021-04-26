import { Link } from "react-router-dom";
import Layout from "../components/layout";


export default function ListingClient(){

    return(
        <Layout>
        <div className='listingContainer'>
            <header>
                <h1>Clientes</h1>

                <Link to=''>
                    <button>Adicionar cliente</button>
                </Link>
            </header>

            <main>
                <ul>
                    <li className="card">
                        <div className="clientDetails">
                            <div className='data'>
                                <h3>Camila Matos</h3>
                                <p>000.000.000-00</p>
                                <span>(00) 99999-9999</span>
                                <span>camila.matos@teste.com</span>
                            </div>
                            <span>Ver Endereço</span>
                            <div className='address'>
                                <p>Endereço:</p>
                                <span>Residencial</span>
                                <span>Principal</span>
                                <span>Rua das Palmeiras, nº 10</span>
                                <span>Bairro: Oliveira</span>
                                <span>São José/SC</span>

                            </div>

                        </div>

                        <div className="buttons">
                            <span>X</span>
                        </div>

                    </li>
                </ul>
            </main>
        </div>
        </Layout>
    )
}