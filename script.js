// AlwaysOpen AI — demo bot brain (Part 6)

function addMessage(text, who) {
  var box = document.getElementById('chatMessages');
  var div = document.createElement('div');
  div.className = 'msg ' + who;
  div.textContent = text;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

function botAnswer(question) {
  var q = question.toLowerCase();

  if (q.includes('price') || q.includes('cost') || q.includes('charge')) {
    return 'Chatbot setup starts at $150 (one-time). That includes the build, connection to your Instagram or Messenger, and 2 weeks of free support. An optional care plan is $25/month.';
  }
  if (q.includes('service') || q.includes('offer') || q.includes('build') || q.includes('what do you do')) {
    return 'We build AI chatbots for Instagram & Messenger, Telegram bots, and business automations with Activepieces and Make. Tap "How to order" if you want one for your business.';
  }
  if (q.includes('order') || q.includes('buy') || q.includes('start') || q.includes('hire')) {
    return 'Easy: tap the "Get a Chatbot" button on this page and fill the small form — or message AlwaysOpen AI on Instagram (@alwaysopen_ai). You get a free working demo first; you only pay if you love it.';
  }
  if (q.includes('tool') || q.includes('activepieces') || q.includes('manychat') || q.includes('make')) {
    return 'Our main tools are Activepieces, ManyChat and Make, plus OpenAI for the AI brain. We build inside YOUR accounts, so you own everything from day one.';
  }
  if (q.includes('time') || q.includes('long') || q.includes('days')) {
    return 'A standard chatbot takes about 2-3 days from our first chat to live on your page.';
  }
  if (q.includes('hi') || q.includes('hello') || q.includes('salam') || q.includes('aoa')) {
    return 'Hello! 👋 Ask me about services, price, tools — or how to order your own chatbot.';
  }
  return 'Good question! I am a small demo, so I answer best about services, price, tools and ordering. For anything else, message @alwaysopen_ai on Instagram — Muhammad Amir will reply himself.';
}

function sendChat() {
  var input = document.getElementById('chatText');
  var text = input.value.trim();
  if (text === '') { return; }
  addMessage(text, 'user');
  input.value = '';
  setTimeout(function () { addMessage(botAnswer(text), 'bot'); }, 500);
}

function askBot(topic) {
  if (topic === 'services') { quickAsk('What services do you offer?'); }
  if (topic === 'price') { quickAsk('What is the price?'); }
  if (topic === 'order') { quickAsk('How do I order?'); }
}

function quickAsk(text) {
  addMessage(text, 'user');
  setTimeout(function () { addMessage(botAnswer(text), 'bot'); }, 500);
}

// Enter key also sends the message
document.getElementById('chatText').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') { sendChat(); }
});
