const OpenAI = require('openai');

const patientChat = async (req, res) => {
    const openai = new OpenAI({apiKey : process.env.OPENAI_API_KEY});
    const model = 'gpt-3.5-turbo-0125';
    let messages = [];
    messages.push({
        role: 'system',
        content: process.env.CHAT_SECRET_SAUCE
    });
    if (req.body && Array.isArray(req.body)) {
        messages = [...messages, ...req.body];
    }
    try {
        const completion = await openai.chat.completions.create({
            model,
            messages,
            response_format: { type: "json_object" },
        });
        const aiResponse = completion.choices[0].message.content;
        if (!aiResponse) {
            throw new Error("Empty AI response");
        }
        const responseJson = JSON.parse(aiResponse);
        res.status(201).json({"role":"assistant","content":responseJson.message,"progress":responseJson.progress});
    } catch (error) {
        try {
            const response = await patientChat(req, res); // Resend the request
            return response; // Return the response from the recursive call
        } catch (nestedError) {
            res.status(500).json({ message: nestedError.message });
        }
    }
};

module.exports = patientChat;