import prisma from "../prisma/client.js";

export const messageRepository = {
  createMessage: async (data) => {
    // Changed parameter name to 'data'
    try {
      if (!data) {
        throw new Error("Message data is required");
      }

      const { name, email, subject, message } = data;

      // Validate required fields
      if (!name || !email || !subject || !message) {
        throw new Error("Name, email, subject, and message are required");
      }

      const newMessage = await prisma.message.create({
        data: {
          name,
          email,
          subject,
          message,
        },
      });

      console.log("Message created:", newMessage);
      return newMessage;
    } catch (error) {
      console.error("Error in createMessage:", error);
      throw new Error(`Failed to create message: ${error.message}`);
    }
  },

  async getAllMessages() {
    try {
      const messages = await prisma.message.findMany({
        orderBy: {
          created_at: "desc",
        },
      });
      return messages;
    } catch (error) {
      throw new Error(`Failed to fetch messages: ${error.message}`);
    }
  },

  async getMessage(id) {
    try {
      const message = await prisma.message.findUnique({
        where: { id },
      });
      return message;
    } catch (error) {
      throw new Error(`Failed to fetch message: ${error.message}`);
    }
  },

  async deleteMessage(id) {
    try {
      const message = await prisma.message.delete({
        where: { id },
      });
      return message;
    } catch (error) {
      throw new Error(`Failed to delete message: ${error.message}`);
    }
  },
};
