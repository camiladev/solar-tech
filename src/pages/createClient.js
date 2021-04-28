import { useState } from "react";
import Layout from "../components/layout";

import { FaArrowLeft, FaPlusSquare } from "react-icons/fa";

import '../styles/form.css'
import { Link } from "react-router-dom";
import { useClient } from "../contexts/ClientContext";

export default function CreateClient(){
    const { addClient,
            addAddress, 
            handleOnChangeClient,
            handleOnChangeAddress,
            handleSubmit,

        } = useClient()

    const [moreAddress, setMoreAddress] = useState([""])

    function addInputAddress(){        
        setMoreAddress([...moreAddress,""])
    }  
    

    return(
        <Layout>
            <div className="formContainer">
                <header>
                    <span>
                        <Link to='/'>
                            <FaArrowLeft />
                        
                        </Link>
                    </span>
                    <h1>Adicionar Cliente</h1>                    
                </header>

                <main>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className="data">

                            <p>
                                <label htmlFor="">Nome</label>
                                <input 
                                    type="text"
                                    name='nome'
                                    placeholder='Nome'
                                    value={addClient.name}  
                                    onChange={handleOnChangeClient} 
                                    required 
                                />
                            </p>
                            <p>
                                <label htmlFor="">CPF</label>
                                <input 
                                    type="text"
                                    name='cpf'
                                    placeholder='000.000.000-00'   
                                    value={addClient.name}  
                                    onChange={handleOnChangeClient}
                                    required 
                                />
                            </p>
                            <p>
                                <label htmlFor="">Telefone</label>
                                <input 
                                    type="text"
                                    name='tel'
                                    placeholder='(00) 00000-0000'
                                    value={addClient.name}  
                                    onChange={handleOnChangeClient}   
                                    required 
                                />
                            </p>
                            <p>
                                <label htmlFor="">E-mail</label>
                                <input 
                                    type="email"
                                    name='email'
                                    placeholder='E-mail'  
                                    value={addClient.name}  
                                    onChange={handleOnChangeClient} 
                                    required 
                                />
                            </p>
                        </div>
                        <div className="addressForm">
                            <div className="header">
                                <h3>Endereço</h3>
                                
                                <span onClick={()=> addInputAddress()}><FaPlusSquare /></span>
                                
                            </div>
                            { moreAddress.map((address, index) => {
                                return(

                                    <div className="dataAddress" key={index}>
                                        <p className='radio'>
                                            <label htmlFor="">Endereço Principal?</label>
                                            <p>
                                                <input 
                                                    type="radio"
                                                    name={`principal-${index}`}
                                                    value={true}  
                                                    onChange={e => handleOnChangeAddress(e, index)}
                                                    required 
                                                />
                                                <label htmlFor="">Sim</label>

                                                <input 
                                                    type="radio"
                                                    name={`principal-${index}`}
                                                    value={false}  
                                                    onChange={e => handleOnChangeAddress(e, index)}
                                                    required 
                                                />
                                                <label htmlFor="">Não</label>

                                            </p>
                                        </p>
                                        <p className='select'>
                                            <label htmlFor="">Tipo</label>
                                            <select name="selectTipo" id="type" onChange={e => handleOnChangeAddress(e, index)}>
                                                <option value="default">Selecione</option>
                                                <option value="residencial">Residencial</option>
                                                <option value="comercial">Comercial</option>
                                                <option value="rural">Rural</option>
                                                <option value="casaDePraia">Casa de praia</option>
                                            </select>
                                        </p>
                                        <p>
                                            <label htmlFor="">Rua</label>
                                            <input 
                                                type="text"
                                                name='rua'
                                                placeholder='Nome da rua'
                                                value={addAddress.name}   
                                                onChange={e => handleOnChangeAddress(e, index)}
                                                required 
                                            />
                                        </p>
                                        <p>
                                            <label htmlFor="">Nº</label>
                                            <input 
                                                type="text"
                                                name='num'
                                                placeholder='Numero'   
                                                value={addAddress.name}   
                                                onChange={e => handleOnChangeAddress(e, index)}
                                                required 
                                            />
                                        </p>
                                        <p>
                                            <label htmlFor="">Complemento</label>
                                            <input 
                                                type="text"
                                                name='comp' 
                                                value={addAddress.name}   
                                                onChange={e => handleOnChangeAddress(e, index)} 
                                            />
                                        </p>
                                        <p>
                                            <label htmlFor="">Bairro</label>
                                            <input 
                                                type="text"
                                                name='bairro'
                                                placeholder='Bairro'
                                                value={addAddress.name}   
                                                onChange={e => handleOnChangeAddress(e, index)}   
                                                required 
                                            />
                                        </p>

                                        <p>
                                            <label htmlFor="">Cidade</label>
                                            <input 
                                                type="text"
                                                name='cidade'
                                                placeholder='Cidade'   
                                                value={addAddress.name}   
                                                onChange={e => handleOnChangeAddress(e, index)}
                                                required 
                                            />
                                        </p>
                                        <p>
                                            <label htmlFor="">UF</label>
                                            <input 
                                                type="text"
                                                name='uf'
                                                placeholder='UF'   
                                                value={addAddress.name}   
                                                onChange={e => handleOnChangeAddress(e, index)}
                                                required 
                                            />
                                        </p>

                                    </div>
                                )
                            })}
                        </div>
                        <div className="button">
                            <button type='submit'>Salvar</button>
                        </div>
                    </form>
                </main>
            </div>
        </Layout>
    )
}