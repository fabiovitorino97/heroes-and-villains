// app/hooks/gameManager.js
import { useState, useEffect } from 'react';
import useSound from 'use-sound';

// Hook que gerencia o estado e a lógica do jogo
export default function gameManager() {
    // Estado inicial do herói (Batman) e do vilão (Coringa)
  const initialHero = { life: 100, name: 'Batman', healCount: 3, isDefending: false };
  const initialVillain = { life: 100, name: 'Coringa', isDefending: false };

   // Estados para gerenciar o jogo
  const [hero, setHero] = useState(initialHero); // Estado do herói
  const [villain, setVillain] = useState(initialVillain); // Estado do vilão
  const [isHeroTurn, setIsHeroTurn] = useState(true); // Controla de quem é o turno
  const [actionLog, setActionLog] = useState([]); // Histórico de ações
  const [gameOver, setGameOver] = useState(null); // Estado de fim de jogo

 // Sons para as ações
  const [playAttack] = useSound('/sounds/attack.mp3');
  const [playHeal] = useSound('/sounds/heal.mp3');
  const [playFlee] = useSound('/sounds/flee.mp3');
  const [playLaugh] = useSound('/sounds/joker_laugh.mp3');
  const [playWin] = useSound('/sounds/win.mp3')
  const [playBat] = useSound('/sounds/imbatman.mp3')
  const [playPain] = useSound('/sounds/pain.mp3')
  const [playLoose] = useSound('/sounds/loose.mp3')

   // Função para modificar a vida de um personagem
  const modifyLife = (target, amount) => {
    const setter = target === 'hero' ? setHero : setVillain;
    setter((prev) => ({
      ...prev,
      life: Math.max(0, Math.min(100, prev.life + amount)),
    }));
  };

   // Função para adicionar uma mensagem ao histórico
  const addLog = (message) => {
    setActionLog((prev) => [...prev, message]);
  };

    // Função que calcula um dano aleatório (como um dado)
  const rollDamage = () => Math.floor(Math.random() * (15 - 5 + 1)) + 5;

   // Ações que o herói pode realizar
  const actions = {
    attack: () => {
        // Calcula o dano e aplica ao vilão, considerando defesa
      const damage = rollDamage();
      const actualDamage = villain.isDefending ? Math.floor(damage / 2) : damage;
      modifyLife('villain', -actualDamage);
      addLog(`Batman atacou! Causou ${actualDamage} de dano ao Coringa.`);
      playAttack();
    },
    defense: () => {
      // Ativa o modo de defesa do herói
      setHero((prev) => ({ ...prev, isDefending: true }));
      addLog('Batman está defendendo!');
    },
    useHeal: () => { 
       // Recupera vida do herói, com limite de usos
      if (hero.healCount > 0) {
        modifyLife('hero', 20);
        setHero((prev) => ({ ...prev, healCount: prev.healCount - 1 })); 
        addLog('Batman usou uma cura e recuperou 20 de vida!');
        playHeal();
      } else {
        addLog('Batman não tem mais curas disponíveis!');
      }
    },
    flee: () => {
       // Tenta fugir da luta, com 30% de chance de sucesso
      const success = Math.random() > 0.7;
      if (success) {
        setGameOver('Batman fugiu da luta!');
        addLog('Batman conseguiu fugir!');
        playFlee();
      } else {
        addLog('Batman tentou fugir, mas falhou!');
      }
    },
  };

  // Lógica do turno do vilão (escolhe uma ação aleatória)
  const villainAction = () => {
    const actions = ['attack', 'defense'];
    const action = actions[Math.floor(Math.random() * actions.length)];
    if (action === 'attack') {
      // Vilão ataca o herói, considerando defesa
      const damage = rollDamage();
      const actualDamage = hero.isDefending ? Math.floor(damage / 2) : damage;
      modifyLife('hero', -actualDamage);
      addLog(`Coringa atacou! Causou ${actualDamage} de dano ao Batman.`);
      playPain();
    } else {
      setVillain((prev) => ({ ...prev, isDefending: true }));
      addLog('Coringa está defendendo!');
    }
  };

  // Função que gerencia as ações do herói
  const handleHeroAction = (action) => {
    if (!isHeroTurn || gameOver) return;
    actions[action]?.();
    setHero((prev) => ({ ...prev, isDefending: false })); // Reseta defesa
    setVillain((prev) => ({ ...prev, isDefending: false }));
    setIsHeroTurn(false);// Passa o turno para o vilão
  };

   // Controla o turno do vilão (executa após o herói)
  useEffect(() => {
    if (!isHeroTurn && !gameOver) {
      setTimeout(() => {
        if (villain.life > 0) {
          villainAction();
          setIsHeroTurn(true);// Volta o turno para o herói
        }
      }, 1000);
    }
  }, [isHeroTurn, gameOver]);

  // Verifica se o jogo terminou (vitória ou derrota)
  useEffect(() => {
    if (hero.life <= 0) {
      setGameOver('Coringa venceu!');
      playLaugh();
      addLog('Coringa venceu a luta!');
      playLoose()
    } else if (villain.life <= 0) {
      setGameOver('Batman venceu!');
      playWin()
      addLog('Batman venceu a luta!');
      playBat()
      
    }
  }, [hero.life, villain.life]);

   // Função para reiniciar o jogo
  const resetGame = () => {
    setHero(initialHero);
    setVillain(initialVillain);
    setActionLog([]);
    setIsHeroTurn(true);
    setGameOver(null);
    addLog('Jogo reiniciado!');
  };

  // Retorna os dados e funções para uso no jogo
  return {
    hero,
    villain,
    handleHeroAction,
    isHeroTurn,
    actionLog,
    gameOver,
    resetGame,
  };
}