let modoOscuro = false;

const root = document.documentElement;

function cambiarModo() {
  if (!modoOscuro) {
    root.style.setProperty("--color-fondo", "#1e1e1e");
    root.style.setProperty("--color-secundario", "#f1f1f1");
    modoOscuro = true;
  } else {
    root.style.setProperty("--color-fondo", "#fefefe");
    root.style.setProperty("--color-secundario", "#34495e");
    modoOscuro = false;
  }
}
