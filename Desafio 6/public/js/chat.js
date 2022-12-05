
const messageForm = document.getElementById("messageForm");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const chat = document.getElementById("listMessage");


const sendMessage = (productInfo) => {
 
  socket.emit("chat:messageInfo", productInfo);
};

const renderMessage = (chatData) => {
  const date = new Date().toLocaleString("es-AR");
  const html = chatData.map((messageInfo) => {
    console.log(messageInfo);
    return `<li>
              <p>${messageInfo.email}<span>[${date}]</span>:<span>${messageInfo.message}</span>
              </p>
            </li>`;
  });

  chat.innerHTML = html.join(" ");
};


const submitHandlerMessage = (event) => {
 
  event.preventDefault();

 
  const messageInfo = {
    email: emailInput.value,
    message: messageInput.value,
  };

  
  sendMessage(messageInfo);

  messageInput.value = "";
};

messageForm.addEventListener("submit", submitHandlerMessage);

socket.on("server:message", renderMessage);
