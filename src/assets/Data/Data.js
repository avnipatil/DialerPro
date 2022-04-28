
export const CampaignData = [
    {
        UserId: "ASDF12345",
        CampaignName: "CDQA",
        CampaignType: "Hybrid",
        DialerMode: "Manual",
        AgentMode: "Manual",
        Script: [
            {
                Question: "Hi, this is Jess from the Virtual Sales Academy. How are you?",
                Answer: "We're working on some solutions to help you recruit and train a new generation of salespeople.",
            },
            {
                Question: "Is that something you'd like to hear more about?",
                Answer: "There are two ways companies work with us. We can either help them find salespeople for a percentage of the base salary, or help them train new salespeople with our online, on-demand, virtual sales training programs that teach them how to take prospects from curious to client.",
            },
            {
                Question: "Is that something you'd like to hear more about?",
                Answer: "There are two ways companies work with us. We can either help them find salespeople for a percentage of the base salary, or help them train new salespeople with our online, on-demand, virtual sales training programs that teach them how to take prospects from curious to client."
            },
            {
                Question: "Which one would you want to hear most about?",
                Answer: "I ask them qualifying questions so I know what to present"
            },
            {
                Question: "wesome. Can I ask you a few questions first?",
                Answer: "I'll tell you a bit more and then, if it makes sense, we'll set up an appointment before we get off our call today to go over it in more detail. Sound good? From there I tell them more about the program, just enough for them to agree to set up an appointment, and then go into my appointment setting script."
            }
        ],
        Questions: [
            { Question: "1. What Type Of Company Are You?" },
            { Question: "2. What Is The Price Of Your Services?" },
            { Question: "3. What Are Your Techniques/Process?" }
        ],
        Concents: [
            {
                Instruction: "1. Identify 2-3 verticals.",
                Description: "First, you need to cherry-pick who you'll call. Your time is valuable — don't waste it on prospects that aren't a good fit for your product. Think about who your best customers are (or who you've had the most success calling in the past) and look for common attributes."
            },
            {
                Instruction: "2. Identify 20 good-fit prospects.",
                Description: "It should now be much easier to find specific companies or people who could use your product or service, especially when using a tool like LinkedIn."
            }
        ]
    }
]
export const CallLogsTable = [
    {
        sr: "1",
        prospect_name: 'Rdigs',
        type: "Outbond Call",
        duration: "3:00",
        datetime: "2017-02-15 20:00",
        status: "Answer",
        bgColor: "#16A314",
        prospectstatus: "Ans Machin",
        recordingtime: "5:00",
        record:"KGF.mp3",
    },
    {
        sr: "2",
        prospect_name: 'Rdigs',
        type: "Inbound Call",
        duration: "4:00",
        datetime: "2017-02-15 20:00",
        status: "Rejected",
        bgColor: "#f34770",
        prospectstatus: "Busy",
        recordingtime: "6:00"
    },
    {
        sr: "3",
        prospect_name: 'Rdigs',
        type: "Outbond Call",
        duration: "5:00",
        datetime: "2017-02-15 20:00",
        status: "Noanswer",
        bgColor: "#fea569",
        prospectstatus: "Connected",
        recordingtime: "7:00"
    },
    {
        sr: "4",
        prospect_name: 'Rdigs',
        type: "Inbound Call",
        duration: "9:00",
        datetime: "2017-02-15 20:00",
        status: "Noanswer",
        bgColor: "#fea569",
        prospectstatus: "Callback",
        recordingtime: "8:00"
    },
    {
        sr: "5",
        prospect_name: 'Rdigs',
        type: "Inbound Call",
        duration: "4:00",
        datetime: "2017-02-15 20:00",
        status: "Rejected",
        bgColor: "#f34770",
        prospectstatus: "Busy",
        recordingtime: "6:00"
    },
]
