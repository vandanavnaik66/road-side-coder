
export function cartReducer(state,action){
    console.log(state,action)
  switch (action.type) {
    case "Add_To_Cart" :
     return {...state,cart:[...state.cart,{...action.payload,qty:1}]} 
     case "Remove_From_Cart" :
      return {...state,cart:state.cart.filter((el)=>el?.id !== action.payload.id)}
      case "Change_Cart_Qty" :
        console.log({...state,cart:state.cart.filter((el)=>el?.id === action.payload.id ? el.qty = action.payload.qty : el.qty )})
        return {...state,cart:state.cart.filter((el)=>el?.id === action.payload.id ? el.qty = action.payload.qty : el.qty )}
    default:
        return state;
  }
}

export function productFilterReducer(state,action){
  switch (action.type) {
    case "Filter_By_Sort":
      return {...state,sort:action.payload};
     case "Filter_By_Instock":
      return {...state,inStock:!state.inStock} 
      case "Filter_By_Fastdelivery":
        return {...state,fastDelivery:!state.fastDelivery} 
     case "By_Seach_Query":
      return {...state,searchQuery:action.payload}
      case "Filter_By_Rating" :
        return {...state,ratings:action.payload}
        case "Clear_Filter" :
        return { sort:"",
          inStock:false,
          fastDelivery:false,
          ratings:0,
          searchQuery:""}
          case "Clear_Search_Input" :
            return {...state,searchQuery:""}
  }
}