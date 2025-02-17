function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatHistory = document.getElementById("chat-history");
  
    if (userInput.trim() === "") return;
  
    // Create user message element with fade-in animation
    let userMessage = document.createElement("div");
    userMessage.className = "chat-message user-message";
    userMessage.innerText = "You: " + userInput;
    chatHistory.appendChild(userMessage);
  
    // Clear input
    document.getElementById("user-input").value = "";
  
    // Auto scroll to bottom
    chatHistory.scrollTop = chatHistory.scrollHeight;
  
    // Simulate bot response after a short delay
    setTimeout(() => {
      let botResponse = generateBotResponse(userInput);
      let botMessage = document.createElement("div");
      botMessage.className = "chat-message bot-message";
      botMessage.innerText = "Bot: " + botResponse;
      chatHistory.appendChild(botMessage);
  
      // Auto scroll to bottom
      chatHistory.scrollTop = chatHistory.scrollHeight;
    }, 500);
  }
  
  function generateBotResponse(input) {
    let responses = {
      "hello": "Hi there! How can I help you?",
      "who are you": "I'm an AI-powered chatbot built for this portfolio.",
      "what can you do": "I can answer basic questions about my creator's work.",
      "bye": "Goodbye! Have a great day!"
    };
  
    return responses[input.toLowerCase()] || "I'm not sure, but I can learn!";
  }
  
  // Dark Mode Toggle
  document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  