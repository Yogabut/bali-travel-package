import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { packages } from "@/data/packages";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your Bali travel assistant. I can help you find the perfect vacation package based on your preferences. What type of experience are you looking for?",
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickSuggestions = [
    "I want a romantic getaway",
    "Looking for adventure activities",
    "Cultural and temple tours",
    "Best packages under $500"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('romantic') || lowerMessage.includes('honeymoon') || lowerMessage.includes('couple')) {
      const romanticPackage = packages.find(p => p.category === 'Romance');
      return `Perfect! For a romantic experience, I recommend our "${romanticPackage?.title}". It includes ${romanticPackage?.highlights.slice(0, 2).join(', ')} and costs $${romanticPackage?.price}. Would you like more details about this package?`;
    }
    
    if (lowerMessage.includes('adventure') || lowerMessage.includes('hiking') || lowerMessage.includes('active')) {
      const adventurePackage = packages.find(p => p.category === 'Adventure');
      return `Great choice! Our "${adventurePackage?.title}" is perfect for adventure seekers. You'll enjoy ${adventurePackage?.highlights.slice(0, 2).join(' and ')} starting at $${adventurePackage?.price}. Interested in learning more?`;
    }
    
    if (lowerMessage.includes('cultural') || lowerMessage.includes('temple') || lowerMessage.includes('traditional')) {
      const culturalPackage = packages.find(p => p.category === 'Cultural');
      return `Wonderful! I recommend our "${culturalPackage?.title}". This package includes ${culturalPackage?.highlights.slice(0, 2).join(' and ')} for just $${culturalPackage?.price}. Would you like to see the full itinerary?`;
    }
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('budget') || lowerMessage.includes('$')) {
      const budgetOptions = packages.filter(p => p.price < 500);
      return `Here are our packages under $500: ${budgetOptions.map(p => `"${p.title}" ($${p.price})`).join(', ')}. Which one interests you most?`;
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! I'm here to help you find the perfect Bali vacation package. Are you interested in adventure, romance, culture, or something else?";
    }
    
    // Default response
    return `I understand you're interested in "${userMessage}". Let me suggest our most popular packages: ${packages.slice(0, 2).map(p => `"${p.title}" ($${p.price})`).join(' and ')}. Which type of experience appeals to you more?`;
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Bot className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground font-poppins mb-4">
            Bali Travel Assistant
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get personalized vacation package recommendations from our AI-powered travel assistant
          </p>
        </div>

        {/* Chat Container */}
        <Card className="h-[600px] flex flex-col bg-white shadow-lg">
          {/* Messages Area */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.sender === 'user' 
                    ? 'bg-primary text-white' 
                    : 'bg-accent text-white'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                </div>
                
                <div className={`max-w-[70%] p-3 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-primary text-white'
                    : 'bg-muted text-foreground'
                }`}>
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-muted p-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {messages.length === 1 && (
            <div className="px-6 pb-4">
              <p className="text-sm text-muted-foreground mb-3 flex items-center">
                <Sparkles className="h-4 w-4 mr-2" />
                Quick suggestions:
              </p>
              <div className="flex flex-wrap gap-2">
                {quickSuggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="text-xs hover:bg-primary hover:text-white transition-colors"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-6 border-t bg-muted/20">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button 
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-primary hover:bg-primary-hover"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};