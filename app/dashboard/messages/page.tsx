"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send } from "lucide-react";

const conversations = [
  {
    id: 1,
    user: {
      name: "Sarah L.",
      image: "https://cdn.discordapp.com/attachments/1178848363819565077/1307448629174210682/IMG_5918.jpg?ex=673a57ec&is=6739066c&hm=463c0823faf363d6a09e6066f9391f777ff9c642a5957c317c5d2b94f30de41a&",
    },
    lastMessage: "Hey! Are we still on for the Ken Carson concert?",
    timestamp: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    user: {
      name: "Derrick L.",
      image: "https://cdn.discordapp.com/attachments/1178848363819565077/1307449355795562506/IMG_5919.jpg?ex=673a5899&is=67390719&hm=7727d857c5bb4b6bfc71e65cd2e6d72abdd995a3819388372cd885f1f493d9b1&",
    },
    lastMessage: "Thanks for the ride to boxing practice!",
    timestamp: "1 day ago",
    unread: false,
  },
  {
    id: 3,
    user: {
      name: "Coach Greg",
      image: "https://cdn.discordapp.com/attachments/1178848363819565077/1307448107231084684/IMG_5916.jpg?ex=673a576f&is=673905ef&hm=6c42ece2cf5f136967754ce6c9e4ed4ff82dc0ca0ee862b66c00fa86f8c5474d&",
    },
    lastMessage: "Practice starts at 6 PM sharp tomorrow",
    timestamp: "2 days ago",
    unread: false,
  },
];

const messages = [
  {
    id: 1,
    content: "Hey! Are we still on for the Ken Carson concert?",
    sender: "Sarah L.",
    timestamp: "2:30 PM",
    isSender: false,
  },
  {
    id: 2,
    content: "Yes! I'll pick you up at 7 PM from Lot 30",
    timestamp: "2:31 PM",
    isSender: true,
  },
  {
    id: 3,
    content: "Perfect! I'll be there. So excited!",
    sender: "Sarah L.",
    timestamp: "2:32 PM",
    isSender: false,
  },
  {
    id: 4,
    content: "Me too! It's going to be awesome",
    timestamp: "2:33 PM",
    isSender: true,
  },
  {
    id: 5,
    content: "Should I bring anything?",
    sender: "Sarah L.",
    timestamp: "2:35 PM",
    isSender: false,
  },
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    // Here you would typically send the message to your backend
    setNewMessage("");
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] gap-4">
      <Card className="w-1/3">
        <CardContent className="p-4">
          <h2 className="font-semibold mb-4">Messages</h2>
          <ScrollArea className="h-[calc(100vh-12rem)]">
            <div className="space-y-4">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedConversation.id === conversation.id
                      ? "bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedConversation(conversation)}
                >
                  <Avatar>
                    <AvatarImage src={conversation.user.image} />
                    <AvatarFallback>{conversation.user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{conversation.user.name}</p>
                      <span className="text-xs text-gray-500">
                        {conversation.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">
                      {conversation.lastMessage}
                    </p>
                  </div>
                  {conversation.unread && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <Card className="flex-1">
        <CardContent className="p-0 h-full flex flex-col">
          <div className="p-4 border-b flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={selectedConversation.user.image} />
              <AvatarFallback>
                {selectedConversation.user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold">{selectedConversation.user.name}</h2>
              <p className="text-sm text-gray-500">Online</p>
            </div>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.isSender ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.isSender
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p>{message.content}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.isSender ? "text-blue-100" : "text-gray-500"
                      }`}
                    >
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <form
            onSubmit={handleSendMessage}
            className="p-4 border-t flex items-center space-x-2"
          >
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}