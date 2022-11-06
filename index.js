import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
dotenv.config()

const bot = new TelegramBot(process.env.TOKEN, {
  polling: true
})

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "Salom Nilufar bilaman Boburni suramasam ham yaxshi ko'rasiz, lekin 1ta 2ta savollar bor!",
    {
      reply_markup: {
        keyboard: [
          ["Bobur sizni yaxshi ko'radimi🤍", "Sizlar baxtli bo'lasizmi?"],
          [
            "Iltimos shu savollarga javob bering Faqat ha, yo'q, bilmadim deb javob bermang!",
          ],
        ],
        resize_keyboard: true,
      },
    }
  );
});

bot.on("message", (msg) => {
  if (msg.text == "Bobur sizni yaxshi ko'radimi🤍") {
    bot.sendPhoto(
      msg.chat.id,
      "https://firebasestorage.googleapis.com/v0/b/images-5c23a.appspot.com/o/IMG_20200217_214027_866.jpg?alt=media&token=deefbd02-bbcc-41c6-a108-3e38150236aa",
      {
        caption: `
        <i>
        Bilmadim lekin shuncha payt oldidan shuncha qiz chiqan bo'lsa 1tasi bilan bo'lsa ham gaplashardi!
        </i>\n<span class="tg-spoiler">Yaxshi ko'radi🤍</span>
      `,
        parse_mode: "HTML",
        reply_markup: {
          keyboard: [
            ["Qachon shunaqa qilib padrushka qilib olasiz!"],
            ["Back 🔙"],
          ],
          resize_keyboard: true,
        },
      }
    );
  }

  if (msg.text == "Qachon shunaqa qilib padrushka qilib olasiz!") {
    bot.sendVideo(
      msg.chat.id,
      "https://firebasestorage.googleapis.com/v0/b/images-5c23a.appspot.com/o/VID_20191009_130135_528.mp4?alt=media&token=aa6021f5-dcfb-482d-9152-a6c7be273f84",
      {
        caption: "O'ylab ko'ring hammagayam bune taklifdi eturmedi!",
        reply_markup: {
          keyboard: [["Back 🔙"]],
          resize_keyboard: true,
        },
      }
    );
  }

  if (msg.text == "Sizlar baxtli bo'lasizmi?") {
    bot.sendVideo(
      msg.chat.id,
      "https://firebasestorage.googleapis.com/v0/b/images-5c23a.appspot.com/o/video.mp4?alt=media&token=c1c6dc0d-d6e7-4773-bf0a-75678e128edf",
      {
        caption: `
      Agar siz ham u ham oxirgacham kurashsela va siz ham uni u ham sizni tushunsa va uni hurmat qilsez qilsez bo'lasizlar!\n<span class="tg-spoiler">Muhimi semirib ketmang!</span>
      `,
        parse_mode: "HTML",
        reply_markup: {
          keyboard: [["Back 🔙"]],
          resize_keyboard: true,
        },
      }
    );
  }

  if (msg.text == "Back 🔙") {
    bot.sendMessage(msg.chat.id, "Asosiy menyu", {
      reply_markup: {
        keyboard: [
          ["Bobur sizni yaxshi ko'radimi🤍", "Sizlar baxtli bo'lasizmi?"],
          [
            "Iltimos shu savollarga javob bering Faqat ha, yo'q, bilmadim deb javob bermang!",
          ],
        ],
        resize_keyboard: true,
      },
    });
  }
});

bot.on("message", async (msg) => {
  console.log(msg);
  if (
    msg.text ==
    "Iltimos shu savollarga javob bering Faqat ha, yo'q, bilmadim deb javob bermang!"
  ) {
    const love = await bot.sendMessage(
      msg.chat.id,
      "Boburni yaxshi ko'rasizmi? Iltimos to'liqroq javob bering!",
      {
        reply_markup: {
          force_reply: true,
        },
      }
    );

    bot.onReplyToMessage(love.chat.id, love.message_id, async (isLove) => {
      console.log(isLove);
      const whatIsLove = await bot.sendMessage(
        love.chat.id,
        "Nima uchun yaxshi ko'rasiz?",
        {
          reply_markup: {
            force_reply: true,
          },
        }
      );

      bot.onReplyToMessage(
        whatIsLove.chat.id,
        whatIsLove.message_id,
        async (what) => {
          const toy = await bot.sendMessage(
            whatIsLove.chat.id,
            "To'ydan keyin nima deb chaqirasiz?",
            {
              reply_markup: {
                force_reply: true,
              },
            }
          );

          bot.onReplyToMessage(toy.chat.id, toy.message_id, async (istoy) => {
            const padrushka = await bot.sendMessage(
              toy.chat.id,
              "Qachon padrushka qilib olasiz?",
              {
                reply_markup: {
                  force_reply: true,
                },
              }
            );

            bot.onReplyToMessage(
              padrushka.chat.id,
              padrushka.message_id,
              async (ispadrushka) => {
                const boy = await bot.sendMessage(
                  padrushka.chat.id,
                  "Nechta farzandimiz bo'ladi deb o'ylaysiz? Nechta qiz va nechta o'g'il bola?",
                  {
                    reply_markup: {
                      force_reply: true,
                    },
                  }
                );

                bot.onReplyToMessage(
                  boy.chat.id,
                  boy.message_id,
                  async (isboy) => {
                    const pishirish = await bot.sendMessage(
                      boy.chat.id,
                      "Qachon yana biror narsa pishirib berasiz?",
                      {
                        reply_markup: {
                          force_reply: true,
                        },
                      }
                    );

                    bot.onReplyToMessage(
                      pishirish.chat.id,
                      pishirish.message_id,
                      async (ispishirish) => {
                        const question = await bot.sendMessage(
                          pishirish.chat.id,
                          "Agar Bobur 2ta ishini qilaman desa nimani so'ragan bo'lardiz?",
                          {
                            reply_markup: {
                              force_reply: true,
                            },
                          }
                        );

                        bot.onReplyToMessage(
                          question.chat.id,
                          question.message_id,
                          async (isquestion) => {
                            await bot.sendMessage(
                              question.chat.id,
                              "Rahmat javoblaringiz uchun!",
                              {
                                reply_markup: {
                                  keyboard: [
                                    [
                                      "Bobur sizni yaxshi ko'radimi🤍",
                                      "Sizlar baxtli bo'lasizmi?",
                                    ],
                                    [
                                      "Iltimos shu savollarga javob bering Faqat ha, yo'q, bilmadim deb javob bermang!",
                                    ],
                                  ],
                                  resize_keyboard: true,
                                },
                              }
                            );

                            await bot.sendMessage(
                              "-1001890591171",
                              `
                    Kimdan: ${
                      msg.chat.first_name == undefined
                        ? msg.from.first_name
                        : msg.chat.first_name
                    }
                    Yaxshi ko'radimi: ${isLove.text}\nNima uchun: ${
                                what.text
                              }\nTo'ydan keyin nima deb chaqirish:${
                                istoy.text
                              }\nQachon padrushka qiladi:${
                                ispadrushka.text
                              }\nNechta farzand: ${
                                isboy.text
                              }\nPishirib berish:${
                                ispishirish.text
                              }\nNima xohlaydi:${isquestion.text}
                  `
                            );
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          });
        }
      );
    });
  }
});