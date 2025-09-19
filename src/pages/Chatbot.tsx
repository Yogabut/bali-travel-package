import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { packages } from "@/data/packages";
import { PackageCard } from "@/components/ui/package-card";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  recommendedPackages?: typeof packages;
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

  const generateBotResponse = (userMessage: string): { text: string; recommendedPackages: typeof packages } => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('romantic') || lowerMessage.includes('honeymoon') || lowerMessage.includes('couple')) {
      const romanticPackages = packages.filter(p => p.category === 'Romance');
      return {
        text: `Perfect! For a romantic experience, I recommend checking out these amazing packages below. Each one offers incredible experiences for couples!`,
        recommendedPackages: romanticPackages
      };
    }
    
    if (lowerMessage.includes('adventure') || lowerMessage.includes('hiking') || lowerMessage.includes('active')) {
      const adventurePackages = packages.filter(p => p.category === 'Adventure');
      return {
        text: `Great choice! Here are our best adventure packages that will get your adrenaline pumping:`,
        recommendedPackages: adventurePackages
      };
    }
    
    if (lowerMessage.includes('cultural') || lowerMessage.includes('temple') || lowerMessage.includes('traditional')) {
      const culturalPackages = packages.filter(p => p.category === 'Cultural');
      return {
        text: `Wonderful! Discover Bali's rich culture and traditions with these amazing packages:`,
        recommendedPackages: culturalPackages
      };
    }
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('budget') || lowerMessage.includes('$')) {
      const budgetOptions = packages.filter(p => p.price < 500);
      return {
        text: `Here are our best packages under $500 that offer incredible value:`,
        recommendedPackages: budgetOptions
      };
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return {
        text: "Hello! I'm here to help you find the perfect Bali vacation package. Are you interested in adventure, romance, culture, or something else?",
        recommendedPackages: []
      };
    }
    
    // Default response with popular packages
    return {
      text: `I understand you're looking for "${userMessage}". Here are some of our most popular packages that might interest you:`,
      recommendedPackages: packages.slice(0, 3)
    };
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
      const response = generateBotResponse(inputMessage);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        recommendedPackages: response.recommendedPackages
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
    <div className="min-h-screen bg-muted/30 py-20">
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
        <Card className="h-[700px] flex flex-col bg-white shadow-lg">
          {/* Messages Area */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div key={message.id}>
                <div
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
                
                {/* Package Recommendations */}
                {message.sender === 'bot' && message.recommendedPackages && message.recommendedPackages.length > 0 && (
                  <div className="ml-11 mt-4 space-y-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                      {message.recommendedPackages.map((pkg) => (
                        <div key={pkg.id} className="transform scale-95">
                          <PackageCard {...pkg} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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