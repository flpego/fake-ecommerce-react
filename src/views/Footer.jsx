import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="footer_grid_container">
                <div>
                    <h3>Contacto</h3>
                    <p>Email: info@miempresa.com</p>
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
                <div className='footer_list_container'>
                    <h3>Redes sociales</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">LinkedIn</a></li>
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