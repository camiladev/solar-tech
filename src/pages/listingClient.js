import { Link } from "react-router-dom";
import Layout from "../components/layout";

import '../styles/listingClient.css'


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
                                <span>000.000.000-00</span>
                                <span>(00) 99999-9999</span>
                                <span>camila.matos@teste.com</span>
                            </div>
                            <span className='look'>Ver Endereço</span>
                            <div className='address'>
                                <p>
                                    <span><span>Endereço</span> Principal</span>
                                    <span><span>Tipo:</span> Residencial</span>
                                </p>
                                <span>Rua das Palmeiras, nº 10</span>
                                <p>
                                    <span><span>Bairro:</span> Oliveira</span>
                                    <span><span>Cidade/UF:</span>São José/SC</span>

                                </p>
                                

                            </div>

                        </div>

                        <div className="buttons">
                            <span>X</span>
                            <span>X</span>
                        </div>

                    </li>
                </ul>
            </main>
        </div>
        </Layout>
    )
}