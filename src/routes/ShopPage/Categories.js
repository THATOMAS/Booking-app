import Data from "./CategoriesData";

const Categories = () => {
  return (
    <article id="categories-box">
      <div id="categories">
        {Data.map((category, index) => {
          return (
            <div key={index} className={category.cNmae}>
              {category.name}
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Categories;
