import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="footer_grid_container">
                <div>
                    <div className="">
                        <p to="/" className="nav_logo">FakE-Market</p>
                    </div>
                    <h3>Contacto</h3>
                    <p>Email: famarket@fakemarket.com</p>
                    <p>Teléfono: +1234567890</p>
                </div>
                <div className='footer_list_container'>
                    <h3>Enlaces útiles</h3>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
                <div className='footer_list_container footer_icons_container'>
                    <h3>Redes sociales</h3>
                    <ul className='footer_icons_container'>
                        <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-square-instagram"></i> </a></li>
                        <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>

            <div>
                <p>Derechos de autor &copy; 2024 <span className='span_underline'>FakE-Market</span>. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer