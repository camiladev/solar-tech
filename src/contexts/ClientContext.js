import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router";
import { api } from "../services/api";


export const ClientContext = createContext({})

export function ClientProvider({ children }){
    const [clientList, setClientList] = useState([])
    const [addClient, setAddClient] = useState([])
    const [addAddress, setAddAddress] = useState([])

    const history = useHistory();

    function handleOnChangeClient(event){
        
        setAddClient({
            ...addClient,
            [event.target.name]: event.target.value
        })
    }

    function handleOnChangeAddress(event, index){ 
        addAddress[index] = {...addAddress[index], [event.target.name]: event.target.value}
        
        setAddAddress({
            ...addAddress
        })   

    }

    function handleSubmit(event){
        event.preventDefault();
                
        try {
            api.post('clientes', {
                nome: addClient.nome,
                cpf: addClient.cpf,
                tel: addClient.tel,
                email: addClient.email,
                addAddress
            })
            alert('Cliente Cadastrado')
        } catch (error) {
            console.log('Oppss... não foi')
        }
    }

    function deletClient(id){
        try {
            api.delete(`clientes/${id}`)
            atualizaList()
            alert('Cliente Excluido')
        } catch (error) {
            console.log('Oppss... não foi')
        }
    }

    async function atualizaList(){
        const { data } = await api.get('clientes', {
            params: {
                _sort: 'nome',
                _order: 'cresc'
            }
        })
        setClientList(data)
        console.log('api',data)
    }

    function updateClient(value){
        const enderecos = [];

        for (const end in value.addAddress){
            enderecos.push(value.addAddress[end])
        }
        
        setAddAddress(enderecos)
        setAddClient({
            nome: value.nome,
            cpf: value.cpf,
            tel: value.tel,
            email: value.email,
            
        })
        history.push('/editar')
    }



    return(
        <ClientContext.Provider value={{
            addClient,
            addAddress, 
            clientList,
            handleOnChangeClient,
            handleOnChangeAddress,
            handleSubmit,
            deletClient,
            atualizaList,
            updateClient,
        }}>

            {children}
        </ClientContext.Provider>
    )
}

export const useClient = () => {
    return useContext(ClientContext);
}