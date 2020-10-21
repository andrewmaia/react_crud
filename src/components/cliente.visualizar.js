import React from 'react';
import api from  '../api';


export default class ClienteVisualizar extends React.Component{

    constructor(props){
        super(props);

        this.state={
            cliente:{nome:''},
        }

        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);          
    }


    handleChange (e){
        this.setState({cliente:{nome:e.target.value}});
    }

    async handleSubmit(e){
        e.preventDefault();
        if(this.props.match.params.id){
            await api.patch('/cliente/'+ this.props.match.params.id,this.state.cliente);            
        }
        else{
            await api.post('/cliente',this.state.cliente);
        }

        //Redireciona para a lista mas não recarrega
        this.props.history.push('/cliente');
    }

    //async
    async componentDidMount(){
        if(this.props.match.params.id){
            const response= await api.get('/cliente/' + this.props.match.params.id);
            this.setState({cliente: response.data._source});
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Nome:
                    <input type="text" name="nome" 
                        value={this.state.cliente.nome} onChange={this.handleChange}/>
                </label>
                <button type="submit">Salvar</button>
            </form>
        );
    }
}