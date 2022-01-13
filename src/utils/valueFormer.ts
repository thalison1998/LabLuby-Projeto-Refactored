export const valueFormer = (value:number | string, type:string) => {
    if(type === 'money'){
       return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(value))  
    }
    if( type === 'km') {
        return new Intl.NumberFormat().format(Number(value))
    }

    if( type === 'chassi') {
      return String(value).slice(0,3)
    }
    
    if( type === 'cpf') {
    value = String(value).replace(/[^\d]/g, "");
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
}