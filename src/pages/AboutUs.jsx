import BienvenidoImg from '/src/assets/Bienvenidos.jpeg';
import Producto1 from '/src/assets/Producto1.png';
import Producto2 from '/src/assets/producto2.png';
import Mision from '/src/assets/mision.png'
import Vision from '/src/assets/vision.png'

const AboutUs = () => {
    return (
            <section>
                <div className="container my-5 mb-5" >
                    <div className="row g-4 align-items-center" >
                        <div className="col-md-6 text-center">
                            <h2 className="fs-2 fw-bold mb-2 text-center">¡Bienvenidos a Happy Store!</h2>
                            <p className="mb-2">
                                En Happy Store creemos que la felicidad está en los pequeños detalles. Por eso te ofrecemos
                                una gran variedad de productos: ropa con estilo, accesorios únicos, tecnología de vanguardia y mucho más.
                            </p>
                            <p className="fw-medium small">
                                Queremos acompañarte en tu día a día con artículos que se adapten a tu personalidad y necesidades.
                                Explora, descubre y disfruta ¡Por que en Happy Store siempre hay algo para ti!
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src={BienvenidoImg}
                            className="img-fluid rounded shadow"
                            alt="Bienvenidos" />
                        </div>
                    </div>
                </div>
                <br />
                <div className="container my-5">
                    <div className="row align-items-center">
                        <div className="col-md-3 text-center mb-4 md-md-0">
                            <img src={Producto1}
                            className="img-fluid"
                            alt="Producto1"
                            style={{ maxHeight: '150px' }}
                            />
                        </div>

                        <div className="col-md-6 text-center">
                            <h1 className="fw-bold mb-4">SOBRE NOSOTROS</h1>
                            <p>
                                Happy Store nació con una misión clara: ofrecer productos variados, modernos y accesibles que se adapten a todos los estilos de vida. <br/>
                                Desde nuestros inicios, hemos crecido como una tienda integral donde puedes encontrar desde ropa y accesorios hasta
                                tecnología, artículos para el hogar y mucho más. Cada artículo en nuestro catálogo ha sido seleccionado pensando en ti: en tu comodidad,
                                en tu estilo, y en las pequeñas cosas que hacen tu día más feliz. <br/>
                                Nos esforzamos por brindar una experiencia de compra confiable, sencilla y placentera. En Happy Store, no solo vendemos
                                productos: construimos momentos de alegría.
                            </p>
                        </div>
                        <div className="col-md-3 text-center mb-4 md-md-0">
                            <img src={Producto2}
                            className="img-fluid"
                            alt="Producto1"
                            style={{ maxHeight: '150px' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="container my-5 py-5">
                    <div className="text-center mb-4">
                        <h2 className="fw-bold">NUESTRO COMPROMISO</h2>
                        <p className='mx-auto' style={{ maxWidth: '800px'}}>
                            En Happy Store creemos que la felicidad se encuentra en los pequeños detalles. Desde 
                            ropa y accesorios hasta tecnología y artículos para el hogar, cada producto ha sido cuidadosamente 
                            seleccionado para ofrecerte vareiedad, estilo y comodidad en un solo.
                        </p>
                    </div>
                    <div className="row text-center my-4">
                        <div className="col-md-6 mb-4">
                            <div className="p-4 border rounded-4 shadow-lgh-100 text-white" style={{background: "#E53935"}}>
                                <h5 className="fw-bold">Misión</h5>
                                <p>
                                    Brindar una experiencia de compra única a través de una amplia variedad de productos de 
                                    calidad, a precios accesibles, fomentando la satisfacción del cliente y el bienestar de cada hogar.
                                </p>
                                    <img src={Mision} alt="Mision" style={{ maxHeight: '100px' }} />
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="p-4 border rounded-4 shadow-lg h-100 text-white" style={{background: "#E53935"}}>
                                <h5 className="fw-bold">Visión</h5>
                                <p>
                                    Convertirnos en la tienda virtual preferida en el Perú por nuestra diversidad de productos y compromiso 
                                    con la felicidad de nuestros clientes.
                                </p>
                                    <img src={Vision} alt="Vision" style={{ maxHeight: '100px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default AboutUs;