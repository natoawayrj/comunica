// const API_KEY = 'AIzaSyDNreTBWMhQplGImXxU_gJuAUyX1t54RGo';
// const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

// const chatMessages = document.getElementById('chat-messages');
// const userInput = document.getElementById('user-input');
// const sendButton = document.getElementById('send-button');

// async function generateResponse(prompt) {
//     const response = await fetch(`${API_URL}?key=${API_KEY}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             contents: [{ parts: [{ text: prompt }] }]
//         })
//     });

//     if (!response.ok) {
//         throw new Error('Failed to generate response');
//     }

//     const data = await response.json();
//     return data.candidates[0].content.parts[0].text;
// }

// function cleanMarkdown(text) {
//     return text.replace(/#{1,6}\s?/g, '')
//         .replace(/\*\*/g, '')
//         .replace(/\n{3,}/g, '\n\n')
//         .trim();
// }

// function clearChat() {
//     chatMessages.innerHTML = ''; // Limpa o histórico do chat antes de exibir nova mensagem
// }

// function addMessage(message, isUser) {
//     const messageElement = document.createElement('div');
//     messageElement.classList.add('message', isUser ? 'user-message' : 'bot-message');

//     const profileImage = document.createElement('img');
//     profileImage.classList.add('profile-image');
//     profileImage.src = isUser ? 'user.jpg' : 'bot.jpg';
//     profileImage.alt = isUser ? 'User' : 'Bot';

//     const messageContent = document.createElement('div');
//     messageContent.classList.add('message-content');
//     messageContent.textContent = message;

//     messageElement.appendChild(profileImage);
//     messageElement.appendChild(messageContent);

//     chatMessages.appendChild(messageElement);
//     chatMessages.scrollTop = chatMessages.scrollHeight;
// }

// async function handleUserInput() {
//     const userMessage = userInput.value.trim();
//     if (userMessage) {
//         clearChat(); // Limpa a resposta anterior antes de exibir uma nova
//         addMessage(userMessage, true);

//         userInput.value = '';
//         sendButton.disabled = true;
//         userInput.disabled = true;

//         try {
//             const botMessage = await generateResponse(userMessage);
//             addMessage(cleanMarkdown(botMessage), false);
//         } catch (error) {
//             console.error('Error:', error);
//             addMessage('Desculpe, ocorreu um erro. Tente novamente.', false);
//         } finally {
//             sendButton.disabled = false;
//             userInput.disabled = false;
//             userInput.focus();
//         }
//     }
// }

// sendButton.addEventListener('click', handleUserInput);
// userInput.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//         e.preventDefault();
//         handleUserInput();
//     }
// });



const API_KEY = 'AIzaSyDNreTBWMhQplGImXxU_gJuAUyX1t54RGo';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

