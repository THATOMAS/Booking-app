import React from 'react'
import data from "./CategoriesData"


const Categories = ({filterItems})=>{


	return(<article id='categories-box'> 
			<div id='categories'>{
				data.map((category,index)=>{
					return(<div 
						key={category.id} 
						className={category.cName}
						onClick={()=>filterItems(category.name)}
						>{category.name}
					</div>
						)
				})
			}
			</div>
		</article>)
}

export default Categories;