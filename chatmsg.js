var inputText = document.querySelector('input#msg');
var chatSpace = document.querySelector('div.chat-space');

var mensagens = [];
var msgsString = localStorage.getItem('msgs');

if (msgsString != null) {
    mensagens = JSON.parse(msgsString);
}

function sendMsg () {
    if (inputText.value.length != 0) {
        postMsg(inputText.value, getTime());

        mensagens.push({msg: inputText.value, hr: getTime()});

        localStorage.setItem('msgs', JSON.stringify(mensagens));


        inputText.value = '';
        inputText.focus();
    } else {
        window.alert('Digite uma mensagem')
    }
}

function postMsg (mensagem, hora) {
    //cria a hora
    var pHora = document.createElement('p');
    pHora.style.fontSize = 'x-small';
    pHora.innerHTML = `${hora}`;

    //cria a mensagem
    var p = document.createElement('p');
    p.style.paddingTop = '5px';
    p.innerHTML = `${mensagem}`;

    //cria a div contendo a hora e a mensagem
    var divPost = document.createElement('div');
    divPost.style.display = 'flex';
    divPost.style.flexFlow = 'column'
    divPost.style.paddingRight = '10px';
    divPost.appendChild(pHora);
    divPost.appendChild(p);

    //cria a imagem
    var img = document.createElement('img');
    img.src = 'imagens/sem-foto.png';
    img.width = 40;
    img.height = 40;

    //cria div da mensagem
    var divMsg = document.createElement('div');
    divMsg.style.display = 'flex';
    divMsg.style.flexFlow = 'row';
    divMsg.style.alignItems = 'flex-end'
    divMsg.style.marginBottom = '10px';
    divMsg.appendChild(divPost);
    divMsg.appendChild(img);

    //coloca a divMsg dentro do chatSpace
    chatSpace.appendChild(divMsg)
}

function getTime() {
    var date = new Date();
    var opts = {hour: '2-digit', minute: '2-digit'};

    var dateString = date.toLocaleDateString(Intl.LocalesArgument, opts);

    var time = `${dateString}`;

    return time;
}

for (var i = 0; i < mensagens.length; i++) {
    postMsg(mensagens[i].msg, mensagens[i].hr);
}