const respostasLocais = [
    {
        id: 1,
        keywords: ["pagamento", "já caiu", "caiu", "salário", "remuneração", "folha de pagamento", "contracheque", "valor recebido"],
        confidence: 0.9,
        resposta: "Olá! Para verificar o status do seu pagamento, é necessário consultar o setor de Recursos Humanos da sua empresa ou o aplicativo de folha de pagamento vinculado à Comunica Fácil. Caso precise de ajuda com o acesso, posso te orientar!"
    },
    {
        id: 2,
        keywords: ["rio card", "riocard", "pegar o cartão", "buscar cartão", "cartão", "transporte", "retirada cartão"],
        confidence: 0.8,
        resposta: "A entrega do RioCard é feita conforme cronograma da empresa. Por favor, entre em contato com o RH ou confira as notificações no aplicativo Comunica Fácil para saber se seu cartão já está disponível para retirada."
    },
    {
        id: 3,
        keywords: ["informações", "sobre a empresa", "quem são vocês", "empresa", "comunica fácil", "empresa comunica fácil", "sobre nós"],
        confidence: 0.95,
        resposta: "Claro! A Comunica Fácil é uma empresa de tecnologia focada em melhorar a comunicação interna nas organizações. Nosso objetivo é tornar o ambiente de trabalho mais integrado, eficiente e colaborativo. Por meio do nosso aplicativo, promovemos uma comunicação direta e acessível entre empresas e colaboradores, com clareza e inovação como princípios."
    },
    {
        id: 4,
        keywords: ["missão", "objetivo da empresa", "propósito", "missão da empresa"],
        confidence: 0.9,
        resposta: "A missão da Comunica Fácil é facilitar e aprimorar a comunicação interna nas organizações, criando um ambiente mais eficiente e colaborativo onde gestores e colaboradores se conectam de maneira rápida e eficaz."
    },
    {
        id: 5,
        keywords: ["aplicativo", "como funciona", "app", "funcionalidades", "features", "aplicativo comunica fácil"],
        confidence: 0.9,
        resposta: "O aplicativo da Comunica Fácil permite uma comunicação direta entre gestores e colaboradores, com recursos como envio de avisos, recebimento de documentos, cronogramas, atualizações e suporte. Tudo isso com acessibilidade e transparência como prioridade."
    },
    {
        id: 6,
        keywords: ["problema no app", "erro no aplicativo", "app não funciona", "bug", "falha", "problema com o app", "aplicativo com problemas"],
        confidence: 0.85,
        resposta: "Em caso de dúvidas ou dificuldades no uso do aplicativo, recomendamos entrar em contato com o setor de TI ou RH da sua empresa. Eles são os responsáveis por prestar o suporte direto. Caso seja um problema técnico relacionado ao aplicativo, me avise para que eu possa encaminhar ao nosso time."
    },
    {
        "id": 7,
        "keywords": ["o que é comunica fácil", "plataforma comunica fácil", "para que serve", "comunica fácil funciona", "comunica fácil app", "explicação comunica fácil"],
        "confidence": 0.95,
        "resposta": "O Comunica Fácil é uma plataforma feita para facilitar a comunicação entre empresas e colaboradores. Através do aplicativo, é possível acessar holerites, avisos, documentos e se manter conectado com o RH de forma prática e rápida."
      },
      {
        "id": 8,
        "keywords": ["como acessar holerite", "ver holerite", "consultar pagamento", "ver salário", "holerite app", "contracheque"],
        "confidence": 0.9,
        "resposta": "Você pode consultar seus holerites diretamente pelo aplicativo Comunica Fácil. Basta acessar a seção indicada no menu principal. Se tiver dificuldades, entre em contato com o RH da sua empresa."
      },
      {
        "id": 9,
        "keywords": ["documentos", "baixar documentos", "ver documentos", "arquivos", "contratos", "anexos"],
        "confidence": 0.88,
        "resposta": "Os documentos compartilhados pela empresa ficam disponíveis dentro do aplicativo Comunica Fácil. Verifique a aba de documentos ou comunicações recentes para acessar o que foi enviado."
      },
      {
        "id": 10,
        "keywords": ["avisos", "mensagens importantes", "recados", "comunicados", "informações", "novidades"],
        "confidence": 0.87,
        "resposta": "Os avisos importantes são enviados diretamente no app. Verifique a tela inicial ou a área de notificações para ficar sempre por dentro das novidades."
      },
      {
        "id": 11,
        "keywords": ["é seguro", "dados protegidos", "privacidade", "confiança", "segurança dos dados"],
        "confidence": 0.9,
        "resposta": "Sim, o Comunica Fácil foi desenvolvido com foco em segurança e privacidade. Seus dados são protegidos com as melhores práticas de tecnologia para garantir total confidencialidade."
      },
      {
        "id": 12,
        "keywords": ["benefícios", "vantagens", "porque usar", "para que serve", "melhorias", "funcionalidades"],
        "confidence": 0.92,
        "resposta": "Com o Comunica Fácil, você tem acesso centralizado a informações do trabalho, como holerites, avisos e documentos, de forma ágil e segura. É uma forma prática de se manter conectado com a empresa."
      }
];

const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

async function generateResponse(prompt) {
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
        })
    });

    if (!response.ok) {
        throw new Error('Failed to generate response');
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
}

function cleanMarkdown(text) {
    return text.replace(/#{1,6}\s?/g, '')
        .replace(/\*\*/g, '')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

function clearChat() {
    chatMessages.innerHTML = '';
}

function addMessage(message, isUser) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', isUser ? 'user-message' : 'bot-message');

    const profileImage = document.createElement('img');
    profileImage.classList.add('profile-image');
    profileImage.src = isUser ? 'user.jpg' : 'bot.jpg';
    profileImage.alt = isUser ? 'User' : 'Bot';

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.textContent = message;

    messageElement.appendChild(profileImage);
    messageElement.appendChild(messageContent);

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function verificarRespostaLocal(mensagem) {
    const mensagemLower = mensagem.toLowerCase();

    let melhorResposta = null;
    let maiorConfiança = 0;

    for (const resposta of respostasLocais) {
        for (const palavra of resposta.keywords) {
            if (mensagemLower.includes(palavra.toLowerCase())) {
                if (resposta.confidence > maiorConfiança) {
                    maiorConfiança = resposta.confidence;
                    melhorResposta = resposta.resposta;
                }
            }
        }
    }

    return melhorResposta;
}

async function handleUserInput() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        clearChat();
        addMessage(userMessage, true);

        userInput.value = '';
        sendButton.disabled = true;
        userInput.disabled = true;

        const respostaLocal = verificarRespostaLocal(userMessage);

        if (respostaLocal) {
            addMessage(respostaLocal, false);
            sendButton.disabled = false;
            userInput.disabled = false;
            userInput.focus();
            return;
        }

        try {
            const botMessage = await generateResponse(userMessage);
            addMessage(cleanMarkdown(botMessage), false);
        } catch (error) {
            console.error('Error:', error);
            addMessage('Desculpe, ocorreu um erro. Tente novamente.', false);
        } finally {
            sendButton.disabled = false;
            userInput.disabled = false;
            userInput.focus();
        }
    }
}

sendButton.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleUserInput();
    }
});

