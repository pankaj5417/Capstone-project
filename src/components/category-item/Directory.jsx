import { CategoryItem } from "./category-items"
import { categories } from "./categoryData"
import './Directory.scss'

export const Directory=()=>{
    return (
        <div className='directory-container'>
        {categories.map((item)=>(
          <CategoryItem key={item.id} category={item}/>
    
          
        ))}
    
        </div>  
    )
}