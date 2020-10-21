import React from 'react';
import api from  '../api';

 
export default class ClienteLista extends React.Component{
    constructor(props){
        super(props);

        this.state={
            clientes:[],
        }
        
        this.excluir= this.excluir.bind(this);   
    }

    async componentDidMount(){
        const response= await api.get('/cliente');
        this.setState({clientes: response.data});
    }


    async excluir(index){
        const id = this.state.clientes[index]._id;
        await api.delete('/cliente/'+ id); 
        var clientes = this.state.clientes.slice();
        clientes.splice(index, 1);
        this.setState({clientes: clientes});

    }

    render(){
        return(
            <div>
                <h1>Cliente Lista</h1>
                <ul>
                    {this.state.clientes.map(cliente=>
                        <div key={cliente._id}>
                            <a  href={'cliente/'+ cliente._id}  >
                                <li >
                                    {cliente._source.nome}
                                </li>    
                            </a>
                            <button onClick={()=>this.excluir(this.state.clientes.indexOf(cliente))}>Excluir</button>
                        </div>
                    )}
                </ul>
                <a href="cliente/novo">Novo</a>
            </div> 
        );
    }
}