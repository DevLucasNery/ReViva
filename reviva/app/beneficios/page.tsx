import React from 'react';

const HomePage = () => {
  const beneficios = [
    "Melhoria do ambiente local por meio de limpeza voluntária.",
    "Manutenção das lixeiras públicas e redução do lixo nas ruas.",
    "Criação de relatórios e denúncias para resolver problemas ambientais.",
    "Agendamento de coletas de lixo para maior eficiência.",
    "Aumento da conscientização ambiental na comunidade.",
  ];

  const faqs = [
    {
      question: "Como participar de uma limpeza voluntária?",
      answer: "Basta se inscrever em nossos eventos semanais entrando em contato conosco.",
    },
    {
      question: "Como faço uma denúncia de descarte irregular?",
      answer: "Envie uma foto e o local na seção de denúncias do site.",
    },
    {
      question: "Como selecionar o dia da coleta na minha região?",
      answer: "Entre na página 'Rota do Lixo' e escolha o calendário da sua cidade.",
    },
  ];

  return (
    <div style={styles.page}>
      <section style={styles.section}>
        <h2 style={styles.heading}>Benefícios para o Meio Ambiente</h2>
        <ul style={styles.list}>
          {beneficios.map((beneficio, index) => (
            <li key={index} style={styles.listItem}>
              {beneficio}
            </li>
          ))}
        </ul>
      </section>
      <section style={styles.section}>
        <h2 style={styles.heading}>FAQ</h2>
        {faqs.map((faq, index) => (
          <div key={index} style={styles.faq}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: 'auto',
  },
  section: {
    marginBottom: '20px',
  },
  heading: {
    fontSize: '1.5em',
    marginBottom: '10px',
    color: '#2c7744',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
  listItem: {
    marginBottom: '5px',
  },
  faq: {
    marginBottom: '15px',
    backgroundColor: '#f0f9f4',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #2c7744',
  },
};

export default HomePage;
