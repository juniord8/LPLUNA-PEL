// Número do WhatsApp da clínica de Pelotas
const WHATSAPP_PELOTAS = '5553997000000';

function enviarWhatsApp(e){
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const servico = document.getElementById('servico').value;
  const quando = document.getElementById('quando').value.trim();
  const mensagem = `Olá, sou ${nome}. Gostaria de agendar uma avaliação (PELOTAS) para ${servico}. Melhor dia/horário: ${quando}.`;
  const url = `https://wa.me/${WHATSAPP_PELOTAS}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');
  return false;
}

// Ajusta link fixo do rodapé
(function(){
  const link = document.getElementById('linkWhatsApp');
  if (link) link.href = `https://wa.me/${WHATSAPP_PELOTAS}`;
})();
