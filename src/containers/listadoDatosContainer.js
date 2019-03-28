import React, {Component} from 'react';
     
import ListadoDatos from '../components/listadoDatos';

class ListadoDatosContainer extends Component {

    constructor(props) {
        super(props);

        this.state={

            datos: [],
        };

    }

    render() {
        
        const { datos } = this.state;

        return(
            <ListadoDatos
                datos={datos}
            />
        )
    }

    componentDidMount(){
        fetch ('https://jsonplaceholder.typicode.com/posts')
        
        .then((response) => {
            return response.json();
        })

        .then((datos) => {
            //aqui estan mis datos
            this.setState({

                datos:datos,

            })
        })
    }


}



export default ListadoDatosContainer;