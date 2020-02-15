window.addEventListener('load', () => {
  const SERVER_URL = "http://localhost:8080";
  const CREATE_BOT_URL = SERVER_URL + "/create-bot";

  const botNameInput = document.getElementById('botName');

  document.getElementById('sendCode').onclick = () => {
    const code = Blockly.JavaScript.workspaceToCode(Code.workspace);
    const username = botNameInput.value;
    const uploadTime = +new Date();
    fetch(CREATE_BOT_URL, { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
//      mode: 'no-cors',
      body: JSON.stringify({ username, code, uploadTime }),
    }).then(response => alert("Bot was successfully created"));
  };
});
