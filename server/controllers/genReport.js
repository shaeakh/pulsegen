const OpenAI = require('openai');
const Report = require('../models/Report');

const genReport = async (req, res) => {
    const openai = new OpenAI({apiKey : process.env.OPENAI_API_KEY});
    const model = 'gpt-3.5-turbo-0125';
    let messages = [];
    messages.push({
        role: 'system',
        content: process.env.REPORT_SECRET_SAUCE
    });
    if (req.body && Array.isArray(req.body)) {
        messages = [...messages, ...req.body.chat];
    }
    try {
        const completion = await openai.chat.completions.create({
            model,
            messages,
            response_format: { type: "json_object" },
        });
        const aiResponse = completion.choices[0].message.content;
        const report = aiResponse;
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];
        console.log(report);
        const responseJson = JSON.parse(report);
        const reqReport ={
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
            bloodGroup: req.body.bloodGroup,
            height: req.body.height,
            weight: req.body.weight,
            phone: req.body.phone,
            address: req.body.address,
            c_c: responseJson.c_c,
            summary: responseJson.summary,
            history: responseJson.history,
            date: formattedDate
        }
        const newReport = new Report(reqReport);
        const addedReport = await newReport.save();
        res.status(201).json({ _id: addedReport._id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = genReport;