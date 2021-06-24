import { Link } from "./SiteLinks"
import ImageThatCanFlip from "./ImageThatCanFlip"

// function which is a component
// Capitilized name
// Returns JSX
export default function ProductCard({name, description, price}) {
  return (
    <article>
      <h5>{name}</h5>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <ImageThatCanFlip height={1000} width={1000} />
      <Link href={`/products/${name}`} label="Show More"/>
    </article>
  )
}

// normal function
function addsTwoNumbers(a,b) {
  return a+b
}