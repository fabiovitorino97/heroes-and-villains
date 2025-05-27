// app/components/ResetButton.js

// Componente que exibe o botão de reiniciar
export default function ResetButton({ onReset }) {
  // Renderiza o botão que chama a função de reiniciar ao ser clicado
  return (
    <button className="reset-button" onClick={onReset}>
      Reiniciar Jogo
    </button>
  );
}