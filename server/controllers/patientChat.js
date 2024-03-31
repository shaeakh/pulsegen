const OpenAI = require('openai');

const patientChat = async (req, res) => {
    const openai = new OpenAI({apiKey : process.env.OPENAI_API_KEY});
    const model = 'gpt-3.5-turbo-0125';
    let messages = [];
    messages.push({
        role: 'system',
        content: 'You are a helpful medical assistant who talks with patients and generate reports based on the information recieved from the conversetion. Remember to send response always in json format. Like this: {"message":"Hello.", "progress":12}, here message is the response and progress is the progress of the conversation.'
        // content: process.env.CHAT_SECRET_SAUCE
    });
    if (req.body && Array.isArray(req.body)) {
        messages = [...messages, ...req.body];
    }
    const completion = await openai.chat.completions.create({
        model,
        messages,
        response_format: { type: "json_object" },
    });
    const aiResponse = completion.choices[0].message.content;
    // const aiResponse = `{"message":"Hello! I'm Dr. Kadambini from PulseGen. How can I assist you today? Could you please tell me about the nature of your illness?","progress":12}`;
    const responseJson = JSON.parse(aiResponse);
    res.status(201).json({"role":"assistant","content":responseJson.message,"progress":responseJson.progress});
    
};

module.exports = patientChat;