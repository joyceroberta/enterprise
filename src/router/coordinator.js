export const goToHome = (history) => {
  history.push("/");
};

export const goToListTripsPage = (history)=>{
  history.push("/escolherviagem");
}

export const goToListTripsAdm = (history) => {
  history.push("/listaviagens");
};

export const goToFormPage = (history, id) => {
    history.push(`/formulario/${id}`);
};

export const goToHomeAdm = (history) => {
  history.push("/homeadm");
};

export const goToApproval = (history, id) => {
  history.push(`/aprovarinscricoes/${id}`);
};

export const goToCreateTripPage = (history) => {
  history.push("/novasviagens");
};

export const goToLoginPage = (history) =>{
  history.push("/login")
}



