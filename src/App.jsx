function App() {
  const opciones = async () => {

  const respuesta = await fetch("https://api.genshin.dev/");
  console.log({ types });
  };

  opciones();

  return (
    <div className="App">
      <h1>Genshin Impact Dex</h1>
      <select>
        <option value="">seleccionar un elemento
        </option>
        <option value="">artifacts
        </option>
        <option value="boss">boss
        </option>
        <option value="characters">characters
        </option>
        <option value="consumables">consumables
        </option>
        <option value="domains">domains
        </option>

      </select>
    </div>
    
  );
}

export default App;
