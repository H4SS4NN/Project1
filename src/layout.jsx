import { Outlet, Link } from "react-router-dom";

 

const Layout = () => {

  return (

    <>

      <nav className="fixed top-12 left-12">
        {console.log('heyy')}

        <ul className="flex gap-4">

          <li>

            <Link to="/">Home</Link>

          </li>

          <li>

            <Link to="counter">Counter</Link>

          </li>
          <li>

                <Link to="quiz">Quiz</Link>

        </li>

        <li>
        <Link to="shop">Shop</Link>
        </li>
         
        

        </ul>

      </nav>

 

      <Outlet />

    </>

  )

};

 

export default Layout;