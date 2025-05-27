// app/components/ActionLog.js
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Componente que exibe o histórico de ações
export default function ActionLog({ logs }) {
  // Referência para o último item da lista, usada para rolagem
  const logEndRef = useRef(null);

  // Faz o histórico rolar automaticamente para a última ação
  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até o último item
    }
  }, [logs]); // Executa sempre que o array de logs é atualizado

  // Renderiza a lista de ações
  return (
    <div className="action-log">
      {/* Título do histórico */}
      <h2>Histórico de Ações</h2>
      {/* Lista de ações */}
      <ul>
        {logs.map((log, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 10 }} // Animação de entrada
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={index === logs.length - 1 ? 'latest-action' : ''} // Destaca a última ação
          >
            {log}
            {/* Adiciona uma referência ao último item para rolagem */}
            {index === logs.length - 1 && <div ref={logEndRef} />}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}