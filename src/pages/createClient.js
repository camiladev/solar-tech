import { useState } from "react";
import Layout from "../components/layout";

import { FaArrowLeft, FaPlusSquare } from "react-icons/fa";

import '../styles/form.css'

export default function CreateClient(){
    const [addClient, setAddClient] = useState([])
    const [addAddress, setAddAddress] = useState([""])

    function addInputAddress(){
        
        setAddAddress([...addAddress,""])
    }

    return(
        <Layout>
            <div className="formContainer">
                <header>
                    <span><FaArrowLeft /></span>
                    <h1>Adicionar Cliente</h1>                    
                </header>

                <main>
                    <form className='form' action="">
                        <div className="data">

                            <p>
                                <label htmlFor="">Nome</label>
                                <input 
                                    type="text"
                                    name='nome'
                                    placeholder='Nome'   
                                    required 
                                />
                            </p>
                            <p>
                                <label htmlFor="">CPF</label>
                                <input 
                                    type="text"
                                    name='cpf'
                                    placeholder='000.000.000-00'   
                                    required 
                                />
                            </p>
                            <p>
                                <label htmlFor="">Telefone</label>
                                <input 
                                    type="text"
                                    name='tel'
                                    placeholder='(00) 00000-0000'   
                                    required 
                                />
                            </p>
                            <p>
                                <label htmlFor="">E-mail</label>
                                <input 
                                    type="email"
                                    name='email'
                                    placeholder='E-mail'   
                                    required 
                                />
                            </p>
                        </div>
                        <div className="addressForm">
                            <div className="header">
                                <h3>Endereço</h3>
                                
                                <span onClick={()=> addInputAddress()}><FaPlusSquare /></span>
                                
                            </div>
                            { addAddress.map((address, index) => {
                                return(

                                    <div className="dataAddress">
                                        <p className='radio'>
                                            <label htmlFor="">Endereço Principal?</label>
                                            <p>
                                                <input 
                                                    type="radio"
                                                    name='principal'
                                                    value='sim'  
                                                    required 
                                                />
                                                <label htmlFor="">Sim</label>

                                                <input 
                                                    type="radio"
                                                    name='principal'
                                                    value='nao'  
                                                    required 
                                                />
                                                <label htmlFor="">Não</label>

                                            </p>
                                        </p>
                                        <p className='select'>
                                            <label htmlFor="">Tipo</label>
                                            <select name="selectTipo" id="type">
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
                                                required 
                                            />
                                        </p>
                                        <p>
                                            <label htmlFor="">Nº</label>
                                            <input 
                                                type="text"
                                                name='num'
                                                placeholder='Numero'   
                                                required 
                                            />
                                        </p>
                                        <p>
                                            <label htmlFor="">Complemento</label>
                                            <input 
                                                type="text"
                                                name='comp' 
                                                required 
                                            />
                                        </p>
                                        <p>
                                            <label htmlFor="">Bairro</label>
                                            <input 
                                                type="text"
                                                name='bairro'
                                                placeholder='Bairro'   
                                                required 
                                            />
                                        </p>

                                        <p>
                                            <label htmlFor="">Cidade</label>
                                            <input 
                                                type="text"
                                                name='cidade'
                                                placeholder='Cidade'   
                                                required 
                                            />
                                        </p>
                                        <p>
                                            <label htmlFor="">UF</label>
                                            <input 
                                                type="text"
                                                name='uf'
                                                placeholder='UF'   
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