import { Link } from "react-router-dom";
import Layout from "../components/layout";
import { FaAngleRight, FaAngleDown, FaTrashAlt, FaUserEdit } from "react-icons/fa";

import '../styles/listingClient.css'
import { useEffect, useState } from "react";
import { useClient } from "../contexts/ClientContext";


export default function ListingClient(){
    
    const [handleVisible, setHandleVisible] = useState(false)

    const { clientList, 
            deletClient, 
            atualizaList, 
            updateClient } = useClient();

    useEffect(async () => {
        atualizaList()
    },[])

    function handleOnClickLookAddress(client){
        setHandleVisible({
            ...handleVisible,
            id: client.id,
            isVisible: !handleVisible.isVisible
        })
        
    }
  

    return(
        <Layout>
        <div className='listingContainer'>
            <header>
                <h1>Clientes</h1>

                <Link to='/cadastro'>
                    <button>Adicionar cliente</button>
                </Link>
            </header>

            <main>
                <ul>
                    {clientList?.length === 0 && <div>Carregando dados dos clientes...</div>}
                    {clientList?.map( client => {
                        // console.log('Achando o endereço ', client.endereco)
                        return(
                            <li className="card" key={client.id}>
                                <div className="clientDetails">
                                    <div className='data'>
                                        <h3>{client.nome}</h3>
                                        <span>{client.cpf}</span>
                                        <span>{client.tel}</span>
                                        <span>{client.email}</span>
                                    </div>
                                    <span className='look' onClick={ () => handleOnClickLookAddress(client)}> <span>Ver Endereço <FaAngleRight /></span></span>
                                        {handleVisible.id === client.id && handleVisible.isVisible && 
                                    
                                        <div className="address">
                                            { client.endereco.map( end => {
                                                const rua = [end.rua, end.num].join(', nº')
                                                const cidade = [end.cidade, end.uf].join('/')
                                                return(
                                                    <div className='addressDetails' key={rua}>
                                                        <p>
                                                            <span><span>Endereço</span>{ end.principal ? ' Principal': ' Secundário' }</span>
                                                            <span><span>Tipo:</span> {end.tipo}</span>
                                                        </p>
                                                        <span>{rua}</span>
                                                        <p>
                                                            <span><span>Bairro:</span> {end.bairro}</span>
                                                            <span><span>Cidade/UF:</span>{cidade}</span>

                                                        </p>
                                                    
                                                    </div>
                                                )
                                            })}
                                            

                                        </div>
                                    }

                                    

                                </div>

                                <div className="buttons">
                                    <span onClick={() => updateClient(client)}><FaUserEdit /></span>
                                    <span onClick={() => deletClient(client.id)}><FaTrashAlt /></span>
                                </div>

                            </li>
                        )
                    })}
                </ul>
            </main>
        </div>
        </Layout>
    )
}