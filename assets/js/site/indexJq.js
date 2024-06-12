$(function () {
  //#region  Variables
  let carrerasMateriasxd = [
    {
      carrera: "Tecnologo Desarrollo de Software",
      materias: [
        {
          nombre: "Programación I",
          horarios: [
            "Lu 08 - 10",
            "Ma 08 - 10",
            "Mi 08 - 10",
            "Ju 08 - 10",
            "Vi 08 - 10",
            "Sa 08 - 10",
          ],
        },
        {
          nombre: "Estructuras de Datos",
          horarios: [
            "Lu 10 - 12",
            "Ma 10 - 12",
            "Mi 10 - 12",
            "Ju 10 - 12",
            "Vi 10 - 12",
            "Sa 10 - 12",
          ],
        },
        {
          nombre: "Ingeniería de Requisitos",
          horarios: [
            "Lu 12 - 14",
            "Ma 12 - 14",
            "Mi 12 - 14",
            "Ju 12 - 14",
            "Vi 12 - 14",
            "Sa 12 - 14",
          ],
        },
        {
          nombre: "Bases de Datos",
          horarios: [
            "Lu 14 - 16",
            "Ma 14 - 16",
            "Mi 14 - 16",
            "Ju 14 - 16",
            "Vi 14 - 16",
            "Sa 14 - 16",
          ],
        },
        {
          nombre: "Desarrollo de Aplicaciones Web",
          horarios: [
            "Lu 16 - 18",
            "Ma 16 - 18",
            "Mi 16 - 18",
            "Ju 16 - 18",
            "Vi 16 - 18",
            "Sa 16 - 18",
          ],
        },
      ],
    },
    {
      carrera: "Tecnologo Redes",
      materias: [
        {
          nombre: "Fundamentos de Redes",
          horarios: [
            "Lu 08 - 10",
            "Ma 08 - 10",
            "Mi 08 - 10",
            "Ju 08 - 10",
            "Vi 08 - 10",
            "Sa 08 - 10",
          ],
        },
        {
          nombre: "Administración de Servidores",
          horarios: [
            "Lu 10- 12",
            "Ma 10- 12",
            "Mi 10- 12",
            "Ju 10- 12",
            "Vi 10- 12",
            "Sa 08- 10",
          ],
        },
        {
          nombre: "Seguridad en Redes",
          horarios: [
            "Lu 12 - 14",
            "Ma 12 - 14",
            "Mi 12 - 14",
            "Ju 12 - 14",
            "Vi 12 - 14",
            "Sa 08 - 10",
          ],
        },
        {
          nombre: "Protocolos de Enrutamiento",
          horarios: [
            "Lu 14- 16",
            "Ma 14- 16",
            "Mi 14- 16",
            "Ju 14- 16",
            "Vi 14- 16",
            "Sa 08- 10",
          ],
        },
        {
          nombre: "Telecomunicaciones",
          horarios: [
            "Lu 16 - 18",
            "Ma 16 - 18",
            "Mi 16 - 18",
            "Ju 16 - 18",
            "Vi 16 - 18",
            "Sa 08 - 10",
          ],
        },
      ],
    },
    {
      carrera: "Tecnologo Multimedia ",
      materias: [
        {
          nombre: "Diseño Gráfico",
          horarios: [
            "Lu 08 - 10",
            "Ma 08 - 10",
            "Mi 08 - 10",
            "Ju 08 - 10",
            "Vi 08 - 10",
            "Sa 08 - 10",
          ],
        },
        {
          nombre: "Animación 2D",
          horarios: [
            "Lu 10 - 12",
            "Ma 10 - 12",
            "Mi 10 - 12",
            "Ju 10 - 12",
            "Vi 10 - 12",
            "Sa 08 - 10",
          ],
        },
        {
          nombre: "Edición de Video",
          horarios: [
            "Lu 12 - 14",
            "Ma 12 - 14",
            "Mi 12 - 14",
            "Ju 12 - 14",
            "Vi 12 - 14",
            "Sa 08 - 10",
          ],
        },
        {
          nombre: "Producción Multimedia",
          horarios: [
            "Lu 14 - 16",
            "Ma 14 - 16",
            "Mi 14 - 16",
            "Ju 14 - 16",
            "Vi 14 - 16",
            "Sa 08 - 10",
          ],
        },
        {
          nombre: "Diseño de Interfaces",
          horarios: [
            "Lu 16 - 18",
            "Ma 16 - 18",
            "Mi 16 - 18",
            "Ju 16 - 18",
            "Vi 16 - 18",
            "Sa 08 - 10",
          ],
        },
      ],
    },
    {
      carrera: "Tecnologo Mecatrónica",
      materias: [
        {
          nombre: "Circuitos Eléctricos",
          horarios: [
            "Lu 08 - 10",
            "Ma 08 - 10",
            "Mi 08 - 10",
            "Ju 08 - 10",
            "Vi 08 - 10",
            "Sa 08 - 10",
          ],
        },
        {
          nombre: "Electrónica Digital",
          horarios: [
            "Lu 10 - 12",
            "Ma 10 - 12",
            "Mi 10 - 12",
            "Ju 10 - 12",
            "Vi 10 - 12",
            "Sa 08 - 10",
          ],
        },
        {
          nombre: "Sistemas de Control",
          horarios: [
            "Lu 12 - 14",
            "Ma 12 - 14",
            "Mi 12 - 14",
            "Ju 12 - 14",
            "Vi 12 - 14",
            "Sa 08 - 10",
          ],
        },
        {
          nombre: "Robótica",
          horarios: [
            "Lu 14 - 16",
            "Ma 14 - 16",
            "Mi 14 - 16",
            "Ju 14 - 16",
            "Vi 14 - 16",
            "Sa 08 - 10",
          ],
        },
        {
          nombre: "Mecanismos",
          horarios: [
            "Lu 16 - 18",
            "Ma 16 - 18",
            "Mi 16 - 18",
            "Ju 16 - 18",
            "Vi 16 - 18",
            "Sa 08 - 10",
          ],
        },
      ],
    },
    {
      carrera: "Tecnologo Ciencia de Datos",
      materias: [
        {
          nombre: "Estadística",
          horarios: [
            "Lu 08 - 10",
            "Ma 08 - 10",
            "Mi 08 - 10",
            "Ju 08 - 10",
            "Vi 08 - 10",
            "Sa 08 - 10",
          ],
        },
        {
          nombre: "Minería de Datos",
          horarios: [
            "Lu 10 - 12",
            "Ma 10 - 12",
            "Mi 10 - 12",
            "Ju 10 - 12",
            "Vi 10 - 12",
            "Sa 08 - 10",
          ],
        },
        {
          nombre: "Aprendizaje Automático",
          horarios: [
            "Lu 12 - 14",
            "Ma 12 - 14",
            "Mi 12 - 14",
            "Ju 12 - 14",
            "Vi 12 - 14",
            "Sa 08 - 10",
          ],
        },
        {
          nombre: "Visualización de Datos",
          horarios: [
            "Lu 14 - 16",
            "Ma 14 - 16",
            "Mi 14 - 16",
            "Ju 14 - 16",
            "Vi 14 - 16",
            "Sa 08 - 10",
          ],
        },
        {
          nombre: "Big Data",
          horarios: [
            "Lu 16 - 18",
            "Ma 16 - 18",
            "Mi 16 - 18",
            "Ju 16 - 18",
            "Vi 16 - 18",
            "Sa 08 - 10",
          ],
        },
      ],
    },
  ];
  let isValid = true;
  let valueName = " ";
  let valueProvincia = " ";
  let valueCuidad = " ";
  let valueSector = " ";
  let valueCalle = " ";
  let valueCarrera = " ";

  let materia1Check = " ";
  let materia2Check = " ";
  let materia3Check = " ";
  let materia4Check = " ";
  let materia5Check = " ";

  let Materia1 = "";
  let Materia2 = "";
  let Materia3 = "";
  let Materia4 = "";
  let Materia5 = "";

  carreraCurrent = "";
  //#endregion

  GeneraHTMLDatosPersonales();

  //#region  BtnClick
  $("#ContenedorHTMLDinamico").on("click", "#btn-registrar", function () {
    if (ValidatePersonalData()) {
      GeneraHTMLSeleccionMaterias();
      DevolverDatosMaterias();
      alert("Registration successful!"); // Add a message here
    }
  });
  $("#ContenedorHTMLDinamico").on("click", "#btn-limpiar", function () {
    LimpiarDatosPersonales();
  });
  $("#ContenedorHTMLDinamico").on("click", "#btn-AceptarMateria", function () {
    //FUNCIONA!!!
    if (ValidateMaterias()) {
      GeneraHTMLDatosConfirmacion();
    } else {
      alert("Vacio!");
    }
  });
  $("#ContenedorHTMLDinamico").on("click", "#btn-limpiarMateria", function () {
    //FUNCIONA!!!
    LimpiarMateria();
  });
  $("#ContenedorHTMLDinamico").on("click", "#btn-atras", function () {
    //FUNCIONA!!!
    GeneraHTMLDatosPersonales();
    DevolverDatosPersonales();
  });
  $("#ContenedorHTMLDinamico").on("click", "#btn-Confirmar", function () {
    //FUNCIONA!!!
    alert("Es todo jefe");
  });
  $("#ContenedorHTMLDinamico").on("click", "#btn-AtrasConfirmar", function () {
    //FUNCIONA!!!
    GeneraHTMLSeleccionMaterias();
    DevolverDatosMaterias();

    alert("Funciona");
  });
  //#endregion

  //#region Funciones
  function GeneraHTMLSeleccionMaterias() {
    const ContenidoHTMLMateria = `
    <div class="container mt-5">
        <div class="row">
            <div class="col-6 offset-3 agregadoDinamicamente">
                <div class="card shadow-lg">
                    <div class="card-header bg-primary text-light text-center">
                        <h5 class="mb-0">Selección de materias</h5>
                    </div>
                    <div class="card-body">
                        <div id="materiasDinamicas" class="accordion" id="accordionExample">
                            <!-- Materia 1 -->
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link" type="button" data-toggle="collapse"
                                            data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                              ${carrerasMateriasxd[carreraCurrent].materias[0].nombre}
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                    data-parent="#accordionExample">
                                    <div class="card-body">
                                        <form id="materia1">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia1" type="radio" id="materia1-1"
                                                    name="materia1" value="${carrerasMateriasxd[carreraCurrent].materias[0].horarios[0]}">
                                                <label class="form-check-label" for="materia1-1">
                                                ${carrerasMateriasxd[carreraCurrent].materias[0].horarios[0]}
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia1" type="radio" id="materia1-2"
                                                    name="materia1" value="${carrerasMateriasxd[carreraCurrent].materias[0].horarios[1]}">
                                                <label class="form-check-label" for="materia1-2">
                                                ${carrerasMateriasxd[carreraCurrent].materias[0].horarios[1]}
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia1" type="radio" id="materia1-3"
                                                    name="materia1" value="${carrerasMateriasxd[carreraCurrent].materias[0].horarios[2]}">
                                                <label class="form-check-label" for="materia1-3">
                                                ${carrerasMateriasxd[carreraCurrent].materias[0].horarios[2]}
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia1" type="radio" id="materia1-4"
                                                    name="materia1" value="${carrerasMateriasxd[carreraCurrent].materias[0].horarios[3]}">
                                                <label class="form-check-label" for="materia1-4">
                                                ${carrerasMateriasxd[carreraCurrent].materias[0].horarios[3]}
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia1" type="radio" id="materia1-5"
                                                    name="materia1" value="${carrerasMateriasxd[carreraCurrent].materias[0].horarios[4]}">
                                                <label class="form-check-label" for="materia1-5">
                                                ${carrerasMateriasxd[carreraCurrent].materias[0].horarios[4]}
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- Materia 2 -->
                            <div class="card">
                                <div class="card-header" id="headingTwo">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link" type="button" data-toggle="collapse"
                                            data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                            ${carrerasMateriasxd[carreraCurrent].materias[1].nombre}

                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseTwo" class=" collapse show" aria-labelledby="headingTwo"
                                    data-parent="#accordionExample">
                                    <div class="card-body">
                                        <form id="materia2">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" id="materia2-1"
                                                    name="materia2" value="${carrerasMateriasxd[carreraCurrent].materias[1].horarios[0]}">
                                                <label class="form-check-label" for="materia2-1">
                                                ${carrerasMateriasxd[carreraCurrent].materias[1].horarios[0]}
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia2" type="radio" id="materia2-2"
                                                    name="materia2" value="${carrerasMateriasxd[carreraCurrent].materias[1].horarios[1]}">
                                                <label class="form-check-label" for="materia2-2">
                                                ${carrerasMateriasxd[carreraCurrent].materias[1].horarios[1]}
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia2" type="radio" id="materia2-3"
                                                    name="materia2" value="${carrerasMateriasxd[carreraCurrent].materias[1].horarios[2]}">
                                                <label class="form-check-label" for="materia2-3">
                                                ${carrerasMateriasxd[carreraCurrent].materias[1].horarios[2]}
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia2" type="radio" id="materia2-4"
                                                    name="materia2" value="${carrerasMateriasxd[carreraCurrent].materias[1].horarios[3]}">
                                                <label class="form-check-label" for="materia2-4">
                                                ${carrerasMateriasxd[carreraCurrent].materias[1].horarios[3]}
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia2" type="radio" id="materia2-5"
                                                    name="materia2" value="${carrerasMateriasxd[carreraCurrent].materias[1].horarios[4]}">
                                                <label class="form-check-label" for="materia2-5">
                                                ${carrerasMateriasxd[carreraCurrent].materias[1].horarios[4]}
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- Materia 3 -->
                            <div class="card">
                                <div class="card-header" id="headingThree">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link" type="button" data-toggle="collapse"
                                            data-target="#collapseThree" aria-expanded="true"
                                            aria-controls="collapseThree">
                                            ${carrerasMateriasxd[carreraCurrent].materias[2].nombre}
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseThree" class="collapse show" aria-labelledby="headingThree"
                                    data-parent="#accordionExample">
                                    <div class="card-body">
                                        <form id="materia3">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia3" type="radio" id="materia3-1"
                                                    name="materia3" value="${carrerasMateriasxd[carreraCurrent].materias[2].horarios[0]}">
                                                <label class="form-check-label" for="materia3-1">
                                                ${carrerasMateriasxd[carreraCurrent].materias[2].horarios[0]}
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia3" type="radio" id="materia3-2"
                                                    name="materia3" value="${carrerasMateriasxd[carreraCurrent].materias[2].horarios[1]}">
                                                <label class="form-check-label" for="materia3-2">
                                                ${carrerasMateriasxd[carreraCurrent].materias[2].horarios[1]}
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia3" type="radio" id="materia3-3"
                                                    name="materia3" value="${carrerasMateriasxd[carreraCurrent].materias[2].horarios[2]}">
                                                <label class="form-check-label" for="materia3-3">
                                                ${carrerasMateriasxd[carreraCurrent].materias[2].horarios[2]}
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia3" type="radio" id="materia3-4"
                                                    name="materia3" value="${carrerasMateriasxd[carreraCurrent].materias[2].horarios[3]}">
                                                <label class="form-check-label" for="materia3-4">
                                                ${carrerasMateriasxd[carreraCurrent].materias[2].horarios[3]}
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia3" type="radio" id="materia3-5"
                                                    name="materia3" value="${carrerasMateriasxd[carreraCurrent].materias[2].horarios[4]}">
                                                <label class="form-check-label" for="materia3-5">
                                                ${carrerasMateriasxd[carreraCurrent].materias[2].horarios[4]}
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- Materia 4 -->
                            <div class="card">
                                <div class="card-header" id="headingFour">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link" type="button" data-toggle="collapse"
                                            data-target="#collapseFour" aria-expanded="true"
                                            aria-controls="collapseFour">
                                           ${carrerasMateriasxd[carreraCurrent].materias[3].nombre}
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseFour" class="collapse show" aria-labelledby="headingFour"
                                    data-parent="#accordionExample">
                                    <div class="card-body">
                                        <form id="materia4">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia4" type="radio" id="materia4-1"
                                                    name="materia4" value="${carrerasMateriasxd[carreraCurrent].materias[3].horarios[0]}">
                                                <label class="form-check-label" for="materia4-1">
                                                ${carrerasMateriasxd[carreraCurrent].materias[3].horarios[0]}
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia4" type="radio" id="materia4-2"
                                                    name="materia4" value="${carrerasMateriasxd[carreraCurrent].materias[3].horarios[1]}">
                                                <label class="form-check-label" for="materia4-2">
                                                ${carrerasMateriasxd[carreraCurrent].materias[3].horarios[1]}
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia4" type="radio" id="materia4-3"
                                                    name="materia4" value="${carrerasMateriasxd[carreraCurrent].materias[3].horarios[2]}">
                                                <label class="form-check-label" for="materia4-3">
                                                ${carrerasMateriasxd[carreraCurrent].materias[3].horarios[2]}
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia4" type="radio" id="materia4-4"
                                                    name="materia4" value="${carrerasMateriasxd[carreraCurrent].materias[3].horarios[3]}">
                                                <label class="form-check-label" for="materia4-4">
                                                ${carrerasMateriasxd[carreraCurrent].materias[3].horarios[3]}
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia4" type="radio" id="materia4-5"
                                                    name="materia4" value="${carrerasMateriasxd[carreraCurrent].materias[3].horarios[4]}">
                                                <label class="form-check-label" for="materia4-5">
                                                ${carrerasMateriasxd[carreraCurrent].materias[3].horarios[4]}
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- Materia 5 -->
                            <div class="card">
                                <div class="card-header" id="headingFive">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link" type="button" data-toggle="collapse"
                                            data-target="#collapseFive" aria-expanded="true"
                                            aria-controls="collapseFive">
                                           ${carrerasMateriasxd[carreraCurrent].materias[4].nombre}
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseFive" class="collapse show" aria-labelledby="headingFive"
                                    data-parent="#accordionExample">
                                    <div class="card-body">
                                        <form id="materia5">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia5" type="radio" id="materia5-1"
                                                    name="materia5" value="${carrerasMateriasxd[carreraCurrent].materias[4].horarios[0]}">
                                                <label class="form-check-label" for="materia5-1">
                                                ${carrerasMateriasxd[carreraCurrent].materias[4].horarios[0]}
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia5" type="radio" id="materia5-2"
                                                    name="materia5" value="${carrerasMateriasxd[carreraCurrent].materias[4].horarios[1]}">
                                                <label class="form-check-label" for="materia5-2">
                                                ${carrerasMateriasxd[carreraCurrent].materias[4].horarios[1]}
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia5" type="radio" id="materia5-3"
                                                    name="materia5" value="${carrerasMateriasxd[carreraCurrent].materias[4].horarios[2]}">
                                                <label class="form-check-label" for="materia5-3">
                                                ${carrerasMateriasxd[carreraCurrent].materias[4].horarios[2]}
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia5" type="radio" id="materia5-4"
                                                    name="materia5" value="${carrerasMateriasxd[carreraCurrent].materias[4].horarios[3]}">
                                                <label class="form-check-label" for="materia5-4">
                                                ${carrerasMateriasxd[carreraCurrent].materias[4].horarios[3]}
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input materia5" type="radio" id="materia5-5"
                                                    name="materia5" value="${carrerasMateriasxd[carreraCurrent].materias[4].horarios[4]}">
                                                <label class="form-check-label" for="materia5-5">
                                                ${carrerasMateriasxd[carreraCurrent].materias[4].horarios[4]}
                                                </label>
                                            </div>
                                        </form>
                                        <div class="mt-3">
                                        <button type="button" class="btn btn-outline-warning float-end" id="btn-limpiarMateria">Limpiar</button>
                                            <button type="button" class="btn btn-outline-info float-end me-2" id="btn-atras">Atras</button>
                                            <button type="button" class="btn btn-outline-primary float-end me-2" id="btn-AceptarMateria">Aceptar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

    $("#ContenedorHTMLDinamico").html(ContenidoHTMLMateria);
  }
  function GeneraHTMLDatosPersonales() {
    const ContenidoHTMLPersonal = `
    <div class="col-6 offset-3 agregadoDinamicamente">
                <div class="card shadow-lg">
                    <div class="card-header bg-primary text-light text-center">
                        <h5 class="mb-0">Datos personales</h5>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label for="name">Nombre:</label>
                                <input type="text" class="form-control" id="name">
                            </div>
                            <div class="form-group">
                                <label for="Provincia">Provincia:</label>
                                <input type="text" class="form-control" id="Provincia">
                            </div>
                            <div class="form-group">
                                <label for="Cuidad">Cuidad:</label>
                                <input type="text" class="form-control" id="Cuidad">
                            </div>
                            <div class="form-group">
                                <label for="Sector">Sector:</label>
                                <input type="text" class="form-control" id="Sector">
                            </div>
                            <div class="form-group">
                                <label for="Calle">Calle:</label>
                                <input type="text" class="form-control" id="Calle">
                            </div>
                            <div class="form-group">
                                <label for="Carrera">Carrera:</label>
                                <select class="form-control" id="Carrera">
                                    <option value="">Seleccione una opción</option>
                                    // console.log(carrerasMateriasxd[1].materias[1].horarios[0]);
                                    <option value="0">${carrerasMateriasxd[0].carrera}</option>
                                    <option value="1">${carrerasMateriasxd[1].carrera}</option>
                                    <option value="2">${carrerasMateriasxd[2].carrera}</option>
                                    <option value="3">${carrerasMateriasxd[3].carrera}</option>
                                    <option value="4">${carrerasMateriasxd[4].carrera}</option>

                                </select>
                            </div>
                            <div class="mt-3">
                                <button type="button" class="btn btn-outline-warning float-end" id="btn-limpiar">Limpiar</button>
                                <button type="button" class="btn btn-outline-primary float-end me-2" id="btn-registrar">Registrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    `;
    $("#ContenedorHTMLDinamico").html(ContenidoHTMLPersonal);
  }
  function GeneraHTMLDatosConfirmacion() {
    ObtenerMaterias();
    const ContenidoHTMLConfirmacion = `
              <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">
                <div class="card shadow-lg">
                    <div class="card-header bg-success text-light text-center">
                        <h5 class="mb-0">Confirmación</h5>
                    </div>
                    <div class="card-body">
                        <div id="materiasDinamicas" class="accordion" id="accordionExample">
                            <div class="card">
                                <div class="card-header bg-primary text-light text-center">
                                    <h5 class="mb-0">Datos básicos</h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Nombre: ${valueName}</li>
                                    <li class="list-group-item">Provincia: ${valueProvincia}</li>
                                    <li class="list-group-item">Ciudad: ${valueCuidad}</li>
                                    <li class="list-group-item">Sector: ${valueSector}</li>
                                    <li class="list-group-item">Calle: ${valueCalle}</li>
                                    <li class="list-group-item">Carrera: ${
                                      carrerasMateriasxd[carreraCurrent].carrera
                                    }</li>
                                </ul>
                            </div>
                        </div>
                        <div id="HorarioCard" class="mt-4">
                            <div class="card">
                                <div class="card-header bg-primary text-light text-center">
                                    <h5 class="mb-0">Horario</h5>
                                </div>
                                <table class="table table-bordered table-striped">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">Materia</th>
                                            <th scope="col">Lunes</th>
                                            <th scope="col">Martes</th>
                                            <th scope="col">Miércoles</th>
                                            <th scope="col">Jueves</th>
                                            <th scope="col">Viernes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">${Materia1}</th>
                                            <td>
                                            ${DiaSeleccionadoLunes(
                                              materia1Check
                                            )}
                                            </td>
                                            <td>
                                            ${DiaSeleccionadoMarte(
                                              materia1Check
                                            )}
                                            </td>
                                            <td>${DiaSeleccionadoMiercoles(
                                              materia1Check
                                            )}</td>
                                            <td>${DiaSeleccionadoJueves(
                                              materia1Check
                                            )}</td>
                                            <td>${DiaSeleccionadoViernes(
                                              materia1Check
                                            )}</td>
                                        </tr>
                                         <tr>
                                            <th scope="row">${Materia2}</th>
                                            <td>
                                            ${DiaSeleccionadoLunes(
                                              materia2Check
                                            )}
                                            </td>
                                            <td>
                                            ${DiaSeleccionadoMarte(
                                              materia2Check
                                            )}
                                            </td>
                                            <td>${DiaSeleccionadoMiercoles(
                                              materia2Check
                                            )}</td>
                                            <td>${DiaSeleccionadoJueves(
                                              materia2Check
                                            )}</td>
                                            <td>${DiaSeleccionadoViernes(
                                              materia2Check
                                            )}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">${Materia3}</th>
                                            <td>
                                            ${DiaSeleccionadoLunes(
                                              materia3Check
                                            )}
                                            </td>
                                            <td>
                                            ${DiaSeleccionadoMarte(
                                              materia3Check
                                            )}
                                            </td>
                                            <td>${DiaSeleccionadoMiercoles(
                                              materia3Check
                                            )}</td>
                                            <td>${DiaSeleccionadoJueves(
                                              materia3Check
                                            )}</td>
                                            <td>${DiaSeleccionadoViernes(
                                              materia3Check
                                            )}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">${Materia4}</th>
                                            <td>
                                            ${DiaSeleccionadoLunes(
                                              materia4Check
                                            )}
                                            </td>
                                            <td>
                                            ${DiaSeleccionadoMarte(
                                              materia4Check
                                            )}
                                            </td>
                                            <td>${DiaSeleccionadoMiercoles(
                                              materia4Check
                                            )}</td>
                                            <td>${DiaSeleccionadoJueves(
                                              materia4Check
                                            )}</td>
                                            <td>${DiaSeleccionadoViernes(
                                              materia4Check
                                            )}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">${Materia5}</th>
                                            <td>
                                            ${DiaSeleccionadoLunes(
                                              materia5Check
                                            )}
                                            </td>
                                            <td>
                                            ${DiaSeleccionadoMarte(
                                              materia5Check
                                            )}
                                            </td>
                                            <td>${DiaSeleccionadoMiercoles(
                                              materia5Check
                                            )}</td>
                                            <td>${DiaSeleccionadoJueves(
                                              materia5Check
                                            )}</td>
                                            <td>${DiaSeleccionadoViernes(
                                              materia5Check
                                            )}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="mt-3 d-flex justify-content-end">
                                <button type="button" class="btn btn-outline-warning mr-2 me-2"
                                    id="btn-AtrasConfirmar">Atrás</button>
                                <button type="button" class="btn btn-outline-primary" id="btn-Confirmar">Confirmar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
          `;

    $("#ContenedorHTMLDinamico").html(ContenidoHTMLConfirmacion);
  }
  function ValidateMaterias() {
    let isValid = true;

    materia1Check = $('input[name="materia1"]:checked').val();
    materia2Check = $('input[name="materia2"]:checked').val();
    materia3Check = $('input[name="materia3"]:checked').val();
    materia4Check = $('input[name="materia4"]:checked').val();
    materia5Check = $('input[name="materia5"]:checked').val();

    // Mostrar los valores seleccionados
    console.log("Materia 1:", materia1Check);
    console.log("Materia 2:", materia2Check);
    console.log("Materia 3:", materia3Check);
    console.log("Materia 4:", materia4Check);
    console.log("Materia 5:", materia5Check);

    if (
      materia1Check == "" ||
      materia1Check == null ||
      materia1Check == undefined
    ) {
      isValid = false;
      $('input[name="materia1"]:checked')
        .addClass("input-error")
        .removeClass("input-success");
    } else {
      $('input[name="materia1"]:checked')
        .removeClass("input-error")
        .addClass("input-success");
    }

    if (
      materia2Check == "" ||
      materia2Check == null ||
      materia2Check == undefined
    ) {
      isValid = false;
      $('input[name="materia2"]:checked')
        .addClass("input-error")
        .removeClass("input-success");
    } else {
      $('input[name="materia2"]:checked')
        .removeClass("input-error")
        .addClass("input-success");
    }
    if (
      materia3Check == "" ||
      materia3Check == null ||
      materia3Check == undefined
    ) {
      isValid = false;
      $('input[name="materia3"]:checked')
        .addClass("input-error")
        .removeClass("input-success");
    } else {
      $('input[name="materia3"]:checked')
        .removeClass("input-error")
        .addClass("input-success");
    }
    if (
      materia4Check == "" ||
      materia4Check == null ||
      materia4Check == undefined
    ) {
      isValid = false;
      $('input[name="materia4"]:checked')
        .addClass("input-error")
        .removeClass("input-success");
    } else {
      $('input[name="materia4"]:checked')
        .removeClass("input-error")
        .addClass("input-success");
    }
    if (
      materia5Check == "" ||
      materia5Check == null ||
      materia5Check == undefined
    ) {
      isValid = false;
      $('input[name="materia34]:checked')
        .addClass("input-error")
        .removeClass("input-success");
    } else {
      $('input[name="materia4"]:checked')
        .removeClass("input-error")
        .addClass("input-success");
    }
    return isValid;
  }
  function ValidatePersonalData() {
    isValid = true;
    valueName = $("#name").val();
    valueProvincia = $("#Provincia").val();
    valueCuidad = $("#Cuidad").val();
    valueSector = $("#Sector").val();
    valueCalle = $("#Calle").val();
    valueCarrera = $("#Carrera").val();
    carreraCurrent = valueCarrera;

    if (valueName == "" || valueName == null || valueName == undefined) {
      isValid = false;
      $("#name").addClass("input-error").removeClass("input-success");
    } else {
      $("#name").removeClass("input-error").addClass("input-success");
    }

    if (
      valueProvincia == "" ||
      valueProvincia == null ||
      valueProvincia == undefined
    ) {
      isValid = false;
      $("#Provincia").addClass("input-error").removeClass("input-success");
    } else {
      $("#Provincia").removeClass("input-error").addClass("input-success");
    }

    if (valueCuidad == "" || valueCuidad == null || valueCuidad == undefined) {
      isValid = false;
      $("#Cuidad").addClass("input-error").removeClass("input-success");
    } else {
      $("#Cuidad").removeClass("input-error").addClass("input-success");
    }

    if (valueSector == "" || valueSector == null || valueSector == undefined) {
      isValid = false;
      $("#Sector").addClass("input-error").removeClass("input-success");
    } else {
      $("#Sector").removeClass("input-error").addClass("input-success");
    }

    if (valueCalle == "" || valueCalle == null || valueCalle == undefined) {
      isValid = false;
      $("#Calle").addClass("input-error").removeClass("input-success");
    } else {
      $("#Calle").removeClass("input-error").addClass("input-success");
    }

    if (
      valueCarrera == "" ||
      valueCarrera == null ||
      valueCarrera == undefined
    ) {
      isValid = false;
      $("#Carrera").addClass("input-error").removeClass("input-success");
    } else {
      $("#Carrera").removeClass("input-error").addClass("input-success");
    }

    return isValid;
  }
  function LimpiarDatosPersonales() {
    $("#name")
      .val("")
      .removeClass("input-error")
      .removeClass("input-success")
      .focus();
    $("#Provincia")
      .val("")
      .removeClass("input-error")
      .removeClass("input-success");
    $("#Cuidad")
      .val("")
      .removeClass("input-error")
      .removeClass("input-success");
    $("#Sector")
      .val("")
      .removeClass("input-error")
      .removeClass("input-success");
    $("#Calle").val("").removeClass("input-error").removeClass("input-success");
    $("#Carrera")
      .val("")
      .removeClass("input-error")
      .removeClass("input-success");
  }
  function LimpiarMateria() {
    $('input[name="materia1"]')
      .prop("checked", false)
      .removeClass("input-error")
      .removeClass("input-success");
    $('input[name="materia2"]')
      .prop("checked", false)
      .removeClass("input-error")
      .removeClass("input-success");
    $('input[name="materia3"]')
      .prop("checked", false)
      .removeClass("input-error")
      .removeClass("input-success");
    $('input[name="materia4"]')
      .prop("checked", false)
      .removeClass("input-error")
      .removeClass("input-success");
    $('input[name="materia5"]')
      .prop("checked", false)
      .removeClass("input-error")
      .removeClass("input-success");
  }
  function DevolverDatosPersonales() {
    $("#name").val(valueName);
    $("#Provincia").val(valueProvincia);
    $("#Cuidad").val(valueCuidad);
    $("#Sector").val(valueSector);
    $("#Calle").val(valueCalle);
    $("#Carrera").val(valueCarrera);
  }
  function DevolverDatosMaterias() {
    if (
      materia1Check != "" ||
      materia1Check != null ||
      materia1Check != undefined
    ) {
      $(`input[name="materia1"][value="${materia1Check}"]`).prop(
        "checked",
        true
      );
    }
    if (
      materia2Check != "" ||
      materia2Check != null ||
      materia2Check != undefined
    ) {
      $(`input[name="materia2"][value="${materia2Check}"]`).prop(
        "checked",
        true
      );
    }
    if (
      materia3Check != "" ||
      materia3Check != null ||
      materia3Check != undefined
    ) {
      $(`input[name="materia3"][value="${materia3Check}"]`).prop(
        "checked",
        true
      );
    }
    if (
      materia4Check != "" ||
      materia4Check != null ||
      materia4Check != undefined
    ) {
      $(`input[name="materia4"][value="${materia4Check}"]`).prop(
        "checked",
        true
      );
    }

    if (
      materia5Check != "" ||
      materia5Check != null ||
      materia5Check != undefined
    ) {
      $(`input[name="materia5"][value="${materia5Check}"]`).prop(
        "checked",
        true
      );
    }

    //     if (
    //       materia2Check == "" ||
    //       materia2Check == null ||
    //       materia2Check == undefined
    //     ) {
    //       isValid = false;
    //       $('input[name="materia2"]:checked')
    //         .addClass("input-error")
    //         .removeClass("input-success");
    //     } else {
    //       $('input[name="materia2"]:checked')
    //         .removeClass("input-error")
    //         .addClass("input-success");
    //     }
    //     if (
    //       materia3Check == "" ||
    //       materia3Check == null ||
    //       materia3Check == undefined
    //     ) {
    //       isValid = false;
    //       $('input[name="materia3"]:checked')
    //         .addClass("input-error")
    //         .removeClass("input-success");
    //     } else {
    //       $('input[name="materia3"]:checked')
    //         .removeClass("input-error")
    //         .addClass("input-success");
    //     }
    //     if (
    //       materia4Check == "" ||
    //       materia4Check == null ||
    //       materia4Check == undefined
    //     ) {
    //       isValid = false;
    //       $('input[name="materia4"]:checked')
    //         .addClass("input-error")
    //         .removeClass("input-success");
    //     } else {
    //       $('input[name="materia4"]:checked')
    //         .removeClass("input-error")
    //         .addClass("input-success");
    //     }
    //     if (
    //       materia5Check == "" ||
    //       materia5Check == null ||
    //       materia5Check == undefined
    //     ) {
    //       isValid = false;
    //       $('input[name="materia34]:checked')
    //         .addClass("input-error")
    //         .removeClass("input-success");
    //     } else {
    //       $('input[name="materia4"]:checked')
    //         .removeClass("input-error")
    //         .addClass("input-success");
    //     }
    //    $(`input[name="materia1"][value="${materia1Check}"]`).prop(
    //      "checked",
    //      true
    //     );
    //     $(`input[name="materia2"][value="${materia2Check}"]`).prop(
    //       "checked",
    //       true
    //     );
    //     $(`input[name="materia3"][value="${materia3Check}"]`).prop(
    //       "checked",
    //       true
    //     );
    //     $(`input[name="materia4"][value="${materi4Check}"]`).prop(
    //       "checked",
    //       true
    //     );
    //     $(`input[name="materia5"][value="${materia5Check}"]`).prop(
    //       "checked",
    //       true
    //     );
  }
  function DiaSeleccionadoLunes(dia) {
    sub = dia.substring(0, 2);
    if (sub == "Lu") {
      return dia;
    } else return "";
  }
  function DiaSeleccionadoMarte(dia) {
    sub = dia.substring(0, 2);
    if (sub == "Ma") {
      return dia;
    } else return "";
  }
  function DiaSeleccionadoMiercoles(dia) {
    sub = dia.substring(0, 2);
    if (sub == "Mi") {
      return dia;
    } else return "";
  }
  function DiaSeleccionadoJueves(dia) {
    sub = dia.substring(0, 2);
    if (sub == "Ju") {
      return dia;
    } else return "";
  }
  function DiaSeleccionadoViernes(dia) {
    sub = dia.substring(0, 2);
    if (sub == "Vi") {
      return dia;
    } else return "";
  }
  function ObtenerMaterias() {
    Materia1 = carrerasMateriasxd[carreraCurrent].materias[0].nombre;
    Materia2 = carrerasMateriasxd[carreraCurrent].materias[1].nombre;
    Materia3 = carrerasMateriasxd[carreraCurrent].materias[2].nombre;
    Materia4 = carrerasMateriasxd[carreraCurrent].materias[3].nombre;
    Materia5 = carrerasMateriasxd[carreraCurrent].materias[4].nombre;
  }

  //#endregion
});
