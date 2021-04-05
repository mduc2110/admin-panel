import React from 'react'
import './productAdmin.css'
function ProductAdmin() {
    return (
        <>
            <div className="product-admin">
                <table class="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Product Name</th>
                            <th>Import price</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jacob</td>
                            <td>Whey Rule 1</td>
                            <td>{(1233000).toLocaleString("vi")+ " đ"}</td>
                            <td>{(1500000).toLocaleString("vi")+ " đ"}</td>
                            <td>0</td>
                            <td><button>Edit</button><button>Delete</button></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

            <div className="flex">
                <div className="box-color" style={{width: "100%", height: "300px"}}></div>
                <div className="box-color" style={{width: "100%", height: "300px"}}></div>
                <div className="box-color" style={{width: "100%", height: "300px"}}></div>
            </div>
        </>
        
    )
}

export default ProductAdmin
