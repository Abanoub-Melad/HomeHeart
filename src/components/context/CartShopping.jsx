import { createContext, useContext, useEffect, useState } from "react";
import { useGetProductByNameQuery } from "../../Rudex/Product";


const CreateStore = createContext({})


function CartShopping({ children }) {
    const [gitID, setGitID] = useState();
    var { data } = useGetProductByNameQuery(`products`)
    console.log("Product", data)
    const [idData, setIdData] = useState([]);
    const [renderData, setRenderData] = useState([]);
    var [valueSearch, setValueSearch] = useState('');
    var [allProducts, setAllProducts] = useState();
    const [renderCards, setRenderCards] = useState();
    // const [quantity11, setQuantity11] = useState();


    function searchProduct(e) {
        setValueSearch(e.target.value)
        const result = data.filter((one) => one.title.toLowerCase().includes(e.target.value))
        setRenderCards(result)
    }

    // const clearCart = () => {
    //     setCartItems([]);
    //   };

    //   const getCartTotal = () => {
    //     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    //   };

    //   useEffect(() => {
    //     localStorage.setItem("cartItems", JSON.stringify(cartItems));
    //   }, [cartItems]);

    //   useEffect(() => {
    //     const cartItems = localStorage.getItem("cartItems");
    //     if (cartItems) {
    //       setCartItems(JSON.parse(cartItems));
    //     }
    //   }, []);
    useEffect(() => {
        async function getAllProducts() {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${gitID}` )
                const req = await res.json();
                setIdData(req)
                console.log("aba",req)

            } catch (error) {
                console.log(error);
            }
        }
        getAllProducts()
    }, [gitID])



    // const getItemQuantity = (gitID) => {
    //     // renderData.find((item) => item.id ===gitID )?.quantity11 || 0;
    //     renderData.find((item) => item.id == gitID )?.Number(quantity11) || 0;

    // };
  

    const increaseCartQuantity = (gitID) => {
        const alreadyCourses = renderData.find(item => item.id ==  gitID );
        if (alreadyCourses) {
            const latestCartUpdate = renderData.map(item => {
                item = item.id ==  gitID ? {
                    ...item, quantity: item.quantity + 1
                } : item;
                return item;
            });
            setRenderData(latestCartUpdate);
        } else {
            // not arr
            setRenderData([...renderData, { ...idData, gitID, quantity: 1 }]);
        }
    };
    // console.log('quantity11vvvvvvvvvvvvvvvvvvvvvv',renderData);
    // console.log('quantity11vvvvvvvvvvvvvvvvvvvvvv',renderData);



    const decreaseCartQuantity = (gitID) => {
        if (renderData.find((item) => item.id ==  gitID).quantity == 1) {
            const deleteItem = renderData.filter((item) => item.id ==  gitID)
            return setRenderData(deleteItem)
        } else {
                const latestCartUpdate = renderData.map(item => {
                    item = item.id ==  gitID ? {
                        ...item, quantity: item.quantity - 1
                    } : item;
                    return item;
                });
                setRenderData(latestCartUpdate);
            }
    };



    function removeFromCart(gitID) {
        const deleteProduct = renderData.filter((item) => item.id !== gitID);
        setRenderData(deleteProduct);
    }

    // const decreaseCartQuantity = (gitID) => {
    //     setRenderData((currItems) => {
    //         // if (currItems.find((item) => item.id == gitID)?.quantity === 1) {
    //         if (currItems.find((item) => item.id == gitID) == null) {
    //             return renderData.filter((item) => item.id !== gitID);
    //         } else {
    //             return currItems.map((item) => {
    //                 if (item.id == gitID) {
    //                     return { ...item, quantity: item.quantity - 1 };
    //                 } else {
    //                     return item;
    //                 }
    //             });
    //         }
    //     });
    // };

    return (
        <CreateStore.Provider
            value={{
                gitID, setGitID,
                renderData,
                removeFromCart,
                increaseCartQuantity,
                decreaseCartQuantity,
                valueSearch,
                setValueSearch,
                setRenderCards,
                renderCards,
                setAllProducts,
                searchProduct,
                allProducts
                // getItemQuantity,
            }}
        >
            {children}
        </CreateStore.Provider>
    )
}

export default CartShopping

export function useMyStore() {
    return useContext(CreateStore)
}


