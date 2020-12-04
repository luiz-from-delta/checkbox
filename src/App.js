import Checkbox from "./Checkbox";

function App() {
  function handleSelect(isChecked) {
    alert(isChecked ? "Você concordou!" : "Ops, você não concordou!");
  }

  return (
    <div className="App">
      <div>
        <header>Checkbox:</header>
        <Checkbox />
      </div>
      <div>
        <header>Checkbox com Label:</header>
        <Checkbox label="Li e concordo com os termos" />
      </div>
      <div>
        <header>Marcada por Padrão:</header>
        <Checkbox label="Li e concordo com os termos" defaultChecked />
      </div>
      <div>
        <header>Tamanho e Cor:</header>
        <Checkbox
          label="Li e concordo com os termos"
          defaultChecked
          size={22}
          color="#0090ff"
        />
      </div>
      <div>
        <header>
          Você também pode passar uma função de callback para ler o estado da
          checkbox:
        </header>
        <Checkbox
          label="Li e concordo com os termos"
          defaultChecked
          size={22}
          color="#0090ff"
          onChange={handleSelect}
        />
      </div>
    </div>
  );
}

export default App;
