// app/components/Character.js
import Image from 'next/image';
import { motion } from 'framer-motion';

// Componente que exibe um personagem (herói ou vilão)
export default function Character({ data, isHero, onAction, isHeroTurn }) {
  // Calcula a porcentagem da barra de vida para animação
  const lifePercent = Math.max(0, data.life) + '%';

  // Renderiza o personagem com animações
  return (
    <motion.div
      className={`character ${isHero ? 'hero' : 'villain'}`} // Define se é herói ou vilão
      animate={{ scale: data.life <= 0 ? 0.8 : 1 }} // Reduz o tamanho se a vida for 0
      transition={{ duration: 0.3 }} // Duração da animação
    >
      {/* Área da imagem do personagem */}
      <div className="sprite">
        {/* Carrega a imagem do herói (Batman) ou vilão (Coringa) */}
        <Image
          src={isHero ? '/batman.jpg' : '/joker.jpg'} // Usa imagens .jpg
          alt={data.name}
          width={100}
          height={100}
          className="character-image"
          priority // Carrega a imagem com prioridade
          onError={() => console.log(`Erro ao carregar imagem de ${data.name}`)} // Log de erro
        />
      </div>
      {/* Nome do personagem */}
      <h1>{data.name}</h1>
      {/* Barra de vida animada */}
      <div className="life-bar">
        {/* Parte preenchida da barra de vida, com animação */}
        <motion.div
          className="life-fill"
          style={{ width: lifePercent }}
          animate={{ width: lifePercent }}
          transition={{ duration: 0.5 }} // Animação suave de 0.5 segundos
        />
        {/* Texto que mostra a vida atual */}
        <div className="life-text">{data.life}/100</div>
      </div>
      {/* Botões de ação, exibidos apenas para o herói */}
      {isHero && onAction && (
        <div className="actions">
          {/* Botão para atacar */}
          <button disabled={!isHeroTurn} onClick={() => onAction('attack')}>
            Atacar
          </button>
          {/* Botão para defender */}
          <button disabled={!isHeroTurn} onClick={() => onAction('defense')}>
            Defender
          </button>
          {/* Botão para usar cura */}
          <button disabled={!isHeroTurn} onClick={() => onAction('useHeal')}>
            Usar Cura
          </button>
          {/* Botão para correr */}
          <button disabled={!isHeroTurn} onClick={() => onAction('flee')}>
            Correr
          </button>
        </div>
      )}
    </motion.div>
  );
}