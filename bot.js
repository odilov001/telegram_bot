const TelegramBot = require("node-telegram-bot-api");

// 🔑 Bu yerga tokeningizni yozing
const token = "8392507555:AAEYAcwMGMDj4NzgMeBq-_CK47W1BkYsdzc";

const bot = new TelegramBot(token, { polling: true });

// /start komandasi
bot.onText(/\/start/, (msg) => {
	const chatId = msg.chat.id;

	bot.sendMessage(chatId, "👋 Assalomu aleykum! Men Englishdom vakansiya botiman. Qanday yordam bera olaman?", {
		reply_markup: {
			keyboard: [
				["📚 Kurslar", "💼 Vakansiyalar"],
				["ℹ️ Biz haqimizda", "📞 Aloqa"],
			],
			resize_keyboard: true,
			one_time_keyboard: false,
		},
	});
});

// Oddiy matnlarga va tugmalarga javob
bot.on("message", (msg) => {
	const chatId = msg.chat.id;
	const text = msg.text;

	// "salom" matniga javob
	if (text && text.toLowerCase() === "salom") {
		bot.sendMessage(chatId, "Salom! Yaxshimisiz?");
	}

	// 📚 Kurslar tugmasi
	if (text === "📚 Kurslar") {
		bot.sendMessage(chatId, "📚 Bizning kurslarimiz haqida ma’lumot: ...");
	}

	// 💼 Vakansiyalar tugmasi
	if (text === "💼 Vakansiyalar") {
		bot.sendMessage(chatId, "💼 Vakansiyalar bo‘limiga xush kelibsiz!");
	}

	// ℹ️ Biz haqimizda tugmasi
	if (text === "ℹ️ Biz haqimizda") {
		bot.sendMessage(chatId, "ℹ️ Englishdom haqida: ...");
	}

	// 📞 Aloqa tugmasi
	if (text === "📞 Aloqa") {
		bot.sendMessage(chatId, "📞 Biz bilan bog‘lanish uchun: +998 ** *** ** **");
	}
});
