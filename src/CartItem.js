import React from "react";

const CartItem = (props) => {

    // increaseQuantity = () => {
    //     // setState form 1 -> Ex for title change, use this
    //     // this.setState({
    //     //     qty: this.state.qty + 1
    //     // });

    //     // setState form 2 -> if prevState required use this
    //     this.setState((prevState) => {
    //         return{
    //             qty: prevState.qty + 1
    //         }
    //     });
    // }

    const {price, title, qty} = props.product;
    const {
        product, 
        onIncreaseQuantity, 
        onDecreaseQuantity, 
        onDeleteProduct
    } = props;
    return (
        <div className = "cart-item">
            <div className="left-block">
                <img style={styles.image} src={product.img} />
            </div>
            <div className="right-block">
                <div style={ {fontSize: 25} } >{title}</div>
                <div style={ {color: '#777'} }>Rs {price}</div>
                <div style={ {color: '#777'} }>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img 
                     alt="increase"
                     className="action-icons"
                     src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1636445190~hmac=0bd7543048df3d32d1e0158941d2ff7a"
                      onClick={() => onIncreaseQuantity(product)}
                      />
                    <img
                      alt="decrease"
                      className="action-icons"
                      src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740679.png?token=exp=1636445262~hmac=222dd56f175cb5ad263611d11efdac8d"
                      onClick={() => onDecreaseQuantity(product)}
                     />
                    <img
                     alt="delete" 
                     className="action-icons" 
                     src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                     onClick={() => onDeleteProduct(product.id)}
                     />
                </div>
            </div>
        </div>
    );
    
}

const styles = {
    image: {
        height: 140,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;