

export const UsePagination = (setPage:React.Dispatch<React.SetStateAction<number>>) => {
            
   const pageSelect = (e:React.MouseEvent<HTMLElement>)=>{
        e.preventDefault()
        const pageSelectNumber = Number(e.currentTarget.innerHTML)
        const pageSelectDirection = e.currentTarget.dataset.direction;
        
        if(pageSelectDirection === 'next'){
          setPage(props => props === 3 ? (props = 3) : props + 1)
          return
        }
        else if(pageSelectDirection === 'prev'){
          setPage(props => props === 1 ? (props = 1) : props - 1)
          return
        }else{
          setPage(pageSelectNumber) 
        }
        
      } 

    return {
      pageSelect
    }
}