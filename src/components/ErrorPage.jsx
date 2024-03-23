function ErrorPage({ error }) {


  return (
    <div className="error_page_container">
      <div className="div_center_column">
        <h1>UPS!</h1>
        <div>
        <div className="error_404_div">
          <p>4</p>
          <p><i class="fa-solid fa-ban"></i></p>
          <p>4</p>
        </div>

        <div className="shadow">

        </div>
        </div>

        <h2>ERROR</h2>
        <p>Ha ocurrido un error inesperado, por favor intentalo de nuevo mas tarde</p>
      </div>

    </div>
  );
}

export default ErrorPage;
