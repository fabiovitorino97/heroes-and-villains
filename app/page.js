// app/page.js
'use client';

// Importa os componentes usados na página
import Character from '@/app/components/Character';
import ActionLog from '@/app/components/ActionLog';
import ResetButton from '@/app/components/ResetButton';
import gameManager from '@/app/hooks/gameManager';

// Componente principal da página
export default function Home() {
  // Usa o hook gameManager para gerenciar o estado do jogo (vida, turnos, ações, etc.)
  const { hero, villain, handleHeroAction, isHeroTurn, actionLog, gameOver, resetGame } =
    gameManager();

  // Renderiza a interface do jogo
  return (
    <div className="game-container">
      {/* Título do jogo */}
      <h1>Batman vs. Coringa</h1>
      {/* Mostra mensagem de fim de jogo (vitória ou derrota) se houver */}
      {gameOver && <h2 className="game-over">{gameOver}</h2>}
      {/* Área dos personagens (herói e vilão) */}
      <div className="characters">
        {/* Componente do herói (Batman) com ações */}
        <Character data={hero} isHero onAction={handleHeroAction} isHeroTurn={isHeroTurn} />
        {/* Componente do vilão (Coringa), sem ações */}
        <Character data={villain} isHero={false} />
      </div>
      {/* Componente que mostra o histórico de ações */}
      <ActionLog logs={actionLog} />
      {/* Botão para reiniciar o jogo */}
      <ResetButton onReset={resetGame} />
    </div>
  );
}