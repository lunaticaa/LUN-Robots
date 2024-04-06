const sendChatBtn = document.querySelector('.chat-input i');
const chatInput = document.querySelector('.chat-input textarea');
const chatBox = document.querySelector(".chatbox");
const API_KEY = "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";

const generateResponse = () => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
      "Authorization" : `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
        model: "gpt-3.5-turbo-030",
        messages: [{role: "user",
        content: userMessage}]
    })

  }
  // request to openAI to ansewr
  fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
    console.log(data);
  }).catch((error) => {
    console.log(error);
  })
}

let userMessage;

const createChatLi = (message, className) => {
  // chat creator dynamic
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatcontent = className === "outgoing" ? `<p>${message}</p>` : `<i class="fa-solid fa-robot"></i><p>${message}</p>`;
  chatLi.innerHTML = chatcontent;
  return chatLi;
}

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if(!userMessage) return;
  // append user message to the textbox
  chatBox.appendChild(createChatLi(userMessage, "outgoing"));

  setTimeout(() => {
    // display thinking when it want to response
    chatBox.appendChild(createChatLi("Thinking...", "incoming"));
    generateResponse();
  }, 600);
}


sendChatBtn.addEventListener("click", handleChat); 