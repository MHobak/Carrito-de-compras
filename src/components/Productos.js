import { Component } from "react";
import Producto from './Producto'

const styles = {
    products: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

class Productos extends Component {
    render() {
        const { productos, agregarAlCarro } = this.props

        return (
            <div style={styles.products}>
                {productos.map(producto => 
                    <Producto
                        agregarAlCarro = {agregarAlCarro}
                        key = {producto.name}
                        producto={producto}
                />)}
            </div>
        )
    }
}

export default Productos