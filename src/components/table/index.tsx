import { useState, useEffect, useReducer } from "react";

import { Container, ButtonToast } from "./style";
import MaskedInput from "react-text-mask";
import { useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



interface CepProps {
    rua: string;
    cep: string;
    cidade: string;
    estado: string;
    complemento: string;
}

export function Table() {

    const [dataTable, setDataTable] = useState<CepProps[]>([]);
    const [cep, setCep] = useState('');
    const {cep_url} = useParams();
    

    useEffect(() => {
        if(cep_url) {
            fetch(`https://viacep.com.br/ws/${cep_url}/json/`)
            .then((res) => res.json())
            .then((data) => {
                const newDataTable = [
                    ...dataTable,
                    { 'rua': data.logradouro, 'cep': data.cep, 'cidade': data.localidade, 'estado': data.uf, 'complemento': data.complemento}
                ];
                setDataTable(newDataTable)
                sessionStorage.setItem('dataTable', JSON.stringify(newDataTable)) 
            });  
        }
      }, [])

    useEffect(() => {
        const dataTableSession = sessionStorage.getItem('dataTable');
        if(dataTableSession) {
            const storedDataTable = JSON.parse(dataTableSession || '' );
            setDataTable(storedDataTable);
        }
      }, [])

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setCep(e.currentTarget.value);   
        
    }

    function removeLineTable(index: any) {
        const itensCopy = Array.from(dataTable);
        const itemRemoved = itensCopy.splice(index, 1);
        setDataTable(itensCopy);
        sessionStorage.setItem('dataTable', JSON.stringify(itensCopy))

        toast.warn(<h3 className="toastify-font">Removido com Sucesso! <ButtonToast 
            onClick={
                () => {                
                    itensCopy.splice(index, 0, itemRemoved[0]);
                    setDataTable([...itensCopy]);
                    sessionStorage.setItem('dataTable', JSON.stringify(itensCopy));
                }}
            >Desfazer</ButtonToast></h3>);

            
    };

    const submitCep = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            cep: { value: string };
          };
        const cep = target.cep.value;
        
        if(cep.length !== 9) {
            return;
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
            const newDataTable = [
                ...dataTable,
                { 'rua': data.logradouro, 'cep': data.cep, 'cidade': data.localidade, 'estado': data.uf, 'complemento': data.complemento}
            ];
            setDataTable(newDataTable)
            sessionStorage.setItem('dataTable', JSON.stringify(newDataTable)) 
        });   
    }


    return (
        <Container>
            <div>
                <p>Pesquisar endereço</p>
                <form 
                onSubmit={submitCep}>
                    <MaskedInput
                        mask={[
                        /\d/,
                        /\d/,
                        /\d/,
                        /\d/,
                        /\d/,
                        "-",
                        /\d/,
                        /\d/,
                        /\d/,
                        ]}
                        name="cep"
                        placeholder="Digite o CEP"
                        value={cep}
                        onChange={handleChange}
                    />
                    <button type="submit">Pesquisar</button>
                </form>
            </div>
            <hr/>
            <table>
                <thead>
                    <tr>
                        <th>Rua</th>
                        <th>Cep</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Complemento</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {                  
                    dataTable.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.rua}</td>
                                <td>{item.cep}</td>
                                <td>{item.cidade}</td>
                                <td>{item.estado}</td>
                                <td>{item.complemento}</td>
                                <td>
                                    <button onClick={e => removeLineTable(index)}>Deletar</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
                <ToastContainer
                    closeButton={false}
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </table>
            
        </Container>
    )
}