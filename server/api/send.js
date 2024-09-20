// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
// let message;

// export default defineEventHandler(async (event) => {
//   const messageBody = await readBody(event);
//   console.log(messageBody, process.env.RESEND_API_KEY)

//   message = `<p> Form: ${messageBody.email} </p>
//              <p> UserName: ${messageBody.firstName  +' '+  messageBody.lastName} </p>
//              <p> Phone: ${messageBody.phone} </p>
//              <p> Message: ${messageBody.message} </p>
//             `
//   try {
//     const data = await resend.emails.send({
//       from: 'DigitalGroup Website <website@domain2.com.ly>',
//       to: ['moayed80023@gmail.com'],
//       subject: messageBody.subject,
//       html: message
//     });
//     return data;
//   } catch (error) {
//     return { error };
//   }
// });

