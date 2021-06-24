import React from 'react';
import ImageThatCanFlip from './ImageThatCanFlip';
import SiteLinks, {Link} from './SiteLinks';
import ProductCard from './ProductCard';

function App() {
  return (
    <>
      <header style={{backgroundColor: "skyblue", display: "flex", alignItems: "center"}}>
        <ImageThatCanFlip height={100} width={100} />
        <Link label="foo" href="bar" />
        <SiteLinks
          direction="row"
          links={[
            {
              label: "About",
              href: "/about"
            }, {
              label: "Contact",
              href: "/contact"
            }, {
              label: "FAQ",
              href: "/faq" 
            }, {
              label: "Home",
              href: "/"
            }
          ]}/>
      </header>
      <main>
        <h2>All Products</h2>
        <section>
          <ProductCard price={10} name="product 1" description="description 1" img=""/>
          <ProductCard price={20} name="product 2" description="description 2" img=""/>
          <ProductCard price={30} name="product 3" description="description 3" img=""/>
          <ProductCard price={40} name="product 4" description="description 4" img=""/>
        </section>
      </main>
      <footer style={{display: "flex"}} >
        <SiteLinks 
          direction="column"
          links={["About", "Contact", "FAQ"]}
        />
        <SiteLinks 
          direction="column"
          links={["Privacy Policy", "Refunds", "Careers"]}
           />
      </footer>
    </>
  )
}

export default App;
