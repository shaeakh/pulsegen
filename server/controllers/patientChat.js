const OpenAI = require('openai');

const patientChat = async (req, res) => {
    const openai = new OpenAI({apiKey : process.env.OPENAI_API_KEY});
    const model = 'gpt-3.5-turbo';
    let messages = [];
    messages.push({
        role: 'system',
        content: 'You are a helpful assistant.'
    });
    if (req.body && Array.isArray(req.body)) {
        messages = [...messages, ...req.body];
    }
    const completion = await openai.chat.completions.create({
        model,
        messages
    });
    const aiResponse = completion.choices[0].message.content;
    // const aiResponse = "hi there! I am a helpful assistant. How can I help you today?";
    res.status(201).json({"role":"assistant","content":aiResponse});
    
};

module.exports = patientChat;