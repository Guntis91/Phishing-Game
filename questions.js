const questions = [
    {
        question: "You receive an email from 'Amazon' stating your account is locked. It asks you to click a link to verify your details. What should you do?",
        answers: ["Click the link", "Ignore and report", "Reply to verify", "Call the number"],
        correct: 1,
        explanation: "Legitimate companies don’t ask for sensitive details via email."
    },
    {
        question: "What is a common sign of a phishing email?",
        answers: ["A personalized greeting", "A misspelled domain", "A discount offer", "A normal-looking email"],
        correct: 1,
        explanation: "Phishing emails often use fake domains similar to real ones."
    },
    {
        question: "How can you verify an email sender’s identity?",
        answers: ["Check sender’s domain", "Click the links", "Reply to ask", "Ignore"],
        correct: 0,
        explanation: "Always verify if the sender’s domain is legitimate."
    },
    {
        question: "Which action is safest when handling suspicious emails?",
        answers: ["Forward to friends", "Click links carefully", "Report and delete", "Ignore and do nothing"],
        correct: 2,
        explanation: "Reporting phishing emails helps organizations stop attacks."
    },
    {
        question: "Which action is safest when handling suspicious emails?",
        answers: ["Forward to friends", "Click links carefully", "Report and delete", "Ignore and do nothing"],
        correct: 2,
        explanation: "Reporting phishing emails helps organizations stop attacks."
    },
    {
        question: "A pop-up appears asking for login details to access a free gift. What should you do?",
        answers: ["Enter details to claim the reward", "Close the pop-up immediately", "Click 'Allow' to continue", "Share the offer with friends"],
        correct: 1,
        explanation: "Pop-ups asking for login details are often phishing scams."
    },
    {
        question: "How can you verify an email sender's identity?",
        answers: ["Check the sender's email domain", "Click the links inside", "Reply to ask for details", "Ignore the email"],
        correct: 0,
        explanation: "Always verify if the sender’s domain matches the official company website."
    },
    {
        question: "What should you do if an email urges you to act immediately?",
        answers: ["Follow the instructions quickly", "Pause and verify the email", "Ignore it", "Reply to confirm"],
        correct: 1,
        explanation: "Phishing emails often create urgency to trick users into acting without thinking."
    },
    {
        question: "Which of these is a strong sign of a phishing website?",
        answers: ["The URL starts with HTTPS", "The website has a login form", "The URL contains spelling errors", "The website loads slowly"],
        correct: 2,
        explanation: "Fake websites often use slightly misspelled domains to trick users."
    },
    {
        question: "What is 'spear phishing'?",
        answers: ["Random emails sent to thousands of people", "Targeted phishing aimed at specific individuals", "A type of social engineering", "A phishing technique used on social media"],
        correct: 1,
        explanation: "Spear phishing targets specific individuals using personalized information."
    },
    {
        question: "You get an email from your bank with grammatical errors and a sense of urgency. What does this indicate?",
        answers: ["A security update", "A genuine alert", "A phishing attempt", "A reminder email"],
        correct: 2,
        explanation: "Poor grammar and urgency are red flags in phishing emails."
    },
    {
        question: "Which of these passwords is strongest?",
        answers: ["Password123", "Iloveyou", "D3$tr0y3r!#29", "12345678"],
        correct: 2,
        explanation: "A strong password includes upper/lowercase letters, numbers, and symbols."
    },
    {
        question: "What should you do before clicking a link in an email?",
        answers: ["Hover over the link to check the URL", "Click it quickly", "Ask a friend to check it", "Ignore all links"],
        correct: 0,
        explanation: "Hovering over links reveals their actual destination URL."
    },
    {
        question: "A friend sends you a suspicious-looking link on social media. What should you do?",
        answers: ["Click it to see what it is", "Ignore and report it", "Ask for details and then click", "Forward it to others"],
        correct: 1,
        explanation: "Always verify messages before clicking links, even from friends."
    },
    {
        question: "What does 'HTTPS' indicate on a website?",
        answers: ["It’s a safe site", "It has secure encryption", "It’s a banking website", "It has no ads"],
        correct: 1,
        explanation: "HTTPS encrypts data but does not guarantee a website is safe."
    },
    {
        question: "A hacker calls pretending to be IT support and asks for your password. What is this called?",
        answers: ["Phishing", "Vishing", "Smishing", "Spamming"],
        correct: 1,
        explanation: "Vishing (voice phishing) is a scam done over the phone."
    },
    {
        question: "You receive an email saying you won a lottery you never entered. What should you do?",
        answers: ["Reply to claim the prize", "Click the link to verify", "Ignore and delete it", "Forward it to your friends"],
        correct: 2,
        explanation: "Lotteries never ask winners to pay or verify through email."
    },
    {
        question: "Which of these is NOT a phishing technique?",
        answers: ["Vishing", "Smishing", "Spear phishing", "Firewalling"],
        correct: 3,
        explanation: "Firewalls protect networks; they are not phishing methods."
    },
    {
        question: "What should you do if you receive an unexpected email with an attachment?",
        answers: ["Download it to check", "Open it only if it's from your boss", "Scan it for viruses before opening", "Ignore it"],
        correct: 2,
        explanation: "Always scan attachments before opening, even from trusted sources."
    },
    {
        question: "Your manager emails you asking for gift cards for a client. What should you do?",
        answers: ["Buy them immediately", "Reply asking for clarification", "Verify by calling them directly", "Ignore the request"],
        correct: 2,
        explanation: "Always verify requests for money or sensitive actions."
    },
    {
        question: "A website asks for your credit card details to verify your identity. What should you do?",
        answers: ["Enter them only if it's a bank site", "Verify the site's legitimacy first", "Proceed without thinking", "Share only part of the card number"],
        correct: 1,
        explanation: "Verify legitimacy before entering sensitive details."
    },
    {
        question: "What is the best way to secure online accounts?",
        answers: ["Use different passwords for each account", "Use a password manager", "Enable multi-factor authentication", "All of the above"],
        correct: 3,
        explanation: "A combination of different security measures is the safest approach."
    },
    {
        question: "Which is an example of multi-factor authentication (MFA)?",
        answers: ["Password only", "Password + SMS code", "A long password", "Clicking a confirmation email"],
        correct: 1,
        explanation: "MFA uses two or more authentication methods for security."
    },
    {
        question: "Which of these is the most secure way to store passwords?",
        answers: ["Write them on a notepad", "Use a password manager", "Save them in a text file", "Use the same password everywhere"],
        correct: 1,
        explanation: "Password managers securely store and encrypt passwords."
    },
        {
            question: "You receive an email from your 'bank' asking you to confirm your account by clicking a link. What should you do?",
            answers: ["Click the link and enter your details", "Ignore the email", "Call the bank using the official number", "Reply and ask for details"],
            correct: 2,
            explanation: "Banks never ask for sensitive information via email. Always call using the official number."
        },
        {
            question: "You get an SMS saying, 'Your package is delayed. Click this link to track it.' What should you do?",
            answers: ["Click the link to check the tracking", "Reply with 'STOP'", "Ignore or verify the tracking on the official website", "Enter your details to confirm the package"],
            correct: 2,
            explanation: "Scammers send fake package delivery messages to steal personal data."
        },
        {
            question: "A pop-up on a website says, 'Your computer is infected! Call this number for support.' What is this?",
            answers: ["A legitimate warning", "A fake alert trying to scam you", "An antivirus notification", "A Microsoft security update"],
            correct: 1,
            explanation: "Legitimate companies never display pop-ups demanding you to call a number."
        },
        {
            question: "Your HR department emails you saying you need to update your work login credentials. How do you verify it's real?",
            answers: ["Click the link in the email", "Call HR using the company directory", "Reply asking if it’s real", "Ignore it"],
            correct: 1,
            explanation: "Always verify security-related requests by contacting HR directly using official channels."
        },
        {
            question: "A friend messages you on social media saying, 'Check out this crazy video of you!' with a link. What should you do?",
            answers: ["Click the link to see the video", "Ask your friend if they really sent it", "Enter your login to access the video", "Ignore it"],
            correct: 1,
            explanation: "Hackers often hijack social media accounts to send fake messages."
        },
        {
            question: "A website offers a free iPhone if you enter your email and phone number. What's likely happening?",
            answers: ["A lucky contest", "A phishing attempt to collect data", "A legitimate Apple promotion", "An online survey"],
            correct: 1,
            explanation: "Scammers use fake giveaways to steal personal information."
        },
        {
            question: "You receive an email from Netflix saying, 'Your subscription has been canceled. Click here to reactivate.' What should you do?",
            answers: ["Click the link to reactivate", "Call Netflix using their official website", "Reply asking if it's real", "Ignore it"],
            correct: 1,
            explanation: "Always verify account changes directly on the company's official website."
        },
        {
            question: "A co-worker sends you an urgent email asking for login credentials to access a shared company file. What should you do?",
            answers: ["Send them the login details", "Verify with them in person or via phone", "Ignore the email", "Reset your password"],
            correct: 1,
            explanation: "Always confirm unusual requests for login credentials via a trusted communication method."
        },
        {
            question: "You receive an email from PayPal stating, 'Unusual activity detected. Click here to verify your account.' What should you do?",
            answers: ["Click the link immediately", "Log in to PayPal via the official website and check notifications", "Reply asking for details", "Ignore it"],
            correct: 1,
            explanation: "Never click links in suspicious emails. Always log in via the official website to check notifications."
        },
        {
            question: "An email claims you won a $500 Amazon gift card but must provide your personal details to claim it. What is this?",
            answers: ["A scam to collect your data", "A lucky win", "A real Amazon promotion", "An email from customer support"],
            correct: 0,
            explanation: "Scammers use fake prizes to trick you into sharing personal information."
        },
        {
            question: "A job offer email asks for your passport and banking details before an interview. What should you do?",
            answers: ["Send the details as requested", "Verify the company on their official website and contact them directly", "Ignore the offer", "Ask for a different payment method"],
            correct: 1,
            explanation: "Legitimate employers do not ask for sensitive documents before an interview."
        },
        {
            question: "A pop-up on a website says you won a contest you never entered. What should you do?",
            answers: ["Click it to claim your prize", "Enter your information", "Close the pop-up and ignore it", "Reply asking for confirmation"],
            correct: 2,
            explanation: "Fake pop-ups try to collect personal data or install malware."
        },
        {
            question: "An email claims to be from your boss, urgently asking for gift cards. What is this?",
            answers: ["A security update request", "A phishing scam", "An internal HR policy update", "A real company expense"],
            correct: 1,
            explanation: "Scammers impersonate executives to trick employees into buying gift cards."
        },
        {
            question: "You receive a friend request from a stranger who claims they work at the same company as you. What should you do?",
            answers: ["Accept the request", "Verify the person through official channels", "Ignore it", "Send them your email for work contacts"],
            correct: 1,
            explanation: "Scammers use fake profiles to collect personal or company information."
        },
        {
            question: "A website forces you to download a 'security update' before continuing. What should you do?",
            answers: ["Download and install it", "Check the official website for updates", "Ignore it and refresh the page", "Reply asking for verification"],
            correct: 1,
            explanation: "Official security updates are only available from the official company website."
        },
        {
            question: "You receive an email from a government agency about a tax refund. How do you verify it?",
            answers: ["Click the provided link", "Call the agency using their official number", "Reply and ask for more details", "Ignore it"],
            correct: 1,
            explanation: "Government agencies will never email you directly about refunds without prior contact."
        },
        {
            question: "A family member asks for money via WhatsApp, saying they lost their phone and are in trouble. What should you do?",
            answers: ["Send the money immediately", "Call them directly to confirm", "Reply asking for bank details", "Ignore the message"],
            correct: 1,
            explanation: "Scammers impersonate family members to steal money."
        },
        {
            question: "You receive an email from your IT department asking you to install new security software. What is the safest action?",
            answers: ["Click the link in the email", "Verify with IT via a phone call or in person", "Ignore it", "Forward it to a friend for advice"],
            correct: 1,
            explanation: "Always verify IT-related requests through direct communication."
        },
        {
            question: "You get a message from your bank saying, 'We detected unusual activity. Reply with your account details to secure your account.' What should you do?",
            answers: ["Reply with your account details", "Call the bank using their official contact", "Click the link to verify", "Ignore it"],
            correct: 1,
            explanation: "Banks never ask for account details via text messages or email."
        },
        {
            question: "You receive an email from an unknown sender with an attachment. What should you do?",
            answers: ["Open it immediately", "Delete it without opening", "Reply asking for details", "Download it and scan for viruses"],
            correct: 1,
            explanation: "Never open attachments from unknown senders as they may contain malware."
        },
        {
            question: "An email claims you need to reset your password for an online account. How do you check if it's real?",
            answers: ["Click the link in the email", "Log in to the official website directly", "Reply asking if it's real", "Ignore it"],
            correct: 1,
            explanation: "Always visit the official website instead of clicking email links."
        },
        {
            question: "A friend sends you a link saying, 'Check this out! It's hilarious!' What should you do?",
            answers: ["Click the link immediately", "Ask your friend if they really sent it", "Forward it to others", "Ignore it"],
            correct: 1,
            explanation: "Hackers can hijack accounts and send fake links to steal login credentials."
        },
        {
            question: "A website asks for your credit card details to 'verify your identity.' What should you do?",
            answers: ["Enter the details", "Check if it's a trusted site first", "Only enter the first 4 digits", "Ignore it"],
            correct: 1,
            explanation: "Always verify a website’s legitimacy before entering sensitive information."
        },
        {
            question: "What is the safest way to identify a fake email?",
            answers: ["Check the sender’s email address", "Click on all links to verify", "Reply and ask for more details", "Ignore all emails"],
            correct: 0,
            explanation: "Scammers often use fake email addresses that look similar to real ones."
        },
        {
            question: "You get an email saying your PayPal account will be deleted unless you verify your details. What should you do?",
            answers: ["Click the link and log in", "Go to PayPal’s official website to check", "Reply to the email", "Ignore it"],
            correct: 1,
            explanation: "Legitimate companies never force you to verify accounts via email."
        },
        {
            question: "An SMS says, 'Your phone bill is overdue. Click this link to pay now.' What should you do?",
            answers: ["Click the link to avoid issues", "Call your service provider using their official number", "Reply and ask if it's real", "Ignore it"],
            correct: 1,
            explanation: "Always verify payment requests directly with your provider."
        },
        {
            question: "Which of these is a good way to spot a phishing email?",
            answers: ["It has perfect grammar", "It uses urgent language and threats", "It looks exactly like a company email", "It has a greeting with your full name"],
            correct: 1,
            explanation: "Phishing emails often create urgency to pressure users into acting quickly."
        },
        {
            question: "You receive an email from 'Netflix' saying your subscription is expiring soon. What should you do?",
            answers: ["Click the link to renew", "Log in to Netflix from their official website", "Reply to confirm your details", "Ignore it"],
            correct: 1,
            explanation: "Always verify subscription issues by logging in through the official website."
        },
        {
            question: "A random person on Instagram asks for your phone number to 'send you a gift.' What should you do?",
            answers: ["Give them your number", "Ignore the request", "Ask what the gift is", "Send them a message first"],
            correct: 1,
            explanation: "Scammers often ask for personal details under false pretenses."
        },
        {
            question: "A pop-up appears saying you won a free vacation. What should you do?",
            answers: ["Enter your details to claim it", "Close the pop-up and ignore it", "Reply asking for confirmation", "Click it to see what happens"],
            correct: 1,
            explanation: "Fake pop-ups try to collect personal data or install malware."
        },
        {
            question: "A website URL has extra letters (e.g., www.faceb00k.com). What does this mean?",
            answers: ["A typo from the company", "A phishing attempt to look like a real site", "A new version of the website", "A secure backup site"],
            correct: 1,
            explanation: "Scammers create fake websites that look similar to real ones."
        },
        {
            question: "Your email inbox has a message from an unknown sender with a single-word subject like 'URGENT' or 'HELP.' What should you do?",
            answers: ["Open it to see what's wrong", "Delete it without opening", "Reply to ask for details", "Click on any included links"],
            correct: 1,
            explanation: "Phishing emails often use vague, urgent subjects to lure victims."
        },
        {
            question: "What should you do before entering personal details on a website?",
            answers: ["Check if the URL starts with 'https://'", "Check if the site has ads", "Only enter details on sites with a login page", "Ignore security features"],
            correct: 0,
            explanation: "HTTPS means the site has encryption, but you should still verify its legitimacy."
        },
        {
            question: "You receive an email from a shopping site asking you to confirm your recent purchase, but you never bought anything. What should you do?",
            answers: ["Click the link to cancel the order", "Log in to your account through the official website", "Reply to the email", "Ignore it"],
            correct: 1,
            explanation: "Never click links in unexpected emails. Always verify orders through official websites."
        },
        {
            question: "You get a direct message from a stranger on Twitter offering a cash giveaway. What should you do?",
            answers: ["Give them your details to claim it", "Ignore the message", "Reply asking for more details", "Share the opportunity with friends"],
            correct: 1,
            explanation: "Scammers use fake giveaways to collect personal information."
        },
        {
            question: "A phone call claims you need to pay overdue taxes immediately. What should you do?",
            answers: ["Follow their payment instructions", "Hang up and contact the tax office directly", "Give them your payment details", "Ask for their name and call back"],
            correct: 1,
            explanation: "Tax offices do not demand immediate payments over the phone."
        },
        {
            question: "Your email provider sends you a message saying your inbox is full and you must verify your account. What should you do?",
            answers: ["Click the link in the email", "Log in to your email directly from the provider's official website", "Reply to the email", "Ignore it"],
            correct: 1,
            explanation: "Always check account issues by logging in through official websites."
        },
        {
            question: "A charity you never donated to emails you asking for money. What should you do?",
            answers: ["Donate immediately to help", "Verify the charity on its official website", "Reply asking for more details", "Ignore the request"],
            correct: 1,
            explanation: "Always verify charities before donating to avoid scams."
        }
    ];
    