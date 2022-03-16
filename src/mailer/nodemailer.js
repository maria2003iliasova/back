import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'mia03.03@mail.ru',
        pass: 'iK58NWQt4b9JKqzgd5DP',
    },
});
async function sendMail(email) {
    var result = await transporter.sendMail({
        from: '"Лапки" <mia03.03@mail.ru>',
        to: email, //'komarovayana@list.ru',
        subject: 'Регистрация прошла успешно!',
        text: 'Если вы видите это сообщение, значит у нас получилось!!!',
        html:
            'Если вы видите это сообщение, значит у нас получилось!',
    })

    console.log(result)
}
module.exports = sendMail