import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                translation: {

                    Hello: "Welcome to MoneyTikTok!",
                    SubHello: "This is a simple and fun mini-app that will help you better understand the basics of interacting with cryptocurrencies. Click the button below to learn how to play.",

                    Token: "Token $MTOK",
                    Info: "— is the main token of the MoneyTikTok project, mined only in the official application. This token is presented as an exchange token and will be traded on certain platforms!",

                    Tokenomic: "Tokenomics of $MTOK:",

                    TK1: "Miners",
                    TK2: "Ambassadors",
                    TK3: "Team",
                    TK4: "Pre-sale",
                    TK5: "Project",
                    TK6: "Liquidity",
                    TK7: "Marketing",

                    B: "40 BL",
                    Step11: "Step 1: Press /start",
                    Step12: "Start the bot @MoneyTikTok in Telegram and press the /start command.",

                    Step21: "Step 2: Get MTOK",
                    Step22: "Press the large button with the TikTok logo to start receiving MTOK. Wait for 5 minutes.",

                    Step31: "Step 3: Switch Tab",
                    Step32: "At the bottom of the screen, select the next tab to continue working with MTOK.",

                    Step41: "Step 4: Choose an Exchange",
                    Step42: "Go to the exchange section to convert MTOK into likes or TON.",

                    Note: "Enjoy your game and earn money!",
                    Close: "Close",
                    HTP: "How To Play?",

                    Play: "Play",

                    RoadMapLabel: "Roadmap",
                    RM1: "Miniup launch",
                    RM2: "Audience recruitment",
                    RM3: "Searching for partners",
                    RM4: "Token presale",
                    RM5: "Access to mining and airdrop",
                },
            },
            ru: {
                translation: {

                    Hello: "Добро пожаловать в MoneyTikTok!",
                    SubHello: "Это простое и увлекательное мини-приложение, которое поможет вам лучше понять основы взаимодействия с криптовалютами. Нажмите кнопку ниже, чтобы узнать, как играть.",

                    Token: "Токен $MTOK",
                    Info: "— это основной токен проекта MoneyTikTok, добываемый только в официальном приложении. Данный токен представлен как биржевой и будет торговаться на определённых платформах!",

                    Tokenomic: "Токеномика $MTOK:",

                    TK1: "Майнеры",
                    TK2: "Амбассадоры",
                    TK3: "Команда",
                    TK4: "Предпродажа",
                    TK5: "Проект",
                    TK6: "Ликвидность",
                    TK7: "Маркетинг",
                    B: "40 МЛРД",

                    Step11: "Шаг 1: Нажмите /start",
                    Step12: "Запустите бота @MoneyTikTok в Telegram и нажмите команду /start.",

                    Step21: "Шаг 2: Получите MTOK",
                    Step22: "Нажмите большую кнопку с логотипом TikTok, чтобы начать получать MTOK. Дождитесь 5 минут.",

                    Step31: "Шаг 3: Переключите вкладку",
                    Step32: "Внизу экрана выберите следующую вкладку для продолжения работы с MTOK.",

                    Step41: "Шаг 4: Выберите обменник",
                    Step42: "Перейдите в раздел обменника, чтобы конвертировать MTOK в лайки или TON.",

                    Note: "Наслаждайтесь вашей игрой и зарабатывайте деньги!",
                    Close: "Закрыть",
                    HTP: "Как Играть?",
                    Play: "Играть",

                    RoadMapLabel: "Дорожная карта",
                    RM1: "Запуск МиниАпп",
                    RM2: "Набор аудитории",
                    RM3: "Поиск партнеров",
                    RM4: "Предпродажа токенов",
                    RM5: "Доступ к майнингу и airdrop",
                },
            },
        },
        lng: localStorage.getItem("language") || "en", // Загружаем язык из localStorage
        fallbackLng: "en",
        interpolation: { escapeValue: false },
    });

export default i18n;
